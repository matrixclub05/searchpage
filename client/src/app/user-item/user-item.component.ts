import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input()user: any;

  constructor() { }

  ngOnInit() {
  }

}
