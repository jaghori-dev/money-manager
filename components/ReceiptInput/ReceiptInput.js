import { useState } from "react";

export default function ReceiptInput({ onFileSelect }) {
  const [error, setError] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const maxSize = 4 * 1024 * 1024; // 4MB

    if (!allowedTypes.includes(file.type)) {
      setError("Only JPG, PNG or WEBP images are allowed.");
      setSelectedFileName("");
      onFileSelect(null);
      return;
    }

    if (file.size > maxSize) {
      setError("File is too large. Maximum size is 4MB.");
      setSelectedFileName("");
      onFileSelect(null);
      return;
    }

    setError("");
    setSelectedFileName(file.name);
    onFileSelect(file);
  }

  function handleRemove() {
    setError("");
    setSelectedFileName("");
    onFileSelect(null);
  }

  return (
    <div>
      <label htmlFor="receipt">Attach receipt (optional):</label>
      <input
        id="receipt"
        name="receipt"
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileChange}
      />

      {selectedFileName ? (
        <div>
          <p>Selected: {selectedFileName}</p>
          <button type="button" onClick={handleRemove}>
            Remove receipt
          </button>
        </div>
      ) : (
        <p>No receipt attached</p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
