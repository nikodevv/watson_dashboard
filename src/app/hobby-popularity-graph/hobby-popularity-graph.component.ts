import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hobby} from '../../models/models';
import {ChartDataSets} from 'chart.js';
import * as _ from 'lodash';
import {DataService} from '../../services/DataService';


@Component({
  selector: 'app-hobby-popularity-graph',
  templateUrl: './hobby-popularity-graph.component.html',
  styleUrls: ['./hobby-popularity-graph.component.scss']
})
export class HobbyPopularityGraphComponent implements OnInit, OnDestroy {
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
  public labels: Array<string> = [];
  private hobbiesSubscription;

  constructor(private dataStore: DataService) { }

  organizeData(hobbyData: Array<Hobby>) {
    if (hobbyData.length === 0) {
      return;
    }
    const labels = [];
    const labelMap = {};
    const occurrences = []; // includes all dates
    const occurrences24Hours = []; // includes data points only created in the last 24 hours.
    const currentTime = (new Date()).getTime();

    _.transform(hobbyData, (result, value) => {
      const hobby = value.value;
      const date = +value.created_at * 1000;
      if (labels.includes(hobby)) {
        occurrences[labelMap[hobby]] += 1;
        occurrences24Hours[labelMap[hobby]] += date + 86400000 > currentTime ? 1 : 0;
      } else {
        labels.push(hobby);
        labelMap[hobby] = labels.length - 1;
        occurrences.push(1);
        occurrences24Hours.push(date + 86400000 > currentTime ? 1 : 0);
      }
    });

    this.labels = labels;
    this.data[0].data = occurrences;
    this.data[1].data = occurrences24Hours;
  }

  subscribeToStore() {
    this.hobbiesSubscription = this.dataStore.hobbiesData.subscribe((val) => this.organizeData(val));
  }

  unsubscribeFromStore() {
    this.hobbiesSubscription.unsubscribe();
  }

  ngOnInit() {
    this.subscribeToStore();
  }

  ngOnDestroy() {
    this.unsubscribeFromStore();
  }
}

