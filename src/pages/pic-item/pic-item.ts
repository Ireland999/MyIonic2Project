import { Component, ViewChild  } from '@angular/core';

import { App ,NavController } from 'ionic-angular';
import {ImagePlyer} from '../image-player/image-player';


@Component({
  selector: 'pic-item',
  templateUrl: 'pic-item.html'
})
export class PicItem {
	isAndroid: boolean = false;
	selectedItem: any;
	//组件中获取DOM
	@ViewChild('container') todoNames;
  	constructor(private app:App,public navCtrl: NavController) {
	    // If we navigated to this page, we will have an item available as a nav param
  	}
  	imageTap(event,index) {
		var list = this.handleData(this.todoNames.nativeElement.children);
		this.app.getRootNav().push(ImagePlyer,{list:list,currentIndex:index});
	}
	handleData(_doms){
		var arr = [];
		for(var i=0,len=_doms.length;i<len;i++){
			arr.push({
				url:_doms[i].src
			});
		}
		return arr;
	}
}