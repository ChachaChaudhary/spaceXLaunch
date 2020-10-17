import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-list-item',
  templateUrl: './launch-list-item.component.html',
  styleUrls: ['./launch-list-item.component.css']
})
export class LaunchListItemComponent implements OnInit {
  @Input('item') item:Array<any>
  constructor() { }

  ngOnInit(): void {
  }

}
