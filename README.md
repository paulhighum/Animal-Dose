# daily-animal-fact-frontend

<img width="722" alt="screen shot 2018-02-27 at 2 41 05 pm" src="https://user-images.githubusercontent.com/26422138/36757194-318bc450-1bce-11e8-8654-32b542cca46a.png">
 
# App Description
Welcome to the frontend of my daily animal fact app. This is a web app that displays random animals facts. Users can generate new ones, add comments, and theoretically make a donation.

# User Experience
A user opens the web app and is presented with an animal name, animal scientific name, animal image, and a fact about that animal. If there are any comments associated with that animal they will display beneath the fact. The user has the ability to add a new comment: 

change a comment:  

and delete comment:

The user can also make a donation:



# Installation Instructions
Using the app does not require any installation, just visit https://daily-animal-fact.firebaseapp.com/. You are also free to use the source code for both the fronted of this app, located in this repository, and the backend of this app, located in the [backend repository](https://github.com/paulhighum/Daily-Animal-Fact-Backend). To install the backend please visit the other repository. To install the frontend please follow these installation instructions:

Fork and clone this repository. 

Navigate into daily-animal-fact-frontend

## Build Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

Vue: If you need help with Vue visit the [Vue docs](https://vuejs.org/v2/guide/). For a detailed explanation on how vue-cli works, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Stripe: In order to use the stripe functionality of this app you will need to create a stripe account [here](https://stripe.com/). From there you will need to click on your dashboard and then find your publishable key and secret key, which should be located under the API menu on the lift hand side. You will then need to include these keys in the code you cloned, the secret key goes in the backend .env file you will need to make and the publishable key goes in the frontend Donation component. You can find the stripe docs [here](https://stripe.com/docs)


# Technologies
Vue.js, JavaScript, HTML, CSS, Stripe.js

# Author
[Paul Highum](https://github.com/paulhighum)

# License
MIT
