import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TweetsModel } from '../model/user.tweets';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-tweethome',
  templateUrl: './tweethome.component.html',
  styleUrls: ['./tweethome.component.css'],
})
export class TweethomeComponent implements OnInit {
  id: string = null;
  userReply: string;
  search: String;
  tweet = [];
  users = [];
  userTweet: String;
  user = new TweetsModel();
  searchResult: any = [];
  tweetComment: boolean = false;
  tweetID: string;

  toggle = false;
  enableDisableRule() {
    this.toggle = !this.toggle;
  }

  retrieveResonse: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private userService: UserService
  ) {}

  postTweet(userTweet) {
    let body = {
      tweet: userTweet,
      date: new Date().toISOString(),
    };
    this.userService.postUserTweet(body).subscribe((res: any) => {
      console.log(res);
      this.getTweet()
    });
  }

  filterFunction(search) {
    console.log(search);
    console.log('invoked');
    this.searchResult = this.users.filter((user) => {
      return user.loginId.startsWith(search);
    });
    console.log(this.searchResult);
  }

  availableUsers() {
    this.searchResult = this.loginService.searchResult();
    if (this.searchResult.length > 0) {
      this.users = this.searchResult;
    } else {
      this.userService.getallUser().subscribe((data: any) => {
        this.users = data;
      }),
        (error) => {
          console.log(error.status);
          if (error.status == 403) {
            alert('Not Allowed Please login');
            this.router.navigateByUrl('/user/login');
          }
        };
    }
  }
  // postReply(userReply, tweetId) {
  //   console.log(userReply);
  // }

  // replyToTweet(tweetId) {
  //   this.tweetID = tweetId;
  //   this.tweetComment = true;
  //   console.log(tweetId);
  // }

  getTweet() {
    if (this.id == null) {
      this.userService.getUserTweet().subscribe(
        (data: any) => {
          this.tweet = data;
        },
        (error) => {
          console.log(error.status);
        }
      );
    } else {
      let url = 'http://localhost:8080/api/v1.0/tweets/' + this.id;

      this.userService.getTweetById(url).subscribe(
        (data: any) => {
          this.tweet = data;
        },
        (error) => {
          console.log(error.status);
        }
      );
    }
  }

  pageStatus() {
    if (this.id != null) {
      return false;
    } else if (this.id == undefined) return true;
  }
  homeButton() {
    this.router.navigateByUrl('/tweet/home');
  }

  ngOnInit(): void {
    this.route.params.subscribe((paramsId) => {
      this.id = paramsId.username;
    });
    this.getTweet();
    this.availableUsers();
  }
}
