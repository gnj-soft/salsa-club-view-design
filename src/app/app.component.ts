import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Salsa Club Managment";

  loginSucceeded = false;
  dateTime = new Date();
  username = "Not Define";
  
  constructor(private router: Router) {}

  loginEnable(event) {
    this.loginSucceeded = event.value;
    if (this.loginSucceeded) {
      this.router.navigate(['lessons']);
    }
  }

  setUsername(event) {
    this.username = event.value;
  }
}
