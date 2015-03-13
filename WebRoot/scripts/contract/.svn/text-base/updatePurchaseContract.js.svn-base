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
	        					$('#updatePurchaseContractForm_customer_id').attr("value",data.id);
	        					//$('#updatePurchaseContractForm_customer_customerName').attr("value",data.customerName);
	        					$('#updatePurchaseContractForm_customer_mdmCode').attr("value",data.mdmCode);
								$('#updatePurchaseContractForm_customer_registerAddress').attr("value",data.registerAddress);
							    $("input[name='purchaseContract.corpType'][value="+data.corpType+"]").attr("checked",true);
								$('#updatePurchaseContractForm_customer_registerCapital').attr("value",data.registerCapital);
								$("input[name='purchaseContract.corpQualification'][value="+data.corpQualification+"]").attr("checked",true);
								$("input[name='purchaseContract.isFirst'][value="+data.ifFirst+"]").attr("checked",true);
								$('#updatePurchaseContractForm_customer_lastYearTradeAmt').attr("value",data.lastYearTradeAmt);
								$('#updatePurchaseContractForm_customer_overdueAmt').attr("value",data.overdueAmt);
								$('#updatePurchaseContractForm_customer_overdueRate').attr("value",data.overdueRate);
								$('#updatePurchaseContractForm_customer_overdueTimes').attr("value",data.overdueTimes);
								$("input[name='purchaseContract.lawSuitFlag'][value="+data.lawsuitFlag+"]").attr("checked",true);
								$('#updatePurchaseContractForm_customer_commission').attr("value",data.commission);
								$('#updatePurchaseContractForm_customer_rebate').attr("value",data.rebate);
							}
	        },  
	        error : function() {  
	          alert("error") ; 
	        }  
	}); 
	 
	}
 function close1() {
		$('#add').window('close');
		$('#createPurchaseContractDetail').form('clear');
	}
	function close2() {
		$('#edit').window('close');
		$('#createPurchaseContractDetail').form('clear');
	}
 function getInfosByCode(code) {
		$.ajax({
			type : 'GET',
			async : false,
			url : '${dynamicURL}/contract/getInfosByCode.action?code=' + code
					+ '&time=' + new Date(),
			dataType : 'json',
			success : function(data) {
				if (data) {
					$('#productGroupName').attr("value", data.descriptionCN);
				}
			},
			error : function() {
				$.messager.alert('warning', '获取数据失败!!!', 'warning');
			}
		});
	}

 function add() {
		$('#createPurchaseContractDetail').form('submit', {
			url : 'createPurchaseContractDetail.action?contractId='+contractId,
			onSubmit : function() {
				return $('#createPurchaseContractDetail').form('validate');
			},
			success : function() {
				$.messager.alert('add', '添加信息成功!!!', 'info');
				$('#contractDetails').datagrid({
					url : 'searchPurchaseContractDetail.action?contractId='+contractId,
					loadMsg : '更新数据中......'
				});
				close1();
			}
		});
		
	}
 var id;
 function getSelect() {
 	var select = $('#contractDetails').datagrid('getSelections');
 	if (select.length==1) {
 		select=$('#contractDetails').datagrid('getSelected');
 		$('#edit').window('open');
 		$('#createPurchaseContractDetail').show();
 		$('#createPurchaseContractDetail').appendTo('#ee');
 		id=select.id;
 		getPurchaseContractAndFeeItem(select.id);
 		
 	} else {
 		$.messager.alert('warning', '请选择一行数据', 'warning');
 	}
 }
 function getPurchaseContractAndFeeItem(selectId){
		
		$.ajax({
			type : 'GET',
			async : false,
			url : '${dynamicURL}/contract/getPurchaseContractAndFeeItem.action?id='+selectId+'&time='
					+ new Date(),
			dataType : 'json',
			success : function(data) {
				if (data) {
					//$("#productGroupCode").val(data.productGroupCode);
					//window.opener.$("#showtable tr")
					$('#productGroupCode').combobox('setValue',data.productGroupCode);
					$('#productGroupName').attr("value",data.productGroupName);
					$('#purchaseContractDetail_matNo').attr("value",data.matNo );
					$('#purchaseContractDetail_matName').attr("value",data.matName);
					$('#purchaseContractDetail_expectPrice').attr("value",data.expectPrice);
					$('#purchaseContractDetail_contractQyt').attr("value",data.contractQyt);
				}
			},
			error : function() {
				alert("error");
			}
		});
	}
 function del() {
		var selected = $('#contractDetails').datagrid('getSelections');;
		if (selected.length>0) {
			$.messager.confirm('warning', '确认删除么?', function(id) {
				if (id) {
					var ids = [];
					for(var i=0; i<selected.length; i++){
					    ids.push(selected[i].id);
					}
					$.ajax({
						type : "POST",
						url : "deletePurchaseContractDetailByIds.action",
						data : "ids=" + ids,
						dataType : "json",
						success : function callback() {
							$.messager.alert('info', '删除成功!', 'info');
							$('#contractDetails').datagrid('reload');
						}
					});
				}
			});
		} else {
			$.messager.alert('warning', '请选择一行数据', 'warning');
		}
	}
 function edit() {
		$('#createPurchaseContractDetail').form('submit', {
			url : 'updatePurchaseContractDetail.action?id=' + id,
			onSubmit : function() {
				return $('#createPurchaseContractDetail').form('validate');
			},
			success : function() {
				$.messager.alert('edit', '修改信息成功!!!', 'info');
				$('#contractDetails').datagrid({
					url : 'searchPurchaseContractDetail.action?contractId='+contractId,
					loadMsg : '更新数据中......'
				});
				close2();
			}
		});
	}
 		var contractId;
		$(function(){
			$('#createPurchaseContractDetail').hide();
			 contractId=$('#contractId').val();
		
			//init data
			$('#customerId').combobox({  
		        onChange:function(newValue,oldValue){  
		        	loadCustomers(newValue);
		        }  
		    });  
			$('#productGroupCode').combobox({  
		        onChange:function(newValue,oldValue){  
		        	getInfosByCode(newValue);
		        }  
		    }); 
			$('#updatePurchaseContract').click(function(){
				$('#updatePurchaseContractForm').attr("action","updatePurchaseContract.action");
				$('#updatePurchaseContractForm').submit();
			 });
			$('#submitPurchaseContract').click(function(){
				$('#updatePurchaseContractForm').attr("action","submitPurchaseContract.action");
				$('#updatePurchaseContractForm').submit();
			 });
		
			
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
	    	     {title:'状态',field:'contractStatusDesc',width : '145',align:'center'}
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
	    	    	  $('#add').window('open');
	  				  $('#createPurchaseContractDetail').show();
	  				  $('#createPurchaseContractDetail').appendTo('#aa');
	    	     }},'-',{
	    	       text:'修改',
	    	       iconCls:'icon-edit',
	    	       handler : getSelect
	    	      },'-',{
		    	    text:'删除',
	    	        iconCls:'icon-remove',
	    	        handler : del
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