import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLaravel,
  faWordpressSimple,
  faPhp,
  faVuejs,
  faJs,
  faBootstrap,
  faGithub,
  faFirefoxBrowser,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faHtml5,
  faCss3,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faLaravel,
  faWordpressSimple,
  faPhp,
  faVuejs,
  faJs,
  faGithub,
  faFirefoxBrowser,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faPlus,
  faBootstrap,
  faHtml5,
  faCss3,
  faNodeJs
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
