import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';


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
  @Output() loginChange = new EventEmitter();
  @Output() usernameChange = new EventEmitter();

  constructor(private loginService: LoginService) { }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
  }

  onClickSubmit(data) {
    this.login = this.logins.find(login => data.uname == login.username && data.passwd == login.password);
    if (this.login) {
      alert("Login Successful");
      this.loginValue = true;
      this.loginChange.emit({
        value: this.loginValue
      });
      this.usernameChange.emit({
        value: this.login.username
      });
    } else {
      alert("Invalid Login");
      return false;
    }
  }

  ngOnInit() {
    this.loginService.getLogins().subscribe(logins => this.logins = logins);
    this.formdata = new FormGroup({
      uname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
}
