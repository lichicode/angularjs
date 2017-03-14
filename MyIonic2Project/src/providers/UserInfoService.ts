
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Storage, LocalStorage} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { HttpService } from "./HttpService";
import { StorageService } from "./StorageService";

@Injectable()
export class UserInfoService {
    API_URL = "http://192.168.6.201:8080/webapi/checkLogin/";
    constructor(
        private http: Http,
        private httpService: HttpService,
        private storageService:StorageService) { }

    login(user) {
        var url = this.API_URL + "/UserLogin.json";
        return this.httpService.httpPostNoAuth(url, user);
    }



    GetUserInfo(id:number) {
        var url = this.API_URL + "/UserInfo/"+id;
        return this.httpService.httpGetWithAuth(url);
    }


}