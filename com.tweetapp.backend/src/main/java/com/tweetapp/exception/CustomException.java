package com.tweetapp.exception;

public class CustomException extends RuntimeException {

	private String message;

	CustomException() {
	}

	public CustomException(String message) {
		this.message = message;

	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
