# Create Transaction

## Value Proposition

**As a user**

**I want to** create and store new transactions,

**so that** I can keep track of my expenses and income effectively.

## Description

<img width="536" height="679" alt="Image" src="https://github.com/user-attachments/assets/957d9907-764d-46e9-baa9-82800522288e" />

## Acceptance Criteria

- A form for adding transactions is displayed at the top of the homepage.
- The form is clearly headlined (e.g., “New Transaction”).
- The form must include labeled fields for:
  - Transaction Amount
  - Transaction Category
  - Transaction Type
  - Transaction Date
- All mandatory fields must be filled in.
- The transaction type must be selected using toggle buttons or radio buttons, allowing the choice between “Income” and “Expense”.
- The category is selected from the existing categories list via a dropdown menu.
- The categories dropdown must include a default option, “Please select a category”, which requires user selection.
- The date field defaults to the current date.
- An optional text field (“Note”) allows the user to add additional remarks.
- The user has the possibility to upload an image or attach a receipt.
- Form submission with any empty mandatory fields is blocked, and clear validation messages indicate which fields need completion.
- Upon successful submission, the new transaction is added to the top of the transactions list.

## Tasks

- [ ] Create feature branch `feature/create-transaction`
- [ ] Use the category options defined in categories.json
- [ ] Create a new page `pages/newTransaction/index.js`
- [ ] Create a component `components/transaction/NewTransaction.js`
- [ ] Implement a Cancel button that redirects the user back to the homepage
- [ ] Implement toggle buttons for “Income” and “Expense” with an active state
- [ ] Create a controlled input field for the transaction amount using useState
- [ ] Implement dynamic display of the currency symbol (€)
- [ ] Load categories from categories.json and display them in the dropdown
- [ ] Integrate the default option “Please select a category”
- [ ] Pre-fill the date field with the current date
- [ ] Implement an optional note input field
- [ ] Prepare a file upload feature for attaching receipts
- [ ] Implement form validation to ensure required fields are completed
- [ ] Create a handleSubmit function using event.preventDefault()
- [ ] Create a new transaction object on submission
- [ ] Add the new transaction to the top of the transactions list
- [ ] Reset the form after successful submission
- [ ] Create feature branch feature/transactions-api-sync
- [ ] Implement POST /api/transactions to create and store a new transaction
- [ ] Connect the transactions list to the backend using useSWR
- [ ] Update the UI immediately after successful create
- [ ] add new transaction to the top mutate()
- [ ] Implement error handling for failed requests (show error message)
- [ ] Implement Cancel behavior (reset state + return to list view)