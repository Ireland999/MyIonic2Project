import { Component, ViewChild } from '@angular/core';

import { Platform, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
import {Tabs as TabsIcon} from '../pages/tabs/tabs';
// import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any;
  // pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public storage: Storage
  ) {
    var _this = this;
    storage.ready().then(() => {
      storage.get('firstIn').then(function(result){
      if (result) {
          _this.rootPage = TabsIcon;
        } else {
          storage.set('firstIn', true);
          _this.rootPage = WelcomePage;
        }
      });
    });
    
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
