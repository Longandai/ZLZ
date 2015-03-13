	
	var saleContractId=0;
	var purchaseContractId=0;
	$(function(){
			$('#approveForm').hide();
			
		
			$('#approvePurchaseContract').click(function(){
				$('#checkDIV').window('open');
				$('#approveForm').show();
				$('#approveForm').appendTo('#aa');
			 });
			
			$('#selectSalesConractID').click(function(){
				openWin("../contract/queryUnverifySalesContract.action",'选择销售合同', '500', '300', 1);
			});
			
			$('#selectPurchaseConractID').click(function(){
				openWin("../contract/queryUnverifyPurchaseContract.action",'选择采购合同', '500', '300', 1);
			});
			
			$('#salesContractNoID').combobox({
				onChange : function(newValue, oldValue) {
					$('#approveSalesPurchaseContractForm').attr("action","querySalesPurchaseContract.action");
					$('#approveSalesPurchaseContractForm').submit();
				}
			});
			$('#purchaseContractNoID').combobox({
				onChange : function(newValue, oldValue) {
					$('#approveSalesPurchaseContractForm').attr("action","querySalesPurchaseContract.action");
					$('#approveSalesPurchaseContractForm').submit();
				}
			});
			
			if($('#salesContractNoID').val())
			{
				saleContractId=$('#salesContractID').val();
			}			
			if($('#purchaseContractNoID').val())
			{
				purchaseContractId=$('#purchaseContractID').val();
			}
			$('#saleContractDetails').datagrid({        	    
	    	    height:500,
	    	    pageSize:10,
	    	    pageList:[10,20,30,40],
	    	    nowrap:false,
	    	    striped: true,
	    	    collapsible:true,
	    	    url:'salesContractDetail.action?contractId='+saleContractId,
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
	    				$('#saleContractDetails').datagrid({
	    					url : 'salesContractDetail.action?contractId='+saleContractId
	    				});
	    			}
	    		}
	    	    ]
	    	   });
			
			$('#purchaseContractDetails').datagrid({        	    
	    	    height:500,
	    	    pageSize:10,
	    	    pageList:[10,20,30,40],
	    	    nowrap:false,
	    	    striped: true,
	    	    collapsible:true,
	    	    url:'searchPurchaseContractDetail.action?contractId='+purchaseContractId,
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
	    				$('#purchaseContractDetails').datagrid({
	    					url : 'searchPurchaseContractDetail.action?contractId='+purchaseContractId
	    				});
	    			}
	    		}
	    	    ]
	    	   });
			displayMsg();
		});
   
		function confirm(){
			$('#approveForm').form('submit', {
				url : 'approvePurchaseContract.action',
				onSubmit : function() {
					//return $('#approvePurchaseContract').form('validate');
				},
				success : function() {
					$.messager.alert('approve', '审核完成', 'info');
					$('#checkDIV').window('close');
					$('#approveForm').attr("action","searchInitPurchaseApproveContract.action");
					$('#approveForm').submit();
				}
			});
			
		}
		function displayMsg() {
			$('#contractDetails').datagrid('getPager').pagination({
				displayMsg : '当前显示从{from}到{to}共{total}记录'
			});
		}
		
