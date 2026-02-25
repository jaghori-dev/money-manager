# 09 – Search & Filter Transactions (Title + Category Chips)

## Value Proposition

**As a user**

**I want to**  search transactions by title and filter them by category,

**so that** I can quickly find specific records and view transactions within a chosen category.

## Description



## Acceptance Criteria

-  A search input field is displayed on the “Transactions” page.
-  The search input filters transactions by title only.
-  Title search:
    -  is case-insensitive
    -  supports partial matches (e.g., “Mar” matches “Market”)
-  Below the search input, a horizontally scrollable list of category chips is displayed.
-  The user can swipe left/right to browse categories.
-  Categories are loaded from categories.json.
-  The user can select one category chip to filter the list.
-  The selected category chip is visually highlighted (active state).
-  When a category is selected, only transactions from that category are shown.
-  Search and category filter can be combined.
-  If no transactions match the current search/filter, an empty-state message is shown (e.g., “No transactions found”).
-  Clearing the search input restores results for the selected category (if any).
-  Clearing the selected category shows transactions from all categories again.

## Tasks

-  [ ] Create feature branch feature/search-filter-transactions
-  [ ] Add a search input field to the “Transactions” page
-  [ ] Store the search value as a controlled input using useState
-  [ ] Implement title filtering using .filter(), .toLowerCase() and .includes()
-  [ ] Load categories from categories.json
-  [ ] Render categories as horizontally scrollable chips (swipe left/right)
-  [ ] Store selected category in state using useState
-  [ ] Implement active styling for the selected category chip
-  [ ] Filter transactions by selected category using .filter()
-  [ ] Combine title search + category filter
-  [ ] Render the filtered transactions list dynamically
-  [ ] Implement empty-state message when no results match
-  [ ] Implement “clear search” behavior
-  [ ] Implement “clear selected category” behavior (show all categories)
-  [ ] Test scenarios (title only, category only, both, empty results, horizontal scrolling)