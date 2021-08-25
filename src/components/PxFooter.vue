<template>
  <footer class="footer">
    <div class="grid">
      <div class="footer-texts">
        <h2 class="subtitle">Contact me</h2>
      </div>
      <div class="footer-item" v-for="param in params" :key="param.id">
        <a :href="param.url" target="_blank">
          <font-awesome-icon :icon="['fab', param.name]" class="fab fa" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import api from "@/api";

export default {
  name: "PxFooter",

  data() {
    return {
      params: [],
    };
  },

  created() {
    api
      .getFooterData()
      .then((params) => (this.params = params))
      .catch((error) => console.error(error));
  },
};
</script>
