<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="/assets/images/home.png" alt="Logo" width="1846" height="847">
  </a>

<h3 align="center">Itunes API</h3>

</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#deployed-version">Deployed Version</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      </li>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Within the GIT repo is a basic app created with create-react-app and express.
This app was created when I had around 4 months of coding expirience. 
The App allows the user to search the epansive data available in the Apple Itunes API and add any of the items they search to a personal favourites page, they can add as many items as they like and search for as many items as they like, they can also delete any items from their list.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Express.js][Express.js.com]][Express.js-url]
* [![Node.js][Node.js.com]][Node.js-url]



The app was built using the React frame work with create-react-app. 
Bootstrap components and icons are used for styling.
The backend is a custom node/express server.  


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Deployed Version -->

## Deployed Version 

[![Netlify Status](https://api.netlify.com/api/v1/badges/312c0d7a-b59b-4e9f-b590-0a6ca5eed5b4/deploy-status)](https://app.netlify.com/projects/itunes-api-reactapp/deploys)

If you would like to view the deployment of the app you can find it here - <a href="https://itunes-api-reactapp.netlify.app/">Deployed Version</a>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.


### Prerequisites

Ensure you have the latest copy of VSCode downloaded to your machine. 
Find it here - <a href="https://code.visualstudio.com/">VSCode</a>

### Installation

Download the zipped file from the GitHub Repo and unzip in to your chosen directory.

Open the terminal or VSCode and navigate to the directory that contains the files using cd
,cd to the server

![terminal](/assets/images/terminal.png)

  Type in to the terminal
    ```
    npm start
    ```
then enter, the required packages should install and once compiled you will be able to use the app on your browser at localhost:3000

![Successful Compile](/assets/images/compiled.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

The App is used as follows: 

Once the App is opened you should have a screen that resembles the below. 

![Home Screen](/assets/images/home.png)

Click the search link to open the search form, from there you can type in the 
item name you wish to search for. If you want to narrow down the results you 
can also select the type of media you wish to search. 

![Search example](/assets/images/search.png)

Click the search button and the results will return below the form. 

![results](/assets/images/results.png)

You can add any of the results to your favourites list by clicking the 
Add to favourites button. 

To view your favourites list click the My Favourites link. 
Any item you have added to favourites from any searches will be in the list. 
You can follow the link to the Apple store to by the items or if you no 
longer wish to have an item in your list you can remove it clicking the
delete button. 

![Favourites](/assets/images/favourites.png)

 
The App has been secured with helmet with the default levels of protection applied.
Check by Security Headers

![Security Check](/assets/images/helmet.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Testing -->
## Testing

To run the tests on the app simply open the terminal, cd to the server directory and type in 
    ```
    npm test
    ```

![NPM Test](/assets/images/test.png)

Provided the project has been installed correctly the server test suite will run, and then the client test will run. It should appear as follows:

![Tests-server](/assets/images/test-results.png)
![Test-client](/assets/images/test-results-frontend.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Scott Ramsay - sct_r_9223@live.co.uk

Project Link: [https://github.com/github_username/repo_name](https://github.com/Rambo9223/Itunes-Search)

GitHub Profile: [https://github.com/github_username](https://github.com/Rambo9223)

LinkedIn: [https://www.linkedin.com](www.linkedin.com/in/scott-ramsay-287b43286)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Mongo.com]:https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mongo-url]:https://www.mongodb.com/
[Express.js.com]:https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express.js-url]:https://expressjs.com/
[RapidAPI.com]:https://img.shields.io/badge/RapidAPI-0055DA?style=for-the-badge&logo=rapid&logoColor=black
[RapidAPI-url]:https://rapidapi.com/
[ChatGPT.com]:https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white
[ChatGPT-url]:https://chatgpt.com/
[Node.js.com]:https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node.js-url]:https://nodejs.org/
[Redux.js.com]:https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux.js-url]:https://redux.js.org/
