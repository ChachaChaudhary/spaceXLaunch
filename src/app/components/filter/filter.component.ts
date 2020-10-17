import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { R3BoundTarget } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';
import { take, takeWhile, skipWhile } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterForm: FormGroup;
  fields:Array<any>=[
    {
      title:"Launch Year",
      name:"launch_year",
      options:[{"display":2006,"value":2006},{"display":2007,"value":2007},{"display":2008,"value":2008},{"display":2009,"value":2009},{"display":2010,"value":2010},{"display":2011,"value":2011},{"display":2012,"value":2012},{"display":2013,"value":2013},{"display":2014,"value":2014},{"display":2015,"value":2015},{"display":2016,"value":2016},{"display":2017,"value":2017},{"display":2018,"value":2018},{"display":2019,"value":2019},{"display":2020,"value":2020}]
    },
    {
      title:"Successful Launch",
      name:"launch_success",
      options:[{display:'True',value:"true"},{display:'False',value:"false"}]
    },
    {
      title:"Successful Landing",
      name:"land_success",
      options:[{display:'True',value:"true"},{display:'False',value:"false"}]
    }
]
  constructor(private fb: FormBuilder,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      launch_year: [],
      launch_success: [],
      land_success: []});
     this.filterForm.valueChanges.subscribe((value)=>{
      var url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, queryParams: value }).toString();
      this.router.navigateByUrl(url);
     })
     this.activatedRoute.queryParams.pipe(
       skipWhile(ev =>{ 
           return Object.keys(ev).length == 0}),take(1)).subscribe((params) => {
      this.filterForm.patchValue(params);
   });
  }

}
