export default function ReceiptInput(props) {
  function handleFileChange(event) {
    const selectedFile = event.target.files[0];

    console.log("Selected file:", selectedFile);

    if (selectedFile) {
      props.onFileSelect(selectedFile);
    } else {
      props.onFileSelect(null);
    }
  }

  return (
    <div>
      <label htmlFor="receipt">Attach receipt:</label>
      <input
        id="receipt"
        name="receipt"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
}
