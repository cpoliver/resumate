import { Technology } from "types/common"

const angular: Technology = { name: "AngularJS", type: "angular" }

const cSharp: Technology = { name: "C#", type: "csharp" }

const css: Technology = { name: "CSS", type: "css" }

const elixir: Technology = { name: "Elixir", type: "elixir" }

const html: Technology = { name: "HTML", type: "html" }

const javascript: Technology = { name: "JavaScript", type: "javascript" }

const node: Technology = { name: "NodeJS", type: "node" }

const react: Technology = { name: "React", type: "react" }

const reactNative: Technology = { name: "React Native", type: "react-native" }

const sql: Technology = { name: "SQL", type: "sql" }

const typescript: Technology = { name: "TypeScript", type: "typescript" }

export const technology = {
  angular,
  cSharp,
  css,
  elixir,
  html,
  javascript,
  node,
  react,
  reactNative,
  sql,
  typescript,
} as const
