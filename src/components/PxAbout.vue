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
        <span class="about--legend"> loved food 🤤</span>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "PxAbout",
  computed: {
    params() {
      return this.$store.state.aboutParams;
    },
  },
};
</script>
