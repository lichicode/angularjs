import { Component } from '@angular/core';

import { NavController,ActionSheetController,AlertController,ToastController   } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  ngdisable: any;
  timeStarts:any;
  myIcon: string; 
  gaming:string;
  constructor(public navCtrl: NavController,
      public actionSheetCtrl: ActionSheetController,
      public alertCtrl: AlertController,
      public toastCtrl: ToastController,
      storage: Storage) {
     this.ngdisable=false;
     this.timeStarts='2017-02-04';
     this.myIcon='heart';
     this.gaming='n64';

     storage.set('name', 'Max');
     storage.get('name').then((val) => {
            console.log('Your name is', val);
        });
  }

  openSheets(){
    let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                         console.log('Destructive clicked');
                    }
                },{
                     text: 'Archive',
                     handler: () => {
                         console.log('Archive clicked');
                     }
                 },{
                     text: 'Cancel',
                     role: 'cancel',
                     handler: () => {
                         console.log('Cancel clicked');
                     }
                 }
             ]
         });
         actionSheet.present();
  };

  openAlerts(){
            let alert = this.alertCtrl.create({ 
            title: 'New Friend!', 
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!', 
            buttons: ['OK'] 
        }); 
        alert.present(); 
  };

  presentToast() {
      let toast = this.toastCtrl.create({
          message: 'User was added successfully',
          duration: 3000
      });
      toast.present();
  };


  pageSkip(event, item) {
      this.navCtrl.push(LoginPage, {
          item: item
      });
  }
}
