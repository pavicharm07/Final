package com.tweetapp.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.tweetapp.model.ReplyTweet;
import com.tweetapp.model.TweetReply;
import com.tweetapp.model.Tweets;
import com.tweetapp.repository.TweetsRepo;

@Service
public class TweetsService {
	@Autowired
	TweetsRepo tweetsRepo;

	@Autowired
	MongoTemplate mongoTemplate;

	public void updateUserTweet(String username, String id, Tweets data) throws Exception {
		Query query = new Query();
		query.addCriteria(
				new Criteria().andOperator(Criteria.where("tweetId").is(id), Criteria.where("loginId").is(username)));
		Update update = new Update();
		update.set("tweet", data.getTweet());
		mongoTemplate.updateFirst(query, update, Tweets.class);

	}

	public List<Tweets> getTweetsOfAllUser() {
		List<Tweets> userTweet = tweetsRepo.findAll();
		return userTweet;
	}

	public void deleteUserTweet(String tweetId) {
		tweetsRepo.deleteByTweetId(tweetId);
	}

	public void likeUserTweet(String tweetId, String userName) {
		Tweets tweet = tweetsRepo.findByTweetId(tweetId);
		List<String> likes = tweet.getLikes();
		likes.add(userName);
		int like = tweet.getLikeCount();
		like = like + 1;
		tweet.setLikeCount(like);
		tweet.setLikes(likes);
		tweetsRepo.save(tweet);
	}

	public void replyUserTweet(String username, String tweetId, ReplyTweet replyTweet) {
		Tweets tweet = tweetsRepo.findByTweetId(tweetId);
		TweetReply tweetReply = new TweetReply();
		tweetReply.setUsername(username);
		tweetReply.setReply(replyTweet.getReply());
		tweet.getReply().add(tweetReply);
		tweetsRepo.save(tweet);

	}

	public List<Tweets> findTweetsByUserName(String userName) {
		List<Tweets> userTweet = tweetsRepo.findByLoginId(userName);
		return userTweet;
	}

	public  Tweets postUserTweets(Tweets tweet) {
		UUID uuid = UUID.randomUUID();
		tweet.setTweetId(uuid.toString());
		Tweets save = tweetsRepo.save(tweet);
		return save;
		
	}

	
}
