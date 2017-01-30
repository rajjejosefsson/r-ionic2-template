import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about/popover/popover';
import { FormPage } from '../pages/form/form';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage} from "../pages/auth/auth";
import {FirebaseService} from "../services/firebase.service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FormPage,
    HomePage,
    TabsPage,
    AuthPage,
    PopoverPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FormPage,
    HomePage,
    TabsPage,
    AuthPage,
    PopoverPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseService
  ]
})
export class AppModule {}
