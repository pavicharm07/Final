import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  username = localStorage.getItem('login_id');
  postUserTweet(body) {
    return this.http.post(
      'http://localhost:8080/api/v1.0/tweets/' +
        localStorage.getItem('login_id') +
        '/add',
      body,
      this.requestOptions
    );
  }

  getallUser() {
    return this.http.get<any>(
      'http://localhost:8080/api/v1.0/tweets/users/all',
      this.requestOptions
    );
  }

  getUserTweet() {
    return this.http.get<any>(
      'http://localhost:8080/api/v1.0/tweets/all',
      this.requestOptions
    );
  }

  getTweetById(url) {
    return this.http.get<any>(url, this.requestOptions);
  }

  postReply(tweetId, body) {
    return this.http.post(
      'http://localhost:8080/api/v1.0/tweets/' +
        this.username +
        '/reply/' +
        tweetId,
      body
    );
  }

  updateTweet(tweetId, body) {
    return this.http.put(
      'http://localhost:8080/api/v1.0/tweets/' +
        this.username +
        '/update/' +
        tweetId,
      body
    );
  }

  deleteTweet(tweetId) {
    return this.http.delete(
      'http://localhost:8080/api/v1.0/tweets/' +
        this.username +
        '/delete/' +
        tweetId
    );
  }

  likeUserTweet(tweetId) {
    return this.http.put(
      'http//localhost:8080/api/v1.0/tweets/' +
        this.username +
        '/like/' +
        tweetId,
      null
    );
  }
}
