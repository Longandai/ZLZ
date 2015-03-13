		$(function(){
			
			$('#search').click(function(){
				$('#searchPurchaseApproveContractForm').attr("action","searchPurchaseApproveContract.action");
				$('#searchPurchaseApproveContractForm').submit();
			 });
			
			$('#approve').click(function(){
				var item = $(":radio:checked");
				var len=item.length;
				if(len>0)
				{
					$('#searchPurchaseApproveContractForm').attr("action","approveInitPurchaseContract.action");
					$('#searchPurchaseApproveContractForm').submit();
				}
				else
				{
					$.messager.alert('warning', '请选择一行数据', 'warning');
				}
				
			 });
			
			
		});
