

package com.user.service.imp;

import java.util.List;

import com.user.dao.UserDao;
import com.user.model.User;
import com.user.service.UserManager;



public class UserManagerImpl  implements
		UserManager {
	private UserDao userDao;

	

	
	public List findUser() throws Exception {
		return userDao.findUser();

	}
	public int createUser(User user) throws Exception{
		 return userDao.createUser(user);
	}



	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	
	public boolean selectUser(User user) throws Exception{
		return userDao.selectUser(user);
	}



	

	

}
