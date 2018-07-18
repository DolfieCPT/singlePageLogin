import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent implements OnInit {
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router) { }

  ngOnInit() {
  }


  getErrorMessage(errorvalue) {
    return errorvalue.hasError('required') ? 'You must enter your a value' :
      errorvalue.hasError(errorvalue) ? 'Not a valid entry' :
        '';
  }

  Login() {
    this.router.navigate(['landingpage']);
  }
}
