import { Component } from '@angular/core';
import { ModalController,Platform,NavController,NavParams  } from 'ionic-angular';
import {PicItem} from '../pic-item/pic-item';
@Component({
  selector: 'picture-page',
  templateUrl: 'picture.html'
})
export class Picture {
	isAndroid: boolean = false;
	image:string = 'picture';
	selectedItem: any;
	constructor(public modalCtrl: ModalController,platform: Platform,public navCtrl: NavController,public navParams: NavParams) {
		this.isAndroid = platform.is('android');
		this.selectedItem = navParams.get('id');
	}
	itemTapped(event, _id) {
		this.navCtrl.push(PicItem, {
			id: _id
		});
	}
}
