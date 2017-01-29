import {Component} from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {LoadingController, AlertController} from "ionic-angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})

export class AuthPage {
  // default value for the segment pick
  selectedAuthType = 'signin';

  constructor(private firebaseService: FirebaseService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }


  signInWithFacebook() {
    const loader = this.loading("Signing in...");
    loader.present();

    this.firebaseService.signInWithFacebook().then(authState => {
      loader.dismiss();
    }).catch(error => {
      loader.dismiss();
      this.alertMessage(error.message);
    });
  }


  private loading(message: string) {
    return this.loadingCtrl.create({
      content: message
    });
  }


  private alertMessage(message: string) {
    const alert = this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    });
    alert.present();
  }


  onSigninWithEmail(form: NgForm) {

    const loader = this.loading("Signing in...");
    loader.present();

    this.firebaseService.signInWithEmailAndPassword(form.value.email, form.value.password).then(authState => {
      loader.dismiss();
    }).catch(error => {
      loader.dismiss();
      this.alertMessage(error.message);
    });
  }

  onSignUpWithEmail(form: NgForm) {

    const loader = this.loading("Setting up your account...");
    loader.present();

    this.firebaseService.createUserWithEmailAndPassword(form.value.email, form.value.password).then(authState => {
      loader.dismiss();
    }).catch(error => {
      loader.dismiss();
      this.alertMessage(error.message);
    });
  }

}
