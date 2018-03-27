import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Login } from '../../../models/login';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {

  formdata;
  login: Login;
  @Output() newLoginChange = new EventEmitter() ;

  constructor(private loginService: LoginService) { }

  onClickSubmit(data): void {
    this.add(data.uname, data.passwd, data.emailid);
    this.formdata.reset();
  }

  add(username: string, password: string, email: string): void {
    username = username.trim();
    password = password.trim();
    email = email.trim();
    if (!username || !password || !email) { return; };
    this.loginService.addLogin({ username, password, email } as Login)
    .subscribe(login => {
      this.login = login;
    });
    this.newLoginChange.emit({
      value: this.login
    });
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      uname: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(6)
      ])),
      passwd: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(5)
      ])),
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]))
   });
  }
}
