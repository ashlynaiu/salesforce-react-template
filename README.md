## Salesforce React Template
This is a lightweight template to build Salesforce demo orgs with React. 
  * Uses the [react-create-app](https://github.com/facebook/create-react-app) as the boilerplater template. 
  * Includes the npm package that extends the [SLDS Design System](https://www.lightningdesignsystem.com/)

## Run Locally
```
npm install
npm start
```

## Build
```
npm run build
```

To push to Heroku (recommended) use the [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack) after installing the [Heroku CLI Tools](https://devcenter.heroku.com/articles/heroku-cli).
```
heroku create $APP_NAME --buildpack mars/create-react-app
```