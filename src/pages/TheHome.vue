<template>
    <div>
        <!-- Introduction -->
        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>António Quaresma</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">full-stack dev</p>
            <img src="../assets/images/intro_pic.jpg" alt="a picture of Antonio posing and smiling" class="intro__img">
        </section>
    
        <!-- My Skills -->
        <section class="my-skills" id="skills">
            <h2 class="section__title section__title--skills">What I do</h2>
            <div class="skills">
                <div class="skill">
                    <h3>Back-End Development</h3>
                    <p>As a junior back-end developer, I possess fundamental skills in server-side programming languages
                        like Ruby or C#. I work on databases, build APIs, and handle server-side logic. I'm also gaining
                        knowledge in security and scalability to support web applications.</p>
                </div>
    
                <div class="skill">
                    <h3>Full-Stack Development</h3>
                    <p>As a junior full-stack developer, I possess skills in both front-end and back-end development. I
                        create user-friendly interfaces using HTML, CSS, and JavaScript, along with frameworks like .NET or
                        Ruby on Rails. On the server-side, I manage databases, build APIs, and ensure security and
                        scalability for web application</p>
                </div>
    
                <div class="skill">
                    <h3>Front-End Development</h3>
                    <p> As a junior front-end developer, I have foundational skills in HTML, CSS, and JavaScript. My focus
                        is on creating user interfaces, ensuring web pages are visually appealing, responsive, and
                        cross-browser compatible. I'm also working on becoming familiar with frameworks like Vue or
                        Rails and basic UX/UI design principles.</p>
                </div>
            </div>
            <a href="#projects" class="btn">my projects</a>
            <a href="#top" class="go-top__skills"><i class="fa-regular fa-circle-up"></i></a>
        </section>
    
        <!-- About me -->
        <section class="about-me" id="about">
            <h2 class="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Web Developer based in Lisbon</p>
    
            <div class="about-me__body">
                <p>I'm deeply passionate about off-grid living, permaculture, and exploring the natural and cultural world
                    through travel. These interests fuel my personal journey and inspire my creativity.</p>
                <p>With a background in banking, I've cultivated invaluable soft skills in communication, problem-solving,
                    and client relationships. Now, as I transition into web development, I'm excited to leverage these
                    skills to drive success in this new and exciting career path.</p>
                <p>Looking ahead, I'm committed to continuous learning and growth in web development, eager to contribute my
                    unique blend of experiences and skills to create innovative and impactful software solutions.</p>
            </div>
    
            <img src="../assets/images/having_tea.jpg" alt="Antonio having tea" class="about-me__img">
        </section>
    
        <!-- My Projects -->
        <section class="my-projects" id="projects">
            <h2 class="section__title section__title--projects">My Projects</h2>
            <p class="section__subtitle section__subtitle--projects">A selection of my best projects</p>
            <div class="portfolio">
                <!-- Portfolio item 01 -->
                <router-link :to="{ name: 'ProjectDetail', params: { id: '2Care' } }" class="portfolio__item">
                    <img src="../assets/images/projects/2Care/2Care.png" alt="" class="portfolio__img">
                </router-link>
    
                <!-- Portfolio item 02 -->
                <router-link :to="{ name: 'ProjectDetail', params: { id: 'SandSpot' } }" class="portfolio__item">
                    <img src="../assets/images/projects/SandSpot/SandSpot.png" alt="" class="portfolio__img">
                </router-link>
    
                <!-- Portfolio item 03 -->
                <router-link :to="{ name: 'ProjectDetail', params: { id: 'Whatchlist' } }" class="portfolio__item">
                    <img src="../assets/images/projects/Whatchlist/Watchlist.png" alt="" class="portfolio__img">
                </router-link>
    
                <!-- Portfolio item 04 -->
                <router-link :to="{ name: 'ProjectDetail', params: { id: 'Portfolio' } }" class="portfolio__item">
                    <img src="../assets/images/projects/Portfolio/Portfolio.png" alt="" class="portfolio__img">
                </router-link>
    
                <!-- Portfolio item 05 -->
                <router-link :to="{ name: 'ProjectDetail', params: { id: 'Botanika' } }" class="portfolio__item">
                    <img src="../assets/images/projects/Botanika/Botanika.png" alt="" class="portfolio__img">
                </router-link>
    
                <!-- Portfolio item 06 -->
                <router-link :to="{ name: 'ProjectDetail', params: { id: 'MyPortfolio' } }" class="portfolio__item">
                    <img src="../assets/images/projects/MyPortfolio/MyPortfolio.png" alt="" class="portfolio__img">
                </router-link>
            </div>
        </section>
    </div>
</template>
  
<script>
export default {
    name: 'TheHome'
    // Any additional component logic goes here
};
</script>
  
<style scoped>

/* -------------------- My Skills Section --------------------*/

.my-skills {
    position: relative;
    background-color: var(--clr-dark);
    background-image: url(../assets/images/services-bg.jpg);
    background-size: cover;
    /* background-blend-mode: multiply; */
    color: var(--clr-light);
    text-align: center;
}

.section__title--skills {
    color: var(--clr-accent);
    position: relative;
}

.section__title--skills::after {
    content: '';
    display: block;
    width: 2em;
    height: 1.5px;
    margin: 0.5em auto 1em;
    /* background: currentColor; */
    background: var(--clr-light);
    opacity: 0.40;
}

.skills {
    margin-bottom: 4em;
}

.skill {
    max-width: 500px;
    margin: 0 auto;
}

.go-top__skills {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px 20px;
    color: var(--clr-accent);
    font-size: var(--fs-h3);
}

@media (min-width: 800px) {
    .skills {
        display: flex;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    .skill+.skill {
        margin-left: 2.5em;
    }
}


/* -------------------- About Me Section --------------------*/

.about-me {
    max-width: 1000px;
    margin: 0 auto;
}

.about-me__img {
    box-shadow: var(--bs);
}

@media (min-width: 600px) {
    .about-me {
        display: grid;
        grid-template-columns: 1fr 300px;
        grid-template-areas:
            "title img"
            "subtitle img"
            "text img";
        grid-column-gap: 2em;
    }

    .section__title--about {
        grid-area: title;
    }

    .section__subtitle--about {
        grid-column: 1 / -1;
        grid-row: 2;
        position: relative;
        left: -1em;
        width: calc(100% + 2em);
        padding-left: 1em;
        padding-right: calc(300px + 4em);
    }

    .about-me__img {
        grid-area: img;
        position: relative;
        z-index: 2;
    }
}


/* -------------------- My Projects Section --------------------*/

.my-projects {
    background-color: var(--clr-dark);
    color: var(--clr-light);
    text-align: center;
}

.portfolio {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 0 auto;
    /*center middle screen */
}

.portfolio__item {
    /* background: var(--clr-accent); */
    overflow: hidden;
}

.portfolio__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition:
        transform 750ms cubic-bezier(.5, 0, .5, 1),
        opacity 250ms linear;
    filter: brightness(100%) saturate(100%) sepia(0%) hue-rotate(0deg) opacity(0.6) drop-shadow(0 0 10px #16e0bd);
}

.portfolio__item:focus {
    position: relative;
    z-index: 2;
}

.portfolio__img:hover,
.portfolio__item:focus .portfolio__img {
    transform: scale(1.2);
    /* opacity: .75; */
    filter: none;
}
</style>
  