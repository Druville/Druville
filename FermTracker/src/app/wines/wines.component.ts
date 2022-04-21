import { Component, OnInit } from '@angular/core';
import { Wine } from '../wine';
import { WINES } from '../mock-wines';


@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {
  wines = WINES;
  selectedWine?: Wine

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(wine: Wine): void{
    this.selectedWine = wine;
  }

}
