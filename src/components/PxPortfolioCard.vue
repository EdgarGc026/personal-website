<template>
  <div class="portfolio-container">
    <article class="portfolio-item" v-for="param in params" :key="param.id">
      <h3>{{ param.name }}.</h3>
      <p class="description">
        {{ param.description }}
      </p>
      <div class="portfolio-tech">
        <span>Technologies: </span>
        <div>
          <font-awesome-icon
            v-for="(icon, index) in param.technologies"
            :icon="['fab', icon.name]"
            class="portfolio--icons"
            :key="index"
          />
        </div>
        <img
          src="../assets/img/tailwind-css.svg"
          class="img-icon"
          v-show="param.id === 4"
          :key="param.id"
        />
      </div>
      <div class="button-container">
        <a class="button" target="_blank" :href="param.source">
          Source code
          <font-awesome-icon :icon="['fab', 'github']" class="fab fa" />
        </a>
        <a class="button" target="_blank" :href="param.demo">
          Demo
          <font-awesome-icon
            :icon="['fab', 'firefox-browser']"
            class="fab fa"
          />
        </a>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "PxPortfolioCard",

  computed: {
    params() {
      return this.$store.state.frontendParams;
    },
  },
};
</script>
