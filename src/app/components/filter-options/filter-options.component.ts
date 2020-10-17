import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent implements OnInit {
  @Input('options') options:Array<any>;
  @Input('title') title:string;
  @Input('name') name:string;
  @Input('group') group:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
