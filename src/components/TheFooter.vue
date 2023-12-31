<template>
    <footer class="footer">
        <a href="#top" class="go-top__footer" @click.prevent="scrollToTop">
            <i class="fa-regular fa-circle-up"></i>
        </a>
        <a href="mailto:tozequa@gmail.com" class="footer__link">Email Me</a>
        <ul class="social-list">

            <li class="social-list__item">
                <a class="social-list__link" href="https://github.com/AntQua" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </li>

            <li class="social-list__item">
                <a class="social-list__link" href="https://www.linkedin.com/in/antonio-quaresma/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
        </ul>
    </footer>
</template>
  
<script>
export default {
    name: 'TheFooter',
    methods: {
        scrollToTop() {
            // Scroll to the top of the window smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },
};
</script>
  
<style scoped>
.footer {
    background: #111;
    color: var(--clr-accent);
    text-align: center;
    padding: 2.5em 0;
    font-size: var(--fs-h3);
    position: relative;
}

.go-top__footer {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 20px;
}

.footer a {
    color: inherit;
    text-decoration: none;
}

.footer__link {
    font-weight: var(--fw-bold);
}

.footer__link:hover,
.social-list__link:hover {
    opacity: .7;
}

.footer__link:hover {
    text-decoration: underline;
}

.social-list {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 2em 0 0;
    padding: 0;
}

.social-list__item {
    margin: 0 0.5em;
}

.social-list__link {
    padding: 0.5em;
}
</style>
  