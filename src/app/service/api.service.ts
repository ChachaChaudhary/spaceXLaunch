import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static apiURL: string = environment.api_url;
  loader:Subject<boolean>= new Subject();
  error:Subject<string>=new Subject();
  constructor(private httpClient: HttpClient) {
    }      
  public get(path: string,params:any) {
    this.showLoading();
    return this.httpClient.get(`${ApiService.apiURL}${path}`, {params}).pipe(
      map((response: any) => {
          this.removeLoading();
          return response;
        
      }),
      catchError(err => {
        this.removeLoading();
        if (err.name === 'HttpErrorResponse') {
            this.showError('Requested service is unavailable at the moment, we regret for the inconvinence caused.')
          } else {
            this.showError(err.message);
          }
        throw err;
      })
    );
   

  }
  showError(message){
    this.error.next(message);
    setTimeout(()=>this.error.next(''),3000);
  }
  showLoading(){
    this.loader.next(true);
  }
  removeLoading(){
    this.loader.next(false);
  }
}