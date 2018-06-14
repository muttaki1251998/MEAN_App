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
    private authService: AuthService,
    private flashMsg: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  OnLogin(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMsg.show(("Welcome to TrueHeart"), {cssClass: "alert-success", timeout: 3000});
        this.router.navigate(['/dashboard']);
      }else{
        this.flashMsg.show(("Invalid credentials"), {cssClass: "alert-danger", timeout: 3000});
        this.router.navigate(['/login']);
      }
    })

  }

}
