<template>
  <div v-for="project in PROJECTS" :key="project.title" class="flex flex-col">
    <NuxtLink
      :to="project.url"
      target="_blank"
      class="flex items-center mt-4 space-x-1 text-xl font-bold tracking-wide cursor-pointer w-max lg:hover:text-orange-400"
    >
      <span>
        {{ project.title }}
      </span>
      <LinkIcon class="w-4 h-4" :fontControlled="false" />
    </NuxtLink>
    <NuxtLink
      :to="project.url"
      target="_blank"
      class="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat mt-4 mb-2 rounded-lg shadow-sm"
    >
      <NuxtImg :src="project.image" :alt="project.image" class="w-full" />
      <div
        class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition-all bg-fixed lg:bg-gray-100 lg:dark:bg-black lg:opacity-20 lg:hover:opacity-0 lg:hover:bg-transparent"
      ></div>
    </NuxtLink>
    <span class="my-2">{{ project.description }}</span>
    <div class="flex flex-wrap items-center mt-2 mb-4">
      <TechnologyItem
        v-for="(tech, index) in project.technologies"
        :key="index"
        :technology="tech"
      />
    </div>
  </div>
</template>

<script setup>
import GraphQLIcon from "~/assets/graphql.svg";
import LinkIcon from "~/assets/link.svg";
import NextJSIcon from "~/assets/nextjs.svg";
import ScssIcon from "~/assets/scss.svg";
import TailwindCSSIcon from "~/assets/tailwindcss.svg";
import TypescriptIcon from "~/assets/typescript.svg";

const PROJECTS = [
  {
    title: "BrandBuddies",
    description:
      "User-friendly marketing platform connecting influencers with major brands like Spotify, Uber and MTV. The project was built from scratch using modern frontend technologies with RESTful API communication for a seamless experience. It's all about making influencer-brand collaborations straightforward and effective.",
    technologies: [
      { icon: TypescriptIcon, text: "TypeScript" },
      { icon: NextJSIcon, text: "Next.js" },
      { icon: TailwindCSSIcon, text: "Tailwind CSS" },
      { icon: ScssIcon, text: "SASS" },
    ],
    image: "/brandbuddies.png",
    url: "https://www.brandbuddies.pl/",
  },
  {
    title: "Fansi",
    description:
      "Ecommerce platform where influencers with dedicated fan bases can effortlessly showcase and promote their products on our marketplace. The platform is designed with three key components: admins', influencers' and the marketplace. We've built a straightforward system to make selling and advertising a breeze for influencers and a delightful shopping experience for customers.",
    technologies: [
      { icon: TypescriptIcon, text: "TypeScript" },
      { icon: NextJSIcon, text: "Next.js" },
      { icon: GraphQLIcon, text: "GraphQL + Hasura" },
      { icon: TailwindCSSIcon, text: "TailwindCSS" },
      { icon: ScssIcon, text: "SASS" },
    ],
    image: "/fansi.png",
    url: "https://www.fansi.pl/",
  },
];
</script>
