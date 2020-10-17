import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { END_POINTS } from 'src/assets/constants/endPoints';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements AfterViewInit {
  launchList:Array<any>=[];
  constructor(private activatedRoute: ActivatedRoute,private apiService:ApiService) { }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.apiService.get(END_POINTS.launch,{limit:100,...params}).subscribe((list)=>{
        this.launchList=list||[];
      });
   });
  }

}
