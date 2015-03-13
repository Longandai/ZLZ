$(document)
		.ready(
				function() {
					$('#checkForm').hide();
					$('#contractPriceButton').click(function() {
						$('#checkDIV').window('open');
						$('#checkForm').show();
						$('#checkForm').appendTo('#aa');
					});
					
					$('#savePriceButton').click(function() {
						
						$('#checkForm').form('submit', {
							url : 'createContractPriceDraft.action',
							onSubmit : function() {
								//return $('#checkForm').form('validate');
							},
							success : function(data) {
								if(null!=data)
								$.messager.alert('提示信息', '保存成功','info');
								/*alert(data);
								alert(data.salesContractDetailId);
								window.location.href = '${dynamicURL}/checkContractPrice.action?salesContractDetailId='
									+ data.salesContractDetailId
									+ '&purchaseContractDetailId='
									+ data.purchaseContractDetailId;*/
							}
						});
					});
			});
	


function confirm(){
	$('#checkForm').form('submit', {
		url : 'createContractPrice.action',
		onSubmit : function() {
			//return $('#checkForm').form('validate');
		},
		success : function() {
			$.messager.confirm('提示信息', '是否确认审核?',function(e){
				if(e){
					$('#checkDIV').window('close');
					window.location.href = '${dynamicURL}/pricelist/searchContractPrice.action';
				}
				
			});
			
		
		}
	});
	
}

