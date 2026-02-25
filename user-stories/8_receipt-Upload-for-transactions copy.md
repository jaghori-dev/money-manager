# 08 – Receipt Upload for Transactions


## Value Proposition

**As a user**

**I want to** upload and store a receipt image for a transaction,

**so that** I can keep proof of my expenses and review it later.

## Description



## Acceptance Criteria

Create Transaction
- The create transaction form includes an optional “Attach receipt” file input.
- The user can submit the form without a receipt image (receipt is optional).
- If a receipt is selected, it is uploaded and stored successfully.
- After successful creation, the receipt image is linked to the created transaction.
- If receipt upload fails, an error message is shown and the receipt is not attached.

Transaction Detail View
- Opening a transaction shows a detail view with all transaction fields.
- If a receipt exists, the receipt image is displayed in the detail view.
- If no receipt exists, a placeholder or text is shown (e.g., “No receipt attached”).

Edit Transaction
- Clicking “Edit” switches the detail view into an editable form (reuse the existing form if possible).
- If a receipt exists, the user can:
- remove the receipt (Delete/Remove receipt),
- replace it with another image.
- After saving, the updated receipt state is reflected immediately:
- replaced receipt is shown,
- deleted receipt is no longer shown.

Constraints
- Only image files are allowed (e.g., .jpg, .png, .webp).
- Maximum file size is limited (e.g., 5 MB).
- Clear validation messages are shown for unsupported file types or oversized files.

## Tasks

- [ ] Create feature branch feature/receipt-upload
- [ ] Add optional file input (“Attach receipt”) to the create transaction form
- [ ] Send receipt file using FormData (multipart/form-data) on submit
- [ ] Create an API route to handle receipt upload
- [ ] POST /api/transactions/:id/receipt (upload + attach)
- [ ] Store the uploaded file and save its URL/path in the transaction record (e.g., receiptUrl)
- [ ] Update the transaction detail view to display the receipt image if receiptUrl exists
- [ ] Add edit mode actions:
    - [ ] replace receipt (upload new file → update receiptUrl)
    - [ ] remove receipt
- [ ] Create API routes for edit receipt actions:
    - [ ] PUT /api/transactions/:id/receipt (replace) or reuse POST
    - [ ] DELETE /api/transactions/:id/receipt (remove)
- [ ] Update UI immediately after upload/replace/delete:
- [ ] update local call mutate() using useSWR
- [ ] Add client-side validation for file type and file size
- [ ] Add error handling and user messages for failed uploads
