<template>
  <section class="portfolio grid">
    <div class="portfolio-container">
      <h2 class="title-head">Portfolio</h2>
      <article class="portfolio-item">
        <h3>Expenses Report.</h3>
        <p class="description">
          Created with Laravel and Booststrap, a simple app to add tasks. In
          addition to sending tasks by email
        </p>
        <div class="button-container">
          <a
            href="https://github.com/EdgarGc026/GeneradorReporte"
            class="button"
          >
            Source code
            <font-awesome-icon :icon="['fab', 'github']" class="fab fa" />
          </a>
          <a
            href="http://limitless-meadow-15028.herokuapp.com/login"
            class="button"
          >
            Demo
            <font-awesome-icon
              :icon="['fab', 'firefox-browser']"
              class="fab fa"
            />
          </a>
        </div>
      </article>
      <article class="portfolio-item">
        <h3>Batatabit movil</h3>
        <p>
          Created with HTML and CSS. Static page for a bitcoin company.
        </p>
        <div class="button-container">
          <a
            href="https://github.com/EdgarGc026/batatabit-mobile"
            class="button"
          >
            Source code
            <font-awesome-icon :icon="['fab', 'github']" class="fab fa" />
          </a>
          <a
            href="https://edgargc026.github.io/batatabit-mobile/"
            class="button"
          >
            Demo
            <font-awesome-icon
              :icon="['fab', 'firefox-browser']"
              class="fab fa"
            />
          </a>
        </div>
      </article>
      <article class="portfolio-item">
        <h3>Creaty Agency</h3>
        <p>
          Created with Vuejs, HTML and CSS. Website of a web development agency
        </p>
        <div class="button-container">
          <a href="https://github.com/EdgarGc026/vue-agency" class="button">
            Source code
            <font-awesome-icon :icon="['fab', 'github']" class="fab fa" />
          </a>
          <a href="https://vue-agency.netlify.app/" class="button">
            Demo
            <font-awesome-icon
              :icon="['fab', 'firefox-browser']"
              class="fab fa"
            />
          </a>
        </div>
      </article>
      <article class="portfolio-item">
        <h3>Exchange, Crytpo App</h3>
        <p>
          Created with Vuejs, HTML, CSS, TailwindCSS. App that consumes the
          Coincase api to bring the information of the 20 most popular
          currencies in the market.
        </p>
        <div class="button-container">
          <a href="https://github.com/EdgarGc026/exchange-app" class="button">
            Source code
            <font-awesome-icon :icon="['fab', 'github']" class="fab fa" />
          </a>
          <a href="https://exchange-cripto-app.netlify.app" class="button">
            Demo
            <font-awesome-icon
              :icon="['fab', 'firefox-browser']"
              class="fab fa"
            />
          </a>
        </div>
      </article>
      <article class="portfolio-item">
        <h3>Portfolio Web.</h3>
        <img src="" alt="" />
        <p>
          Created with HTML and CSS. It is the page where you are currently
          viewing 🤠
        </p>
        <div class="button-container">
          <a
            href="https://github.com/EdgarGc026/my-personal-website"
            class="button"
          >
            Source code
            <font-awesome-icon :icon="['fab', 'github']" class="fab fa" />
          </a>
          <a
            href="https://edgargc026.github.io/my-personal-website/"
            class="button"
          >
            Demo
            <font-awesome-icon
              :icon="['fab', 'firefox-browser']"
              class="fab fa"
            />
          </a>
        </div>
      </article>
    </div>
    <div class="portfolio-settings">
      <div class="items portfolio--options">
        <div class="item portfolio--item">
          <font-awesome-icon :icon="['fab', 'php']" class="fab fa" />
          <h3 class="skills-title">PHP.</h3>
          <button class="settings--button">Change</button>
        </div>
        <div class="item portfolio--item">
          <font-awesome-icon :icon="['fab', 'js']" class="fab fa" />
          <h3 class="skills-title">JavaScript.</h3>
          <button class="settings--button">Change</button>
        </div>
      </div>
    </div>
  </section>
</template>
