<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ page contentType="text/html;charset=UTF-8"%>

<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator"%>
<%@ taglib uri="http://www.opensymphony.com/sitemesh/page" prefix="page"%>
<%
	String view="";
	if(request.getAttribute("view")!=null){
		view=(String)request.getAttribute("view");
	}
	
 %>
<html>
    <head>
    <%@ include file="/common/meta.jsp" %>
    <title><decorator:title default="元数据管理系统"/></title>
    <jsp:include page="/common/css_and_js.jsp" />
   	<decorator:head/>
   	<link rel="stylesheet" href="<%=request.getContextPath()%>/js/themes/default/style.css" />
    </head>
<script language=JavaScript src="<%=request.getContextPath()%>/js/jquery.js"></script>
<script language=JavaScript src="<%=request.getContextPath()%>/js/jquery.jstree.js"></script>	
<body<decorator:getProperty property="body.id" writeEntireProperty="true"/> <decorator:getProperty property="body.class" writeEntireProperty="true"/> >
     <div class="wp">
     	  <!-- 公共头部 -->
		  <div class="hd pr">
		  	<jsp:include page="/common/header.jsp"/>
		  </div>
		  <div class="nav pr">
		  	<jsp:include page="/common/navigation.jsp" />
		  </div>
		  <div class="bd pr">
	  		<!-- 左侧菜单栏 -->
	  		<div class="col-1 pa">
	  			<decorator:usePage id="thePage" /> 
				
				<div id="userView" style="display: block">
					<ul>
						<br/>
						<li><a href="<%=request.getContextPath() %>/selectCust.do?method=selectCust&view=userView"><strong>用户维护</strong></a></li>
						<br/>
						<li><a href="<%=request.getContextPath() %>/selectCustRecord.do?method=selectCust&view=userView"><strong>批量维护</strong></a></li>
						
					</ul>
				</div>
				<div id="masterDataView" style="display: none">
					<ul>
						<br/>
						<li><a href="<%=request.getContextPath() %>/selectCust.do?method=selectCust&view=masterDataView"><strong>元数据查询</strong></a></li>
						<br/>
						<li><a href="<%=request.getContextPath() %>/selectModelInfo.do?method=selectModelInfo&view=masterDataView"><strong>元数据模型维护</strong></a></li>
						<br/>
						<li><a href="<%=request.getContextPath() %>/selectCust.do?method=selectCust&view=masterDataView"><strong>元数据基础信息维护</strong></a></li>
					</ul>
				</div>
				<div id="analyseView" style="display: none">
					<ul>
						<br/>
						<li><a href="<%=request.getContextPath() %>/selectCust.do?method=masterDataAnalyse&view=analyseView"><strong>血缘与影响分析</strong></a></li>
					</ul>
				</div>
				
	  		</div>
	  		<!-- 动态核心内容部分 -->
	  		<div class="col-2" style="margin-right:0.5px;height: 410px" >
	  			<dl>
	  				<decorator:body/>
	  			</dl>
	  		</div>
	  	</div>
	  	<!-- 页脚 -->
	  	<jsp:include page="/common/footer.jsp"/>
	  </div>
</body>
</html>
<script type="text/javascript">
<!--
<%
	if(view!=null && !"".equals(view)){
%>
		chooseMenu('<%=view%>');
<%		
	}
%>
function chooseMenu(menuId){
    //var t;
    //$.ajax({ url:"<%=request.getContextPath()%>/selectModelInfo.do?method=saveMenuId",
	//                  data:{
	//                       menuIdPara:menuId
	//                  },
	//         	      async:false,
	//         	      success:function(data){
	//         	           t=data.menuId_new;
	//         	      },
	//         	      error:function(XMLHttpRequest, textStatus, errorThrown){
	//         	      	    alert(XMLHttpRequest.status);
	//                        alert(XMLHttpRequest.readyState);
	//                        alert(textStatus);
    //
	//         	      },
	//				  dataType: "json"
	//});

	if(menuId=='userView'){
		$("#userView").css("display","block");
		$("#masterDataView").css("display","none");
		$("#analyseView").css("display","none");
	}else if(menuId=='masterDataView'){
		$("#userView").css("display","none");
		$("#masterDataView").css("display","block");
		$("#analyseView").css("display","none");
	}else if(menuId=='analyseView'){
		$("#userView").css("display","none");
		$("#masterDataView").css("display","none");
		$("#analyseView").css("display","block");
	}
}
//-->
</script>
