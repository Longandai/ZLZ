		$(function(){
			
			$('#search').click(function(){
				$('#searchSalesApproveContractForm').attr("action","searchSalesApproveContract.action");
				$('#searchSalesApproveContractForm').submit();
			 });
			
			$('#approve').click(function(){
				var item = $(":radio:checked");
				var len=item.length;
				if(len>0)
				{
					$('#searchSalesApproveContractForm').attr("action","approveInitSalesContract.action");
					$('#searchSalesApproveContractForm').submit();
				}
				else
				{
					$.messager.alert('warning', '请选择一行数据', 'warning');
				}
				
			 });
			
		});
