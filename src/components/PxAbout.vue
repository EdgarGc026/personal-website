<template>
  <section class="about-us">
    <section class="grid">
      <div class="about-us-texts" v-for="(param, index) in params" :key="index">
        <h2 class="subtitle">About me</h2>
        <p class="parraph">{{ param.description }} 😎</p>
      </div>
      <div class="about--profile">
        <img
          class="about--avatar"
          src="../assets/img/Perfil.png"
          alt="Perfil-image"
        />
        <span class="about--legend"> I also loved the food 🤤</span>
      </div>
    </section>
  </section>
</template>

<script>
import api from "@/api";
export default {
  name: "PxAbout",
  data() {
    return {
      params: [],
    };
  },

  created() {
    api
      .getAboutMeData()
      .then((params) => (this.params = params))
      .catch((error) => console.error(error));
  },
};
</script>
