<template>
  <main>
    <px-hero />
    <px-skill />
    <px-about />
    <px-portfolio />
    <px-footer />
    <px-float />
  </main>
</template>

<script>
import PxHero from "@/components/PxHero";
import PxSkill from "@/components/PxSkill";
import PxAbout from "@/components/PxAbout";
import PxPortfolio from "@/components/PxPortfolio";
import PxFooter from "@/components/PxFooter";
import PxFloat from "@/components/PxFloat";

export default {
  name: "App",
  components: {
    PxHero,
    PxSkill,
    PxAbout,
    PxPortfolio,
    PxFooter,
    PxFloat,
  },
};
</script>
