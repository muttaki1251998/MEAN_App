import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private _authService: AuthService,
    private _flashMsg: FlashMessagesService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  OnLogin(){
    const user = {
      username: this.username,
      password: this.password
    }

    this._authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this._authService.storeUserData(data.token, data.user);
        this._flashMsg.show(("Welcome to TrueHeart"), {cssClass: "alert-success", timeout: 3000});
        this._router.navigate(['/dashboard']);
      }else{
        this._flashMsg.show(("Invalid credentials"), {cssClass: "alert-danger", timeout: 3000});
        this._router.navigate(['/login']);
      }
    })

  }

}
