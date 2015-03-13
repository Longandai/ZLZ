$(function(){
	$('#orderSubmit').click(function(){
		var hasChecked = $('#hasChecked').val();
		if(hasChecked==""){
			alert("请选择一条记录");
			return;
		}
		$('#currentPage').attr("value",$('#_current_page_').val());
		var orderId = $('#orderId').val();
		$('#searchDraftOrderForm').attr("action","updateZOROrderInit.action");
		$('#searchDraftOrderForm').submit();
	 });
	
});

function loadDetails(id){
	$('#hasChecked').attr("value",id);
	$.getJSON("${dynamicURL}/order/loadZOROrderDetails.action?orderId=" +id+ "&time=" + new Date(),
		function(data){
		$('#detailTable>tbody').children().remove();
			var details = data.orderList;
			if(details.length>0){
				for(var i=0;i<details.length;i++){
					var detail = details[i];
					var onetr = "<tr>";
					onetr += "<td>"+(i+1)+"</td>";
					onetr += "<td>"+detail.sapItemNo+"</td>";
					onetr += "<td>"+detail.matCode+"</td>";
					onetr += "<td>"+detail.matCode+"</td>";
					onetr += "<td>"+detail.matName+"</td>";
					onetr += "<td>"+detail.qty+"</td>";
					onetr += "<td>"+detail.price+"</td>";
					onetr += "<td>"+(detail.qty)*(detail.price)+"</td>";
					onetr += "<td>"+detail.remark+"</td>";
					onetr += "</tr>";
					$('#detailTable>tbody').append(onetr);
				}
			}
	}); 
}
