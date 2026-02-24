# 09 – Search Transactions

## Value Proposition

**As a user**

**I want to** search transactions by different criteria,

**so that** I can quickly find specific records.

## Description



## Acceptance Criteria

A search functionality is implemented on the “Transactions” page.

The user can search transactions by:
- Title
- Date
- Amount

The search works flexibly and does not require exact matches.
Partial matches and multiple criteria can be used at the same time.

After a successful search, only the transactions matching the defined criteria are displayed.

Acceptance Criteria
- A search input field is displayed on the “Transactions” page.
- The search works in real time or after confirmation (e.g., pressing Enter).
- Transactions can be searched by:
- Title
- Date
- Amount
- The search is case-insensitive.
- Partial matches are supported (e.g., typing “Mar” finds “Market”).
- Multiple criteria can be applied simultaneously.
- The transactions list updates dynamically based on the search input.
- If no matching transactions are found, a message is displayed (e.g., “No transactions found”).
- Clearing the search input restores the full transactions list.

## Tasks

- [ ] Create feature branch feature/search-transactions
- [ ] Add search input field to the “Transactions” page
- [ ] Store search value as a controlled component using useState
- [ ] Filter transactions using .filter() by title, date, or amount
- [ ] Implement partial search using .includes()
- [ ] Implement case-insensitive search using toLowerCase()
- [ ] Combine multiple filter criteria
- [ ] Dynamically render the filtered transactions list
- [ ] Implement empty-state message for no search results
- [ ] Ensure full list is restored when search input is cleared