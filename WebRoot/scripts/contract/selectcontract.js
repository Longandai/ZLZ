
function selectSalesContract(contractNo){
	if(window.opener){
		window.opener.$("#salesContractNoID").combobox('setValue',contractNo);
		window.close();
	}
}
function selectPurchaseContract(contractNo){
	if(window.opener){
		window.opener.$("#purchaseContractNoID").combobox('setValue',contractNo);
		window.close();
	}
}