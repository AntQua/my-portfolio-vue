<template>
<the-header></the-header>
<the-footer></the-footer>
</template>

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
    --clr-accent: #16e0bd ; 

    /* box shadow */
    --bs: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
          0.125em 0.125em 0.25em rgba(0,0,0,.15);

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

body{
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

img{
    display: block;
    max-width: 100%;
}

strong{
    font-weight: var(--fw-bold) ;
}

a{
    color: inherit;
    text-decoration: none;
    font-weight: var(--fw-bold);
}

a:hover{
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

h1 { font-size: var(--fs-h1) }
h2 { font-size: var(--fs-h2) }
h3 { font-size: var(--fs-h3) }

</style>
