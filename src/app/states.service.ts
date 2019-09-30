import { Injectable } from '@angular/core';
import Bundesland from '../assets/Bundesland.json';


@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor() { }

  getStateList() {
    return Bundesland;
  }
}
