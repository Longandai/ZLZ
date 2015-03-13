

package com.user.service.imp;

import java.util.List;

import com.struts.form.SelectCustForm;
import com.struts.form.SelectCustRecordForm;
import com.user.dao.CustDao;
import com.user.dao.CustRecordDao;
import com.user.dao.UserDao;
import com.user.model.CustObject;
import com.user.model.CustRecordObject;
import com.user.model.User;
import com.user.service.CustManager;
import com.user.service.CustRecordManager;
import com.user.service.UserManager;



public class CustRecordManagerImpl  implements
		CustRecordManager {
	private CustRecordDao custRecordDao;

	public void setCustRecordDao(CustRecordDao custRecordDao) {
		this.custRecordDao = custRecordDao;
	}

	
	public List findUser() throws Exception {
		return custRecordDao.findUser();

	}
	public int createUser(User user) throws Exception{
		 return custRecordDao.createUser(user);
	}
	
	public List<CustRecordObject> selectCustRecord(SelectCustRecordForm selectCustRecordForm) throws Exception{
		return custRecordDao.selectCustRecord(selectCustRecordForm);
	}
	public int saveCust(SelectCustForm selectCustForm) throws Exception{
		return custRecordDao.saveCust(selectCustForm);
	}
	public CustObject selectCustByID(String  custid) throws Exception{
		return custRecordDao.selectCustByID(custid);
	}
	public int editCust(SelectCustForm selectCustForm) throws Exception{
		return custRecordDao.editCust(selectCustForm);
	}
	public int deleteCust(String  custid) throws Exception{
		return custRecordDao.deleteCust(custid);
	}

	


	

	

}
