<%@ page language="java" pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.user.model.CustObject"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean"%> 
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html"%>

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
	<h3><font style="color: black">模型维护</font></h3>
</dt>

<table>
	<tr>
		<td>
			 <div style="height: 410px">
					<div  id='dv' style="background: #d0caca;width: 300px;height: 410px"></div>
					
					
			</div>
		</td>
		<td width="1%"></td>
		<td valign="top" ">		
					<fieldset style="margin: 0;float: left;height: 410px;overflow: auto;" >
				    
				     <div id='atrrs'>
				    	<table border="1" style="width: 400px;" >
				    		<thead>
				    			<tr height="40px">
				    				<td width="50%" align="center">基本属性</td>
				    				<td width="50%" align="center">属性值</td>
				    		    </tr>
				    		</thead>
				    		<tbody>
				    			<tr height="40px">
				    				<td align="center">名称*</td>
				    				<td align="center">
				    				  <input type="text" id="modelName" name="modelName" size="15"/>
				    				  <input type="hidden" id="nodeId" name="nodeId"/>
				    				  <input type="hidden" id="opertateType" name="opertateType"/>
				    				</td>
				    			</tr>
				    			<tr height="40px">
				    				<td align="right" colspan="2" style="padding-right: 40px">
				    				   <input type="button" value="保存" onclick="saveNode();"/>
				    				</td>
				    				
				    			</tr>
				    		</tbody>
				    	</table>
				    </div>
				    </fieldset>
        </td>
    </tr>
</table>

<script type="text/javascript">

$(function() {
    $.ajaxSetup({cache:false});//缓存区清理
	$("#dv").jstree({
	                "core" : {
				    "animation" : 0,
				    "check_callback" : true
				    },                
					"json_data" : {
						"ajax" : {
							"url" : "selectModelInfo.do?method=selectTreeModelInfo",
							"data" : function(n) { 
								return {
									"orgid" : n.attr ? n.attr("id").replace(
											"node_", "") : 0 
								};
							},
							"success" : function(data) {
								return data;
							}

						}
					},
					"plugins" : [ "themes", "json_data", "ui","contextmenu","crrm" ],
					"contextmenu" : {     
			             "items" : {     
			                 "create" :  null ,     
			                 "rename" :  null ,     
			                 "remove" :  null ,     
			                 "ccp" :  null ,     
			                 "新增" : {     
			                     "label" :  "新增" ,     
			                     "action" :  function  (obj) {
			                        var id = obj.attr("id");
			                        var parentId=this._get_parent(obj).attr("id");
			                     	createNode(id,parentId);
			                      }     
			                 }, 
			             
			                 "删除" : {     
			                     "label" :  "删除" ,     
			                     "action" :  function  (obj) { 
			                     	var id = obj.attr("id");
			                        var parentId=this._get_parent(obj).attr("id");
			                     	deleteNode(id,parentId);
			                     }     
			                 },    
			                
			            }     
			         } 
				}).bind("select_node.jstree", function(event, data) {
					var idVal = data.rslt.obj.attr("id");
					$("#nodeId").val("");
	                $("#nodeId").val(idVal);
					$("#opertateType").val("");
	                $("#opertateType").val("UPDATE"); 
	                $("#modelName").val("");
					$.ajax({ url:"selectModelInfo.do?method=selectNodeName",
	                  data:{
	                       nodeId:idVal
	                  },
	         	      async:false,
	         	      success:function(s){
	         	          if(s==null||s==""){         	           
                          	 alert("异常");
                          	 return;
                          }else{
                          	$("#modelName").val(s);
                          }   
	         	      },
	         	      dataType:"text"
	               });
		
				});  
	
}); 
function createNode(id,parentId){
    $("#modelName").val("");
	$("#modelName").focus();
	$("#nodeId").val("");
	$("#nodeId").val(id);
	$("#opertateType").val("");
	$("#opertateType").val("CREATE");
	
}
function deleteNode(nodeIdVal,parentIdVal){
    $("#modelName").val("");
	$("#nodeId").val("");
	$("#opertateType").val("");
    $.ajax({ url:"selectModelInfo.do?method=deleteNode",
		                  data:{
		                       nodeId:nodeIdVal,
		                       parentId:parentIdVal
		                  },
		         	      async:false,
		         	      success:function(s){         	           
	                           if(s=="0"){
	                           		alert("删除失败");
	                           }else{
	                           		alert("删除成功");
	                           		refreshNode(nodeIdVal,parentIdVal)
	                           }    
		         	      },
		         	      dataType:"text"
		      });
	
}
function saveNode(){
	var nodeIdVal=$("#nodeId").val();
	var modelNameVal=$("#modelName").val();
	var opertateType=$("#opertateType").val();
	if(modelNameVal==''){
		alert("必须填写名称");
		return;
	}
	
	if(opertateType!="CREATE" && opertateType!="UPDATE"){
		alert("异常");
		return;
	}
	if(opertateType=='CREATE'){
		$.ajax({ url:"selectModelInfo.do?method=addNode",
		                  data:{
		                       nodeId:nodeIdVal,
		                       modelName:modelNameVal
		                  },
		         	      async:false,
		         	      success:function(s){         	           
	                           if(s=="0"){
	                           		alert("新增失败");
	                           }else{
	                           		alert("新增成功");
	                           		refreshNode(s,nodeIdVal)
	                           }    
		         	      },
		         	      dataType:"text"
		      });
	}else if(opertateType=='UPDATE'){
		$.ajax({ url:"selectModelInfo.do?method=updateNode",
		                  data:{
		                       nodeId:nodeIdVal,
		                       modelName:modelNameVal
		                  },
		         	      async:false,
		         	      success:function(s){         	           
	                           if(s=="E"){
	                           		alert("修改失败");
	                           }else{
	                           		alert("修改成功");
	                           		refreshNode(nodeIdVal,s)
	                           }    
		         	      },
		         	      dataType:"text"
		      });
    }
}	

function refreshNode(nodeId,parentNodeId){
	       $jstree = $.jstree._focused();  
           $("#dv").unbind("refresh.jstree").bind("refresh.jstree", function () {  
               $jstree.deselect_all();  
               $jstree.save_selected();  
               $jstree.select_node("#" + nodeId, true);  
           });  
           $jstree.refresh("#" + parentNodeId);  
       
}
</script>
</body>
</html>
