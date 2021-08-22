<template>
  <header class="header">
    <div class="grid">
      <div class="hero-texts">
        <h1 class="wieight-600" v-for="(param, index) in params" :key="index">
          {{ param.name }} <br />
          <span class="weight-400"> {{ param.profession }} </span>
        </h1>
        <p class="parraph"></p>
        <a
          href="https://drive.google.com/file/d/1mFTbUjSFcJ-gwbdTixT7M6jMHruNXyFY/view?usp=sharing"
          class="btn-cv"
          target="_blank"
          >Get CV</a
        >
      </div>
      <div class="hero-img">
        <img class="img" src="../assets/img/hero.svg" alt="" />
      </div>
    </div>
  </header>
</template>

<script>
import api from "@/api.js";
export default {
  name: "PxHero",
  data() {
    return {
      params: [],
    };
  },

  created() {
    api
      .getHeroData()
      .then((params) => (this.params = params))
      .catch((error) => console.error(error));
  },
};
</script>
