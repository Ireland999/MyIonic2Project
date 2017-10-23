import { Component,ViewChild,ElementRef} from '@angular/core';
import { App,Platform,NavController } from 'ionic-angular';
import { Http, }       from '@angular/http';
import { DomSanitizer} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/fromPromise';

import {GetAsyncData} from '../../data.ts';
import {AddQuotation} from '../add-quotation/add-quotation';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})

export class Home {
	//组件中获取DOM
	@ViewChild('container')
	greetDiv: ElementRef;
	isAndroid: boolean = false;
	items: Array<{content: string, id: number,className:string,picture:any,isHasImage:boolean}>;
	width: string;
	constructor(private app:App,private sanitization:DomSanitizer,private elementRef : ElementRef,platform: Platform,private http: Http,public navCtrl: NavController) {
		this.isAndroid = platform.is('android');
		this.items = [];
	}
	ngAfterViewInit() {
	    // sketchElement is usable
	    this.width = ((this.greetDiv.nativeElement.clientWidth - 4 - 20)/3).toFixed(2);
	    GetAsyncData().then((data) => {
			this.genItemContent(data,1);
		});
	}
	genItemContent(data,state){
		console.log(data)
		var _this = this,
			len=data.length,
			i = 0;
		if(data == 1){
			_this.items = [];
		}
		recursion();
		function recursion(){
			var tmp = data[i];
			if(data[i].picture.length > 0){
				_this.getRelateImg(data[i].picture).then(function(rsp:any){
					_this.items.unshift({
						content:tmp.content,
						id:tmp.id,
						className: rsp.className,
						picture: rsp.picture,
						isHasImage:true
					});
					i = i + 1;
					if(i<len){
						recursion();
					}
				});
			}else{
				_this.items.push({
					content:tmp.content,
					id:tmp.id,
					className:"",
					picture:[],
					isHasImage:false
				});
				i = i + 1;
				if(i<len){
					recursion();
				}
			}
		}	
	}
  	//生成相关图片
	getRelateImg(data){
		var t = "single",
			len = data.length,
			obj = {
				className:"",
				picture:[]
			},
			_this = this,
			index = 0;
		
		return new Promise(function(resolve,reject) {
			if(len > 1){
				t = "group";
			}
			obj.className = t;
			for (var j = 0;j<len;j++) {
				_this.getRelateImgTpl(data[j].url,t).then(function(rsp:any){
					index = index +1;
					obj.picture.push(rsp);
					if(index == len){
						resolve(obj);
					}
				});
			};
		});
	}
	getRelateImgTpl(_src,_key){
		var _this = this;
		return new Promise(function(resolve,reject) {
		// after 1 second, the promise will resolve
			var image = new Image(),
				className = "";
			image.onload = function() {
				if(this.width>this.height){
					className = "wrap1"
				}else if(this.height>this.width){
					className = "wrap2"
				}else if(this.width == this.height){
					className = "wrap3"
				}
				resolve(_this.genRelateImg(_src,_key,className));
			}  
			image.src = _src;   
			image.onerror = function() {
				image.onerror=null;
				reject();
			}
		});
		
	}
	genRelateImg(_src,_key,_className){
		var className = _key+'-'+_className,
		style = "";
		if(_key == 'group'){
			style = "width:"+this.width+"px;height:"+this.width+"px";
		}
		return {
			className:className,
			url:_src,
			style:this.sanitization.bypassSecurityTrustStyle(style)
		};
	}
	//下拉刷新
	doRefresh(refresher) {
        console.log('DOREFRESH', refresher);

        GetAsyncData().then((data) => {
            this.genItemContent(data,1);
            refresher.complete();
        });
    }

    doPulling(refresher) {
        console.log('DOPULLING', refresher.progress);
    }
    //上拉加载更多
    doInfinite(infiniteScroll) {
    	console.log(infiniteScroll,'加载更多内容')
        GetAsyncData().then((data) => {
            this.genItemContent(data,2);
            infiniteScroll.complete();

            if (this.items.length > 90) {
                infiniteScroll.enable(false);
            }
        });
    }
    //添加记录
    add(event){
    	this.app.getRootNav().push(AddQuotation);
    }
}
