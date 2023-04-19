# E-Commerce

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

This repository contains back end for an e-commerce site. It creates and manages the ecommerce database which contains products, categories, and tags.   
The application allows the user to interact with the database by creating, reading, updating, or deleting information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation

- Clone the repository.
- Install required packages. From the terminal: npm i.
- Create .env file with SQL credentials.
- Run schema.sql from the db folder.
- Seed the database. From the terminal: npm run seed.

## Usage

- Run the app. From the terminal: node index.js.
- Use insomnia to test the routes. 
- Category route: /api/categories.
- Tag route: /api/tags.
- Product route: /api/products.

**Video of the application functionality:** 

## Tests

N/A.

## Credits

Packages and documentation
- Sequelize: https://sequelize.org/docs/v6
- Node MySQL 2: https://www.npmjs.com/package/mysql2
- Express: https://www.npmjs.com/package/express
- dotenv: https://www.npmjs.com/package/dotenv

Additional Resources
- Module mini-project used as reference.

## License

Project under MIT license.