		$(function(){
			$('#deleteSalesContract').click(function(){
				if (confirm("您确信要删除吗？"))
				{
					$('#searchSalesContractForm').attr("action","deleteSalesContract.action");
					$('#searchSalesContractForm').submit();
				}
				
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
