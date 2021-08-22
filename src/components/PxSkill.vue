<template>
  <section class="skills">
    <h2 class="title-head">Skills</h2>
    <section class="grid">
      <px-skill-card />
      <!--<div class="items">
        <div class="item">
          <font-awesome-icon :icon="['fab', 'laravel']" class="fab fa" />
          <h3 class="skills-title">Laravel.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="item">
          <font-awesome-icon
            :icon="['fab', 'wordpress-simple']"
            class="fab fa"
          />
          <h3 class="skills-title">Wordpress.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="item">
          <font-awesome-icon :icon="['fab', 'php']" class="fab fa" />
          <h3 class="skills-title">PHP.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="item">
          <font-awesome-icon :icon="['fab', 'vuejs']" class="fab fa" />
          <h3 class="skills-title">Vuejs.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="item">
          <font-awesome-icon :icon="['fab', 'node-js']" class="fab fa" />
          <h3 class="skills-title">Nodejs.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="item">
          <font-awesome-icon :icon="['fab', 'js']" class="fab fa" />
          <h3 class="skills-title">JavaScript.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div> 
      </div>-->
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
