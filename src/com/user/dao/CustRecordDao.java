package com.user.dao;

import java.util.List;

import com.struts.form.SelectCustForm;
import com.struts.form.SelectCustRecordForm;
import com.user.model.CustObject;
import com.user.model.CustRecordObject;
import com.user.model.User;


public interface CustRecordDao{


	public List findUser() throws Exception;
	public int createUser(User user) throws Exception;
	public List<CustRecordObject> selectCustRecord(SelectCustRecordForm selectCustRecordForm) throws Exception;
	public int saveCust(SelectCustForm selectCustForm) throws Exception;
	public CustObject selectCustByID(String  custid) throws Exception;
	public int editCust(SelectCustForm selectCustForm) throws Exception;
	public int deleteCust(String  custid) throws Exception;
}
