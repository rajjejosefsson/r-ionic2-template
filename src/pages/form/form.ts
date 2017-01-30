import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import firebase from 'firebase';
import {FirebaseService} from "../../services/firebase.service";
import { Geolocation } from 'ionic-native';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})


export class FormPage implements OnInit {
  value = 1;
  submitAttempt = false;
  latitude: any;
  longitude: any;
  address: string;

  formGroup: FormGroup;

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private http: Http) {}


  ngOnInit() {
    this.initForm();
    this.initGeolocation();
  }

  private initForm() {

    let EMAIL_REGEXP = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;

    this.formGroup = new FormGroup({
      'control1': new FormControl(null, [Validators.required, Validators.maxLength(500)]),
      'control2': new FormControl(null, [Validators.required, Validators.pattern(EMAIL_REGEXP)]),
      'control3': new FormControl(null, [Validators.required]),
    });
  }


  private initGeolocation() {

    Geolocation.getCurrentPosition().then((location) => {
      this.latitude = location.coords.latitude;
      this.longitude = location.coords.longitude;


      // Angular doesn't yet know that we want to parse the response as JSON.
      // We can let it know this by using the .map((res:Response) => res.json()) call.
      // This also returns an Observable, useful for method chaining.

      // To receive the output, we call the subscribe() method.
      // This takes three arguments which are event handlers.
      // They are called onNext, onError, and onCompleted.
      this.http.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${this.latitude},${this.longitude}`)
        .map(response => response.json())
        .subscribe(result => {
          console.log(result.results[0].formatted_address);
          this.address = result.results[0].formatted_address;
        });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }


  // console.log(results[0].formatted_address)

  onFormSubmit() {
    this.submitAttempt = false;
    console.log(this.formGroup.value);
    console.log(this.formGroup.controls);

    let user = this.firebaseService.currentUser();

    firebase.database().ref('data/' + user.uid).push(this.formGroup.value);
  }


}
