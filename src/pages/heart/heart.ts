import { Component } from '@angular/core';
import { ModalController,Platform  } from 'ionic-angular';

@Component({
  selector: 'heart-page',
  templateUrl: 'heart.html'
})
export class Heart {
	isAndroid: boolean = false;
	constructor(public modalCtrl: ModalController,platform: Platform) {
		this.isAndroid = platform.is('android');
	}
	swipeEvent(myEvt){
		console.log(myEvt)
	}
}
