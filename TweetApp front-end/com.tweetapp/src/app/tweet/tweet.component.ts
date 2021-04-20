import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  tweetForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  

constructor(private api: TwitterService ,private formBuilder: FormBuilder) { }

ngOnInit() {

 this.tweetForm = this.formBuilder.group({
          tweetdata: ['', Validators.required]
      });

}


get f() { return this.tweetForm.controls;}

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.tweetForm.invalid) {
          return;
      }

      this.loading = true;
      this.api.tweetUserFromremote(this.f.tweetdata.value)
          .pipe(first())
          .subscribe(
              data => {
                  console.log("yes")
                  this.loading = false;

              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }

}
