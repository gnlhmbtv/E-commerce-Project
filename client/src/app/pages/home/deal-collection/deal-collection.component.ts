import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'molla-deal-collection',
  templateUrl: './deal-collection.component.html',
  styleUrls: ['./deal-collection.component.scss']
})
export class DealCollectionComponent implements OnInit {

  @Input() products = [];
  @Input() loaded = false;
  constructor() { }

  ngOnInit(): void {
  }

}
