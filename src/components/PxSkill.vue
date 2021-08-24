<template>
  <section class="skills">
    <h2 class="title-head">Skills</h2>
    <section class="grid">
      <px-skill-card />
    </section>
  </section>
</template>

<script>
import PxSkillCard from "@/components/PxSkillCard";

export default {
  name: "PxSkill",
  components: {
    PxSkillCard,
  },
};
</script>
