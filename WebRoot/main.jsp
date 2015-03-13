<%@ page language="java" pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.user.model.CustObject"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean"%> 
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html"%>
<%
	List list = (ArrayList)request.getAttribute("list");
	CustObject custObject;
 %>
<html> 
	<head>
		<title>元数据管理系统</title>
		<link rel="stylesheet" href="./public/new/input.css" type="text/css">
		<link rel="stylesheet" href="./public/new/text.css" type="text/css">
		<link rel="stylesheet" href="./public/new/text.css" type="text/css">
		<link rel="stylesheet" href="./public/new/img_bg.css" type="text/css">
	</head>
	
	<body>
<dt>
	<h3>维护列表</h3>
</dt>
<dd class="tab1">
<html:form action="selectCust.do?method=selectCust" method="post">
    
			<a class="abn db l" href="#" onclick="selectCust();">查询</a>
		
	<table class="form_table">
	
	<tr>
			<th>系统名称缩写:</th>
			<td>
			<html:text property="custname"/>
			</td>
			<th>试图名:</th>
			<td>
			<html:text property="phonenumber1"/>
			<th>创建时间:</th>
			<td>
			<html:text property="custcreatefrom" />
			
			-
			<html:text property="custcreateto" />
			
			</td>
		</tr>
		
	</table>
	<div class="h5"></div>
	<a class="abn db l" href="<%=request.getContextPath() %>/selectCust.do?method=viewCust">新建</a>
	<a class="abn db l" href="#" onclick="editCust();">修改</a>
	<a class="abn db l" href="#" onclick="deleteCust();">删除</a>
	
	<table class="color_table" >
	<thead>
		<tr>
			<th align="center">选择</th>
			<th align="center">系统名称缩写</th>
			<th align="center">手机</th>
			<th align="center">固话</th>
			<th align="center">地址</th>
			<th align="center">性别</th>
			<th align="center">创建时间</th>
			<th align="center">联系间隔</th>
		</tr>

	</thead>
	<tbody>
		<%
			if(list==null){
				
			}else if(list!=null&!list.isEmpty()){
				for(int i=0;i<list.size();i++){
					custObject = new CustObject();
					custObject = (CustObject)list.get(i);
					   
		%>
         <tr>
			<td align="center"><input type="radio" name="qr" value="<%=custObject.getCustid() %>"></td>
			<td><%=custObject.getCustname() %></td>
			<td><%=custObject.getPhonenumber1() %></td>
			<td><%=custObject.getPhonenumber2() %></td>
			<td><%=custObject.getAddress() %></td>
			<td><%=custObject.getSex() %></td>
			<td><%=custObject.getCustcreate() %></td>
			<td><%=custObject.getInterval() %></td>
		</tr>

        <%
        	}
        	}
         %>

	</tbody>
</table>
</html:form>
</dd>
<script type="text/javascript">
function selectCust(){

	document.selectCustForm.submit();
}
function editCust(){
	var iCount=checkCount();
	if(iCount == -1) {
			alert("请选择一条数据");
			return;
	} else if(iCount == 0) {
			alert("请选择一条数据");
			return;
	}else if(iCount > 1) {
			alert("只能选择一条数据");
			return; 
	}
	var custid="";
	if(document.selectCustForm.qr.length>1){
		for(i=0;i<document.selectCustForm.qr.length;i++){
			if(document.selectCustForm.qr[i].checked){
				custid=document.selectCustForm.qr[i].value;
			}
		}
	}else{
		if(document.selectCustForm.qr.checked){
			custid=document.selectCustForm.qr.value;
		}
	}
	
	document.selectCustForm.action = "<%=request.getContextPath()%>/selectCust.do?method=editCust&actionflag=edit&custid="+custid;
	document.selectCustForm.submit();
}
function checkCount(){
	var intCount=0;
	if((typeof document.selectCustForm.qr)!="undefined"){
		if(document.selectCustForm.qr.length>1){
			for(i=0;i<document.selectCustForm.qr.length;i++){
				if(document.selectCustForm.qr[i].checked){
					intCount=intCount+1;
				}
			}
		}else{
			if(document.selectCustForm.qr.checked){
					intCount++;
			}
		}
	}else{
		return -1;
	}
	return intCount;
}

function deleteCust(){
	var iCount=checkCount();
	if(iCount == -1) {
			alert("请选择一条数据");
			return;
	} else if(iCount == 0) {
			alert("请选择一条数据");
			return;
	}else if(iCount > 1) {
			alert("只能选择一条数据");
			return; 
	}
	var custid="";
	if(document.selectCustForm.qr.length>1){
		for(i=0;i<document.selectCustForm.qr.length;i++){
			if(document.selectCustForm.qr[i].checked){
				custid=document.selectCustForm.qr[i].value;
			}
		}
	}else{
		if(document.selectCustForm.qr.checked){
			custid=document.selectCustForm.qr.value;
		}
	}
	
	document.selectCustForm.action = "<%=request.getContextPath()%>/selectCust.do?method=deleteCust&actionflag=delete&custid="+custid;
	document.selectCustForm.submit();
}

</script>
</body>
</html>
