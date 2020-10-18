import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { END_POINTS } from 'src/assets/constants/endPoints';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  launchList:Array<any>=[];
  constructor(private activatedRoute: ActivatedRoute,private apiService:ApiService,private router:Router) { }
  public ngOnInit(): void {
    this.router.events
     .subscribe((event) => {
       if (event instanceof NavigationEnd) {

        this.activatedRoute.queryParams.subscribe((params) => {
          this.apiService.get(END_POINTS.launch,{limit:100,...params}).subscribe((list)=>{
            this.launchList=list||[];
          });
        });
       }
      
   }); 

}


}
