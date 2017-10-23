import { Component } from '@angular/core';
import {Platform,NavController  } from 'ionic-angular';
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker';

@Component({
  selector: 'add-picture',
  templateUrl: 'add-picture.html'
})
export class AddPicture {
	isAndroid: boolean = false;
	items: any;
	constructor(platform: Platform,public navCtrl: NavController,private imagePicker: ImagePicker) {
		this.isAndroid = platform.is('android');
		this.items = [];
		this.getPicList();
	}
	
	getPicList(){
		const options:ImagePickerOptions = {
			quality: 100,
			maximumImagesCount:9
		};
		this.imagePicker.getPictures(options).then(function(results){
			for (var i = 0; i < results.length; i++) {
				console.log('Image URI: ' + results[i]);
				this.items.push({
					url:results[i]
				})
			}
		}, function(err) {
			console.log(err);
		});
	}
	finish(){

	}
}