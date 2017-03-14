import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { ListPage } from '../list/list';

/*
  Generated class for the Sidemenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html'
})
export class SidemenuPage {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage_menu: any = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidemenuPage');
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}
