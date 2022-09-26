import { Technology } from "types/common"

const angular: Technology = { name: "AngularJS", icon: "angular" }

const cSharp: Technology = { name: "C#", icon: "csharp" }

const css: Technology = { name: "CSS", icon: "css" }

const elixir: Technology = { name: "Elixir", icon: "elixir" }

const html: Technology = { name: "HTML", icon: "html" }

const javascript: Technology = { name: "JavaScript", icon: "javascript" }

const node: Technology = { name: "NodeJS", icon: "node" }

const react: Technology = { name: "React", icon: "react" }

const reactNative: Technology = { name: "React Native" }

const sql: Technology = { name: "SQL" }

const typescript: Technology = { name: "TypeScript", icon: "typescript" }

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
