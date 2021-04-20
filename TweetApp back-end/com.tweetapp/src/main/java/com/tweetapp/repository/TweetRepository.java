package com.tweetapp.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tweetapp.model.Tweet;

public interface TweetRepository extends MongoRepository<Tweet, String>{

}
