import { NgModule, ErrorHandler,NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule  } from '@ionic/storage';
import { ImagePicker} from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import {Tabs} from '../pages/tabs/tabs';
import { Home} from '../pages/home/home';
import {AddQuotation} from '../pages/add-quotation/add-quotation';

import {Picture} from '../pages/picture/picture';
import {PicItem} from '../pages/pic-item/pic-item';
import {ImagePlyer} from '../pages/image-player/image-player';

import {Heart} from '../pages/heart/heart';
import {Person} from '../pages/person/person';

import { WelcomePage } from '../pages/welcome/welcome';

import { DragulaModule } from 'ng2-dragula';//拖拽排序

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    Tabs,
    Home,
    AddQuotation,

    Picture,
    PicItem,
    ImagePlyer,
    Person,
    Heart,
  ],
  imports: [
    IonicStorageModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp),
    DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    Tabs,
    Home,
    AddQuotation,
    
    Picture,
    PicItem,
    ImagePlyer,
    Person,
    Heart,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ImagePicker,Camera],
  schemas:[NO_ERRORS_SCHEMA ]
})
export class AppModule {}
