import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseIncomingForm(request) {
  const formParser = formidable({
    maxFileSize: 5 * 1024 * 1024,
  });

  return new Promise(function (resolve, reject) {
    formParser.parse(request, function (error, fields, files) {
      if (error) {
        reject(error);
      } else {
        resolve({ fields: fields, files: files });
      }
    });
  });
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ status: "Method not allowed" });
  }

  try {
    const parsedForm = await parseIncomingForm(request);

    const receiptFile = parsedForm.files.receipt;

    if (!receiptFile) {
      return response.status(400).json({ status: "No file received" });
    }

    const firstFile = Array.isArray(receiptFile) ? receiptFile[0] : receiptFile;

    const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedMimeTypes.includes(firstFile.mimetype)) {
      return response.status(400).json({
        status: "Unsupported file type. Only JPG, PNG or WEBP are allowed.",
      });
    }

    if (firstFile.size > 5 * 1024 * 1024) {
      return response.status(400).json({
        status: "File is too large. Maximum size is 5MB.",
      });
    }

    console.log("name:", firstFile.originalFilename);
    console.log("type:", firstFile.mimetype);
    console.log("size:", firstFile.size);

    return response.status(200).json({ status: "file is valid" });
  } catch (error) {
    console.error("error:", error);
    return response.status(400).json({ status: error.message });
  }
}
