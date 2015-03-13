$(document).ready(function(){	
	
	$("#submitFormButton").click(function (){
//		alert($("#model.customerCode").val());
		var customerCode = document.getElementById("model.customerCode").value;
		var supplierCode = document.getElementById("model.supplierCode").value;
		var matCode = document.getElementById("model.matCode").value;
		
		 $.getJSON("${dynamicURL}/pricelist/checkContractComplementCode.action?customerCode=" + customerCode+"&supplierCode="
					+supplierCode+"&matCode="+matCode+ "&time=" + new Date(),function(data){
			
			if(data.message!=null){
				alert(data.message);
			}else{
				$('#searchContractComplementForm').submit();
			}    
		});   
	});
});

/**
 * 编码补录
 */
function setvalue(id,customerCode,customerName,supplierCode,supplierName,matCode,matName,saleContractNo,purchaseContractNo,saleDetailId,checkedPriceCode,productGroupCode){
	$("#complementId").attr("value",id);
	$("#customerCodeId").attr("value",customerCode);
	$("#customerNameId").attr("value",customerName);
	$("#supplierCodeId").attr("value",supplierCode);
	$("#supplierNameId").attr("value",supplierName);
	$("#matCodeId").attr("value",matCode);
	$("#matNameId").attr("value",matName);
	$("#saleContractNoId").attr("value",saleContractNo);
	$("#purchaseContractNoId").attr("value",purchaseContractNo);
	$("#saleDetailId").attr("value",saleDetailId);
	$("#checkedPriceCodeId").attr("value",checkedPriceCode);
	$("#productGroupCodeId").attr("value",productGroupCode);
}

function complementCode(){
	var vid = $("#complementId").val();
	if(vid==""){
		alert("请选择需要补录的记录");
		return;
	}
	
	var vhref = "${dynamicURL}/pricelist/complementContractInit.action?model.id="+$("#complementId").val()+
	"&model.customerCode="+$("#customerCodeId").val()+"&model.customerName="+$("#customerNameId").val()+
	"&model.supplierCode="+$("#supplierCodeId").val()+"&model.supplierName="+$("#supplierNameId").val()+
	"&model.matCode="+$("#matCodeId").val()+"&model.matName="+$("#matNameId").val()+
	"&model.salesContractNo="+$("#saleContractNoId").val()+"&model.purchaseContractNo="+$("#purchaseContractNoId").val()+
	"&model.salesDetailId="+$("#saleDetailId").val()+"&model.checkedPriceCode="+$("#checkedPriceCodeId").val()+
	"&model.productGroupCode="+$("#productGroupCodeId").val()+"&searchModel.priceCode="+document.getElementById("searchModel.priceCode").value+
	"&searchModel.saleContractNo="+document.getElementById("searchModel.saleContractNo").value+"&searchModel.matCode="+document.getElementById("searchModel.matCode").value+
	"&searchModel.matName="+document.getElementById("searchModel.matName").value+"&pager.currentPage="+$("#_current_page_").val();
	
	window.location.href=vhref;
}
