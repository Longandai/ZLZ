

package com.user.service.imp;

import java.util.List;

import com.struts.form.SelectCustForm;
import com.user.dao.CustDao;
import com.user.dao.UserDao;
import com.user.model.CustObject;
import com.user.model.User;
import com.user.service.CustManager;
import com.user.service.UserManager;



public class CustManagerImpl  implements
		CustManager {
	private CustDao custDao;

	

	public void setCustDao(CustDao custDao) {
		this.custDao = custDao;
	}
	public List findUser() throws Exception {
		return custDao.findUser();

	}
	public int createUser(User user) throws Exception{
		 return custDao.createUser(user);
	}
	
	public List<CustObject> selectCust(SelectCustForm selectCustForm) throws Exception{
		return custDao.selectCust(selectCustForm);
	}
	public int saveCust(SelectCustForm selectCustForm) throws Exception{
		return custDao.saveCust(selectCustForm);
	}
	public CustObject selectCustByID(String  custid) throws Exception{
		return custDao.selectCustByID(custid);
	}
	public int editCust(SelectCustForm selectCustForm) throws Exception{
		return custDao.editCust(selectCustForm);
	}
	public int deleteCust(String  custid) throws Exception{
		return custDao.deleteCust(custid);
	}


	

	

}
