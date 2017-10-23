import { Component } from '@angular/core';
import {Platform,NavController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'take-picture',
  templateUrl: 'take-picture.html'
})
export class TakePicture {
	isAndroid: boolean = false;
	constructor(platform: Platform,public navCtrl: NavController,private camera: Camera) {
	// constructor(platform: Platform,public navCtrl: NavController) {
		this.isAndroid = platform.is('android');
		this.takePhoto();
	}
	takePhoto(){
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}
		this.camera.getPicture(options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			console.log(base64Image);
		}, (err) => {
			// Handle error
			console.log(err);
		});
	}
	close(){
		this.navCtrl.pop();
	}
}