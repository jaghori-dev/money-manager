import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";
import fileSystem from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

    console.log("Uploading receipt to Claudary");
    console.log("name:", firstFile.originalFilename);
    console.log("type:", firstFile.mimetype);
    console.log("size:", firstFile.size);

    const uploadResult = await cloudinary.uploader.upload(firstFile.filepath, {
      folder: "money-manager-receipts",
      resource_type: "image",
    });

    try {
      fileSystem.unlinkSync(firstFile.filepath);
    } catch (cleanupError) {
      console.log("Temporary file cleanup failed:", cleanupError);
    }

    return response.status(200).json({
      receiptUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    });
  } catch (error) {
    console.error("Receipt upload error:", error);
    return response.status(400).json({ status: error.message });
  }
}
