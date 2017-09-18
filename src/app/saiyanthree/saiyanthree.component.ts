import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saiyanthree',
  templateUrl: './saiyanthree.component.html',
  styleUrls: ['./saiyanthree.component.css']
})
export class SaiyanthreeComponent implements OnInit {
  @Input() mylevel;
  constructor() { }

  ngOnInit() {
  }

}
