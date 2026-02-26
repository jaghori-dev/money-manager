import TransactionsForm from "@/components/TransactionForm/TransactionsForm";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Navigation";

export default function NewTransaction() {
  const { mutate } = useSWR("/api/transactions");

  async function handleSubmit(event, receiptFile) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newTransaction = Object.fromEntries(formData);
    let receiptUrl = "";

    if (receiptFile) {
      const uploadFormData = new FormData();
      uploadFormData.append("receipt", receiptFile);

      const uploadResponse = await fetch("/api/receipts", {
        method: "POST",
        body: uploadFormData,
      });
      if (!uploadResponse.ok) {
        const errorResult = await uploadResponse.json();
        console.error("Receipt upload failed:", errorResult);
        return;
      }

      const uploadResult = await uploadResponse.json();
      receiptUrl = uploadResult.receiptUrl;

      console.log("Receipt uploaded URL:", receiptUrl);
    }

    const payload = {
      ...newTransaction,
      receiptUrl: receiptUrl,
    };

    const response = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error(response.status);
      return;
    }
    mutate();
    event.target.reset();
  }
  return (
    <>
      <TransactionsForm
        onSubmit={handleSubmit}
        formTitle="Add new transaction"
        buttonText="Save transaction"
      />
    </>
  );
}
