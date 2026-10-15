# BUILD_STATE.md
# Living project state. Read before every task. Update after completion.
# Every agent must read this file at session start.

## Project
Name      : my-project
Initialized : 2026-10-15T09:21:55.470Z

## Stack
Client  : Next.js + TypeScript + Tailwind CSS + shadcn/ui + Zustand
Backend : Next.js integrated (API routes/SSR)

## Client State
- [ ] Scaffold - framework initialized
- [x] UI - components and layout
- [ ] LOGIC - state management and API client
- [ ] FORMS - form architecture
- [ ] ROUTING - route definitions
- [ ] TESTING - test suite
- [ ] ACCESSIBILITY - a11y compliance

## Backend State
Type: Next.js integrated backend (API routes / SSR)
- [ ] API routes - server-side endpoints
- [ ] Auth - authentication strategy
- [ ] DB - data layer if needed

## Shared
- [ ] CONTRACTS.md - no shared types defined yet

## Dependency Rules
Before starting any task, verify:
- Client LOGIC requires: Client scaffold done
- Client FORMS requires: Client scaffold done
- Client ROUTING requires: Client scaffold done
- API calls in client require: Backend API endpoints done OR mocked
- Backend API requires: DB schema done (if using DB)
- Backend AUTH requires: DB User entity done
- Any cross-boundary types: Must exist in CONTRACTS.md first

## Agent Log
| Date | Agent | Scope | Task | Status | Branch |
|------|-------|-------|------|--------|--------|
| 2026-10-15 | UI | client | scaffolds the full project structure | COMPLETED | agent/client/ui/1792056282694 |
