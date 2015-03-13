		$(function(){
			$('#deletePurchaseContract').click(function(){
				if (confirm("您确信要删除吗？"))
				{
					$('#searchPurchaseContractForm').attr("action","deletePurchaseContract.action");
					$('#searchPurchaseContractForm').submit();
				}
				
			 });
			$('#createPurchaseContract').click(function(){
				$('#searchPurchaseContractForm').attr("action","createPurchaseContractInit.action");
				$('#searchPurchaseContractForm').submit();
			 });
			
			$('#selectAll').click(function(){
				if(this.checked)
				{
					$("input[name='id']").each(function() 
					 {
						$(this).attr("checked", true); 
					 });
				}
				else
				{
					$("input[name='id']").each(function() 
					{
						$(this).attr("checked", false); 
					});
				}
			});
		});
