import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
//import { tokenNotExpired } from 'angular2-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post("users/register", user, {headers:headers}).pipe(map(res=>res.json()));
  }

  

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post("users/authenticate", user, {headers:headers}).pipe(map(res=>res.json()));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getProfile(){    
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get("users/profile", {headers:headers}).pipe(map(res=>res.json()));
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    if(localStorage.id_token == undefined){
      console.log("id Undefined");
    }else{
      const helper = new JwtHelperService();
      //console.log(helper.isTokenExpired(localStorage.id_token));
      return !helper.isTokenExpired(localStorage.id_token);
    }
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
