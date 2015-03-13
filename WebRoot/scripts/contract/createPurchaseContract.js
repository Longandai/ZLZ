 function loadCustomers(customerObj){
	 var value=customerObj;
	 $.ajax( {  
	        type : 'GET',  
	        async:false,
	        url : '${dynamicURL}/contract/findCustomerByMDMCode.action?customerCode='+value+'&time='+new Date(),  
	        dataType : 'json',
	        success : function(data) { 
	        		if(data)
							{
	        					$('#createPurchaseContractForm_customer_id').attr("value",data.id);
	        					$('#createPurchaseContractForm_customer_customerName').attr("value",data.customerName);
	        					$('#createPurchaseContractForm_customer_mdmCode').attr("value",data.mdmCode);
								$('#createPurchaseContractForm_customer_registerAddress').attr("value",data.registerAddress);
							    $("input[name='purchaseContract.corpType'][value="+data.corpType+"]").attr("checked",true);
								$('#createPurchaseContractForm_customer_registerCapital').attr("value",data.registerCapital);
								$("input[name='purchaseContract.corpQualification'][value="+data.corpQualification+"]").attr("checked",true);
								$("input[name='purchaseContract.isFirst'][value="+data.ifFirst+"]").attr("checked",true);
								$('#createPurchaseContractForm_customer_lastYearTradeAmt').attr("value",data.lastYearTradeAmt);
								$('#createPurchaseContractForm_customer_overdueAmt').attr("value",data.overdueAmt);
								$('#createPurchaseContractForm_customer_overdueRate').attr("value",data.overdueRate);
								$('#createPurchaseContractForm_customer_overdueTimes').attr("value",data.overdueTimes);
								$("input[name='purchaseContract.lawSuitFlag'][value="+data.lawsuitFlag+"]").attr("checked",true);
								$('#createPurchaseContractForm_customer_commission').attr("value",data.commission);
								$('#createPurchaseContractForm_customer_rebate').attr("value",data.rebate);
							}
	        },  
	        error : function() {  
	        	$.messager.alert('warning', '获取数据失败!!!', 'warning');
	        }  
	}); 
	 
	}
 function loadSecondManageGroup(newValue){
	 var value=newValue;
	 $.ajax({
			type : 'GET',
			async : false,
			url : '${dynamicURL}/contract/findSecondManageGroupByCode.action?firstManageSapCode='+ value + '&time=' + new Date(),
			dataType : 'json',
			success : function(data) {
				if (data) {
					$('#createPurchaseContractForm_purchaseContract_secondManageGroup').attr("value",data.value);
					$('#createPurchaseContractForm_purchaseContract_secondManageGroupDesc').attr("value",data.descriptionCN);
				}
			},
			error : function() {
				$.messager.alert('warning', '获取数据失败!!!', 'warning');
			}
		});
 }
 
 
		$(function(){
			
			/**$('#firstManageGroupId').combobox({  
		        onChange:function(newValue,oldValue){  
		        	loadSecondManageGroup(newValue);
		        }  
		    });**/
			$('#createPurchaseContractDetail').hide();
			
			$('#customerId').combobox({  
		        onChange:function(newValue,oldValue){  
		        	loadCustomers(newValue);
		        }  
		    }); 
			
			$('#savePurchaseContract').click(function(){
				$('#createPurchaseContractForm').action="savePurchaseContract";
				$('#createPurchaseContractForm').submit();
			 });
			$('#submitPurchaseContract').click(function(){
				alert("submitPurchaseContract")
			 });
			$('#createPurchaseContractForm_purchaseContract_contractNo').val('');
			var contractId=$('#contractId').val();
			$('#contractDetails').datagrid({        	    
	    	    height:500,
	    	    pageSize:10,
	    	    pageList:[10,20,30,40],
	    	    nowrap:false,
	    	    striped: true,
	    	    collapsible:true,
	    	    url:'searchPurchaseContractDetail.action?contractId='+contractId,
	    	    loadMsg:'数据装载中......',
	    	    sortName:'gmtModified',
	    	    sortOrder:'desc',
	    	    remoteSort:false,
	    	    frozenColumns:[[
	    	     {field:'ck',checkbox:true}
	    	    ]],
	    	    columns:[[
	    	     {title:'产品组',field:'productGroupName',width : '145',align:'center'},
	    	     {title:'产品型号',field:'matName',width : '145',align:'center'},
	    	     {title:'数量',field:'contractQyt',width : '145',align:'center'},
	    	     {title:'预计采购单价',field:'expectPrice',width : '145',align:'center'},
	    	     {title:'状态',field:'status',width : '145',align:'center'}
	    	    ]],
	    	    pagination:true,
	    	    rownumbers:true,
	    	    toolbar:[{
	    			text : '全部',
	    			iconCls : 'icon-ok',
	    			handler : function() {
	    				$('#contractDetails').datagrid({
	    					url : 'searchPurchaseContractDetail.action?contractId='+contractId
	    				});
	    			}
	    		}, '-',{
	    	      text:'添加',
	    	      iconCls:'icon-add',
	    	      handler:function(){
	    	    	  var contractId=$('#contractId').val();
	    	    	  if(contractId.length<1)
	  				{
	  					$.messager.alert('message', '请先保存合同主体.', 'info');
	  					return;
	  				}
	    	     }},'-',{
	    	       text:'修改',
	    	       iconCls:'icon-edit',
	    	      handler:function(){
	    	    	  var contractId=$('#contractId').val();
	    	    	  if(contractId.length<1)
		  				{
		  					$.messager.alert('message', '请先保存合同主体.', 'info');
		  					return;
		  				}
		    	     }
	    	     },'-',{
		    	       text:'删除',
		    	       iconCls:'icon-remove',
		    	      handler:function(){
		    	    	  var contractId=$('#contractId').val();
		    	    	  if(contractId.length<1)
			  				{
			  					$.messager.alert('message', '请先保存合同主体.', 'info');
			  					return;
			  				}
			    	     }
		    	     }
	    	    ]
	    	   });
			displayMsg();
			
		});
   
		function displayMsg() {
			$('#contractDetails').datagrid('getPager').pagination({
				displayMsg : '当前显示从{from}到{to}共{total}记录'
			});
		}
			
	   function tofileupload(){
			window.open("../upload/toFileupload.action","合同附件上传","width=550px");
	  }
	   
	  function removeFile(id) {
		  var new_tr = id.parentNode.parentNode;
		  try {
			  var tmp = new_tr.parentNode;
			  // 为了在ie和firefox下都能正常使用,就要用另一个方法代替,最取上一层的父结点,然后remove.
			  tmp.removeChild(new_tr);
		  } catch(e) {}
	  }