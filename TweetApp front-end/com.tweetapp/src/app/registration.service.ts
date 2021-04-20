import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private authenticated = false;

  constructor(private http : HttpClient) { }

public loginUserFromremote(user : User):Observable<any>{
return this.http.post<any>("http://localhost:8075/api/v1.0/tweets/login",user)
}

public registerUserFromremote(user : User):Observable<any>{
  return this.http.post<any>("http://localhost:8075/api/v1.0/tweets/register",user)
  }

  public getAllUser(user : User):Observable<any>{
    return this.http.get<any>("http://localhost:8075/api/v1.0/tweets/users/all")
    }
    public getUser(user : User):Observable<any>{
      return this.http.get<any>("http://localhost:8075//api/v1.0/tweets/user/search/{email}")
      }
      public forgotpassword(user : User):Observable<any>{
        return this.http.post<any>("http://localhost:8075//api/v1.0/tweets/forgot",user)
        }

        public resetpassword(user : User):Observable<any>{
          return this.http.post<any>("http://localhost:8075//api/v1.0/tweets/reset_password",user)
          }
}
