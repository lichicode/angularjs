import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as ChartJs from 'chart.js'; // 导入chart.js

/*
  Generated class for the Froms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-froms',
  templateUrl: 'froms.html'
})
export class FromsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }


  /**
   * ionViewLoaded	页面加载完毕触发。该事件发生在页面被创建成 DOM 的时候，且仅仅执行一次。如果页面被缓存（Ionic默认是缓存的）就不会再次触发该事件。该事件中可以放置初始化页面的一些事件。
     ionViewWillEnter	即将进入一个页面变成当前激活页面的时候执行的事件。
     ionViewDidEnter	进入了一个页面且变成了当前的激活页面，该事件不管是第一次进入还是缓存后进入都将执行。
     ionViewWillLeave	将要离开了该页面之后变成了不是当前激活页面的时候执行的事件。
     ionViewDidLeave	在页面完成了离开该页面并变成了不是当前激活页面的时候执行的事件。
     ionViewWillUnload	在页面销毁和页面中有元素移除之前执行的事件。
     ionViewDidUnload	在页面销毁和页面中有元素移除之后执行的事件。
  */


  ionViewDidLoad() {
    console.log('ionViewDidLoad FromsPage');
  }

  ionViewDidEnter() {
    var canvas = <HTMLCanvasElement>document.getElementById("myChart");
    var ctx = canvas.getContext("2d");  // 这里是关键, 不能写在constructor()中
    ChartJs.Line(ctx, {
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

}
