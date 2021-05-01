import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    login_path:string = "http://localhost:8080/api/v1.0/tweets/login";
    registration_path:string = "http://localhost:8080/api/v1.0/tweets/register";
    search_path:string = "http://localhost:8080/api/v1.0/tweets/user/search/"
  constructor(private http: HttpClient) { }
    
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'response'
  };
   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  result:any =[];
  loginUser(user){
    
    try{
    return this.http.post(this.login_path,user, this.httpOptions);
    }
    catch(err){
      console.log(err);
    }
  }

  userRegistration(user){

    try{
      return this.http.post(this.registration_path,user, this.httpOptions);
      }
      catch(err){
        console.log(err);
      }

  }

  search(username){
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(this.headerDict), 
    };

    try{
     this.http.get(this.search_path+username, requestOptions).subscribe((res:any)=>{
        this.result = res;
       console.log(this.result);
      },(error)=>{
        console.log(error);
        if(error.status == 403)
          console.log("Email or password is incorrect");
        
      });
    }
      catch(err){
        console.log(err);
      }

  }

  searchResult(){
    console.log(this.result);
    return this.result;
  }
   
}
