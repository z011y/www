import ColorSchemeToggle from "./elements/components/colorSchemeToggle.ts";
import PageRouter from "./elements/PageRouter.ts";
import PageView from "./elements/PageView.ts";
import PageLink from "./elements/components/pageLink.ts";
import IconFactory from "./elements/components/iconFactory.ts";
import Avatar from "./elements/components/avatar.ts";

import PrimaryLayout from "./elements/layouts/Primary.ts";

import Home from "./elements/pages/Home.ts";
import About from "./elements/pages/About.ts";
import PageNotFound from "./elements/pages/PageNotFound.ts";

// components
customElements.define("color-scheme-toggle", ColorSchemeToggle);
customElements.define("page-router", PageRouter);
customElements.define("page-view", PageView);
customElements.define("route-link", PageLink);
customElements.define("icon-factory", IconFactory);
customElements.define("avatar-image", Avatar);

// layouts
customElements.define("layout-provider", PrimaryLayout);

// pages
customElements.define("home-page", Home);
customElements.define("about-page", About);
customElements.define("page-not-found", PageNotFound);