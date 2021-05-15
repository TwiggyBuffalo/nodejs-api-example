<br />
<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1182px-Node.js_logo_2015.svg.png" alt="Logo" width="300" height="80">
  </a>

  <h3 align="center">TwiggyBuffalo/nodejs-api-example</h3>

  <p align="center">
    A NodeJS RESTful API example with Express.
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details closed="closed">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project should help you get an idea of creating a RESTful API in NodeJS. It's utilizes Mongoose for models and writes to a MongoDB instance.
<br/>
<br/>

<!-- GETTING STARTED -->

## Getting Started

Follow these quick and easy steps and you'll be up and running in no time.

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/TwiggyBuffalo/nodejs-api-example.git
    ```
2. Install dependencies 
    ```sh
    npm i
    ```
3. Either start a local MongoDB instance using the `mongod` cmd or alternatively provide and env variable as follows for a remote MongoDB instance
    ```sh
    DB_URL=mongodb://connection-string-here
    ```
4. Start the project by running
    ```sh
    npm run start
    ```
5. Open a web browser and head over to [http://localhost:3000/users](http://localhost:3000/users) to fetch users. To create users POST to the same URL with the body
    ```sh
    {
      name: Joe Soap
      email: joe@soap.com
      password: J03S04P!
    }
    ```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/twiggybuffalo/nodejs-api-example/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

1. Fork the Project
2. Make your changes
3. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Twitter - [@TwiggyBuffalo](https://twitter.com/twiggybuffalo)
<br/>
GitHub - [TwiggyBuffalo](https://github.com/TwiggyBuffalo)
