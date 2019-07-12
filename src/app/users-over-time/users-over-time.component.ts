import { Component, OnInit } from '@angular/core';
import {Hobby} from '../../models/models';

@Component({
  selector: 'app-users-over-time',
  templateUrl: './users-over-time.component.html',
  styleUrls: ['./users-over-time.component.scss']
})
export class UsersOverTimeComponent implements OnInit {
  private fetchedHobbies: HobbyList;
  get hobbyData(): Array<Hobby> {
    return this.fetchedHobbies;
  }
  set hobbyData(hobbies: HobbyList) {
    this.fetchedHobbies = hobbies;
  }

  constructor() { }

  fetchData() {
    Axios.get('https://nikodevv.com/api/hobbies').then(
      (response: HttpResponse) => {
        this.hobbyData(response.data);
        console.log(this.hobbyData);
      }
    );
  }
  ngOnInit() {
    fetchData();
  }
}
