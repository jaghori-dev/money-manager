# Account Balance

## Value Proposition

**As a user**

**I want to** see the total balance of my transactions,

**so that** I can quickly understand my overall financial situation.

## Description

<img width="371" height="655" alt="Image" src="https://github.com/user-attachments/assets/c2ae092c-7cb5-4817-9c2a-84181f9299e6" />

## Acceptance Criteria

- The account balance is displayed at the top of the homepage above the transactions list (as a separate “TotalBalance” card).
- The balance equals the sum of all transaction amounts (income = positive, expense = negative).
- The balance is formatted as currency (EUR), including thousand separators and two decimals (e.g. € 124,555.00 or localized format).
- The balance updates immediately when:
- a new transaction is created,
- an existing transaction is updated,
- a transaction is deleted.
- The balance has a clear visual distinction based on its value:
- positive/zero balance is styled as “positive”,
- negative balance is styled as “negative”.
- If transactions are still loading, a loading state is shown in the balance area (e.g. skeleton or “Loading…”).
- If transactions fail to load, an error state is shown (e.g. “Balance not available”).
- If there are no transactions, the balance shows € 0.00.

## Tasks

- [ ] Create feature branch `feature/account-balance`
- [ ] Create TotalBalance component
- [ ] Pass transactions array as props to TotalBalance
- [ ] Calculate total balance using .reduce()
- [ ] Normalize income and expense values (positive/negative)
- [ ] Format balance using Intl.NumberFormat
- [ ] Implement conditional styling based on balance value (positive / negative)
- [ ] Display balance at the top of the homepage
- [ ] Ensure balance updates after create, update, and delete operations
- [ ] Handle loading state (if using useSWR or fetch)
- [ ] Handle empty state (no transactions → € 0.00)
- [ ] Test balance calculation with different data scenarios
