package com.tweetapp.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tweetapp.model.User;
import com.tweetapp.repository.UserRepository;

@Service
public class RegistrationImpl implements Registration{
	@Autowired
    private UserRepository userRepository;


	@Override
	public User registerUser(User user) throws Exception {
		user = userRepository.save(user);
        return user;
	}


	@Override
	public User findUserByEmail(String email) throws Exception {
		return userRepository.findByEmail(email);
	}


	public boolean validateuser(String email, String password) throws Exception {
		User user=userRepository.findByEmail(email);
		if(user==null)
		return false;
		String pass=user.getPassword();
		if(password!=null && password.equals(pass)) {
			return true;
		}
		return false;
	}
	@Override
	public User getUser(String email) throws Exception {
		User user = userRepository.findByEmail(email);
        return user;
    }


	@Override
	public List<User> getAllUser() throws Exception {
		List<User> users = userRepository.findAll();
        return users;
	}
	
	public ResponseEntity<User> forgetPassword(User request) {
		User response = new User();
//		1. Check the Date of birth is Correct or not
		String emailID = request.getEmail();
		Date dob = request.getDob();
		if(!dobCheck(emailID, dob)) {
			response.setResponse_message("Provided Date of birth is incorrect");
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}
//		2. Store the new password to the DB
		response.setResponse_message("New password set successfully");
		return new ResponseEntity<>(response,HttpStatus.OK);
		
	}
	
	public ResponseEntity<User> resetPassword(User request) {
		User response = new User();
//		1. Check the old the password is correct or not 
		String emailId = request.getEmail();
		String oldPassword = request.getPassword();
		if(!oldPasswordCheck(emailId, oldPassword)) {
			response.setResponse_message("Provided password is incorrect");
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}
//		2. Store the new password to the DB
		response.setResponse_message("New password set successfully");
		return new ResponseEntity<>(response,HttpStatus.OK);
		
	}
	public boolean dobCheck(String emailId, Date dob) {
		User userData = getUserDetailsFromDb(emailId);
		if(userData==null)
			return false;
		if((dob.toString()).equals((userData.getDob()).toString()))
			return true;
		return false;
		
	}
	public User getUserDetailsFromDb(String email) {
		User userData = userRepository.findByEmail(email);
		return userData;
	}
	
	public boolean oldPasswordCheck(String emailId, String oldPassword) {
		User userData = getUserDetailsFromDb(emailId);
		if(userData==null)
			return false;
		if(oldPassword.equals(userData.getPassword()))
			return true;
		return false;
		
	}
}
