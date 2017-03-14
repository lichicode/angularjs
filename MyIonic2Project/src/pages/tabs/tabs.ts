import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Tabs,ModalController } from 'ionic-angular';


import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { LoginPage } from '../login/login';
import { FromsPage } from '../froms/froms';
import { SidemenuPage } from '../sidemenu/sidemenu';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
@ViewChild('mainTabs') tabRef: Tabs; 

  private tab1Root: any;  
  private tab2Root: any;
  private tab3Root:any;  

  //tab1Root: any = HelloIonicPage;
  //tab2Root: any = LoginPage;

  // 指定参数,在tab指向的页面可以读取到该参数 
   homeParams:any = { 
     user1:"admin", 
     user2:"ionic" 
    };

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    //为tab标签指定导航至的页面
    this.tab1Root = SidemenuPage;  
    this.tab2Root = LoginPage; 
    this.tab3Root=FromsPage;
  }

    changeTabs = function(){
        console.log("tab changed");
    };
    // 选中tab页后的事件
    selectFriend(){
        // 声明一个modal
        let modal = this.modalCtrl.create(FromsPage);
        // 弹出modal
        modal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    //动态加载显示的tabs 在那个项
     this.tabRef.select(0);
  }

}
