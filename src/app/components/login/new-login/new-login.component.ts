import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {

  formdata;
  constructor() { }

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
