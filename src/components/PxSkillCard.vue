<template>
  <div class="items">
    <div class="item" v-for="(param, index) in params" :key="index">
      <font-awesome-icon
        :icon="['fab', 'temp']"
        :key="index"
        :temp="getIcon"
        class="fab fa"
      />
      <h3 class="skills-title">{{ param.name }}.</h3>
      <p style="display: none">{{ param.description }}.</p>
    </div>
  </div>
  <!-- <div class="item">
    <font-awesome-icon :icon="['fab', 'laravel']" class="fab fa" />
    <h3 class="skills-title">Laravel.</h3>
    <p style="display: none">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div> -->
</template>

<script>
import api from "@/api.js";
export default {
  name: "PxSkillCard",
  data() {
    return {
      params: [],
      icons: ["laravel", "wordpress-simple"],
    };
  },

  created() {
    api
      .getSkillCardData()
      .then((params) => (this.params = params))
      .catch((error) => console.error(error));
  },

  methods: {
    getIcon() {
      let temp = this.params.map((aux, index) => {
        return [aux, this.icons[index]];
      });

      console.log(temp);
    },
  },
};
</script>
