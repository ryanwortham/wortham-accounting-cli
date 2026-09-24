# Wortham Accounting CLI — Public Pages Specification

## Purpose

Publish the minimum public HTTPS pages Intuit requires for a private, read-only QuickBooks Online command-line utility used by authorized Little King Inc personnel.

## Public identity

- Product: Wortham Accounting CLI
- Operator: Wortham Business Tools
- Intended user: authorized Little King Inc personnel
- Hosting: a dedicated public GitHub Pages repository, separate from Pizza World websites and repositories

## Required routes

- `/` — launch/about page
- `/privacy.html` — privacy policy
- `/terms.html` — end-user terms
- `/connect.html` — connection instructions
- `/disconnect.html` — disconnection and deletion instructions
- `/oauth-callback.html` — noindex OAuth response bridge that forwards the unchanged query to the CLI's loopback listener without storing or logging it

## Functional and security claims

- The CLI reads QuickBooks Online accounting data through Intuit OAuth 2.0.
- Accounting-data requests are GET-only.
- It can retrieve company information, accounts, transactions, uncategorized transactions, and Profit & Loss reports.
- It does not post, edit, delete, categorize, reconcile, or operate the bank-feed workflow.
- OAuth tokens and app credentials are stored in macOS Keychain.
- Retrieved accounting data is processed locally and is retained only when an authorized user deliberately exports it.
- The public site contains no analytics, cookies, forms, trackers, credentials, OAuth tokens, or QuickBooks company data.
- The OAuth callback bridge does not persist or transmit the authorization response anywhere except the local loopback listener on the authorized Mac.

## UX requirements

- Responsive on desktop and mobile.
- All navigation links work.
- Clear private/internal-use positioning.
- `noindex,nofollow` metadata on every page.
- Neutral presentation with no Pizza World branding or domain dependency.

## Acceptance checks

- Every required HTTPS URL returns HTTP 200.
- No broken local links, console errors, horizontal overflow, secrets, or private accounting data.
- Desktop and mobile layouts are visually usable.
- Public wording matches the implemented CLI and avoids compliance guarantees.
