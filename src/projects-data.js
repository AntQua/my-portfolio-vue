export default [
    {
      id: '2Care',
      title1: '2Care',
      title2: 'Final project @LeWagon',
      subtitle: 'Keeping Families Informed',
      img1: require('./assets/images/projects/2Care/2Care.png'),
      img2: require('./assets/images/projects/2Care/2Care-details.png'),
      urlProj: 'https://app-2care-7e485396212c.herokuapp.com/',
      urlGitHub: 'https://github.com/AntQua/app-2care',
      description1: '<strong>2Care</strong> is the final project of my Web Development bootcamp at LeWagon, Lisbon, finished in 8th September 2023. It was a collaborative effort by a team of four dedicated student finalists.',
      description2: 'Want to have some fun? Check the <a href="https://www.youtube.com/watch?v=TtFWVkDVefA" target="_blank">project video presentation</a> (from minute 13) at Le Wagon Lisbon Demo Day, in the 8th of September 2023.',
      description3: '<strong>2Care</strong> is a web application designed to bridge the communication gap between elderly care homes and the families of their residents. It specifically caters to elderly homes and families with loved ones residing in such facilities.',
      description4: 'The app offers a unique solution, enabling elderly care homes to monitor the well-being of their residents and share this vital information with registered family members via email notifications.',
      description5: "<strong>2Care</strong> was built using the Ruby on Rails framework and deployed on <strong>Heroku</strong>. The email functionality was implemented using <strong>SendGrid</strong>. The app's design was meticulously crafted with <strong>Figma</strong>."
    },
    {
        id: 'Botanika',
        title1: 'Botanika',
        title2: 'Individual project',
        subtitle: 'e-commerce web app',
        img1: require('./assets/images/projects/Botanika/Botanika.png'),
        img2: require('./assets/images/projects/Botanika/Botanika-details.png'),
        urlProj: 'https://cloud462022.azurewebsites.net/',
        urlGitHub: 'https://github.com/AntQua/Botanika',
        description1: '<strong>Botanika</strong>  is my final project of the Software Development Academy at Rumos, Lisbon, finished in May 2022.',
        description2: '<strong>Botanika</strong>  is a cloud software solution for gardenig enthusiasts which includes the online sale of flowers, plants and products for their cultivation.',
        description3: '<p><strong>Environment and used Tools:</strong></p> <ul>             <li>Windows 10 and Visual Studio 2019</li> <li>SQL Server 2019 Express – used for storing and administering information in the relational database tables during project development phase. After deployment to the cloud is used the Azure SQL database.</li> <li>Entity Framework Core – Tool to perform the relational mapping between entities and tables the database.</li> <li>Bootstrap v4.3.1 – HTML, CSS and JS library used to simplify the development of web pages (Views).</li> </ul>',
        description4: ' <p><strong>Architecture solution:</strong>  Template used - ASP.Net Core MVC .Net 5.0 Framework.</p> <p><strong>Authentication and Authorization: </strong>  ASP .NetCore Identity API.</p><p><strong>The Admin / BackOffice Area: </strong></p><ul><li>To accommodate this part of the project we use the concept of Areas permitted by ASP.Net Core MVC to partition applications into  units that are referred to as areas.</li> <li>This area also has access to the data layer through the Repository.</li> <li>To access this Area, the creation of Roles and Users was implemented and assigning the user to the profile. A service has been implemented to create profiles or roles: Admin and Member.<li> </ul>', 
        description5: '<p><strong>Azure Resources:</strong></p> <ul><li>Azure App Service - Is an HTTP-based service to host the generated web application for this project.</li> <li>SQL database - Azure SQL Database is based on SQL Server and provides the core functionality relational data required for the project, namely products, categories and orders of customers.</li> <li>Storage account - The images are stored in several Containers provided by the blob service of Storage account. The use of this resource is used in the Backoffice of our application for management of the images used and supplying them to the application.</li> <li>Resourse Group - All the aforementioned Azure services are hosted in a Resource Exclusive group for this project that acts as a repository for administration thereof.</li> </ul> <p><strong>Version Control:</strong> Azure DevOps server. </p> <p><strong>CI-CD Solution:</strong> Deployments through Azure DevOps server </p>'
      },
      {
        id: 'MyPortfolio',
        title1: 'My Portfolio',
        title2: 'Individual project',
        subtitle: 'My Portfolio in Vue 3',
        img1: require('./assets/images/projects/MyPortfolio/MyPortfolio.png'),
        img2: require('./assets/images/projects/MyPortfolio/MyPortfolio-details.png'),
        urlProj: 'https://antqua.github.io/my-portfolio-vue/#/',
        urlGitHub: 'https://github.com/AntQua/my-portfolio-vue',
        description1: '<strong>My Portfolio</strong> is my first project developed using the Vue 3 framework.',
        description2: 'This portfolio website showcases my journey and skills as a junior developer.',
        description3: 'Having learned Vue 3 recently, I decided to transition my portfolio, which was originally built using HTML, CSS, and JavaScript, to this modern and dynamic framework.',
        description4: 'The design and functionality remain consistent with my original portfolio, offering a seamless user experience.',
        description5: 'This project was built using the <strong>Vue 3</strong> framework and deployed on <strong>GitHub Pages</strong>'
      },
      {
        id: 'UFO',
        title1: "UFO Predictor",
        title2: 'Final project @LeWagon',
        subtitle: 'Predicting UFO Sightings',
        img1: require('./assets/images/projects/Portfolio/UFO_pred.png'),
        img2: require('./assets/images/projects/Portfolio/UFO_pred_details.png'),
        urlProj: 'https://etpredictor-yipz5o2jvfznihk3dmcbru.streamlit.app/',
        urlGitHub: 'https://github.com/AntQua/UFO_Predictor',
        description1: "<strong>UFO Predictor</strong> is the final project of my Data Science and AI bootcamp at LeWagon, Lisbon, finished in 14th June 2024. It was a collaborative effort by a team of four dedicated student finalists.",
        description2: 'Want to have some fun? Check the <a href="https://www.youtube.com/watch?v=FSshZDC3Mo4" target="_blank">project video presentation</a> (from minute 36:50) at Le Wagon Lisbon Demo Day.',
        description3: "<strong>UFO_predictor 🛸</strong> was pitched by me and as team leader developed the project in a team of 4. The primary goal is to predict potential UFO sightings in the USA and provide visual representations based on eyewitness accounts using cutting-edge machine learning and generative AI models.",
        description4: '<strong>UFO Sightings Prediction 🌍:</strong> Predicts the location, shape, and duration of potential UFO sightings using machine learning models.',
        description5: '<strong>Generative AI Visualization 🤖:</strong> Generates realistic images of UFOs and aliens based on the predicted data and user inputs.',
      },
      {
        id: 'SandSpot',
        title1: "SandSpot",
        title2: 'Group project @LeWagon ',
        subtitle: 'book your place in the sand',
        img1: require('./assets/images/projects/SandSpot/SandSpot.png'),
        img2: require('./assets/images/projects/SandSpot/SandSpot-details.png'),
        urlProj: 'https://whispering-meadow-11582-97e69ce26db6.herokuapp.com/',
        urlGitHub: 'https://github.com/AntQua/sandspot',
        description1: "<strong>SandSpot</strong>  is a group project of my Web Development bootcamp at LeWagon, Lisbon, finished in 8th September 2023. It was a collaborative effort by a team of four dedicated students at the bootcamp.",
        description2: "<strong>SandSpot</strong>  is a web application designed to find beaches all arround the world and book a place in the sand.",
        description3: 'The app offers 3 booking options for any beach available.',
        description4: "",
        description5: "<strong>SandSpot</strong> was built using the <strong>Ruby on Rails</strong>  framework and deployed on <strong>Heroku</strong>. The app's design was crafted with <strong>Figma</strong>."
      },
      // {
      //   id: 'Whatchlist',
      //   title1: "Whatchlist",
      //   title2: 'Solo project @LeWagon',
      //   subtitle: 'movies list by category',
      //   img1: require('./assets/images/projects/Whatchlist/Watchlist.png'),
      //   img2: require('./assets/images/projects/Whatchlist/Watchlist-details.png'),
      //   urlProj: 'https://antqua-movies-289be53429bf.herokuapp.com/',
      //   urlGitHub: 'https://github.com/AntQua/rails-watch-list',
      //   description1: "<strong>Watchlist</strong> is a individual project of my Web Development bootcamp at LeWagon, Lisbon, finished in 8th September 2023.",
      //   description2: '',
      //   description3: "<strong>Watchlist</strong> is a web application designed to create movies categories and for each category create a personal movies list.",
      //   description4: '',
      //   description5: "<strong>Watchlist</strong> was built using the <strong>Ruby on Rails</strong>  framework and deployed on <strong>Heroku</strong>. The app's images are stored on <strong>Cloudinary</strong>."
      // },
      {
        id: 'GameHub',
        title1: "GameHub",
        title2: 'Individual project',
        subtitle: 'Video Game Discovery App',
        img1: require('./assets/images/projects/GameHub/GameHub.png'),
        img2: require('./assets/images/projects/GameHub/GameHub-details.png'),
        urlProj: 'https://game-hub-iota-seven-72.vercel.app/',
        urlGitHub: 'https://github.com/AntQua/game-hub',
        description1: "<strong>GameHub</strong> is a Video Game Discovery App build with React, TypeScript and Vite, utilizing the RAWG API to fetch game data. It aims to mimic the frontend and game display style of RAWG's website.",
        description2: '',
        description3: "<strong>GameHub</strong> is a web application who displays games in a visually appealing manner and Provides detailed information about each game.",
        description4: '',
        description5: "<strong>GameHub</strong> was built using the <strong>React</strong> library and deployed in <strong>Vercel</strong>."
      },
      
  ];
  