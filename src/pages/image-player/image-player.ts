import { Component,ViewChild  } from '@angular/core';

import { NavController, NavParams,Slides  } from 'ionic-angular';


@Component({
  selector: 'image-player',
  templateUrl: 'image-player.html'
})
export class ImagePlyer {
  @ViewChild(Slides) slides: Slides;
  isAndroid: boolean = false;
  items: Array<{url: string}>;
  currentIndex:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.get('list');
    this.currentIndex = this.navParams.get('currentIndex');
  }
  backToPage(){
    this.navCtrl.pop();
  }
  ngAfterViewInit() {
    this.slides.zoom = true;
  }
}