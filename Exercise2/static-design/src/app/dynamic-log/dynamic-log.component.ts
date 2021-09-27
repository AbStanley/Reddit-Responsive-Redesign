import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-dynamic-log',
  templateUrl: './dynamic-log.component.html',
  styleUrls: ['./dynamic-log.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicLogComponent implements OnInit {

  @Input() log: any = '';
  

  constructor() { }

  ngOnInit(): void {
  }

}
