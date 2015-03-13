var orderId=0;		
$(function(){
			$('#searchContractComplementForm').hide();
			$('#saveOrder').click(function(){
				$('#updateOrderForm').attr("action","updateOrder.action");
				$('#updateOrderForm').submit();
			 });
			orderId=$('#orderId').val();
			$('#orderDetails').datagrid({        	    
	    	    height:500,
	    	    pageSize:10,
	    	    pageList:[10,20,30,40],
	    	    nowrap:false,
	    	    striped: true,
	    	    collapsible:true,
	    	    url:'searchOrderDetail.action?orderId='+orderId,
	    	    loadMsg:'数据装载中......',
	    	    sortName:'gmtModified',
	    	    sortOrder:'desc',
	    	    remoteSort:false,
	    	    frozenColumns:[[
	    	     {field:'ck',checkbox:true}
	    	    ]],
	    	    columns:[[
	    	     {title:'定价单编码',field:'orderNo',width : '80',align:'center'},
	    	     {title:'产品组',field:'division',width : '80',align:'center'},
	    	     {title:'型号编码',field:'matCode',width : '80',align:'center'},
	    	     {title:'型号名称',field:'matName',width : '80',align:'center'},
	    	     {title:'数量',field:'saleQty',width : '80',align:'center'},
	    	     {title:'销售价格',field:'salePrice',width : '80',align:'center'},
	    	     {title:'采购价格',field:'purchasePrice',width : '80',align:'center'}
	    	    ]],
	    	    pagination:true,
	    	    rownumbers:true,
	    	    toolbar:[{
	    			text : '全部',
	    			iconCls : 'icon-ok',
	    			handler : function() {
	    				$('#orderDetails').datagrid({
	    					url : 'searchOrderDetail.action?orderId='+orderId
	    				});
	    			}
	    		}, '-',{
	    	      text:'添加',
	    	      iconCls:'icon-add',
	    	      handler:function(){
		    	    	var orderId=$('#orderId').val();
		    	    	if(orderId.length<1)
		  				{
		  					$.messager.alert('message', '请先保存组合定单主体.', 'info');
		  					return;
		  				}
		    	       openWin("../order/searchContractPriceOrder.action?orderId="+orderId,'选择合同价格定单', '500', '300', 1);
	    	    	   //$('#add').window('open');
	  				   //$('#searchContractComplementForm').show();
	  				   //$('#searchContractComplementForm').appendTo('#aa');
	    	     }},'-',{
	    	       text:'修改',
	    	       iconCls:'icon-edit',
	    	       handler : function(){
	    	    	   var orderId=$('#orderId').val();
		    	    	if(orderId.length<1)
		  				{
		  					$.messager.alert('message', '请先保存组合定单主体.', 'info');
		  					return;
		  				}
	    	       }
	    	      },'-',{
		    	    text:'删除',
	    	        iconCls:'icon-remove',
	    	        handler : function(){
	    	        	var orderId=$('#orderId').val();
		    	    	if(orderId.length<1)
		  				{
		  					$.messager.alert('message', '请先保存组合定单主体.', 'info');
		  					return;
		  				}
	    	        }
	    	     }
	    	    ]
	    	   });
			displayMsg();
		});
		
		function displayMsg() {
			$('#orderDetails').datagrid('getPager').pagination({
				displayMsg : '当前显示从{from}到{to}共{total}记录'
			});
		}
		
