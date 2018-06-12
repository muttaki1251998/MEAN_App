import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;


  constructor(private _validateService: ValidateService, private _flashMsg: FlashMessagesService) { }

  ngOnInit() {
  }

  OnRegister(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

  // Verify user
  if(!this._validateService.validateRegister(user)){
    this._flashMsg.show(("Fill in all the fields"), {cssClass: "alert-danger", timeout: 3000}); 
    return false;
  }

  // Verify email
  if(!this._validateService.validateEmail(user.email)){
    this._flashMsg.show(("Enter a valid email"), {cssClass: "alert-danger", timeout: 3000});
    return false;
  }

}

  

}
