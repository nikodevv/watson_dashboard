import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import Axios from 'axios';
import {Hobby} from '../models/models';

@Injectable()
export class DataStore {
  private hobbies: BehaviorSubject<Array<Hobby>> = new BehaviorSubject([]);

  public readonly hobbiesData: Observable<Array<Hobby>> = this.hobbies.asObservable();

  fetchData() {
    return Axios.get('https://nikodevv.com/api/hobbies').then(
      (response) => {
        this.hobbies.next(response.data);
      });
  }
  constructor() {
    this.fetchData();
  }
}

