<template>
  <the-header></the-header>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <the-footer></the-footer>
</template>

<!-- :key="$route.fullPath"  -->
<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Custom properties: */

:root {
  /* - Font family */
  --ff-primary: 'Source Sans Pro', sans-serif;
  --ff-secondary: 'Source Code Pro', monospace;

  /* - Font weight */
  --fw-reg: 300;
  --fw-bold: 900;

  /* - Font sizes */
  --fs-h1: 3rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.25rem;
  --fs-body: 1rem;

  /* - Colors */
  --clr-light: #fff;
  --clr-dark: #303030;
  --clr-accent: #16e0bd;

  /* box shadow */
  --bs: 0.25em 0.25em 0.75em rgba(0, 0, 0, .25),
    0.125em 0.125em 0.25em rgba(0, 0, 0, .15);

}

@media (min-width: 800px) {
  :root {
    /* - Font sizes */
    --fs-h1: 4.5rem;
    --fs-h2: 3.75rem;
    --fs-h3: 1.5rem;
    --fs-body: 1.125rem;
  }
}


/* General Styles */

html {
  scroll-behavior: smooth;
}

body {
  background: var(--clr-light);
  color: var(--clr-dark);
  margin: 0;
  font-family: var(--ff-primary);
  font-size: var(--fs-body);
  line-height: 1.6;
}

section {
  padding: 5em 2em;
}

img {
  display: block;
  max-width: 100%;
}

strong {
  font-weight: var(--fw-bold);
}

a {
  color: inherit;
  text-decoration: none;
  font-weight: var(--fw-bold);
}

a:hover {
  color: var(--clr-accent);
}

:focus {
  outline: 3px solid var(--clr-accent);
  outline-offset: 3px;
}

/* Typography */

h1,
h2,
h3 {
  line-height: 1;
  margin: 0;
}

h1 {
  font-size: var(--fs-h1)
}

h2 {
  font-size: var(--fs-h2)
}

h3 {
  font-size: var(--fs-h3)
}

/* Buttons */

.btn {
  display: inline-block;
  padding: .5em 2.5em;
  background: var(--clr-accent);
  color: var(--clr-dark);
  text-decoration: none;
  cursor: pointer;
  font-size: .8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: var(--fw-bold);
  transition: transform 200ms ease-in-out;
}

.btn:hover {
  transform: scale(1.1);
  color: var(--clr-dark);
}

.section__title {
  margin-bottom: .25em;
}

.section__title--intro {
  font-weight: var(--fw-reg);
}

.section__title--intro strong {
  display: block;
}

.section__subtitle {
  margin: 0;
  font-size: var(--fs-h3);
}

.section__subtitle--intro,
.section__subtitle--about {
  background: var(--clr-accent);
  padding: .025em 1em;
  font-family: var(--ff-secondary);
  margin-bottom: 1em;
}

.section__subtitle--projects {
  color: var(--clr-accent);
  font-weight: var(--fw-bold);
  margin-bottom: 2em;
}


/* -------------------- Intro Section --------------------*/

.intro {
  position: relative;
}

.intro__img {
  box-shadow: var(--bs);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section__subtitle--intro {
  display: inline-block;
}



@media (min-width: 600px) {
  .intro {
    display: grid;
    width: min-content;
    margin: 0 auto;
    grid-column-gap: 1em;
    grid-template-areas:
      "img title"
      "img subtitle";
    grid-template-columns: min-content max-content;
  }

  .intro__img {
    grid-area: img;
    min-width: 250px;
    position: relative;
    z-index: 2;
  }

  .section__title--intro strong {
    font-size: 3rem;
  }

  .section__subtitle--intro {
    align-self: start;
    grid-column: -1 / 1;
    grid-row: 2;
    text-align: right;
    position: relative;
    left: -1.5em;
    width: calc(100% + 1.5em);
  }
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
