<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean"%> 
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html"%>
 <%
 	String s=(String)request.getAttribute("s");
  %>
<html> 
	<head>
		<title>元数据管理系统</title>
		<link rel="stylesheet" href="./public/new/input.css" type="text/css">
		<link rel="stylesheet" href="./public/new/text.css" type="text/css">
		<link rel="stylesheet" href="./public/new/text.css" type="text/css">
		<link rel="stylesheet" href="./public/new/img_bg.css" type="text/css">
	</head>
	
	<body bgcolor="#FFFFFF" text="#000000" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
		<html:form action="userForm.do?method=userLogin" method="post">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
				  <tr> 
				    <td height="57" colspan="3">&nbsp;</td>
				  </tr>
				  <tr> 
				    <td height="366" width="12%">&nbsp;</td>
				    <td height="366" class="login_bg" width="75%" valign="bottom"> 
				      
				    </td>
				    <td height="366" width="13%">&nbsp;</td>
				  </tr>
				  
				  <tr> 
				    <td   width="12%">&nbsp;</td>
				    <td  width="75%" align="center">
				    	<table width="100%" border="0" cellspacing="0" cellpadding="0" >
				        <tr> 
				          <td colspan="6" >&nbsp; </td>
				        </tr>
				        <tr> 
				          <td width="20%">&nbsp;</td>
				          <td width="8%"><img src="images/new/user.gif" width="62" ></td>
				          <td width="17%"> 
				            <input type="text" name="username" class="login_input" size="16" onFocus=this.select() onMouseOver=this.focus() onClick=this.value='' value="请输入用户名">
				          </td>
				          <td width="8%"><img src="images/new/password.gif" width="62" ></td>
				          <td width="18%"> 
				            <input type="password" name="userpassword" class="login_input" size="16" onFocus=this.select() onMouseOver=this.focus() onClick=this.value='' onkeydown="if(event.keyCode==13) onSave();">
				          </td>
				          <td width="29%">
				          	<img src="images/new/login_bt.gif" style="cursor:hand;" width="53"  onClick="onSave();">
				          </td>
				        </tr>
				      </table>
				     </td>
				    <td   width="13%">&nbsp;</td>
				  </tr>
				  <tr> 
				    <td  width="12%">&nbsp;</td>
				    <td   width="75%" align="center" height="50"> 
				      <%if("1".equals(s)){ %>
				      		<font color="red" >账户密码错误!请重新输入！</font>
				      <%} %>
				    </td>
				    <td  width="13%">&nbsp;</td>
				  </tr>
				</table>
	</html:form>
</body>
</html>
<script type="text/javascript">
function onSave(){
	
	if(document.userFormForm.username.value==''){
		alert('请输入用户名');return;
	}
	if(document.userFormForm.userpassword.value==''){
		alert('请输入密码');return;
	}
	document.userFormForm.submit();
}
</script>
