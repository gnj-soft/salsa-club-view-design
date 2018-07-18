import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { TokenStorage } from '../../core/token.storage';
import { AuthToken } from '../../models/auth-token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logins: Login[];
  formdata;
  loginValue = false;
  login: Login;
  newLogin: Login;
  @Output() loginChange = new EventEmitter();
  @Output() usernameChange = new EventEmitter();

  constructor(
    private authService: AuthService,
    private token: TokenStorage) { }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
  }

  onClickSubmit(data) {
    
    this.token.signOut();

    this.authService.attemptAuth(data.uname, data.passwd).subscribe(
      result  => { 
        this.token.saveToken(result.token);
        if (result.token != null) {
          this.loginValue = true;
        } else {
          this.loginValue = false;
        }
      }
    );

    if (this.loginValue) {
      alert("Login Successful");
      this.loginChange.emit({
        value: this.loginValue
      });
      this.usernameChange.emit({
        value: data.uname
      });
    } else {
      alert("Invalid Login");
      return false;
    }
  }

  addNewLoginToList(event) {
    this.newLogin = event.value;
    if (this.newLogin) {
      this.logins.push(this.newLogin);
    }
  }

  ngOnInit() {
    //this.loginService.getLogins().subscribe(logins => this.logins = logins);
    this.formdata = new FormGroup({
      uname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
}
