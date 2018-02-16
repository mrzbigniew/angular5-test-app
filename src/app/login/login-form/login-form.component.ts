import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/shared/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginData = {
    user: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
