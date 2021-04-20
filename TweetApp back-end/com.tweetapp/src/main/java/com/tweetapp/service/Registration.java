package com.tweetapp.service;

import java.util.List;

import com.tweetapp.model.User;

public interface Registration {
	User registerUser(User user) throws Exception;
	User findUserByEmail(String email) throws Exception;
	boolean validateuser(String email , String password) throws Exception;
	User getUser(String email) throws Exception;
	List<User> getAllUser() throws Exception;
}
