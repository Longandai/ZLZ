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
	<h3>增加记录</h3>
</dt>
<dd class="tab1">
<html:form action="selectCustRecord.do?method=saveCust" method="post">
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
					<td colspan="3">
						<html:text property="custname"/>
					</td>
					
				</tr>
				
				<tr>
					<td  nowrap="nowrap" align="center">联系内容：</td>
					<td colspan="3">
						<html:textarea property="contact" rows="5"></html:textarea>
					</td>
					
				</tr>
				
			</table>
</html:form>
</dd>
<script type="text/javascript">
function selectCust(){

	document.selectCustRecordForm.submit();
}

function saveCust(){
    if(document.selectCustRecordForm.custname.value==''){
    	alert('客户名称不能为空');
    }
	document.selectCustRecordForm.submit();
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

	
	document.selectCustRecordForm.action="<%=request.getContextPath()%>/selectCustRecord.do?method=selectCust&&cf=2";
	document.selectCustRecordForm.submit();
}

</script>
</body>
</html>
