import { Component } from '@angular/core';

import {NavController, PopoverController} from 'ionic-angular';
import {PopoverPage} from "./popover/popover";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private popoverCtrl: PopoverController) {

  }

  openPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: event
    });

  }

}
