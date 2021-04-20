import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-twitter-mentions',
  templateUrl: './twitter-mentions.component.html',
  styleUrls: ['./twitter-mentions.component.css']
})
export class TwitterMentionsComponent implements OnInit {
  
  myMentions: any;

  constructor(private api: TwitterService) { }

 
  ngOnInit() {
   this.getTwitterMentions();
   
  }
  
  getTwitterMentions(): void {
    this.api.getTimeline()
      .subscribe(
        myMentions => {
          this.myMentions = myMentions;
          console.log(this.myMentions);
        }
      )
   }
  
}
