# Killergram

![Screenshot](https://github.com/cpoliver/killergram/blob/main/public/preview.png)

## Description

Killergram is simple clone of the Instagram UI, powered by React, Chakra-UI, and TypeScript.

## Getting Started

- Clone the repository:
  - SSH `git clone git@github.com:cpoliver/killergram.git`
  - HTTPS `https://github.com/cpoliver/killergram.git`
- Install the dependencies:
    `cd ./killergram && yarn`
- Build and run the App
  - `yarn start`
- Build and run storybook
    `yarn storybook`

### Prerequisites

- Node v14.17.6
- yarn v1.22.11

## Key Links

- [Live App](https://cpoliver.github.io/killergram)
- [Live Storybook](https://cpoliver.github.io/killergram-storybook)
- [Storybook (via Chromatic)](https://www.chromatic.com/builds?appId=61542738dbe557003a8b8d50&inviteToken=dc54255ab9a24721a28d2471778d735b)
- [GitHub Repo](https://github.com/cpoliver/killergram)
- [Trello Board](https://trello.com/invite/b/WSbPMp8b/e8fecd2cb5768edca02a43e0bbfae0b8/boolean-tech-test)
- [HedgeDoc](https://demo.hedgedoc.org/s/FAfgavoZD)
- [LinkedIn Profile](https://www.linkedin.com/in/cpoliver/)

## Technical Architecture

- Chakra UI
  - Accessibile by design
  - Themeable
  - Light wrapper around Flexbox/CSS Grid
  - Pre-built and battle tested atomic components - why reinvent the wheel?
- Storybook
  - Serves as "living documentation"
  - Integrates with [Chromatic](https://www.chromatic.com) for seamless visual regression testing
  - Great developer experience. Work on one component in isolation
- Create React App
  - Fast, first-party way to bootstrap a new React App
- React Query / Axios / Mock Service Worker
  - nice APIs, caching, IE11 compatibility

## Features

- Accessible
  - Chakra UI components
  - Markup landmarks, aria-label, alt tags
  - Keyboard navigation
- Theming
  - Ensure consistency with design system
  - Dark Mode (branded with Boolean colors)
- Code Quality Tooling
  - Husky: pre-commit/pre-push hooks
  - TypeScript
  - Eslint (custom configuration pulled in via npm)
- Details
  - Interactive reply field on posts
  - Togglable like/save buttons on posts
  - Icon svgs taken from Instagram
  - Cursor hover states/text underlines matched to real Instagram site
  - Loading skeleton components
  - Deterministically generate avatars from the username for more variety
  - Color mode-aware custom favicon (doesn't change with color mode switcher, uses the system color mode)

## Approach

- Create Trello board
- Identify components to build
- Setup app and tooling
  - Remove boilerplate
  - Project structure
  - Linting
  - Pre-commit/pre-push hooks (husky)
  - Add dependencies
- Add Storybook
- Mock API Data
- Create components
- Create/integrate app/views to API (or Mock API in Storybook)
- Publish
- Finish documentation (some was as I went along)

## Future Improvements

- Make the app fully-responsive. If this were a real project, I'd have built it mobile-first.
- Add tests ([Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests))
- Add translations for react-i18next - currently the i18n library is configured, but no translations have been added
- Structure app by feature - currently everything is in src/components, however Storybook groups the stories by feature

## Tested On

- Windows 11 (Home Insider Preview, build 22463.1000)
  - [x] Chromium (Brave, Edge, Vivaldi)
  - [x] Firefox
- macOS 11.6 (build 20G165)
  - [x] Chromium (Brave, Edge, Vivaldi)
  - [x] Safari
  - [x] Firefox
- Linux (Arch, rolling release, kernel version 5.13.13)
  - [x] Chromium (Brave, Edge, Vivaldi)
  - [x] Safari
  - [x] Firefox
