import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
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
} from "@fortawesome/free-brands-svg-icons";
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
  faTwitter
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
