<a name="readme-top"></a>

<div align="center">
  <h3><b>React+Rails One Repo in Rails App</b></h3>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents


- [📗 Table of Contents](#-table-of-contents)
- [📖 React+Rails One Repo App ](#-reactrails-one-repo-app-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ (OPTIONAL) ](#-faq-optional-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 React+Rails One Repo App <a name="about-project"></a>

**React+Rails One Repo in Rails App** is an exercise only repo, but features a random generated greeting message.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> So you want to lear more about the tech we have used for this project?

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://rubyonrails.org/">Ruby on Rails</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<details>
<summary>Front-End</summary>
  <ul>
    <li><a href="https://react.dev/">React</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Setup a Hybrid Repo, using RubyRails with React in one repository.**
- **Rails 7.1.2 (lastest)+ Postgres with rails-jsbundler that is connected to Webpacker**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.
Note: We are assuming you have pre-installed ruby, WSL, ubuntu and rails!

### Prerequisites

In order to run this project you need:

first at all, install rails:

```sh
gem install rails
```

### Setup

Clone this repository to your desired folder:

```sh
  cd your-folder
  git@github.com:alvp01/hello-rails-react.git
```

### Install

Install this project with:

```sh
  cd hello-rails-react
  bundle install
```

Setting up the Data Base:

```sh
  "Set up Username and password information in the config/database.yml"
  rails db:create
  rails db:migrate
  rails db:seed
```

### Usage

To run the project, execute the following command:

```sh
  ./bin/dev
```

### Deployment

The deployment will be available soon !

<!--
Example:
You can deploy this project using:

```sh

```
 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Abel Lavieri**

- GitHub: [@cancelei](https://github.com/alvp01)
- LinkedIn: [Glauber Bannwart](https://www.linkedin.com/in/abel-lavieri)

  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> We this project can improve, we are planning to include the next features soon:

- [X] **User Interface, Controllers and Models**
- [N/A] **API documentation**
- [X] **View Implementation**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/cancelei/hello-rails-react2/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Would you like to help?

If you like this project feel free to leave an start, as well if you have a suggestion feel free to visit issues page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for creating this exercise-project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

> Learn more about FAQ below:

- **How do I fix Linters errors if I modify the project?**

  - for rubocop run

  ```sh
  rubocop -A
  ```

  - for Stylint run:

  ```sh
  npx stylelint "**/*.{css,scss}" --fix
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>