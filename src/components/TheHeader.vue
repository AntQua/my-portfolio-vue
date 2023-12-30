<template>
    <header :class="{ 'nav-open': isNavOpen }">
        <router-link to="/" class="logo">
            <img src="../assets/images/logo2.png" alt="Logo">
        </router-link>
        <button class="nav-toggle" aria-label="toggle navigation" @click="toggleNav">
            <span class="hamburger"></span>
        </button>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item" v-for="link in navLinks" :key="link.name">
                    <router-link :to="link.to" class="nav__link" @click.prevent="navigateTo(link.to)">{{ link.name
                    }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
// import { ref, nextTick } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'TheHeader',
    setup() {
        const router = useRouter();
        const isNavOpen = ref(false);

        function toggleNav() {
            isNavOpen.value = !isNavOpen.value;
        }

        function closeNav() {
            isNavOpen.value = false;
        }

        const navLinks = [
            { name: 'Home', to: '/' },
            { name: 'What I Do', to: '/#skills' },
            { name: 'About me', to: '/#about' },
            { name: 'My Projects', to: '/#projects' }
        ];

        function navigateTo(to) {
            if (to.startsWith('/#')) {
                // Navigate to the home page, then scroll to the section
                let hash = to.substring(to.indexOf('#'));
                router.push('/').then(() => {
                    let section = document.querySelector(hash);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            } else {
                // Regular route navigation
                router.push(to);
            }
            closeNav();
        }
        return { isNavOpen, toggleNav, closeNav, navLinks, navigateTo };

    }
};
</script>


<style scoped>
header {
    display: flex;
    justify-content: space-between;
    padding: 1em;
}

.logo {
    max-width: 120px;
}

.nav {
    position: fixed;
    background: var(--clr-dark);
    color: var(--clr-light);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    opacity: 95%;

    transform: translateX(100%);
    transition: transform 250ms cubic-bezier(.5, 0, .5, 1);
    ;
}

.nav__list {
    list-style: none;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
}


.nav__link {
    color: inherit;
    font-weight: var(--fw-bold);
    font-size: var(--fs-h2);
    text-decoration: none;
}

.nav__link:hover {
    color: var(--clr-accent);
}

.nav-toggle {
    padding: .5em;
    background: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 1em;
    top: 1em;
    z-index: 1000;
}

.nav-open .nav {
    transform: translateX(0);
}

.nav-open .nav-toggle {
    position: fixed;
}

.nav-open .hamburger {
    transform: rotate(.625turn);
    background: var(--clr-accent);
}

.nav-open .hamburger::before {
    transform: rotate(90deg) translateX(-6px);
    background: var(--clr-accent);
}

.nav-open .hamburger::after {
    opacity: 0;
    background: var(--clr-accent);
}

.hamburger {
    display: block;
    position: relative;
}

.hamburger,
.hamburger::before,
.hamburger::after {
    background: var(--clr-dark);
    width: 2em;
    height: 3px;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
}


.hamburger::before,
.hamburger::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
}

.hamburger::before {
    top: 6px;
}

.hamburger::after {
    bottom: 6px;
}
</style>
  