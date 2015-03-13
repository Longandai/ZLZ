

package com.user.service;


import java.util.List;

import com.user.model.User;



public interface UserManager  {

	

	
	public List findUser() throws Exception;
	public int createUser(User user) throws Exception;
	public boolean selectUser(User user) throws Exception;
	


}
