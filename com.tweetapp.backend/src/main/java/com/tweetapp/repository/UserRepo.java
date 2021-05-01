package com.tweetapp.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.tweetapp.model.Users;

public interface UserRepo extends MongoRepository<Users, String> {

	Users findByEmail(String userName);

	List<Users> findAll();

	List<Users> findByLoginId(String userName);

}