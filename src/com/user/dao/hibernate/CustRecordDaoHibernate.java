
package com.user.dao.hibernate;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Transaction;
import org.hibernate.classic.Session;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.struts.form.SelectCustForm;
import com.struts.form.SelectCustRecordForm;
import com.user.dao.CustDao;
import com.user.dao.CustRecordDao;
import com.user.dao.UserDao;
import com.user.model.CustObject;
import com.user.model.CustRecordObject;
import com.user.model.User;



public class CustRecordDaoHibernate extends HibernateDaoSupport  implements CustRecordDao {
	public JdbcTemplate jdbcTemplate;
    
	
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	

	public List findUser() throws Exception {

		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		List list = new ArrayList();

		try {
			StringBuffer Hql = new StringBuffer();

			Hql.append("select t.username,t.userpassword ");
			Hql.append("from zlz_user t");

			con = jdbcTemplate.getDataSource().getConnection();
			ps = con.prepareStatement(Hql.toString());

			rs = ps.executeQuery();

			while (rs.next()) {
				User user=new User();
				user.setUsername(rs.getString("username"));
				user.setUserpassword(rs.getString("userpassword"));
				list.add(user);
			}

			return list;
		} catch (DataAccessException e) {
			throw e;
		} finally {
			if (rs != null)
				rs.close();
			if (ps != null)
				ps.close();
			if (con != null)
				con.close();
		}

	}

	public int createUser(User user) throws Exception {
		Session s = this.getSessionFactory().openSession();
		Connection con = null;
		PreparedStatement ps = null;
		
		Transaction t =null;
		int i=0;
		try {
			t = s.beginTransaction();
			
			StringBuffer Hql = new StringBuffer();

			Hql.append("update zlz_user t set t.userceateby='1' ");

			con = jdbcTemplate.getDataSource().getConnection();
			ps = con.prepareStatement(Hql.toString());

			i = ps.executeUpdate();
			
			t.commit();
		} catch (Exception e) {	
			i=0;
			if (t != null)
				t.rollback();
			e.printStackTrace();
		}finally{
			s.close();
			
			if (ps != null)
				ps.close();
			if (con != null)
				con.close();
		}
		return i;
		
	}
	
	public List<CustRecordObject> selectCustRecord(SelectCustRecordForm selectCustRecordForm) throws Exception {
			
		Connection connection = null;
		CallableStatement callableStatement = null;
		ResultSet rs = null;
		List<CustRecordObject> list=new ArrayList<CustRecordObject>();
		try {
			connection = jdbcTemplate.getDataSource().getConnection();			
			connection.setAutoCommit(false);
			StringBuffer sql=new StringBuffer();
			sql.append("select z2.custid,z2.custname,z2.phonenumber1,z1.contact,z1.contacttime from zlz_contact_record z1,zlz_customer z2 where z1.custid=z2.custid and z1.deleteflag='0' and z2.deleteflag='0' ");
			if(!"".equals(selectCustRecordForm.getCustname()) && selectCustRecordForm.getCustname()!=null){
				sql.append(" and z2.custname like '%"+selectCustRecordForm.getCustname()+"%' ");
			}
			if(!"".equals(selectCustRecordForm.getPhonenumber1()) && selectCustRecordForm.getPhonenumber1()!=null){
				sql.append(" and z2.phonenumber1='"+selectCustRecordForm.getPhonenumber1()+"' ");
			}
			if(!"".equals(selectCustRecordForm.getCustcreatefrom()) && selectCustRecordForm.getCustcreatefrom()!=null){
				sql.append(" and z1.contacttime>='"+selectCustRecordForm.getCustcreatefrom()+"' ");
			}
			if(!"".equals(selectCustRecordForm.getCustcreateto()) && selectCustRecordForm.getCustcreateto()!=null){
				sql.append(" and z1.contacttime<='"+selectCustRecordForm.getCustcreateto()+"' ");
			}
			callableStatement = connection.prepareCall(sql.toString());
			
			callableStatement.execute();
			rs = callableStatement.getResultSet();
			while  (rs.next()) {
				CustRecordObject co=new CustRecordObject();
				co.setCustid(rs.getString("custid"));
				co.setCustname(rs.getString("custname"));
				co.setPhonenumber1(rs.getString("phonenumber1"));
				co.setContact(rs.getString("contact"));
				co.setContacttime(rs.getString("contacttime"));
				list.add(co);
				
			}
	} catch (SQLException e) {
		e.printStackTrace();
		return null;
	} finally {
		try {
			if (connection != null)
				connection.close();
			if (callableStatement != null)
				callableStatement.close();
			if (rs != null)
				rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	return list;
	}
	
	public int saveCust(SelectCustForm selectCustForm) throws Exception {
		
		Session s = this.getSessionFactory().openSession();
		Connection con = null;
		PreparedStatement ps = null;
		
		Transaction t =null;
		int i=0;
		try {
			t = s.beginTransaction();
			
			StringBuffer Hql = new StringBuffer();

			Hql.append("insert into zlz_customer(custid,custname,phonenumber1,phonenumber2,address,sex,remark,interval,custcreate,lastupdate) " +
					" values (CUST_SEQ.NEXTVAL,'"+selectCustForm.getCustname()+"'," +
							"'"+selectCustForm.getPhonenumber1()+"', " +
									"'"+selectCustForm.getPhonenumber2()+"'," +
									"'"+selectCustForm.getAddress()+"'," +
									"'"+selectCustForm.getSex()+"'," +
									"'"+selectCustForm.getRemark()+"'," +
									"'"+selectCustForm.getInterval()+"'," +
									"sysdate,sysdate" +
											")");

			con = jdbcTemplate.getDataSource().getConnection();
			ps = con.prepareStatement(Hql.toString());

			 i=ps.executeUpdate();
			
			t.commit();
		} catch (Exception e) {	
			i=0;
			if (t != null)
				t.rollback();
			e.printStackTrace();
		}finally{
			s.close();
			
			if (ps != null)
				ps.close();
			if (con != null)
				con.close();
		}
		return i;
	}
	
public int editCust(SelectCustForm selectCustForm) throws Exception {
		
		Session s = this.getSessionFactory().openSession();
		Connection con = null;
		PreparedStatement ps = null;
		
		Transaction t =null;
		int i=0;
		try {
			t = s.beginTransaction();
			
			StringBuffer Hql = new StringBuffer();

			Hql.append("update zlz_customer h set h.custname='"+selectCustForm.getCustname()+"',h.phonenumber1='"+selectCustForm.getPhonenumber1()+"',h.phonenumber2='"+selectCustForm.getPhonenumber2()+"',h.address='"+selectCustForm.getAddress()+"',h.sex='"+selectCustForm.getSex()+"',h.interval='"+selectCustForm.getInterval()+"',h.lastupdate=sysdate,h.remark='"+selectCustForm.getRemark()+"' where h.custid='"+selectCustForm.getCustid()+"'");

			con = jdbcTemplate.getDataSource().getConnection();
			ps = con.prepareStatement(Hql.toString());

			 i=ps.executeUpdate();
			
			t.commit();
		} catch (Exception e) {	
			i=0;
			if (t != null)
				t.rollback();
			e.printStackTrace();
		}finally{
			s.close();
			
			if (ps != null)
				ps.close();
			if (con != null)
				con.close();
		}
		return i;
	}
	public CustObject selectCustByID(String  custid) throws Exception {
		
		Connection connection = null;
		CallableStatement callableStatement = null;
		ResultSet rs = null;
		List<CustObject> list=new ArrayList<CustObject>();
		CustObject co=null;
		try {
			connection = jdbcTemplate.getDataSource().getConnection();			
			connection.setAutoCommit(false);
			StringBuffer sql=new StringBuffer();
			sql.append("select h.custid,h.custname,h.phonenumber1,h.phonenumber2,h.address,h.sex,h.remark,h.interval,h.custcreate,h.lastupdate from zlz_customer h where h.custid='"+custid+"'");
			
			callableStatement = connection.prepareCall(sql.toString());
			
			callableStatement.execute();
			rs = callableStatement.getResultSet();
			
			if  (rs.next()) {
				co=new CustObject();
				co.setCustid(rs.getString("custid"));
				co.setCustname(rs.getString("custname"));
				co.setPhonenumber1(rs.getString("phonenumber1"));
				co.setPhonenumber2(rs.getString("phonenumber2"));
				co.setAddress(rs.getString("address"));
				co.setSex(rs.getString("sex"));
				co.setRemark(rs.getString("remark"));
				co.setInterval(rs.getString("interval"));
				co.setCustcreate(rs.getString("custcreate"));
				co.setLastupdate(rs.getString("lastupdate"));
				
				
			}
	} catch (SQLException e) {
		e.printStackTrace();
		return null;
	} finally {
		try {
			if (connection != null)
				connection.close();
			if (callableStatement != null)
				callableStatement.close();
			if (rs != null)
				rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	return co;
	}	

public int deleteCust(String  custid) throws Exception {
		
		Session s = this.getSessionFactory().openSession();
		Connection con = null;
		PreparedStatement ps = null;
		
		Transaction t =null;
		con = jdbcTemplate.getDataSource().getConnection();
		int i=0;
		try {
			t = s.beginTransaction();
			
			StringBuffer Hql1 = new StringBuffer();
			Hql1.append("insert into zlz_customer_his select * from zlz_customer h  where h.custid='"+custid+"'");
			ps = con.prepareStatement(Hql1.toString());
			ps.executeUpdate();
			
			StringBuffer Hql = new StringBuffer();
			Hql.append("delete from zlz_customer h  where h.custid='"+custid+"'");

			
			ps = con.prepareStatement(Hql.toString());

			i=ps.executeUpdate();
			
			t.commit();
		} catch (Exception e) {	
			i=0;
			if (t != null)
				t.rollback();
			e.printStackTrace();
		}finally{
			s.close();
			
			if (ps != null)
				ps.close();
			if (con != null)
				con.close();
		}
		return i;
	}
}
