package com.user.model;

import java.util.Date;
/**
 * @hibernate.class table="ZLZ_USER" dynamic-update="true"
 *                  dynamic-insert="true"
 */
public class User {

	

	public String userid;             //用户ID

	public String username;
	public String userpassword;
	public Date usercreate;          //创建时间
	public String userceateby;
	public String deleteflag;
	
	
	/**
	 * @hibernate.id column="userid" length="20" generator-class="assigned"
	 *               unsaved-value="null"
	 */
	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}
	/**
	 * @hibernate.property column="username" 
	 */
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	/**
	 * @hibernate.property column="userpassword" 
	 */
	public String getUserpassword() {
		return userpassword;
	}

	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}
	/**
	 * @hibernate.property column="usercreate" 
	 */
	public Date getUsercreate() {
		return usercreate;
	}

	public void setUsercreate(Date usercreate) {
		this.usercreate = usercreate;
	}
	/**
	 * @hibernate.property column="userceateby" 
	 */
	public String getUserceateby() {
		return userceateby;
	}

	public void setUserceateby(String userceateby) {
		this.userceateby = userceateby;
	}
	/**
	 * @hibernate.property column="deleteflag" 
	 */
	public String getDeleteflag() {
		return deleteflag;
	}

	public void setDeleteflag(String deleteflag) {
		this.deleteflag = deleteflag;
	}

	

	


}
