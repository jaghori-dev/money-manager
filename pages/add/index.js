import TransactionsForm from "@/components/TransactionForm/TransactionsForm";
import useSWR from "swr";

export default function NewTransaction() {
  const { mutate } = useSWR("/api/transactions");

  async function handleSubmit(event, receiptFile) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const transactionValues = Object.fromEntries(formData);

    console.log("Transaction values:", transactionValues);
    console.log("Receipt file:", receiptFile);

    let receiptUrl = "";

    if (receiptFile) {
      const uploadFormData = new FormData();
      uploadFormData.append("receipt", receiptFile);

      const uploadResponse = await fetch("/api/receipts", {
        method: "POST",
        body: uploadFormData,
      });

      if (!uploadResponse.ok) {
        console.error("Receipt upload failed:", uploadResponse.status);
        return;
      }

      const uploadResult = await uploadResponse.json();
      receiptUrl = uploadResult.receiptUrl;

      console.log("Uploaded Url:", receiptUrl);
    }

    const payload = { ...transactionValues, receiptUrl };

    const createResponse = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!createResponse.ok) {
      console.error("Create transaction failed:", createResponse.status);
      return;
    }

    mutate();
    event.target.reset();
  }

  return (
    <TransactionsForm
      onSubmit={handleSubmit}
      formTitle="Add new transaction"
      buttonText="Save transaction"
    />
  );
}
