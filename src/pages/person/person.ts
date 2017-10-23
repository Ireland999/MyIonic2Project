import { Component } from '@angular/core';
import { ModalController,Platform  } from 'ionic-angular';

@Component({
  selector: 'person-page',
  templateUrl: 'person.html'
})
export class Person {
	isAndroid: boolean = false;
	constructor(public modalCtrl: ModalController,platform: Platform) {
		this.isAndroid = platform.is('android');
	}
	swipeEvent(myEvt){
		console.log(myEvt)
	}
}
