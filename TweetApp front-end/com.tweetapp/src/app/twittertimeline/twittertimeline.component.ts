import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-twittertimeline',
  templateUrl: './twittertimeline.component.html',
  styleUrls: ['./twittertimeline.component.css']
})
export class TwittertimelineComponent implements OnInit {
  myTimeline: any;
  constructor(private api: TwitterService) { }

  ngOnInit() {
    this.getTwitterTimeline();
 
  
  }
  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
          console.log(this.myTimeline);
        }
      )
   }
  
}
