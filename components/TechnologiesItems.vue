<template>
  <div
    v-for="technology in TECHNOLOGIES"
    :key="technology.text"
    class="flex items-center px-2 py-1 m-1 space-x-2 bg-gray-100 border-2 rounded-lg dark:bg-gray-800"
  >
    <component :is="technology.icon" class="w-6 h-6" :fontControlled="false" />
    <span class="text-sm">{{ technology.text }}</span>
  </div>
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
    text: "Typescript",
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
    text: "Tailwind",
  },
  {
    icon: StyledComponentsIcon,
    text: "styled-components",
  },
  {
    icon: ScssIcon,
    text: "SCSS",
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
