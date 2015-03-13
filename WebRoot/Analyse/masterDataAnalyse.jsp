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
	<h3>血缘与影响分析</h3>
</dt>
<dd class="tab1">

		
		<table bordercolordark="#FFFFFF" bordercolorlight="#E8E8E8"	cellspacing="0" >
			<tr>
				<td>
					&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="alysDomain" value="表">
					<input type="button" name="Submit" class="NEUDwButton" value=" 查询 " onclick="selectAlys();">
				</td>
			</tr>
			<tr>
				<td>
					<table width="95%" cellspacing="0" >
						<tr>
							<td valign="middle"  rowspan="2" width="200px">
								<select name="roles" size="20" style="width:200px;height: 180px"  multiple>
								</select>
							</td>
							
							<td align="center" valign="middle" nowrap>

								<input type="button" name="Submit" class="NEUDwButton" value=" 添加 " onclick="add()">

										
							</td>
							
							<td  valign="middle" rowspan="2" nowrap>
								<select name="purviews" size="20" style="width:180px;height: 180px" multiple>
								</select>					
							</td>
						</tr>
						
						
					</table>
				</td>
			</tr>
		</table>
		
		

</dd>
<script type="text/javascript">

</script>
</body>
</html>
