package com.user.dao;

import java.util.List;

import com.user.model.User;


public interface UserDao{


	public List findUser() throws Exception;
	public int createUser(User user) throws Exception;
	public boolean selectUser(User user) throws Exception;
}
