# Transactions List

## Value Proposition

**As a user**

**I want to** browse a list of transactions,

**so that** I can easily track my spending and income to manage my finances.

## Description

<img width="347" height="590" alt="Image" src="https://github.com/user-attachments/assets/0e649d62-1d2b-4316-a401-1a7cfac52577" />

## Acceptance Criteria

- The homepage displays a list of transactions.
- The title of the app is displayed clearly at the top of the page.
- Each transaction listing includes:
  - Transaction Amount
  - Transaction Title
  - Transaction Date
- Income and expense transactions (negative or positive) are visually differentiated (e.g., using different colours).
- The list supports vertical scrolling to accommodate multiple entries.

## Tasks

- [ ] Create feature branch `feature/transactions-list`
- [ ] Inspect and adapt the example data in the [assets folder](../db-assets/transactions.json)
- [ ] Create a feature branch feature/transactions-list to separate development from the main branch.
- [ ] Analyze the transactions.json file to understand the structure of the transaction data (title, amount, date, category).
- [ ] Import the data into the application or pass it to the main component via props.
- [ ] Create a TransactionList component responsible for handling and rendering the transaction data.
- [ ] Create a reusable TransactionItem component to display a single transaction entry.
- [ ] Render the transaction data dynamically using the JavaScript .map() method.
- [ ] Display the title, date, and amount in a structured way within JSX.
- [ ] Format the amounts as currency values using Intl.NumberFormat (e.g., 1,500.00 €).
- [ ] Implement conditional styling (e.g., using a ternary operator or conditional className) to visually differentiate income (green) and expenses (red).
- [ ] Structure the layout vertically using CSS (e.g., Flexbox or Grid).
- [ ] Enable vertical scrolling for long lists using CSS (overflow-y: auto).
- [ ] Test the layout on different screen sizes to ensure responsiveness.
