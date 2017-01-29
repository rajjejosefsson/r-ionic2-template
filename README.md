# r-ionic-template



<p>
   <img src="https://github.com/rajjejosefsson/r-ionic2-template/blob/master/src/assets/images/Skärmavbild%202017-01-29%20kl.%2011.55.31.png" width="250"/>
  
   <img src="https://github.com/rajjejosefsson/r-ionic2-template/blob/master/src/assets/images/side-menu.gif" width="250"/>

</p>




## Usage

To download and use this project you need to have the following installed on your machine

* [NodeJs] (http://nodejs.org)

* Create an account with [Firebase](http://firebase.google.com)

* Enable Sign-in providers for Email/Password & Facebook in Firebase

When you have completed the above processes, run:
You can download this project directly or clone it using git
run the following command
```
 git clone https://github.com/rajjejosefsson/r-ionic2-template
`````

After downloading/cloning it
Change directory and run npm install
Run
```
cd r-ionic2-template
npm install
```
to pull in the project dependencies.

After that, you need to update the `firebase.service.ts` located in `src\services\firebase.service.ts` your own firebase credentials that you obtained firebase console for the project
it will look like this:

```
<script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>
<script>
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
  };
  firebase.initializeApp(config);
</script>
```

That's all, you are good to go.


