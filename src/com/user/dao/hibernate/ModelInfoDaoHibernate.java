package com.user.dao.hibernate;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Transaction;
import org.hibernate.classic.Session;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.user.dao.CustRecordDao;
import com.user.dao.ModelInfoDao;
import com.user.model.User;

public class ModelInfoDaoHibernate extends HibernateDaoSupport  implements ModelInfoDao{
    public JdbcTemplate jdbcTemplate;
    
	
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}


	public String getTreeNodes(String id) throws Exception {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
        String hasChildren="";
        StringBuffer Hql = new StringBuffer();
        StringBuffer sb  = new StringBuffer();
		try {  
			Hql.append("select row_id, parent_id, a.class_name,a.has_children from hm_md_model_info a where a.parent_id = '"+id+"' ");
			con = jdbcTemplate.getDataSource().getConnection();
			ps = con.prepareStatement(Hql.toString());
			rs = ps.executeQuery();
    
			sb.append("[");
			while (rs.next()) {
				sb.append("{\"data\":\"").append(rs.getString("class_name"))
				.append("\",\"attr\":{\"id\":").append(
						rs.getString("row_id"));
				sb.append("}");
				hasChildren = rs.getString("has_children");
				if (hasChildren != null
						&& !"".equals(hasChildren)
						&& !hasChildren.equalsIgnoreCase("null")
						&& hasChildren.equals("1")) {
					sb.append(",\"state\":\"closed\"");
				}
		        sb.append("},");
			}
			if (sb.length() > 1) {
				sb.setLength(sb.length() - 1);

			}
			sb.append("]");
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
		return sb.toString();
	}


	public String addNode(String nodeId,String modelName) throws Exception {
        Session s = this.getSessionFactory().openSession();
		Connection con = null;
		PreparedStatement ps = null;
		PreparedStatement ps1=null;
        StringBuffer hql = new StringBuffer();
        StringBuffer hql1 = new StringBuffer();
        int i=0;
        String nodeRowId="";
        Transaction t =null;
		try {  
			t = s.beginTransaction();
			nodeRowId=getRowId();
			hql.append("update hm_md_model_info h set h.has_children='1' where h.row_id='"+nodeId+"'");
			con = jdbcTemplate.getDataSource().getConnection();
			ps = con.prepareStatement(hql.toString());
			i = ps.executeUpdate();
			if(i==1){
				hql1.append(" insert into hm_md_model_info(row_id,class_name,parent_id,has_children,created,last_upd,delete_flag,active_flag) ");
				hql1.append(" values('"+nodeRowId+"','"+modelName+"','"+nodeId+"','0',sysdate,sysdate,'0','1') ");
				ps1 = con.prepareStatement(hql1.toString());
				i=ps1.executeUpdate();
			}
			t.commit();
		} catch (DataAccessException e) {
			i=0;
			if (t != null)
				t.rollback();
			e.printStackTrace();
			return "0";
		} finally {
			s.close();
			if (ps != null)
				ps.close();
			if (ps1 != null)
				ps1.close();
			if (con != null)
				con.close();
		}
		
		return nodeRowId;

		
	}
	public String getRowId() throws Exception {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
        StringBuffer hql = new StringBuffer();
		try {  
			hql.append("select SEQ_MODEL.Nextval nodeRowId from dual");
			con = jdbcTemplate.getDataSource().getConnection();
			ps = con.prepareStatement(hql.toString());
			rs=ps.executeQuery();
			while(rs.next()){
				return rs.getString("nodeRowId");
			}

		} catch (DataAccessException e) {
			
			e.printStackTrace();
		} finally {
			
			if (ps != null)
				ps.close();
			if (con != null)
				con.close();
		}
		return null;
	}


	public String selectNodeName(String nodeId) throws Exception {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
        StringBuffer hql = new StringBuffer();
		try {  
			hql.append("select h.class_name from hm_md_model_info h where h.row_id='"+nodeId+"'");
			con = jdbcTemplate.getDataSource().getConnection();
			ps = con.prepareStatement(hql.toString());
			rs=ps.executeQuery();
			while(rs.next()){
				return rs.getString("class_name");
			}

		} catch (DataAccessException e) {
			
			e.printStackTrace();
		} finally {
			
			if (ps != null)
				ps.close();
			if (con != null)
				con.close();
		}
		return null;
	}


	public String updateNode(String nodeId, String modelName) throws Exception {
		Session s = this.getSessionFactory().openSession();
		Connection con = null;
		PreparedStatement ps = null;
        StringBuffer hql = new StringBuffer();
        StringBuffer hql1 = new StringBuffer();
        ResultSet rs = null;
        int i=0;
        Transaction t =null;
		try {  
			t = s.beginTransaction();
			hql.append("update hm_md_model_info h set h.class_name='"+modelName+"' where h.row_id='"+nodeId+"'");
			con = jdbcTemplate.getDataSource().getConnection();
			ps = con.prepareStatement(hql.toString());
			i = ps.executeUpdate();
			if(i==1){
				hql1.append("select h.parent_id from hm_md_model_info h where h.row_id='"+nodeId+"'");
				con = jdbcTemplate.getDataSource().getConnection();
				ps = con.prepareStatement(hql1.toString());
				rs=ps.executeQuery();
				while(rs.next()){
					return rs.getString("parent_id");
				}
			}
			t.commit();
		} catch (DataAccessException e) {
			i=0;
			if (t != null)
				t.rollback();
			e.printStackTrace();
			return "E";
		} finally {
			s.close();
			if (ps != null)
				ps.close();
			if (con != null)
				con.close();
		}
		
		return "E";

		
	}


	public String deleteNode(String nodeId, String parentId) throws Exception {
		Session s = this.getSessionFactory().openSession();
		Connection con = null;
		PreparedStatement ps = null;
        StringBuffer hql = new StringBuffer();
        int i=0;
        Transaction t =null;
		try {  
			t = s.beginTransaction();
			hql.append("delete from hm_md_model_info h where h.row_id='"+nodeId+"'");
			con = jdbcTemplate.getDataSource().getConnection();
			ps = con.prepareStatement(hql.toString());
			i = ps.executeUpdate();
			
			t.commit();
		} catch (DataAccessException e) {
			i=0;
			if (t != null)
				t.rollback();
			e.printStackTrace();
			return "E";
		} finally {
			s.close();
			if (ps != null)
				ps.close();
			if (con != null)
				con.close();
		}
		
		return String.valueOf(i);
	}
	
	
}
