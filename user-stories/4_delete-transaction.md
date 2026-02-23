# Delete Transaction

## Value Proposition

**As a user**

**I want to** delete incorrect transactions,

**so that** I can maintain an accurate and organised transactions list.

## Description

<img width="328" height="209" alt="Image" src="https://github.com/user-attachments/assets/7528d889-9eba-4a92-bbf7-1b10f5281a08" />

## Acceptance Criteria

- Each transaction in the details page includes delete option.
- Clicking the delete option triggers a confirmation dialog.
- The dialog serves to prevent accidental deletions by asking the user to confirm their intention.
- The dialog includes options for both confirming the deletion and cancelling the action.
- The cancellation option allows the user to back out of the deletion process if selected by mistake or if they change their mind.
- Upon confirming the deletion, the transaction is removed from the transactions list, and a success message is displayed.
- If all transactions are deleted, a message appears indicating that there are no transactions and providing an option to add new ones.

## Tasks

- [ ] Create feature branch `feature/delete-transaction`
- [ ] Add a Delete button to the transaction detail view
- [ ] Implement a confirmation modal component
- [ ] Open the confirmation modal on Delete button click
- [ ] Close the modal when clicking “No”
- [ ] Implement handleDelete function
- [ ] Send a DELETE request to /api/transactions/:id
- [ ] Handle successful API response
- [ ] Remove the deleted transaction from the UI:
- [ ] using mutate() if useSWR
- [ ] Re-render the updated transaction list immediately
- [ ] Handle API error state (show error message)
- [ ] Display success message after successful deletion
- [ ] Implement empty-state message if no transactions remain