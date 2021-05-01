package com.tweetapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.exception.CustomException;
import com.tweetapp.model.ReplyTweet;
import com.tweetapp.model.Tweets;
import com.tweetapp.model.Users;
import com.tweetapp.service.TweetsService;
import com.tweetapp.service.UserService;

@RestController
@CrossOrigin("*")
public class TweetAppController {
	@Autowired
	TweetsService tweetsService;

	@Autowired
	UserService userService;

	@GetMapping("/api/v1.0/tweets/all")
	public ResponseEntity<List<Tweets>> getAllUserTweets() throws Exception {
		return new ResponseEntity<>(tweetsService.getTweetsOfAllUser(), HttpStatus.OK);
	}

	@GetMapping("/api/v1.0/tweets/{username}")
	public ResponseEntity<List<Tweets>> getAllTweetsOfTheUser(@PathVariable("username") String userName) {
		return new ResponseEntity<>(tweetsService.findTweetsByUserName(userName), HttpStatus.OK);
	}

	@PostMapping("/api/v1.0/tweets/{username}/add")
	public ResponseEntity<?> postUserTweet(@PathVariable String username, @RequestBody Tweets tweet) throws Exception {

		if (username != null ) {
			Tweets postUserTweets = tweetsService.postUserTweets(tweet);
			return new ResponseEntity<>(postUserTweets, HttpStatus.OK);
		} else {
			throw new CustomException("incorrect details");
		}
	}

	@PostMapping("/api/v1.0/tweets/login")
	public ResponseEntity<?> postUserTweet(@RequestBody Users user) throws Exception {

		boolean loginById = userService.loginById(user);

		if (loginById) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

	}

	@PutMapping("/api/v1.0/tweets/{username}/update/{id}")
	public ResponseEntity<?> updateUserTweet(@PathVariable String username, @PathVariable String id,
			@RequestBody Tweets data) throws Exception {
		tweetsService.updateUserTweet(username, id, data);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/api/v1.0/tweets/{username}/delete/{id}")
	public ResponseEntity<?> deleteUserTweet(@PathVariable String username, @PathVariable String id) {
		tweetsService.deleteUserTweet(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PutMapping("/api/v1.0/tweets/{username}/like/{id}")
	public ResponseEntity<?> likeUserTweet(@PathVariable String username, @PathVariable String id) {
		tweetsService.likeUserTweet(id, username);
		return new ResponseEntity<>(HttpStatus.OK);

	}

	@PostMapping("/api/v1.0/tweets/{username}/reply/{id}")
	public ResponseEntity<?> userReplyTweet(@PathVariable String username, @PathVariable String id,
			@RequestBody ReplyTweet replyTweet) {
		tweetsService.replyUserTweet(username, id, replyTweet);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PostMapping("/api/v1.0/tweets/{username}/forgot")
	public ResponseEntity<?> forgotPassword(@PathVariable String username, @RequestBody Users user) throws Exception {
		userService.forgotUserPassword(username, user);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PostMapping("/api/v1.0/tweets/register")
	public ResponseEntity<?> newUserRegistration(@RequestBody Users user) {
		userService.userRegistration(user);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("/api/v1.0/tweets/users/all")
	public ResponseEntity<List<Users>> getAllUsers() {
		return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
	}

	@GetMapping("/api/v1.0/tweets/user/search/{username}")
	public ResponseEntity<?> searchUserByUserName(@PathVariable String username) {
		List<Users> user = userService.searchUserByUserName(username);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
}
