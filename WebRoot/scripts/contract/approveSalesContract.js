		$(function(){
			$('#approveForm').hide();
			var contractId=$('#contractId').val();
		
			$('#approveSalesContract').click(function(){
				$('#checkDIV').window('open');
				$('#approveForm').show();
				$('#approveForm').appendTo('#aa');
			 });
			$('#contractDetails').datagrid({        	    
	    	    height:500,
	    	    pageSize:10,
	    	    pageList:[10,20,30,40],
	    	    nowrap:false,
	    	    striped: true,
	    	    collapsible:true,
	    	    url:'salesContractDetail.action?contractId='+contractId,
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
	    					url : 'salesContractDetail.action?contractId='+contractId
	    				});
	    			}
	    		}
	    	    ]
	    	   });
			displayMsg();
		});
   
		function confirm(){
			$('#approveForm').form('submit', {
				url : 'approveSalesContract.action',
				onSubmit : function() {
					//return $('#approvePurchaseContract').form('validate');
				},
				success : function() {
					$.messager.alert('approve', '审核完成', 'info');
					$('#checkDIV').window('close');
					$('#approveForm').attr("action","searchInitSalesApproveContract.action");
					$('#approveForm').submit();
				}
			});
			
		}
		function displayMsg() {
			$('#contractDetails').datagrid('getPager').pagination({
				displayMsg : '当前显示从{from}到{to}共{total}记录'
			});
		}
		
