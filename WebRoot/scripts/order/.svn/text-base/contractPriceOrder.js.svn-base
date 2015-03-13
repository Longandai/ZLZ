$(function(){
			$('#queryOrder').click(function(){
				$('#searchContractPriceOrderForm').attr("action","searchContractPriceOrder.action");
				$('#searchContractPriceOrderForm').submit();
			 });
			$('#confirmOrder').click(function(){
				  
				var orderId=$("#orderId").val();
				if($("#ids").attr("checked")==true)
				{
					$.messager.confirm('warning', '确认提交么?', function() {
						var priceIds = [];
						$("input:checked").each(function(){
		                    priceIds.push($(this).val());  
		                  });
						$.ajax({
							type : "POST",
							url : "createOrderDetail.action",
							data : "ids=" + priceIds+"&orderId="+orderId,
							dataType : "json",
							success : function(data) {
								window.close();
								window.opener.$('#orderDetails').datagrid({
									url : 'searchOrderDetail.action?orderId='+orderId,
									loadMsg : '更新数据中......'
								});
							}
						});
					});
				}
				else
				{
					$.messager.alert('warning', '请选择操作数据', 'warning');
				} 
			 });
		});
		
		
		
