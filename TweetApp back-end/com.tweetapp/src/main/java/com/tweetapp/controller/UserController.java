package com.tweetapp.controller;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.enumeration.Status;
import com.tweetapp.model.User;
import com.tweetapp.service.RegistrationImpl;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	private static final Logger LOG = Logger.getLogger(UserController.class.getName());
	@Autowired
	private RegistrationImpl registrationImpl;

	// To register as a new user
	@PostMapping(path = "/api/v1.0/tweets/register")
	public Status registerUser(@RequestBody User user) throws Exception {
		String tempemailId = user.getEmail();

		if (tempemailId != null && !"".equals(tempemailId)) {
			User userobj = registrationImpl.findUserByEmail(tempemailId);
			System.out.println(tempemailId);
			if (userobj != null) {
				LOG.info("User already exists");
				return Status.USER_ALREADY_EXISTS;
			} else {
				LOG.info("User has been successfully registered");
				userobj = registrationImpl.registerUser(user);
				return Status.SUCCESS;
			}
		}
		return Status.FAILURE;

	}

	@PostMapping(path = { "/api/v1.0/tweets/login" })
	public Status validateUser(@RequestBody User user) throws Exception {
		String mail = user.getEmail();
		String pswd = user.getPassword();
		if (registrationImpl.validateuser(mail, pswd)) {
			user.setLogged_in(true);
			LOG.info("User logged in successfully");
			return Status.SUCCESS;
		} else {
			LOG.info("User has entered wrong credentials");
			return Status.FAILURE;
		}
	}

	// search user with email
	@GetMapping(path = { "/api/v1.0/tweets/user/search/{email}" })
	public User getUser(@PathVariable String email) throws Exception {
		LOG.info("User found by email");
		return registrationImpl.findUserByEmail(email);
	}

	// view all users
	@GetMapping(path = { "/api/v1.0/tweets/users/all" })
	public List<User> getAllUsers() throws Exception {
		LOG.info("all users list");
		return registrationImpl.getAllUser();
	}

	// Forgot Password
	@PostMapping("/api/v1.0/tweets/forgot/{email}")
	public ResponseEntity<User> forgetPassword(User request) {
		LOG.info("user forgot password flow entered");
		return registrationImpl.forgetPassword(request);

	}

	@PostMapping("/api/v1.0/tweets/reset_password")
	public ResponseEntity<User> resetPassword(User request) {
		LOG.info("Reset your password");
		return registrationImpl.resetPassword(request);

	}

}
