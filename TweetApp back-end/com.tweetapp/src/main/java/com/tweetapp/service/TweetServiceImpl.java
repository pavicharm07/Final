package com.tweetapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tweetapp.model.Tweet;
import com.tweetapp.repository.TweetRepository;

@Service
public class TweetServiceImpl implements TweetService{

	@Autowired
	private TweetRepository tweetrepo;
	
	@Override
	public Tweet createTweet(Tweet tweet) throws Exception {
		// TODO Auto-generated method stub
		return tweetrepo.save(tweet);
	}

	@Override
	public List<Tweet> getAllTweets() {
		List<Tweet>tweets =tweetrepo.findAll();
		return tweets;
	}

	public Optional<Tweet> findById(String id) {
		return tweetrepo.findById(id);
	}

}
