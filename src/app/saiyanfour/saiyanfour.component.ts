import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-saiyanfour',
  templateUrl: './saiyanfour.component.html',
  styleUrls: ['./saiyanfour.component.css']
})
export class SaiyanfourComponent implements OnInit {
  @Input() mylevel;
  constructor() { }

  ngOnInit() {
  }

}
