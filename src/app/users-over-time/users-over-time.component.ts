import { Component, OnInit } from '@angular/core';
import {Hobby} from '../../models/models';
import Axios from 'axios';
import {HttpResponse} from '@angular/common/http';
import _ from 'lodash';


@Component({
  selector: 'app-users-over-time',
  templateUrl: './users-over-time.component.html',
  styleUrls: ['./users-over-time.component.scss']
})
export class UsersOverTimeComponent implements OnInit {
  private fetchedHobbies: Array<Hobby>;
  private hobbiesArray: Array<string>;

  get hobbyData(): Array<Hobby> {
    return this.fetchedHobbies;
  }
  set hobbyData(hobbies: HobbyList) {
    this.fetchedHobbies = hobbies;
  }

  constructor() { }

  fetchData() {
    return Axios.get('https://nikodevv.com/api/hobbies').then(
      (response: HttpResponse) => {
        this.hobbyData = response.data;
      }
    );
  }

  organizeData() {
    const labels = [];
    const labelMap = {};
    const occurrences = [];
    _.transform(this.hobbyData, (result, value) => {
      const hobby = value.value;
      if (labels.includes(hobby)) {
        return occurrences[labelMap[hobby]] += 1;
      }
      labels.push(hobby);
      occurrences.push(1);
      labelMap[hobby] = labels.length - 1;
      console.log(labels);
      console.log(occurrences);
    });
  }

  async loadData() {
    await this.fetchData();
    this.organizeData();
  }

  ngOnInit() {
    this.loadData();
  }
}
