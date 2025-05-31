# Clash Recruit Dev plan

## Outline

The goal of this web application is to help players of the popular mobile game "Clash of clans" find and promote their clans to new members.

Core features:

- Discord Integration
    - Authentication
    - Member notifications
        - A discord bot that sends website notifications through the discord message API.
- User profiles
    - Display a players clash of clans account(s) statistics
    - Show acheviements for the player and allow them to add badges for their profile
- Clan promotion board
    - View and search clans posted to the site.
    - Apply to join this clan
- Player search system
    - Search for players and filter by stats
    - Invite player to a clan
- Onboarding flow 
    - Have users setup their account preferenes and information
    - Have them select an account type, a promoter or clan finder
- Clan manager dashboard
    - Create a clan listing
    - Create a clan application form
    - Clan display page with active member listing, clan stats, clan socials, and application button

## Tech stack

Web: Vite + React.js
Router: Tanstack router
Database: Convex
Styling: Mantine + CSS

We do not use tailwindcss for styling. Styling is done through https://mantine.dev/styles/styles-overview/

## Color style

Not sure yet, but i want it to be simular to the clash of clans game colors but dark themed. 