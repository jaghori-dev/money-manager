# 10 – Mobile Navigation System

## Value Proposition

**As a user**

**I want to** use a fixed mobile navigation at the bottom of the screen,

**so that**  I can quickly switch between the main sections of the app from any page.

## Description



## Acceptance Criteria

A search functionality is implemented on the “Transactions” page.

-  A bottom navigation bar is visible on mobile devices and remains fixed at the bottom of the screen.
-  The navigation is accessible on all main pages (Home, Transactions, New Transaction, Analytics, Profile).
-  Each navigation item includes:
    -  An icon
    -  A text label below the icon
-  Clicking a navigation item routes the user to the corresponding page.
-  The active navigation item is clearly highlighted.
-  The active state updates automatically based on the current route (e.g., /transactions → Transactions is active).
-  The navigation does not overlap the page content (e.g., layout includes bottom padding).
-  The navigation is responsive and optimized for touch interaction.

## Tasks

-  [ ] Create feature branch feature/navigation-system
-  [ ] Create a BottomNav component
-  [ ] Define navigation items (Home, Transactions, New Transaction, Analytics, Profile)
-  [ ] Select and integrate appropriate icons
-  [ ] Display labels below each icon
-  [ ] Implement routing using next/link
-  [ ] Implement active state using useRouter
-  [ ] Add conditional styling for active/inactive states
-  [ ] Fix the navigation to the bottom of the screen (position: fixed; bottom: 0;)
-  [ ] Add bottom spacing in layout to prevent content overlap
-  [ ] Test mobile responsiveness and touch usability