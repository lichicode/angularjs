import { Component, ViewChild ,Host} from '@angular/core';

import { Platform, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { StartPage } from '../pages/start/start';

/**
 * app.component.ts 应用程序根组件
 * 
 * @Host 装饰器将把往上搜索的行为截止在 宿主组件
*/

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
  //templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // 开始加载 启动页面的动画
  rootPage: any = StartPage;

  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
