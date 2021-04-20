package com.tweetapp.model;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="User")
public class User {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private String id;
	 private String firstName;
	 private String lastName;
	 private String email;
	 private String password;
	 private Date dob;
	 private String contact_Number;
	 @Field
	 private Boolean logged_in=false;
	 private String response_message;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getContact_Number() {
		return contact_Number;
	}
	public void setContact_Number(String contact_Number) {
		this.contact_Number = contact_Number;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public Boolean getLogged_in() {
		return logged_in;
	}
	public void setLogged_in(Boolean logged_in) {
		this.logged_in = logged_in;
	}
	public String getResponse_message() {
		return response_message;
	}
	public void setResponse_message(String response_message) {
		this.response_message = response_message;
	}
	public User orElseThrow(Object object) {
		// TODO Auto-generated method stub
		return null;
	}
	 
	}