<template>
  <section class="skills">
    <h2 class="title-head">Skills</h2>
    <section class="grid">
      <div class="items">
        <div class="item">
          <!-- <i class="fab fa-laravel"></i> -->
          <font-awesome-icon :icon="['fab', 'laravel']" class="fab fa" />
          <h3 class="skills-title">Laravel.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div class="item">
          <!-- <i class="fab fa-wordpress-simple"></i> -->
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
          <!-- <i class="fab fa-php"></i> -->
          <font-awesome-icon :icon="['fab', 'php']" class="fab fa" />
          <h3 class="skills-title">PHP.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="item">
          <!-- <i class="fab fa-vuejs"></i> -->
          <font-awesome-icon :icon="['fab', 'vuejs']" class="fab fa" />
          <h3 class="skills-title">Vuejs.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="item">
          <img
            class="fab fa-icon"
            src="../assets/img/jquery-icon.png"
            alt="jquery-icon"
          />
          <h3 class="skills-title">jQuery.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="item">
          <!-- <i class="fab fa-js"></i> -->
          <font-awesome-icon :icon="['fab', 'js']" class="fab fa" />
          <h3 class="skills-title">JavaScript.</h3>
          <p style="display: none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  </section>
</template>
