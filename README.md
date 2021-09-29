# Killergram

## Description

Killergram is simple clone of the Instagram UI, powered by React, Chakra-UI, and TypeScript.

## Getting Started

- Clone the repository:
  - SSH `git clone git@github.com:cpoliver/killergram.git`
  - HTTPS `https://github.com/cpoliver/killergram.git`
- Install dependenciess:
    `cd ./killergram && yarn`
- run app
  - `yarn start`
- run storybook
    `yarn storybook`

### Prerequisites

- Node v14.17.6
- yarn v1.22.11

## Key Links

- [Live App](https://cpoliver.github.io/killergram)
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
  - Intergrates with [Chromatic] for seamless visual regression testing
  - Great developer experience. Work on one component in isolation
- Create React App
  - Fast, first-party way to bootstrap a new React App
- React Query / Axios / Mock Service Worker
  - nice APIs, caching, IE11 compatibility

## Features

- Accessibile
  - Chakra
  - aria-label, alt tags
  - keyboard navigation
  - HTML landmarks
- Theming
  - Ensurse consistency with design system
  - Dark Mode (branded with Boolean colors)
- Code quality tooling
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

- Structure app by feature - currently everything is in src/components, however Storybook groups the stories by feature
- Add translations for react-i18next - currently the i18n library is configured, but not translations have been added
- More cross browser testing/support
- Add tests ([Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests))

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
