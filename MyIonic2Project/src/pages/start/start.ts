import { Component } from '@angular/core';
import { NavController, MenuController,NavParams } from 'ionic-angular';

//import { HelloIonicPage } from '../hello-ionic/hello-ionic';

import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Start page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {
    slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController,public navParams: NavParams) {
        this.slides = [
      {
        title: 'Welcome to <b>ICA</b>',
        description: 'The <b>Ionic Conference App</b> is a practical preview of the Ionic Framework in action, and a demonstration of proper code use.',
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: 'What is Ionic?',
        description: '<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.',
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: 'What is Ionic Platform?',
        description: 'The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.',
        image: 'assets/img/ica-slidebox-img-3.png',
      }
    ];
  }



  startApp() {
    this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  // ionViewDidEnter() {
  //   // the root left menu should be disabled on the tutorial page
  //   this.menu.enable(false);
  // }

  // ionViewWillLeave() {
  //   // enable the root left menu when leaving the tutorial page
  //   this.menu.enable(true);
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

}


export interface Slide {
  title: string;
  description: string;
  image: string;
}
