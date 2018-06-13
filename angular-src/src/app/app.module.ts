import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { FlashMessagesModule } from "angular2-flash-messages";
import { HttpModule } from '@angular/http';
import { AuthGuard } from './authGuard/auth.guard';


const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "dashboard", component: DashboardComponent, canActivate:[AuthGuard]},
  {path: "profile", component: ProfileComponent, canActivate:[AuthGuard]},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
]

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,HttpModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule, FlashMessagesModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
  ],
  providers: [ValidateService, AuthService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
