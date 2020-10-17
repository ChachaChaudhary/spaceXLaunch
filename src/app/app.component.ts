import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { END_POINTS } from 'src/assets/constants/endPoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLoader:boolean;
  error:string;
  constructor( private apiService: ApiService){

  }
  ngOnInit(){
         this.apiService.loader.subscribe((loader)=>this.showLoader=loader)
         this.apiService.error.subscribe((error)=>this.error=error);
  }
}
