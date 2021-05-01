package com.tweetapp.exception;

public class CustomExceptionSchema {

	private String message;

	CustomExceptionSchema() {
	}

	public CustomExceptionSchema(String message) {
		this.message = message;

	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
