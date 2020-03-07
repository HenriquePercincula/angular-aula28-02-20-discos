import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { discs } from '../discs';

@Component({
  selector: 'app-disc-details',
  templateUrl: './disc-details.component.html',
  styleUrls: ['./disc-details.component.css']
})
export class DiscDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disc = discs[+params.get('discId')];
    });
  }

}