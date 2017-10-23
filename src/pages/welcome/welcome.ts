import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {Home} from '../home/home';  
 
@Component({
	selector: 'welcome-page',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
    constructor(public navCtr: NavController){ 
    }
 
    goToHome(){
        this.navCtr.setRoot(Home);
    }
}