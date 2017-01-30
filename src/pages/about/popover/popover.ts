import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";


@Component({
  template: `
     <div class="popover-holder">
       <p>Hello my name is Kurt, and I'm here to help you.</p>
     </div>
  `,
  styles: [`
    .popover-holder {
      padding: 7px;
    }
  `]
})


export class PopoverPage {
  constructor(public viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
