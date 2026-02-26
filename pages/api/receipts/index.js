import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseIncomingForm(request) {
  const formParser = formidable({
    maxFieldsSize: 5 * 1024 * 1024,
  });

  return new Promise(function (resolce, reject) {
    formParser.parse(request, function (error, fields, files) {
      if (error) {
        reject(error);
      } else {
        resolce({ fields: fields, files: files });
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

    console.log("name:", firstFile.originalFilename);
    console.log("type:", firstFile.mimetype);
    console.log("size:", firstFile.size);

    return response.status(200).json({ status: "file received" });
  } catch (error) {
    console.error("error:", error);

    return response.status(400).json({ status: error.message });
  }
}
