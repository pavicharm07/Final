package com.tweetapp.controller;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.model.Tweet;
import com.tweetapp.model.User;
import com.tweetapp.repository.TweetRepository;
import com.tweetapp.service.RegistrationImpl;
import com.tweetapp.service.TweetServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(consumes = "application/json", produces = "application/json")
public class TweetController {
	private static final Logger LOG = Logger.getLogger(TweetController.class.getName());
	private static final String TOPIC="kafka_example";

	@Autowired
	KafkaTemplate<String,String>kafkaTemplate;
	
	@Autowired
	private TweetServiceImpl tweetService;

	@Autowired
	private RegistrationImpl usercontroller;

	@Autowired
	private TweetRepository tweetrepo;

	// create a tweet or post a tweet
	@PostMapping("/api/v1.0/tweets/add")
	public Tweet createTweets(@Valid @RequestBody Tweet tweet, User user) throws Exception {
		
		String email = user.getEmail();
		String password = user.getPassword();
		if (usercontroller.validateuser(email, password)) {
			LOG.info("Tweet created");
			
			return tweetService.createTweet(tweet);
		} else {
			return tweet;
		}

	}
	
	// get all tweets
	@GetMapping("/api/v1.0/tweets/all")
	public List<Tweet> getAllTweet() {
		LOG.info("All Tweets");
		return tweetService.getAllTweets();
	}

	// get tweets by email
	@GetMapping("/api/v1.0/tweets/{email}")
	public ResponseEntity<Tweet> getTweetByemail(@PathVariable(value = "email") String email) {
		LOG.info("get tweets by email");
		return tweetrepo.findById(email).map(savedTweet -> ResponseEntity.ok(savedTweet))
				.orElseGet(() -> ResponseEntity.notFound().build());
	}

	// Edit/update a tweet
	@PutMapping("/api/v1.0/tweets/update/{email}")
	public ResponseEntity<Tweet> updateUser(@PathVariable(value = "id") String id,
			@Valid @RequestBody User userDetails, Tweet tweet) throws Exception {
		User user = usercontroller.findUserByEmail(id);
		user.setEmail(userDetails.getEmail());
		user.setLastName(userDetails.getLastName());
		user.setFirstName(userDetails.getFirstName());
		final Tweet updatedUser = tweetService.createTweet(tweet);
		return ResponseEntity.ok(updatedUser);
	}

}
