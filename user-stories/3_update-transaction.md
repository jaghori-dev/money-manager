# Update Transaction

## Value Proposition

**As a user**

**I want to** update the details of existing transactions,

**so that** they reflect the most accurate and relevant information.

## Description

<img width="465" height="385" alt="Image" src="https://github.com/user-attachments/assets/aa3962fb-7796-4817-946e-adb1387e5d04" />

## Acceptance Criteria

- Each transaction is clickable.
- Clicking a transaction opens a detail view.
- The detail view displays all relevant transaction data.
- The transaction type (Income/Expense) is visually highlighted.
- The category is selectable via a dropdown menu.
- The note field is visible.
- Clicking “Edit” allows all fields to become editable.
- After saving, changes are immediately reflected in the transaction list.


## Tasks

- [ ] Create feature branch `feature/delete-transaction`
- [ ] Define what the TransactionDetail view displays (amount, type, category, date, note, plus Edit button)
- [ ] for details page implement dynamic route page to display the selected transaction data
- [ ] Implement click handler to store the selected transaction in state
- [ ] Implement conditional rendering (list view vs. detail view)
- [ ] Reuse the existing CreateTransactionForm as a shared “dumb” TransactionForm component
- [ ] Update the shared form to support two modes:
    - mode="create" → uses POST /api/transactions
    - mode="edit" → uses PUT (or PATCH) /api/transactions/:id
- [ ] Pass initial values into the form when editing (pre-filled fields from the selected transaction)
- [ ] Implement isEditing state to toggle between readonly detail view and editable form view
- [ ] Create toggle component for Income/Expense with active state (reused in the shared form)
- [ ] Display the amount as formatted currency using Intl.NumberFormat
- [ ] Populate the category dropdown with data from categories.json
- [ ] Implement note field as a controlled input component
- [ ] Implement handleUpdate function (submit edit form)
- [ ] Implement form validation (required fields)
- [ ] Handle successful API response and update the UI immediately:
    - update local state with mutate() using useSWR
- [ ] Handle API error state (show error message)
- [ ] Close edit mode after successful update and return to detail view
- [ ] Ensure changes are immediately reflected in the transaction list
