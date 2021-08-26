<template>
  <div class="action" @click="toggle" :class="{ active: isActive }">
    <span>+</span>
    <ul>
      <li @click="frontendProjects">
        <img src="../assets/img/js.svg" alt="javascript-logo" />
        Change to JavaScript projects
      </li>
      <li @click="backendProjects">
        <img src="../assets/img/php.svg" alt="php-logo" />

        Change to PHP projects
      </li>
      <li @click="englishVersion">
        <img src="../assets/img/united-states.svg" alt="usa-logo" />
        English version
      </li>
      <li @click="spanishVersion">
        <img src="../assets/img/mexico.svg" alt="mexico-logo" />
        Spanish version
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PxFloat",
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },

    frontendProjects() {
      console.log("Boton Frontend clickeado");
    },

    backendProjects() {
      alert("Boton Backend clickeado");
    },

    spanishVersion() {
      this.$store.dispatch("changeSpanish");
    },
    englishVersion() {
      this.$store.dispatch("initEnglish");
    },
  },
};
</script>
