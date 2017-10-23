import { Component } from '@angular/core';
import {App,Platform,NavController,ActionSheetController  } from 'ionic-angular';
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

declare var BMap: any;

@Component({
  selector: 'add-quotation',
  templateUrl: 'add-quotation.html'
})

export class AddQuotation {
	isAndroid: boolean = false;
	position:boolean = false;
	addrmsg:string = "";
	len:number = 0;
	imageList: Array<{url: string}>;
	constructor(private app:App,platform: Platform,public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,private imagePicker: ImagePicker,private camera: Camera,private dragulaService: DragulaService) {
		this.isAndroid = platform.is('android');
		this.imageList = [{
			url:"http://p1.pstatp.com/large/1aa4000abe9cde40faf5"
		},{
			url:"https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/203fb80e7bec54e742c42e27b2389b504fc26ada.jpg"
		},{
			url:"http://p1.pstatp.com/large/1aa4000abe9cde40faf5"
		},{
			url:"https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/203fb80e7bec54e742c42e27b2389b504fc26ada.jpg"
		},{
			url:"http://p1.pstatp.com/large/1aa4000abe9cde40faf5"
		},{
			url:"https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/203fb80e7bec54e742c42e27b2389b504fc26ada.jpg"
		},{
			url:"http://p1.pstatp.com/large/1aa4000abe9cde40faf5"
		},{
			url:"https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/203fb80e7bec54e742c42e27b2389b504fc26ada.jpg"
		}];
		let _this = this;
		_this.len = _this.imageList.length;
		console.log(_this.len)
		this.dragulaService.drag.subscribe(function(value) {
			console.log(value.slice(1));
	    });
	}
	selectPic(){
		let _this = this;
		let actionSheet = this.actionSheetCtrl.create({
			buttons: [{
				text: '拍摄',
				handler: function() {
					_this.takePhoto();
				}
			}, {
				text: '从相册选择',
				handler: function() {
					_this.getPicList();
				}
			}, {
				text: '取消',
				role: 'cancel',
				handler: function() {
					console.log('Cancel clicked');
				}
			}]
		});
		actionSheet.present();
	}
	getPicList(){
		let _this = this;
		const count = 9 - _this.len;
		console.log(count)
		const options:ImagePickerOptions = {
			quality: 100,
			maximumImagesCount:count,
			width:800,
			height:600
		};
		
		this.imagePicker.getPictures(options).then(function(results){
			for (let i = 0; i < results.length; i++) {
				console.log('Image URI: ' + results[i]);
				_this.imageList.push({
					url:results[i]
				});
			}
			_this.len = _this.imageList.length;
		}, function(err) {
			console.log(err);
		});
	}
	takePhoto(){
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}
		this.camera.getPicture(options).then(function(imageData){
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			console.log(base64Image);
			this.imageList.push({
				url:base64Image
			});
			this.len = this.imageList.length;
		}, function(err){
			// Handle error
			console.log(err);
		});
	}
	//是否显示位置
	change(event){
		this.position = event.checked;
		let _this = this;
		if(this.position){
			let geolocation = new BMap.Geolocation();

			geolocation.getCurrentPosition(function (result) {
				if(geolocation.getStatus() == 0){
					let point = new BMap.Point(result.lontitude, result.latitude);
				    let geoc = new BMap.Geocoder();
				    console.log(point)
				    geoc.getLocation(point, function(rs){
				    	console.log(rs)
				    	_this.addrmsg=rs.address;
				    	console.log(_this.addrmsg)
				    });
				}
			},function (error) {

			});
		}
	}
	delete(event,element){//删除图片
		console.log(event,element);
		this.imageList.splice(element,1);
	}
}