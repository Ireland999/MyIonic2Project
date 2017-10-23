import { Component } from '@angular/core';
import { ModalController,Platform  } from 'ionic-angular';
import {Home} from '../home/home';
import {Picture} from '../picture/picture';
import {Person} from '../person/person';
import {Heart} from '../heart/heart';

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class Tabs {
  isAndroid: boolean = false;
  home:any;
  picture:any;
  heart:any;
  person:any;
  constructor(public modalCtrl: ModalController,platform: Platform) {
    this.isAndroid = platform.is('android');
    this.home = Home;
    this.picture = Picture;
    this.heart = Heart;
    this.person = Person;
  }
}