import { Component, OnInit } from '@angular/core';
import {Hobby} from '../../models/models';
import {ChartDataSets} from 'chart.js';
import Axios from 'axios';
import * as _ from 'lodash';

@Component({
  selector: 'app-users-over-time',
  templateUrl: './users-over-time.component.html',
  styleUrls: ['./users-over-time.component.scss']
})
export class UsersOverTimeComponent implements OnInit {
  public barChartOptions: {
    scaleShowVerticalLines: false,
    responsive: true
  };
  private fetchedHobbies: Array<Hobby>;
  private hobbiesArray: Array<string> = [];
  public data = [{ data : [] , label: 'placeholder'}];

  get hobbyData(): Array<Hobby> {
    return this.fetchedHobbies;
  }
  set hobbyData(hobbies) {
    this.fetchedHobbies = hobbies;
  }
  get labels(): Array<string> {
    return this.hobbiesArray;
  }
  set labels(value) {
    this.hobbiesArray = value;
  }

  constructor() { }

  fetchData() {
    return Axios.get('https://nikodevv.com/api/hobbies').then(
      (response) => {
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
      console.log("hobby iss");
      if (labels.includes(hobby)) {
        occurrences[labelMap[hobby]] += 1;
      } else {
        labels.push(hobby);
        occurrences.push(1);
        labelMap[hobby] = labels.length - 1;
      }
    });

    this.labels = labels;
    this.data = [{ data: occurrences , label: 'placeholder'}];
  }

  async loadData() {
    await this.fetchData();
    this.organizeData();
  }

  ngOnInit() {
    this.loadData();
  }
}
