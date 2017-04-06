# Serverless Payment Processing

This code is designed to be hosted on [webtask.io](http://webtask.io). 

## Prerequisites
- [NodeJS](http://nodejs.org)
- Webtask Command Line Interface: `npm -g install wt-cli`

## Installation

Create the task from the command line with:

`wt create --parse-body salmonbay-pay-button.js --secret stripeSecretKey=STRIPE_SECRET --name salmonbay-pay-button` 

Replace STRIPE_SECRET with the actual secret from the Stripe control panel.

## License

Open Source: [MIT](https://opensource.org/licenses/MIT)