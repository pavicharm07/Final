package com.tweetapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.tweetapp.model.Users;
import com.tweetapp.repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo userRegistration;

	@Autowired
	MongoTemplate mongoTemplate;

	public void userRegistration(Users data) {
		// Users user = userRegistration.findByEmail(data.getEmail());
		// user.setPassword(data.getPassword());
		userRegistration.save(data);
	}

	public Users getDetailsByEmail(String userName) {
		Users user = userRegistration.findByEmail(userName);
		return user;
	}

	public void forgotUserPassword(String username, Users user) throws Exception {
		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(username));
		Update update = new Update();
		update.set("password", user.getPassword());
		mongoTemplate.updateFirst(query, update, Users.class);

	}

	public Optional<Users> findUserByLoginId(String username) {
		return userRegistration.findById(username);

	}

	public List<Users> searchUserByUserName(String userName) {
		Query query = new Query();
		query.addCriteria(Criteria.where("loginId").regex("^" + userName));
		List<Users> users = mongoTemplate.find(query, Users.class);
		return users;

	}

	public List<Users> getAllUsers() {
		List<Users> user = userRegistration.findAll();
		return user;
	}

	public boolean loginById(Users userIn) {
		Users user = userRegistration.findByEmail(userIn.getEmail());

		if (user.getPassword().equals(userIn.getPassword())) {
			return true;
		}

		return false;

	}

}
