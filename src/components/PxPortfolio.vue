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
        <div class="portfolio-tech">
          <span>Technologies: </span>
          <font-awesome-icon :icon="['fab', 'php']" class="portfolio--icons" />
          <font-awesome-icon
            :icon="['fab', 'laravel']"
            class="portfolio--icons"
          />
          <font-awesome-icon
            :icon="['fab', 'bootstrap']"
            class="portfolio--icons"
          />
        </div>
        <div class="button-container">
          <a
            href="https://github.com/EdgarGc026/GeneradorReporte"
            class="button"
            target="_blank"
          >
            Source code
            <font-awesome-icon :icon="['fab', 'github']" class="fab fa" />
          </a>
          <a
            href="http://limitless-meadow-15028.herokuapp.com/login"
            class="button"
            target="_blank"
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
          Static page for a bitcoin company.
        </p>
        <div class="portfolio-tech">
          <span>Technologies: </span>
          <font-awesome-icon
            :icon="['fab', 'html5']"
            class="portfolio--icons"
          />
          <font-awesome-icon :icon="['fab', 'css3']" class="portfolio--icons" />
        </div>
        <div class="button-container">
          <a
            href="https://github.com/EdgarGc026/batatabit-mobile"
            class="button"
            target="_blank"
          >
            Source code
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="portfolio--icons"
            />
          </a>
          <a
            href="https://edgargc026.github.io/batatabit-mobile/"
            class="button"
            target="_blank"
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
        <div class="portfolio-tech">
          <span>Technologies: </span>
          <font-awesome-icon
            :icon="['fab', 'vuejs']"
            class="portfolio--icons"
          />
          <font-awesome-icon
            :icon="['fab', 'html5']"
            class="portfolio--icons"
          />
          <font-awesome-icon :icon="['fab', 'css3']" class="portfolio--icons" />
        </div>
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
          App that consumes the Coincase api to bring the information of the 20
          most popular currencies in the market.
        </p>
        <div class="portfolio-tech">
          <span>Technologies: </span>
          <font-awesome-icon
            :icon="['fab', 'vuejs']"
            class="portfolio--icons"
          />
          <img
            src="../assets/img/tailwind-css.svg"
            alt="tailwind-css-icon"
            class="img-icon"
          />
          <font-awesome-icon
            :icon="['fab', 'html5']"
            class="portfolio--icons"
          />
          <font-awesome-icon :icon="['fab', 'css3']" class="portfolio--icons" />
        </div>
        <div class="button-container">
          <a
            href="https://github.com/EdgarGc026/exchange-app"
            class="button"
            target="_blank"
          >
            Source code
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="portfolio--icons"
            />
          </a>
          <a
            href="https://exchange-cripto-app.netlify.app"
            class="button"
            target="_blank"
          >
            Demo
            <font-awesome-icon
              :icon="['fab', 'firefox-browser']"
              class="portfolio--icons"
            />
          </a>
        </div>
      </article>
      <article class="portfolio-item">
        <h3>Portfolio Web.</h3>
        <p>
          It is the page where you are currently viewing 🤠
        </p>
        <div class="portfolio-tech">
          <span>Technologies: </span>
          <font-awesome-icon
            :icon="['fab', 'vuejs']"
            class="portfolio--icons"
          />
          <font-awesome-icon
            :icon="['fab', 'html5']"
            class="portfolio--icons"
          />
          <font-awesome-icon :icon="['fab', 'css3']" class="portfolio--icons" />
        </div>
        <div class="button-container">
          <a
            href="https://github.com/EdgarGc026/my-personal-website"
            class="button"
            target="_blank"
          >
            Source code
            <font-awesome-icon :icon="['fab', 'github']" class="fab fa" />
          </a>
          <a
            href="https://edgargc026.github.io/my-personal-website/"
            class="button"
            target="_blank"
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
  </section>
</template>
