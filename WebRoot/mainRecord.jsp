<%@ page language="java" pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.user.model.CustObject"%>
<%@page import="com.user.model.CustRecordObject"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean"%> 
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html"%>
<%
	List list = (ArrayList)request.getAttribute("list");
	CustRecordObject custObject;
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
	<h3>记录列表</h3>
</dt>
<dd class="tab1">
<html:form action="selectCustRecord.do?method=selectCust" method="post">
    
			<a class="abn db l" href="#" onclick="selectCust();">查询</a>
		
	<table class="form_table">
	    <html:hidden property="custid"/>
	
		<tr>
			<th>客户姓名:</th>
			<td>
			<html:text property="custname"/>
			</td>
			<th>手机:</th>
			<td>
			<html:text property="phonenumber1"/>
			</td>
			<th>记录时间:</th>
			<td>
			<html:text property="custcreatefrom" />
			
			-
			<html:text property="custcreateto" />
			
			</td>
			
			
		</tr>
	</table>
	<div class="h5"></div>
	<a class="abn db l" href="<%=request.getContextPath() %>/selectCustRecord.do?method=viewCust">新建</a>
	<a class="abn db l" href="#" onclick="editCust();">修改</a>
	<a class="abn db l" href="#" onclick="deleteCust();">删除</a>
	
	<table class="color_table" >
	<thead>
		<tr>
			<th align="center">选择</th>
			<th align="center">客户姓名</th>
			<th align="center">手机</th>
			<th align="center">联系内容</th>
			<th align="center">联系时间</th>
		</tr>

	</thead>
	<tbody>
		<%
			if(list==null){
				
			}else if(list!=null&!list.isEmpty()){
				for(int i=0;i<list.size();i++){
					custObject = new CustRecordObject();
					custObject = (CustRecordObject)list.get(i);
					   
		%>
         <tr>
			<td align="center"><input type="radio" name="qr" value="<%=custObject.getCustid() %>"></td>
			<td><%=custObject.getCustname() %></td>
			<td><%=custObject.getPhonenumber1() %></td>
			<td><%=custObject.getContact() %></td>
			<td><%=custObject.getContacttime() %></td>
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

	document.selectCustRecordForm.submit();
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
	
	document.selectCustForm.action = "<%=request.getContextPath()%>/selectCustRecord.do?method=editCust&actionflag=edit&custid="+custid;
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
	
	document.selectCustForm.action = "<%=request.getContextPath()%>/selectCustRecord.do?method=deleteCust&actionflag=delete&custid="+custid;
	document.selectCustForm.submit();
}

</script>
</body>
</html>
