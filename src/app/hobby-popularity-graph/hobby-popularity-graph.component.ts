import { Component, OnInit } from '@angular/core';
import {Hobby} from '../../models/models';
import {ChartDataSets} from 'chart.js';
import Axios from 'axios';
import * as _ from 'lodash';


@Component({
  selector: 'app-hobby-popularity-graph',
  templateUrl: './hobby-popularity-graph.component.html',
  styleUrls: ['./hobby-popularity-graph.component.scss']
})
export class HobbyPopularityGraphComponent implements OnInit {
  public barChartOptions: {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public data = [
    { data : [] , label: 'Hobbies (All Time)'},
    { data: [], label: 'Hobbies (last 24 hours)' }
  ];
  public chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }};
  private fetchedHobbies: Array<Hobby>;
  public labels: Array<string> = [];

  get hobbyData(): Array<Hobby> {
    return this.fetchedHobbies;
  }
  set hobbyData(hobbies) {
    this.fetchedHobbies = hobbies;
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
    const occurrences = []; // includes all dates
    const occurances24Hours = []; // includes data points only created in the last 24 hours.
    const currentTime = (new Date()).getTime();
    _.transform(this.hobbyData, (result, value) => {
      const hobby = value.value;
      const date = +value.created_at * 1000;
      console.log(date);
      if (labels.includes(hobby)) {
        occurrences[labelMap[hobby]] += 1;
        occurances24Hours[labelMap[hobby]] += date + 86400000 > currentTime ? 1 : 0;
      } else {
        labels.push(hobby);
        labelMap[hobby] = labels.length - 1;
        occurrences.push(1);
        occurances24Hours.push(date + 86400000 > currentTime ? 1 : 0);
      }
    });

    this.labels = labels;
    this.data[0].data = occurrences;
    this.data[1].data = occurances24Hours;
  }

  async loadData() {
    await this.fetchData();
    this.organizeData();
  }

  ngOnInit() {
    this.loadData();
  }
}

