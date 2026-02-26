import TransactionsForm from "@/components/TransactionForm/TransactionsForm";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Navigation";

export default function NewTransaction() {
  const { mutate } = useSWR("/api/transactions");

  async function handleSubmit(event, receiptFile) {
    event.preventDefault();

    if (receiptFile) {
      const uploadFormData = new FormData();
      uploadFormData.append("receipt", receiptFile);

      const uploadResponse = await fetch("/api/receipts", {
        method: "POST",
        body: uploadFormData,
      });

      const uploadResult = await uploadResponse.json();

      console.log("Response from API:", uploadResult);
    }

    const formData = new FormData(event.target);
    const newTransaction = Object.fromEntries(formData);

    const response = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
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
