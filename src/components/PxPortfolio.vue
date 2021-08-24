<template>
  <section class="portfolio grid">
    <div class="portfolio-container">
      <h2 class="title-head">Portfolio</h2>
      <px-portfolio-card />
    </div>
  </section>
</template>

<script>
import PxPortfolioCard from "@/components/PxPortfolioCard";
export default {
  name: "PxPortfolio",

  components: {
    PxPortfolioCard,
  },
};
</script>
