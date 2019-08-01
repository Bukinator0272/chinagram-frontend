import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  model: User = {
    username: '',
    password: '',
    information: ''
  };

  userId: String;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  createUser(): void {
    this.apiService.postUser(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert("An error has occurred while sending feedback");
      }
    );
  }

}
