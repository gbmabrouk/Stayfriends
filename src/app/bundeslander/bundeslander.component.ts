import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-bundeslander',
  templateUrl: './bundeslander.component.html',
  styleUrls: ['./bundeslander.component.css']
})
export class BundeslanderComponent implements OnInit {
  public jsonObject;
  public stateList;
  public personIndexCounts;
  constructor(private _stateList: StatesService) { }

  ngOnInit() {
    this.jsonObject = this._stateList.getStateList();
    this.stateList = this.jsonObject.stateList;
    this.personIndexCounts = this.jsonObject.personIndexCounts;
  }

}
