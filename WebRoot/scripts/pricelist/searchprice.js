$(document)
		.ready(function() {

			$('#updateContractPrice').click(
					function() {
						var id=$('input[name=id]').filter(':checked').val();
						if(null==id){
							$.messager.alert('信息提示', '请选择一个需要评审的定价单信息!!!', 'info');
							return;
						}
						window.location.href = '${dynamicURL}/updateContractPrice.action?id='+id;

					});
			
					$('#searchButton').click(
							function() {
								$('#searchContractPriceForm').attr("action",
										"searchContractPrice.action");
								$('#searchContractPriceForm').submit();
							});

		
});

