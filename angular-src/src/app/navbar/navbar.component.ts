import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _flashMsg: FlashMessagesService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this._authService.logout();    
    this._flashMsg.show("You have been logged out", {cssClass: "alert-success", timeout: 5000});
    this._router.navigate(['/login']);
    return false;
  }

}
