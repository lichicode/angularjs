import { NgModule,Optional, SkipSelf,ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//页面要加这里
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';
import { FromsPage } from '../pages/froms/froms';

import { SidemenuPage } from '../pages/sidemenu/sidemenu';

//服务要加这里
import {HttpService} from "../providers/HttpService";
import {StorageService} from "../providers/StorageService";


/**
 * imports：导入其他模块，就是要使用其他模块的功能，必须要导入。
 * declarations：声明，声明本模块包含的内容。可能有些同学会遇到，定义了一个指令，在component中使用却总是没有生效的问题，首先我们要检查的就是是否进行了声明。
 * exports：外部可见的内容。相当于.net中声明为public的那些类。
 * providers：服务提供者，主要用来定义服务。估计ng2框架会自动将注册的服务体检到依赖注入实例中，目前测试也是如此。
 * bootstrap：启动模块。只在根模块使用。在除了根模块以外的其他模块不能使用。
 * 
 * app.module.ts 启动模块为根模块，自定义的其他模块叫特性模块。应用程序根模块
*/


/**
 * 
 * NgModule 是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。属性有：
    declarations（声明）：本模块中拥有的视图类。angular 有三种视图类：组件、指令、管道。
    exports：declarations的子集，可用于其它模块中的组件模板。
    imports：本模块组件模板中需要由其他模板导出的类。
    providers：服务的创建者。本模块把它们加入全局的服务表中，让他们在应用中的任何部分都可被访问到。
    bootstrap：标识出应用的主视图（根组件）。只有根模块才可设置此属性。
 * 
*/

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    StartPage,
    TabsPage,
    FromsPage,
    SidemenuPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    StartPage,
    TabsPage,
    FromsPage,
    SidemenuPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage,HttpService,StorageService]
})
export class AppModule {
  constructor( @Optional() @SkipSelf() parentModule: AppModule) {
    console.log('parentModule:' + parentModule);
    // if (parentModule) {
    //   throw new Error(
    //     'AppModule is already loaded. Import it in the AppModule only');
    // }
  }
}
