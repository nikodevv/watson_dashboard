import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/DataService';
import * as _ from 'lodash';
import {Hobby} from '../../models/models';
import * as moment from 'moment';

@Component({
  selector: 'app-users-time-graph',
  templateUrl: './users-time-graph.component.html',
  styleUrls: ['./users-time-graph.component.scss']
})
export class UsersTimeGraphComponent implements OnInit, OnDestroy{
  public labels = [];
  public data = [{
    data: Array(7).fill(0),
    label: 'Hobbies logged (7 day)'
  }];
  private hobbiesSubscription;
  private uniqueUsers = {};

  constructor(private dataService: DataService) { }

  organizeData(hobbiesData: Array<Hobby>) {
    const time = (new Date()).getTime();
    const oneDayOfTime = 86400000;
    const minTime = time - 518400000; // epoch a week ago;
    const labels = [];
    const labelMap = {};
    const data = Array(7).fill(0);
    for (let i = 0; i < 7; i++) {
      const day = moment(minTime + i * oneDayOfTime).format('dddd');
      labels.push(day);
      labelMap[day] = i;
    }

    _.transform(hobbiesData, (res, val) => {
      if (+val.created_at * 1000 > minTime) {
        const index = labelMap[moment.unix(+val.created_at).format('dddd')];
        data[index] += 1;
      }
    });
    this.data[0].data = data;
    this.labels = labels;
  }

  subscribeToStore() {
    this.hobbiesSubscription = this.dataService.hobbiesData.subscribe((val) => this.organizeData(val));
  }

  unsubscribeFromStore() {
    this.hobbiesSubscription.unsubscribe();
  }
  ngOnInit() {
    this.hobbiesSubscription = this.subscribeToStore();
  }

  ngOnDestroy() {
    this.unsubscribeFromStore();
  }

}
