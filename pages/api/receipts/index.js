import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";
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
    filter: function ({ mimetype }) {
      return (
        mimetype === "image/jpeg" ||
        mimetype === "image/png" ||
        mimetype === "image/webp"
      );
    },
  });

  return new Promise(function (resolve, reject) {
    formParser.parse(request, function (error, fields, files) {
      if (error) {
        reject(error);
      } else {
        resolve({ fields, files });
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

    const uploadedFile =
      parsedForm.files.receipt?.[0] || parsedForm.files.receipt;

    if (!uploadedFile) {
      return response.status(400).json({ status: "No file uploaded" });
    }

    const uploadResult = await cloudinary.uploader.upload(
      uploadedFile.filepath,
      {
        folder: "money-manager-receipts",
        resource_type: "image",
      }
    );

    try {
      fileSystem.unlinkSync(uploadedFile.filepath);
    } catch (cleanupError) {}

    return response.status(200).json({
      receiptUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    });
  } catch (error) {
    console.error("Receipt upload error:", error);
    return response.status(400).json({ status: error.message });
  }
}
