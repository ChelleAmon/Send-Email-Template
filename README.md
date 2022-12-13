# Send Email Template

## Description
A basic, pure backend email feature template that can be used and installed on any projects that require such feature.

## References
* [Click me!](https://mailtrap.io/blog/angular-send-email/)

## Project Setup
1. Create a new repository and make sure to select the email template. Also, you can fork or clone the template if you want to play around it.
2. On the terminal, run `npm install` or `npm i` to update the installed packages and dependencies
3. Create .env file and store the following information:
______________________________________________________
      `TEST_EMAILFROM="<sender's email address>"
       PASSWORD=<for google accounts, make sure a two-step verification is on and enter the app password which can be setup from the setting's page>
       EMAILTO="<receiver's email address>"`
______________________________________________________
4. On the terminal, enter `npm run dev-server` to run the server: `http://localhost:3000`
5. To test the POST route `http://localhost:3000/sendmail`, use POSTMAN (I recommend to install one)


## Technologies

### Programming Languages
 * Javascript
 * Typescript

### To build the basic API
 * Node.js
 * Express.js
 
### Database
 * MongoDB
 * but I might also integrate SQL if another project prefer to use it
 
### NPM Packages for email feature
 * nodemailer
 * might consider installing emailJS, but let us see
 * dotenv
 * mongoose
 * will need to look more for SQL integration
 
 ### Deployment
 * Possibly Heroku but I also have to check on other free hosting apps

## To run the project
### Development
 * On terminal, type `npm run dev-server`
 * Running at http://localhost:3000 
