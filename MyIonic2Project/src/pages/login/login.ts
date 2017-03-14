import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

import { UserInfoService } from "./../../providers/UserInfoService";
import { StorageService } from "./../../providers/StorageService";

import { UserInfoData, UserInfo} from "./../../model/UserInfoData";
//import { emailValidator } from './../../providers/validator';

import { FromsPage } from '../froms/froms';

/*
  Generated class for the Login page.

Template Driven模式中，首先，Angular会自动的给form表单应用一个ngForm指令，
              该指令会在内部创建一个FromGroup。 其次，每个ngModel指令会在内部创建一个匿名的FormControl，
              并将注册到FromGroup中，而校验类指令例如required等则会和FormControl绑定。
              当改变输入时，则会触发FormControl中对应的OnChange事件触发校验等。

Model Driven模式中，在对应的组件类中编码创建FromGroup，每个子类型为FromControl对象，
            在创建FromControl子类型中可以使用Validators绑定对应的校验方法，
            最后采用属性的方式和表单进行绑定。在模板中，
            利用formControlName指令将FromControl元素和对应的输入框链接起来，
            当改变输入时，则会触发FormControl中对应的OnChange事件触发校验等。
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserInfoService]
})

export class LoginPage {
  local: Storage;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,  //FormBuilder是一个工厂对象，用于编程创建ControlGroup和Control。
    public toastCtrl: ToastController,
    private userInfoService: UserInfoService,
    private storageService: StorageService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) { 

      this.navCtrl = navCtrl;  
    }


  loginForm = this.formBuilder.group({
    'LoginID': ['admin@163.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.]*)((@[a-zA-Z0-9_.]*)\.([a-zA-Z]{2}|[a-zA-Z]{3}))$')]],// 第一个参数是默认值
    //'LoginID': ['admin@163.com2', [Validators.required, Validators.minLength(4), emailValidator]],// 第一个参数是默认值
    'LoginPwd': ['123456', [Validators.required, Validators.minLength(4)]]
  });

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  };

  login(user, _event) {  
    _event.preventDefault();//该方法将通知 Web 浏览器不要执行与事件关联的默认动作

    this.userInfoService.login(user).then(data => {

      alert(JSON.stringify(data));
      if (data.Result.ID > 0)//登录成功
      {
        this.storageService.write('UserInfo', data.Result);
        //测试写缓存
        //let ss = this.storageService.read<UserInfoData>('UserInfo');
        //console.log(ss.UserToken);
        //传参
        //this.navCtrl.push(MyinfoPage, { item: data.Result.ID });

        alert("登陆成功!");
      }
      else {
        let toast = this.toastCtrl.create({
          message: '用户名或密码错误.',
          duration: 3000,
          position: 'middle',
          showCloseButton: true,
          closeButtonText: '关闭'
        });
        toast.present();
      }
    });
    
  }

  signup(_event){
     //阻止提交表单
     _event.preventDefault();

    // alert 提醒用户注意用户名的正确性  
   /*   let alertUserSignup = this.alertCtrl.create({  
        title: '用户中心',  
        subTitle: '正在建设',  
        buttons: ['OK']  
      }); 

      alertUserSignup.present();   
      */

      // let loading = this.loadingCtrl.create({  
      //   content: 'Please wait...',  
      //   spinner: 'dots',  
      //   duration: 3000, //单位是毫秒  
      // });  
  
      // loading.present();  
  
      // setTimeout(() => {  
      //   loading.dismiss();  
      // }, 3000); 


      //
      this.navCtrl.push(FromsPage);
  }


  //其他的登陆
  userInfo:UserInfo={
          UserName:'liuzhuang',
          PassWord:'111111'
  }


    btnClick(){
        this.loadDefault();
        // this.loadText();
        // this.loadCustom();
    }

    loadDefault(){
        let loading = this.loadingCtrl.create({
            content:"loading...",//loading框显示的内容
            dismissOnPageChange:true, // 是否在切换页面之后关闭loading框
            showBackdrop:false //是否显示遮罩层
        });
        loading.present();// 弹出load框
        setTimeout(()=>{
            //this.navCtrl.push(HomePage);//跳转页面
        },1000);
        setTimeout(()=>{
            loading.dismiss();
        },3000);
        // 上面这段代码先是在按下按钮1000毫秒之后挑战页面，再在3000毫秒之后关闭loading框
        // 但是因为设置了切换页面之后关闭loading框，因此在切换页面后则关闭loading框
    }

    loadText(){
        let loading = this.loadingCtrl.create({
            spinner:"hide",
            content:"loading",
            duration:3000
        });
        loading.present();

    }

    loadCustom(){
        let loading = this.loadingCtrl.create({
            spinner:"dots",// apinner既是loading框上的图标
            // content:`<div class="custom-spinner-container">
            // <div class="custom-spinner-box"></div>
            // </div>`,
            duration:5000 // loading框持续的时间，默认在触发DidDismiss之后关闭，除非设置了该属性
        });
        loading.onDidDismiss(()=>{
            console.log("Dismissed loading");
        });
        loading.present();
    }
}
