# Proof of concept strapi cms for OIS

This is the proof of concept for integrating strapi as headless cms in the dataportal data.amsterdam.nl

## Usage

Clone this repo.

### Create a local mongodb database called strapi

* [Use the mongodb documentation](https://www.mongodb.com/) 

### Build and start strapi (backend)

 * `npm install`
 * `npm start`


Strapi backend is accessable on `http://localhost:1337`

### Build and start the strapi client (frontend)

* `cd app/`
* `npm install`
* `npm start`

The frontend is based on `react-boilerplate-amsterdam` can be tested on `http://localhost:3001`

### How to publish to heroku

* `heroku login`

Set the database connection variables

* `heroku config:set DATABASE_HOST=<hostadres>`
* `heroku config:set DATABASE_PASSWORD=<password>`
* `heroku config:set DATABASE_USERNAME=<username>`

Identify the heroku application name. for example `enigmatic-cliffs-34872`

Create a new git remote link to the application

`heroku git:remote git -a enigmatic-cliffs-34872`

Publish the application to heroku:

`git push heroku master`

#### References

* [Example application](https://enigmatic-cliffs-34872.herokuapp.com)
* [How to deploy strapi on heroku](https://blog.strapi.io/deploying-a-strapi-api-on-heroku/)
 
 Enjoy!
