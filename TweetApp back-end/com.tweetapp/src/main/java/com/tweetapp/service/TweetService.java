package com.tweetapp.service;

import java.util.List;

import com.tweetapp.model.Tweet;

public interface TweetService {

	Tweet createTweet(Tweet tweet) throws Exception;
	List<Tweet> getAllTweets()  throws Exception;
}
