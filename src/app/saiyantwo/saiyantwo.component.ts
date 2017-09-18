import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saiyantwo',
  templateUrl: './saiyantwo.component.html',
  styleUrls: ['./saiyantwo.component.css']
})
export class SaiyantwoComponent implements OnInit {
  @Input() mylevel;
  constructor() { }

  ngOnInit() {
  }

}
