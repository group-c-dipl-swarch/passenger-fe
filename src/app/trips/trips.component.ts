import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  trip: Trip = {
    id: "asdfsfd",
    routeId: 1,
    driverId: 2,
    status: "onRoad",
    startedAt: "2022-11-25T02:03:24.762Z"
  }

  constructor() { }

  ngOnInit(): void {
  }

}