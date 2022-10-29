# Tracket | A To-Do List to Organize Your Work & Life

This is Tracket, an application whose main goal is to give users the flexibility to store tasks. You can create your own account by providing your email, password, first name, and last name. Using these credentials, you can sign in to the application. You are able to add new projects which store tasks. Each task consists of multiple properties like a name or description. Of course, just like any other todo app, this one allows you to check off completed tasks. You may also update your own profile, provide your own username, and some details about yourself.

## Live Demo

Check out the live demo of this application, simply click this link
[link to application!](https://tracketapp.netlify.app/)

You can create your own account using your email and password, but if you want, you can also use the user account, made especially for this purpose, so you can easily see what the application looks like. Just go to the login section and fill in the form using this data.

```
email: user@email.com
password: 12345678
```

Try to create your own projects and add some tasks. Please feel free to experiment with all of the application's features. 

## Stack

This is how the application's stack looks like. The whole application is written using Typescript.

### Frontend

The front end of this application was made with `React` using the `Typescript` programming language. The user data on the client side is stored using a cache provided by `Apollo Client`. The user may be authenticated using JSON web tokens stored in the Redux context. The cache contains the user's data, projects, tasks, and data connected with UI. Errors and loading states are maintained by `Apollo Client` library. The application UI was made using `Tailwind CSS`. Dates are displayed using `Moment.js`.

```
React
Typescript
Apollo Client
React Router
Tailwind CSS
Framer motion
React Hook Form
Sass
Joi
React toastify
Lottie
Moment.js
```

### Backend

The back end of this application was made using `Apollo Server` using the `Typescript` programming language. The whole application's data is stored in the `MongoDB` database. The connection to the database is provided by `Prisma`. Because of the fact that the application uses `GraphQL`, there is a need to generate types for backend services. This task is done using `Nexus`. The user may be authenticated using `JWT` tokens sent with the `Authentication` header. At the moment, only email and password authentication is available, but in the future I'm going to add more authentication methods.

```
Apollo Server
GraphQL
MongoDB
Prisma
Nexus
JWT
```

## Implemented functionalities

This application is some sort of todo application, where you can create your own projects that contain tasks. Every project and task might be updated or deleted after its creation. Each task might be marked as done or otherwise.

![](https://github.com/matikotyla/tracket/blob/main/images/dashboard.gif)

You are also able to edit and delete particular projects and tasks. Deleting a project that contains tasks results in deleting all the tasks as well.

![](https://github.com/matikotyla/tracket/blob/main/images/task.gif)

You are also able to update you profile details and add something about yourself, all the changes are immediately visible.

![](https://github.com/matikotyla/tracket/blob/main/images/profile.gif)

There is also a client and server side validation, so whenever you provide invalid data, you will be informed about that

|                                      Login                                      |                                     Sign up                                      |
| :-----------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| ![](https://github.com/matikotyla/tracket/blob/main/images/login.gif) | ![](https://github.com/matikotyla/tracket/blob/main/images/register.gif) |

## How to start using this app?

To start using this application you have to clone or download this repository using the following command

```
git clone https://github.com/matikotyla/tracket.git
```

next you have to install all required modules in the frontend and backend directories using

```
cd frontend
npm ci
cd backend
npm ci
```

Once it's done you need to provide two `.env` files, in the frontned and backend directories. Place the first one in the backend directory and copy past the following content

```
NODE_ENV=development
DATABASE_URL=<YOUR-MONGO-DB-URL>
HEROKU_API_KEY=<HEROKU-API-KEY>
```

the `HEROKU_API_KEY` is not required as it is used only during the CI/CD process after pushing your changes to the main branch. Place the second one in the frontend directory and copy paste the following content

REACT_APP_URL=http://localhost:4000/
NETLIFY_SITE_ID=<YOUR-NETLIFY-SITE-ID>
NETLIFY_AUTH_TOKEN=<YOUR-NETLIFY-AUTH-TOKEN>

the `NETLIFY_SITE_ID` and `NETLIFY_AUTH_TOKEN` environment variables are only used during the CI/CD proces, hence they are not needed to start the application.

Once all of the above is done, we need to run the frontend side as well as the backend side of the application. Do it using the following commands

```
cd frontend
npm start
cd backend
npm run server
```

The first command starts the frotend part of the application, and the second one starts the backend part of the application.

## Landing page

The application was designed using `Figma`




<!-- ## Implemented functionalities

Because this is a To-Do application, you can add your own projects whose store todos, here called as `tasks`.

![](https://github.com/maticoder/social-media-app/blob/master/images/post.gif)

You may also comment and like other's people `screams`

![](https://github.com/maticoder/social-media-app/blob/master/images/likeandcomment.gif)

Whenever somebody comment or like your post, you will be immediately informed about that, clicking the notification bell and next particular notification, you will be redirected to the page with the liked or commented post

![](https://github.com/maticoder/social-media-app/blob/master/images/notifications.gif)

You are also able to update you profile image and details about yourself, all the changes are immediately visible

![](https://github.com/maticoder/social-media-app/blob/master/images/profile.gif)

There is also a client and server side validation, so whenever you provide invalid data, you will be informed about that -->

<!-- ![](https://github.com/maticoder/social-media-app/blob/master/images/login.gif) ![](https://github.com/maticoder/social-media-app/blob/master/images/signup.gif) -->
<!-- 
|                                      Login                                      |                                     Sign up                                      |
| :-----------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| ![](https://github.com/maticoder/social-media-app/blob/master/images/login.gif) | ![](https://github.com/maticoder/social-media-app/blob/master/images/signup.gif) |

The whole project is connected to the firebase cloud, so the changes are immediately visible in the databse, you can see this on the gif below

![](https://github.com/maticoder/social-media-app/blob/master/images/immediately.gif)

## How to start using this app?

To start using this application you have to clone or download this repository using

```
git clone https://github.com/maticoder/social-media-app.git
```

command

next you have to install all required node modules in the client and server directories using

```
cd client
npm install
cd server
npm install
```

you also have to set your own firebase application up in order to use this application. You have to enable authentication with email/password sign-in method, cloud firestore to save data in the databsem, firebase storage to store user's images and firebase functions to invoke backend code. Provide your own `serviceAccountKey.json` file in the `server/functions` directory, this file should look like this

```
{
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": "",
}
```

also you will need to provide your own firebase config `config.js` file in the `server/functions/util` directory, this file should look like this

```
module.exports = {
    databaseURL: "",
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};
```

in order to run your application. You also have to create `config.js` file in `src` directory, put there your firebase config. Next you need to deploy firebase functions, using. There is no need to provide any firebase files in the `client` directory, everything is controlled using `JWT tokens` and `Redux`. Next you will need to deploy your firebase functions using

```
firebase deploy
```

in `functions` directory, make sure that you have `firebase-tools` installed, using following command

```
npm install -g firebase-tools
```

now you need to change `url` links, they shoul fetch data from your own firebase `endpoints`, not main, so make sure that you changed all `links` on the client side of the application. Now you just have to run application using

```
npm start
```

in the `client` directory. Once again, remember to make sure that you have got your own firebase project. As I mentioned before, you have to change `config.js` file with your firebase config data and `serviceAccountKey.json` with your key to make this application work properly. You have to also change url to fetch data from firebase to your own url.

## Landing page

The application was designed using `Figma`

![](https://github.com/maticoder/social-media-app/blob/master/images/page.png) -->