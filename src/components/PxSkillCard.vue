<template>
  <div class="items">
    <div class="item" v-for="(param, index) in params" :key="index">
      <font-awesome-icon
        :icon="['fab', icons[index]]"
        :key="index"
        class="fab fa"
      />
      <h3 class="skills-title">{{ param.name }}.</h3>
      <p style="display: none">{{ param.description }}.</p>
    </div>
  </div>
</template>

<script>
import api from "@/api.js";
export default {
  name: "PxSkillCard",
  data() {
    return {
      params: [],
      icons: ["laravel", "wordpress-simple", "php", "vuejs", "node-js", "js"],
    };
  },

  created() {
    api
      .getSkillCardData()
      .then((params) => (this.params = params))
      .catch((error) => console.error(error));
  },
};
</script>
