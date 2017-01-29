import {Component, ViewChild} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage} from "../pages/auth/auth";
import {FirebaseService} from "../services/firebase.service";
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('mycontent') nav: NavController;
  isAuthenticated = false;
  rootPage: any = TabsPage;
  authPage = AuthPage;


  constructor(platform: Platform, private firebaseService: FirebaseService) {

    // Init Firebase
    firebaseService.init();

    // Auth State
    firebase.auth().onAuthStateChanged(user => {
      console.log("STATE CHANGE", user);
      if (user) {
        console.log("AUTHED");
        this.isAuthenticated = true;
        this.rootPage = TabsPage;
      } else {
        console.log("NOT AUTHED");
        this.isAuthenticated = false;
        this.rootPage = AuthPage;
      }
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  onLoadPage(page: any){
    this.nav.setRoot(page);
  }

  onSignOut() {
    this.firebaseService.signOut();
    this.nav.setRoot(AuthPage);
  }

}
