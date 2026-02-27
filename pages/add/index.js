import TransactionsForm from "@/components/TransactionForm/TransactionsForm";
import useSWR from "swr";
import { Container } from "..";
import { useState } from "react";

export default function NewTransaction() {
  const { mutate } = useSWR("/api/transactions");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event, receiptFile) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newTransaction = Object.fromEntries(formData);
    let receiptUrl = "";

    setErrorMessage("");

    if (receiptFile) {
      const uploadFormData = new FormData();
      uploadFormData.append("receipt", receiptFile);

      const uploadResponse = await fetch("/api/receipts", {
        method: "POST",
        body: uploadFormData,
      });
      if (!uploadResponse.ok) {
        const errorResult = await uploadResponse.json();

        const messageFromServer =
          errorResult.message || "Receipt upload failed.";
        setErrorMessage(messageFromServer);

        return;
      }

      const uploadResult = await uploadResponse.json();
      receiptUrl = uploadResult.secure_url;
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
    <Container>
      <TransactionsForm
        onSubmit={handleSubmit}
        formTitle="Add new transaction"
        buttonText="Save transaction"
        receiptErrorMessage={errorMessage}
      />
    </Container>
  );
}
