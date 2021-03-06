

package com.user.service;


import java.util.List;

import com.struts.form.SelectCustForm;
import com.user.model.CustObject;
import com.user.model.User;



public interface CustManager  {

	

	
	public List findUser() throws Exception;
	public int createUser(User user) throws Exception;
	public List<CustObject> selectCust(SelectCustForm selectCustForm) throws Exception;
	public int saveCust(SelectCustForm selectCustForm) throws Exception;
	public CustObject selectCustByID(String  custid) throws Exception;
	public int editCust(SelectCustForm selectCustForm) throws Exception;
	public int deleteCust(String  custid) throws Exception;
}
