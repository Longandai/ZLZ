$(document).ready(function() {
	$('#update_customerId').combobox({
		onChange : function(newValue, oldValue) {
			loadCustomers2(newValue);
		}
	});
	
	
});

function loadCustomers2(customerObj) {
	var value = customerObj;
	$
			.ajax({
				type : 'GET',
				async : false,
				url : '${dynamicURL}/contract/salesContractJson.action?customerCode='
						+ value + '&time=' + new Date(),
				dataType : 'json',
				success : function(data) {
					if (data) {
						$('#updateSalesContractDraft_customer_id').attr(
								"value", data.id);
						$('#updateSalesContractDraft_customer_customerName')
								.attr("value", data.customerName);
						$('#updateSalesContractDraft_customer_mdmCode').attr(
								"value", data.mdmCode);
						$('#updateSalesContractDraft_customer_registerAddress')
								.attr("value", data.registerAddress);
						$(
								"input[name='salesContract.corpType'][value="
										+ data.corpType + "]").attr("checked",
								true);
						$('#updateSalesContractDraft_customer_registerCapital')
								.attr("value", data.registerCapital);
						$(
								"input[name='salesContract.corpQualification'][value="
										+ data.corpQualification + "]").attr(
								"checked", true);
						$(
								"input[name='salesContract.isFirst'][value="
										+ data.ifFirst + "]").attr("checked",
								true);
						$('#updateSalesContractDraft_customer_lastYearTradeAmt')
								.attr("value", data.lastYearTradeAmt);
						$('#updateSalesContractDraft_customer_overdueAmt')
								.attr("value", data.overdueAmt);
						$('#updateSalesContractDraft_customer_overdueRate')
								.attr("value", data.overdueRate);
						$('#updateSalesContractDraft_customer_overdueTimes')
								.attr("value", data.overdueTimes);
						$(
								"input[name='salesContract.lawSuitFlag'][value="
										+ data.lawsuitFlag + "]").attr(
								"checked", true);
						$('#updateSalesContractDraft_customer_commission')
								.attr("value", data.commission);
						$('#updateSalesContractDraft_customer_rebate').attr(
								"value", data.rebate);
					}
				},
				error : function() {
					$.messager.alert('warning', '获取数据失败!!!', 'warning');
				}
			});

}