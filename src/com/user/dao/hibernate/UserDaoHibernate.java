
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

import com.user.dao.UserDao;
import com.user.model.User;



public class UserDaoHibernate extends HibernateDaoSupport  implements UserDao {
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
	
public boolean selectUser(User user) throws Exception {
			
		Connection connection = null;
		CallableStatement callableStatement = null;
		ResultSet rs = null;
		try {
			connection = jdbcTemplate.getDataSource().getConnection();			
			connection.setAutoCommit(false);
			callableStatement = connection.prepareCall("select h.* from zlz_user h where h.username=? and h.userpassword=?");
			callableStatement.setString(1, user.getUsername());
			callableStatement.setString(2, user.getUserpassword());
			callableStatement.execute();
			rs = callableStatement.getResultSet();
			if  (rs.next()) {
				//rs.getString("employeeid")
				return true;
			}
	} catch (SQLException e) {
		e.printStackTrace();
		return false;
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
	return false;
	}
		

}
