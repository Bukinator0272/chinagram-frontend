import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;
  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

}
