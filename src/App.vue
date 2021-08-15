<template>
  <div>
    <px-hero />
    <px-skill />
    <px-about />
    <px-portfolio />
    <px-footer />
  </div>
</template>

<script>
import PxHero from "@/components/PxHero";
import PxSkill from "@/components/PxSkill";
import PxAbout from "@/components/PxAbout";
import PxPortfolio from "@/components/PxPortfolio";
import PxFooter from "@/components/PxFooter";

export default {
  name: "App",
  components: { PxHero, PxSkill, PxAbout, PxPortfolio, PxFooter },
};
</script>
