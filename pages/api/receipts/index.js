import formidable from "formidable";
import cloudinary from "cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(400).json({ message: "Method not allowed" });
    return;
  }

  const form = formidable({
    maxFileSize: 5 * 1024 * 1024,
  });

  const parsedResult = await form.parse(request);
  const files = parsedResult[1];

  const uploadedReceiptFiles = files.receipt;

  if (!uploadedReceiptFiles || uploadedReceiptFiles.length === 0) {
    response.status(400).json({ message: "No file received" });
    return;
  }

  const file = uploadedReceiptFiles[0];

  const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    response.status(400).json({
      message: "Unsupported file type. Only JPG, PNG or WEBP are allowed.",
    });
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    response.status(400).json({
      message: "File is too large. Maximum size is 5MB.",
    });
    return;
  }

  const newFilename = file.newFilename;
  const filepath = file.filepath;

  const result = await cloudinary.v2.uploader.upload(filepath, {
    public_id: newFilename,
    folder: "money-manager-receipts",
  });

  response.status(200).json(result);
}
