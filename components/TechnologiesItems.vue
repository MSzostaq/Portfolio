<template>
  <TechnologyItem
    v-for="(tech, index) in TECHNOLOGIES"
    :key="index"
    :technology="tech"
  />
</template>

<script setup>
import ApolloIcon from "~/assets/apollo.svg";
import FigmaIcon from "~/assets/figma.svg";
import GitIcon from "~/assets/git.svg";
import GraphQLIcon from "~/assets/graphql.svg";
import NextJSIcon from "~/assets/nextjs.svg";
import NuxtIcon from "~/assets/nuxt.svg";
import ReactIcon from "~/assets/react.svg";
import ReduxSagaIcon from "~/assets/redux_saga.svg";
import ReduxIcon from "~/assets/redux.svg";
import ScssIcon from "~/assets/scss.svg";
import StyledComponentsIcon from "~/assets/styled_components.svg";
import TailwindCSSIcon from "~/assets/tailwindcss.svg";
import TypescriptIcon from "~/assets/typescript.svg";
import VueIcon from "~/assets/vue.svg";

const TECHNOLOGIES = [
  {
    icon: TypescriptIcon,
    text: "TypeScript",
  },
  {
    icon: ReactIcon,
    text: "React + React Native",
  },
  {
    icon: NextJSIcon,
    text: "Next.js",
  },
  {
    icon: VueIcon,
    text: "Vue",
  },
  {
    icon: NuxtIcon,
    text: "Nuxt.js",
  },
  {
    icon: ReduxIcon,
    text: "Redux + Redux Toolkit",
  },
  {
    icon: ReduxSagaIcon,
    text: "Redux Saga",
  },
  {
    icon: GraphQLIcon,
    text: "GraphQL + Hasura",
  },
  {
    icon: ApolloIcon,
    text: "Apollo",
  },
  {
    icon: TailwindCSSIcon,
    text: "Tailwind CSS",
  },
  {
    icon: StyledComponentsIcon,
    text: "styled-components",
  },
  {
    icon: ScssIcon,
    text: "SASS",
  },
  {
    icon: GitIcon,
    text: "git",
  },
  {
    icon: FigmaIcon,
    text: "Figma",
  },
];
</script>
