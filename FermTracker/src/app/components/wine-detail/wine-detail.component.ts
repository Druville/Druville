import { Component, Input, OnInit } from '@angular/core';
import { Wine } from 'src/app/wine';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {
  @Input() wine?: Wine;
  
  constructor() { }

  ngOnInit(): void {
  }

}
