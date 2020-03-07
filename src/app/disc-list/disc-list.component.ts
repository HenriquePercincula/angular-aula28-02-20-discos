import { Component, OnInit } from '@angular/core';
import { discs } from '../discs';

@Component({
  selector: 'app-disc-list',
  templateUrl: './disc-list.component.html',
  styleUrls: ['./disc-list.component.css']
})
export class DiscListComponent implements OnInit {
  ListLabel = 'Lista de discos';
  discs = discs;
  constructor() { }

  ngOnInit() {
  }

}