import { WorkHistoryItem } from "types/workHistory"
import { technology } from "./technology"

const capbase: WorkHistoryItem = {
  company: {
    name: "Capbase",
    url: "https://capbase.com",
  },
  role: "Lead Developer",
  workType: "contract",
  duration: {
    from: {
      month: 2,
      year: 2022,
    },
    to: {
      month: 7,
      year: 2022,
    },
  },
  items: [
    "Leading a team of developers spread across Europe and Asia",
    "Mentoring junior developers through pair programming and code reviews• Building design system components using Theme UI to enforce design system constraints",
    "Improving code quality by adding missing tests, TypeScript, and using new language features",
    "Collaborating with designers to improve design handover and tooling in Figma",
    "Working with stakeholders and project managers to estimate and plan user stories",
  ],
  technologies: [technology.typescript, technology.react, technology.node, technology.html, technology.css],
}

const iamCloud: WorkHistoryItem = {
  company: {
    name: "IAM Cloud",
    url: "https://iamcloud.com",
  },
  role: "Front-End Architect",
  workType: "permanent",
  duration: {
    from: {
      month: 5,
      year: 2020,
    },
    to: {
      month: 1,
      year: 2022,
    },
  },
  items: [
    "Architecting and building a front-end ecosystem powering the platform used by ≈500,000 users",
    "Co-creating a design system in Figma and developing the components as packages in Bit.dev",
    "Using React Query and Mock Service Worker for API interaction and mocking API calls in tests",
    "Configuring tooling to automate linting/formatting and unit/visual regression testing",
    "Writing unit and integration tests with React Testing Library to facilitate TDD",
    "Translating complicated technical and business requirements into deliverable user stories",
  ],
  technologies: [technology.typescript, technology.react, technology.html, technology.css],
}

const cloudThing: WorkHistoryItem = {
  company: {
    name: "cloudThing",
    url: "https://cloudthing.com",
  },
  role: "Front-End Architect",
  workType: "permanent",
  duration: {
    from: {
      month: 9,
      year: 2019,
    },
    to: {
      month: 4,
      year: 2022,
    },
  },
  items: [
    "Authoring a package library monorepo for React components, hooks, and code quality tooling",
    "Architecting a robust and extendable React front-end for a large education platform",
    "Gathering requirements, producing roadmaps, and writing user stories on-site with clients",
    "Upskilling graduate developers, and developers with non-React backgrounds",
    "Managing 20+ developers in the Bangalore office working across several projects ",
    "Introducing TypeScript and Apollo to align disparate approaches to front-end development",
  ],
  technologies: [technology.typescript, technology.react, technology.html, technology.css],
}

const casumo: WorkHistoryItem = {
  company: {
    name: "Casumo",
    url: "https://casumo.com",
  },
  role: "Front-End Developer",
  workType: "contract",
  duration: {
    from: {
      month: 8,
      year: 2017,
    },
    to: {
      month: 7,
      year: 2019,
    },
  },
  items: [
    "Migrating legacy KnockoutJS and ES5 code to a new React and Webpack-driven platform",
    "Greenfield React Native mobile app development for Android and iOS",
    "Producing interactive documentation and visual regression tests with Storybook and Chromatic",
    "Refactoring Redux stores to use Apollo client state and Flow types",
    "Creating GraphQL endpoints to aggregate business logic reliant upon disparate REST APIs",
    "Organising workshops, conferences, and get-togethers for the Front-End team",
  ],
  technologies: [technology.typescript, technology.react, technology.reactNative, technology.html, technology.css],
}

const holidaycheck: WorkHistoryItem = {
  company: {
    name: "HolidayCheck",
    url: "https://www.holidaycheck.com",
  },
  role: "Full-Stack Developer",
  workType: "contract",
  duration: {
    from: {
      month: 2,
      year: 2017,
    },
    to: {
      month: 7,
      year: 2017,
    },
  },
  items: [
    "Node and React development for the largest German holiday deal website",
    "Authoring React components shared across the company web estate",
    "Writing NodeJS endpoints with Koa to replace the legacy PHP backend",
    "Maintaining 100% code coverage with Mocha and Enzyme tests",
    "Porting Fluxible stores and reducers to Redux",
    "Engaging in hackathons to turn concepts into revenue-generating production code",
  ],
  technologies: [technology.javascript, technology.react, technology.node, technology.html, technology.css],
}

const sky: WorkHistoryItem = {
  company: {
    name: "Sky",
    url: "https://www.sky.com",
  },
  role: "",
  workType: "contract",
  duration: {
    from: {
      month: 1,
      year: 1991,
    },
    to: {
      month: 2,
      year: 1992,
    },
  },
  items: [
    "Creating reusable components with React and ES6",
    "Rewriting NodeJS services in Elixir (Phoenix) for improved performance",
    "Developing comprehensive UI tests with Jest and Enzyme",
    "Harnessing the power of functional programming within Elixir and JavaScript codebases",
    "Integrating A/B testing and conversion tracking throughout the tech stack",
    "Working as part of a lean, cross-functional Agile team made up of self-organised squads",
  ],
  technologies: [
    technology.typescript,
    technology.react,
    technology.node,
    technology.elixir,
    technology.html,
    technology.css,
  ],
}

const piksel: WorkHistoryItem = {
  company: {
    name: "Piksel",
    url: "https://piksel.com",
  },
  role: "Full-Stack Developer",
  workType: "contract",
  duration: {
    from: {
      month: 2,
      year: 2016,
    },
    to: {
      month: 6,
      year: 2016,
    },
  },
  items: [
    "Refactoring a proof-of-concept app into a solid, extendable, white-label application",
    "Adding unit test coverage using ng-mocks, Jasmine, Karma, and Istanbul",
    "Fixing and writing end-to-end tests using Protractor and Capybara",
    "Using Webpack and Babel to use ES6 modules and language features",
    "Performance profiling using Chrome devtools and ng-perf",
    "Working as part of a distributed Agile team with people in the UK, Spain, and Italy",
  ],
  technologies: [technology.javascript, technology.angular, technology.html, technology.css],
}

const williamHill: WorkHistoryItem = {
  company: {
    name: "William Hill",
    url: "https://williamhill.com",
  },
  role: "Full-Stack Developer",
  workType: "contract",
  duration: {
    from: {
      month: 11,
      year: 2015,
    },
    to: {
      month: 1,
      year: 2016,
    },
  },
  items: [
    "Developing a Chrome app comprised of composable UI elements with React and Flux",
    "Utilising pure functions and immutability for referential transparency and testability",
    "Using Jasmine and React Test Tools to provide complete coverage of React components",
    "Updating ES5 syntax to use ES6 language features, transpiled by babel",
    "Creating responsive, performance-conscious interfaces for use on low-spec ARM tablets",
    "Working with WebSockets for bi-directional, real-time UI updates",
  ],
  technologies: [technology.javascript, technology.react, technology.angular, technology.html, technology.css],
}

const betfred: WorkHistoryItem = {
  company: {
    name: "Betfred",
    url: "https://betfred.com",
  },
  role: "Lead Full-Stack Developer",
  workType: "contract",
  duration: {
    from: {
      month: 12,
      year: 2014,
    },
    to: {
      month: 10,
      year: 2015,
    },
  },
  items: [
    "Designing and implementing the front-end platform for totesport.com website using AngularJS ",
    "Detailing best-practices to create a clean and consistent codebase",
    "Retro-fitting unit (Karma/Jasmine) and end-to-end tests (Protractor) into a test-less project ",
    "Replacing Grunt with Gulp for continuous testing and environment-specific build configurations",
    "Using Babel to allow the adoption of ECMAScript 2015 syntax and language features",
    "Providing on-call support for the release of the new website to millions of paying customers",
  ],
  technologies: [technology.javascript, technology.angular, technology.css, technology.html],
}

const penrillian: WorkHistoryItem = {
  company: {
    name: "Penrillian",
  },
  role: "JavaScript Developer",
  workType: "contract",
  duration: {
    from: {
      month: 11,
      year: 2014,
    },
    to: {
      month: 12,
      year: 2014,
    },
  },
  items: [
    "Building a customer-facing single page application for Vodafone",
    "Writing Jasmine and Protractor tests for unit testing and end-to-end testing",
    "Extending Angular with custom directives, filters, and modules",
    "Pair programming and mentoring to train Java developers to write NodeJS and Angular code",
    "Working with NodeJS, Express, and Swagger.io to create RESTful web services",
    "Using Git and TeamCity for version control and continuous integration",
  ],
  technologies: [technology.javascript, technology.angular, technology.node, technology.css, technology.html],
}

const gamestec: WorkHistoryItem = {
  company: {
    name: "Gamestec",
  },
  role: "Lead C# Developer",
  workType: "permanent",
  duration: {
    from: {
      month: 7,
      year: 2014,
    },
    to: {
      month: 11,
      year: 2014,
    },
  },
  items: [
    "Orchestrating a team of experienced .net developers as part of a huge legacy migration project",
    "Creating code standards, guidelines, and procedures for the development team",
    "Writing automated test suites with Selenium to ensure functional requirements are met",
    "Mentoring team members to share knowledge and ensure adherence to best-practices",
    "Architecting, developing, and supporting several modules of a large, enterprise system",
    "Adopting ORM with Entity Framework to streamline the data access layer",
  ],
  technologies: [technology.cSharp, technology.javascript, technology.css, technology.html, technology.sql],
}

const jet2: WorkHistoryItem = {
  company: {
    name: "Jet2",
    url: "https://jet2.com",
  },
  role: "BI Applications Developer",
  workType: "permanent",
  duration: {
    from: {
      month: 11,
      year: 2013,
    },
    to: {
      month: 5,
      year: 2014,
    },
  },
  items: [
    "Creating rich client applications using ASP.net, AngularJS, and Silverlight",
    "Developing WebAPI-based microservices for consumption throughout the business",
    "Writing T-SQL scripts to gather and transform BI data for presentation in the UI",
    "Designing intuitive dashboards based on the requirements from Business Analysts",
    "Using D3 and Highcharts to display critical business metrics in a user-friendly format",
    "Application Lifecycle Management with TFS2013 and CI with Octopus Deploy",
  ],
  technologies: [technology.javascript, technology.cSharp, technology.css, technology.html, technology.sql],
}

const britishLibrary: WorkHistoryItem = {
  company: {
    name: "British Library",
    url: "https://www.bl.uk",
  },
  role: "Senior Software Engineer",
  workType: "permanent",
  duration: {
    from: {
      month: 6,
      year: 2012,
    },
    to: {
      month: 10,
      year: 2013,
    },
  },
  items: [
    "Test-driven, C# development using MSTest and Moq",
    "Writing workflow-based Windows services, web services, and desktop applications",
    "Pioneering the usage of WPF and XAML to create more intuitive and aesthetically-pleasing UI",
    "Rewriting various WinForms service management tools into a unified WPF app",
    "Reading and updating MS-SQL databases used to ingest millions of digital documents",
    "Creating dashboards with ASP.net MVC for the Archiving and Preservation departments",
  ],
  technologies: [technology.cSharp, technology.javascript, technology.css, technology.html, technology.sql],
}

const standard: WorkHistoryItem[] = [capbase, iamCloud, cloudThing, casumo, holidaycheck, sky]

const full: WorkHistoryItem[] = [...standard, piksel, williamHill, betfred, penrillian, gamestec, jet2, britishLibrary]

export const workHistory = {
  standard,
  full,
}
