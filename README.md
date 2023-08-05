# Flatiron Bank - React Transactions App

# Author: Kipngenoh Aaron Rotich

## Project Description

Flatiron Bank is a React application that allows users to manage and view their recent bank transactions. The app fetches transaction data from a local JSON server and displays it in a table. Users can also add new transactions through a form and filter transactions based on their description using a search bar.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contacts](#contacts)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with Bank of Flatiron, follow the installation instructions below and launch the app on your local machine. You can then view and manage your transactions using the provided form and search bar.

## Features

The Bank of Flatiron app provides the following features:

- Display a table of all transactions
- Fill out and submit the form to add a new transaction (Note: New transactions are not persisted to the backend)
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term are shown in the transactions table.

## Prerequisites

To run this project, you need to have the following tools installed on your machine:

- Node.js (https://nodejs.org)
- npm (Node Package Manager, installed automatically with Node.js)

## Installation

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/kipngenohaaron/Bank_of_Flatiron.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bank_of_flatiron
   ```

3. Install the required npm packages:

   ```bash
   npm install
   ```

## Usage

1. Start the local JSON server to serve the transaction data:

   ```bash
   json-server --watch db.json --port 8001
   ```

2. Start the React development server:

   ```bash
   npm start
   ```

3. Open your web browser and visit the following URL:

   ```plaintext
   http://localhost:3000/
   ```

4. You can now view the Bank of Flatiron app and interact with the transaction table, search bar, and transaction form.

## Technologies Used

- React
- JSON Server
- JS
- CSS
- VSCODE

## Contacts
### Reach me through; 0724828197 / 0724279400 
### Email Address: kipngenohaaron@gmail.com
### Live link: https://flatironbank-qt5z.onrender.com/
## Contributing

Contributions to Bank of Flatiron are welcome! If you find any issues or have ideas for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.
