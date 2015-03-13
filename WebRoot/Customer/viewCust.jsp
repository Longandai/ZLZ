<%@ page language="java" pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.user.model.CustObject"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean"%> 
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html"%>
<%
	List list = (ArrayList)request.getAttribute("list");
	CustObject custObject;
	
	String f = "";
	f=(String)request.getAttribute("flag");
 %>
<html> 
	<head>
		<title>客户管理系统</title>
		<link rel="stylesheet" href="./public/new/input.css" type="text/css">
		<link rel="stylesheet" href="./public/new/text.css" type="text/css">
		<link rel="stylesheet" href="./public/new/text.css" type="text/css">
		<link rel="stylesheet" href="./public/new/img_bg.css" type="text/css">
	</head>
	
	<body>
<dt>
	<h3>增加客户</h3>
</dt>
<dd class="tab1">
<html:form action="selectCust.do?method=saveCust" method="post">
    		<html:hidden property="custid"/>
			<table class="form_table">
			<tr>
			<td  colspan="13">
			<a class="abn db l" href="#" onclick="saveCust();">保存</a>
			<a class="abn db l" href="#" onclick="selectc();">返回</a>
			</td>
			</tr>
				<tr>
					<td  nowrap="nowrap" align="center">客户姓名：</td>
					<td >
						<html:text property="custname"/>
					</td>
					<td nowrap="nowrap" align="center">手机号：</td>
					<td align="left">
						<html:text property="phonenumber1"/>
					</td>
				</tr>
				<tr>
					<td  nowrap="nowrap" align="center">固定电话：</td>
					<td >
						<html:text property="phonenumber2"/>
					</td>
					<td nowrap="nowrap" align="center">地址：</td>
					<td align="left">
						<html:text property="address"/>
					</td>
				</tr>
				<tr>
					<td  nowrap="nowrap" align="center">性别：</td>
					<td >
						<html:select property="sex">
							<html:option value=""></html:option>
							<html:option value="1">男</html:option>
							<html:option value="2">女</html:option>
						</html:select>
					</td>
					<td nowrap="nowrap" align="center">联系间隔：</td>
					<td align="left">
						<html:text property="interval" size="1"/> 天
					</td>
				</tr>
				<tr>
					<td  nowrap="nowrap" align="center">备注：</td>
					<td colspan="3">
						<html:textarea property="remark" rows="3"></html:textarea>
					</td>
					
				</tr>
				
			</table>
</html:form>
</dd>
<script type="text/javascript">
function selectCust(){

	document.selectCustForm.submit();
}

function saveCust(){
	document.selectCustForm.submit();
}
var ff='<%=f%>'
if(ff!=''){
	if (ff=='1'){
		alert("增加成功!");
	}else if(ff=='2'){
		alert("更新成功!");
	}
}
function selectc(){

	
	document.selectCustForm.action="<%=request.getContextPath()%>/selectCust.do?method=selectCust&&cf=2";
	document.selectCustForm.submit();
}

</script>
</body>
</html>
