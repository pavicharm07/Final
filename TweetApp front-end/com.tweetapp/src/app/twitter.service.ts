import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tweet } from './tweet';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  headers = { headers: new Headers({ 'Content-Type': 'application/json' }) }
  @Injectable({
    providedIn: 'root'
  })
  
   api_url = '"http://localhost:8075/api/v1.0/tweets';
   
   
  
  
    constructor(private http: HttpClient) { }
  
    getTimeline() {
      return this.http
        .get<any[]>(this.api_url+'/all')
        .pipe(map(data => data));
  
    }
  
    getMentions() {
      return this.http
        .get<any[]>(this.api_url+'/{email}')
        .pipe(map(data => data));
  
    }
  
      public tweetUserFromremote(tweet : Tweet):Observable<any>{
        return this.http.post<any>("/add",tweet)
        }
      
  
  
  }
