import { Component, OnInit } from '@angular/core';
import Axios from 'axios';
import {HobbyList} from '../../models/models';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-hobbies-by-type',
  templateUrl: './hobbies-by-type.component.html',
  styleUrls: ['./hobbies-by-type.component.scss']
})

// Hobbies by type and day
export class HobbiesByTypeComponent implements OnInit {
  private fetchedHobbies: HobbyList;
  get hobbyData(): HobbyList {
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
