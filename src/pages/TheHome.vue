<template>
  <div>
    <!-- Introduction -->
    <section class="intro" id="home">
      <h1 class="section__title section__title--intro">
        Hi, I am <strong>António Quaresma</strong>
      </h1>
      <p class="section__subtitle section__subtitle--intro">
        junior full-stack dev<br />
        & junior data scientist
      </p>

      <img
        src="../assets/images/intro_pic.jpg"
        alt="a picture of Antonio posing and smiling"
        class="intro__img"
      />
    </section>

    <!-- My Skills -->
    <section class="my-skills" id="skills">
      <h2 class="section__title section__title--skills">What I Do</h2>

      <!-- Web Development Skills -->
      <div class="skills-category">
        <h3 class="category__title">Web Development</h3>
        <div class="skills">
          <div class="skill">
            <h4>Back-End Development</h4>
            <p>
              As a back-end developer, I possess skills in server-side
              programming languages like Ruby, C# and Python. I work on
              databases, build APIs, and handle server-side logic. I have
              experience in security and scalability to support web
              applications.
            </p>
          </div>

          <div class="skill">
            <h4>Full-Stack Development</h4>
            <p>
              As a full-stack developer, I create user-friendly interfaces using
              HTML, CSS, and JavaScript, along with frameworks like .NET and
              Ruby on Rails. On the server-side, I manage databases, build APIs,
              and ensure security and scalability for web applications.
            </p>
          </div>

          <div class="skill">
            <h4>Front-End Development</h4>
            <p>
              As a front-end developer, I have strong skills in HTML, CSS, and
              JavaScript. I focus on creating user interfaces, ensuring web
              pages are visually appealing, responsive, and cross-browser
              compatible. I'm also proficient with frameworks like Vue and have
              a solid understanding of basic UX/UI design principles.
            </p>
          </div>
        </div>
      </div>

      <!-- Data Science & AI Skills -->
      <div class="skills-category">
        <h3 class="category__title">Data Science & AI</h3>
        <div class="skills-ds">
          <div class="skills-row">
            <div class="skill">
              <h4>Data Analysis</h4>
              <p>
                I have expertise in data analysis using Python and R. I can
                perform data cleaning, exploratory data analysis, and data
                visualization to extract insights. I use tools like Pandas,
                NumPy, and Jupyter Notebooks for effective data manipulation and
                visualization.
              </p>
            </div>

            <div class="skill">
              <h4>Machine Learning</h4>
              <p>
                I am skilled in building and deploying machine learning models
                for classification, regression, and clustering tasks using
                libraries such as scikit-learn, XGBoost, and TensorFlow. I have
                experience in model evaluation, hyperparameter tuning, and
                deploying models in production environments.
              </p>
            </div>

            <div class="skill">
              <h4>Data Visualization</h4>
              <p>
                I can create compelling and interactive data visualizations
                using tools like Matplotlib, Seaborn, and Plotly. I focus on
                creating visualizations that effectively communicate data
                insights and support data-driven decision-making.
              </p>
            </div>

            <div class="skill">
              <h4>Deep Learning</h4>
              <p>
                I have experience in deep learning using frameworks like
                TensorFlow and Keras. I can build and optimize neural networks
                for various applications, including image recognition, natural
                language processing, and generative models. I also have
                experience in using pre-trained models and fine-tuning them for
                specific tasks.
              </p>
            </div>
          </div>
          <div class="skills-row">
            <div class="skill">
              <h4>Big Data and Data Engineering</h4>
              <p>
                I have gained comprehensive knowledge in data engineering,
                focusing on the management and processing of large-scale
                datasets. My skills include setting up data pipelines, ensuring
                data quality, and implementing data warehousing solutions. I am
                proficient in using various data engineering tools and
                techniques to ensure efficient and scalable data processing,
                aligning with best practices in the field of data science.
              </p>
            </div>

            <div class="skill">
              <h4>Machine Learning Engineering</h4>
              <p>
                I am proficient in packaging machine learning models for
                production using tools like Docker and FastAPI. I have
                experience with MLOps practices, including continuous
                integration and continuous deployment (CI/CD) for maintaining
                and updating machine learning models.
              </p>
            </div>

            <div class="skill">
              <h4>Generative AI</h4>
              <p>
                I have explored generative AI techniques and tools, such as
                ChatGPT and Copilot, for enhancing coding efficiency and
                developing innovative applications. I am also aware of the
                ethical considerations and best practices for implementing
                explainable AI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a href="#" class="btn" @click.prevent="scrollToProjects">My Projects</a>
      <a href="#top" class="go-top__skills" @click.prevent="scrollToTop">
        <i class="fa-regular fa-circle-up"></i>
      </a>
    </section>

    <!-- About me -->
    <section class="about-me" id="about">
      <h2 class="section__title section__title--about">Who I am</h2>
      <p class="section__subtitle section__subtitle--about">
        Web Developer based in Lisbon
      </p>

      <div class="about-me__body">
        <p>
          I'm deeply passionate about off-grid living, permaculture, and
          exploring the natural and cultural world through travel. These
          interests fuel my personal journey and inspire my creativity.
        </p>
        <p>
          With a background in banking, I've cultivated invaluable soft skills
          in communication, problem-solving, and client relationships. Now, as I
          transition into web development, I'm excited to leverage these skills
          to drive success in this new and exciting career path.
        </p>
        <p>
          Looking ahead, I'm committed to continuous learning and growth in web
          development, eager to contribute my unique blend of experiences and
          skills to create innovative and impactful software solutions.
        </p>
      </div>

      <img
        src="../assets/images/having_tea.jpg"
        alt="Antonio having tea"
        class="about-me__img"
      />
    </section>

    <!-- My Projects -->
    <section class="my-projects" id="projects">
      <h2 class="section__title section__title--projects">My Projects</h2>
      <p class="section__subtitle section__subtitle--projects">
        A selection of my best projects
      </p>
      <div class="portfolio">
        <!-- Portfolio item 01 -->
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: '2Care' } }"
          class="portfolio__item"
        >
          <img
            src="../assets/images/projects/2Care/2Care.png"
            alt=""
            class="portfolio__img"
          />
        </router-link>

        <!-- Portfolio item 02 -->
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 'SandSpot' } }"
          class="portfolio__item"
        >
          <img
            src="../assets/images/projects/SandSpot/SandSpot.png"
            alt=""
            class="portfolio__img"
          />
        </router-link>

        <!-- Portfolio item 03 -->
        <!-- <router-link
          :to="{ name: 'ProjectDetail', params: { id: 'Whatchlist' } }"
          class="portfolio__item"
        >
          <img
            src="../assets/images/projects/Whatchlist/Watchlist.png"
            alt=""
            class="portfolio__img"
          />
        </router-link> -->

        <!-- Portfolio item 04 -->
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 'Portfolio' } }"
          class="portfolio__item"
        >
          <img
            src="../assets/images/projects/Portfolio/Portfolio.png"
            alt=""
            class="portfolio__img"
          />
        </router-link>

        <!-- Portfolio item 05 -->
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 'Botanika' } }"
          class="portfolio__item"
        >
          <img
            src="../assets/images/projects/Botanika/Botanika.png"
            alt=""
            class="portfolio__img"
          />
        </router-link>

        <!-- Portfolio item 06 -->
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 'MyPortfolio' } }"
          class="portfolio__item"
        >
          <img
            src="../assets/images/projects/MyPortfolio/MyPortfolio.png"
            alt=""
            class="portfolio__img"
          />
        </router-link>
        <!-- Portfolio item 07 -->
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 'GameHub' } }"
          class="portfolio__item"
        >
          <img
            src="../assets/images/projects/GameHub/GameHub.png"
            alt=""
            class="portfolio__img"
          />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TheHome",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollToProjects() {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
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
  content: "";
  display: block;
  width: 2em;
  height: 1.5px;
  margin: 0.5em auto 1em;
  /* background: currentColor; */
  background: var(--clr-light);
  opacity: 0.4;
}

.skills,
.skills-ds {
  margin-bottom: 4em;
}

.skills-row {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.skill {
  max-width: auto;
  margin: 0 auto;
  /* flex: 1 1 calc(25% - 1em);  */
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
    /* max-width: auto;
    margin-left: auto;
    margin-right: auto; */
  }

  .skill + .skill {
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
  transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;
  filter: brightness(100%) saturate(100%) sepia(0%) hue-rotate(0deg)
    opacity(0.6) drop-shadow(0 0 10px #16e0bd);
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
