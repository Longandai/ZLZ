$(document).ready(
		function() {
			$('#createSalesContractDraft_salesContract_firstManageGroup')
					.combobox({
						onChange : function(newValue) {
							loadSecondManageGroup(newValue);
						}
					});
			$('#firstManageGroupID')
			.combobox({
				onChange : function(newValue) {
					loadSecondManageGroup2(newValue);
				}
			});
			
			$('#customerId').combobox({
				onChange : function(newValue, oldValue) {
					loadCustomers(newValue);
				}
			});
			$('#cc').combobox({
				url : 'getFirstManageGroups.action',
				valueField : 'value',
				textField : 'descriptionCN',
				onLoadSuccess : function(data) {
					alert(data);
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
		
			$('#saveDraftSalesContract').click(
					function() {
						$('#createSalesContractDraft').attr("action",
								"createSalesContractDraft");
						$('#createSalesContractDraft').submit();
					});
			$('#saveReleaseSalesContract').click(
					function() {
						$('#createSalesContractDraft').attr("action",
								"createSalesContractRelease");
						$('#createSalesContractDraft').submit();
					});
			$('#updateDraftSalesContract').click(
					function() {
						$('#updateSalesContractDraft').attr("action",
								"updateSalesContractDraft");
						$('#updateSalesContractDraft').submit();
					});
			$('#updateReleaseSalesContract').click(
					function() {
						$('#updateSalesContractDraft').attr("action",
								"updateSalesContractRelease");
						$('#updateSalesContractDraft').submit();
					});

		});

function deleteSalesContracts() {
	if (isSelected(document.all('id'))) {
		if (confirm("您确信要删除吗？")) {
			//$('#searchSalesContractForm').action = "deleteSalesContract.action";
			$('#searchSalesContractForm').attr("action","deleteSalesContract.action");
			$('#searchSalesContractForm').submit();
		}
	} else {
		alert("请选择要删除的记录!");
	}
}

function getInfosByCode(code) {
	$.ajax({
		type : 'GET',
		async : false,
		url : '${dynamicURL}/contract/getInfosByCode.action?code=' + code
				+ '&time=' + new Date(),
		dataType : 'json',
		success : function(data) {
			if (data) {
				$('#productGroupDesc').attr("value", data.descriptionCN);

			}
		},
		error : function() {
			$.messager.alert('warning', '获取数据失败!!!', 'warning');
		}
	});
}

function loadSecondManageGroup2(newValue) {
	var value = newValue;
	$
			.ajax({
				type : 'GET',
				async : false,
				url : '${dynamicURL}/contract/findSecondManageGroupBySapCode.action?id='
						+ value + '&time=' + new Date(),
				dataType : 'json',
				success : function(data) {
					if (data) {
						$('#secondManageGroupID').attr("value", data.value);
						$('#secondManageGroupDescID').attr("value", data.descriptionCN);
					}
				},
				error : function() {
					$.messager.alert('warning', '获取数据失败!!!', 'warning');
				}
			});
}

function loadSecondManageGroup(newValue) {
	var value = newValue;
	$
			.ajax({
				type : 'GET',
				async : false,
				url : '${dynamicURL}/contract/findSecondManageGroupBySapCode.action?id='
						+ value + '&time=' + new Date(),
				dataType : 'json',
				success : function(data) {
					if (data) {
						$(
								'#createSalesContractDraft_salesContract_secondManageGroup')
								.attr("value", data.value);
						$(
								'#createSalesContractDraft_salesContract_secondManageGroupDesc')
								.attr("value", data.descriptionCN);
					}
				},
				error : function() {
					$.messager.alert('warning', '获取数据失败!!!', 'warning');
				}
			});
}
function loadCustomers(customerObj) {
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
						$('#createSalesContractDraft_customer_id').attr(
								"value", data.id);
						$('#createSalesContractDraft_customer_customerName')
								.attr("value", data.customerName);
						$('#createSalesContractDraft_customer_mdmCode').attr(
								"value", data.mdmCode);
						$('#createSalesContractDraft_customer_registerAddress')
								.attr("value", data.registerAddress);
						$(
								"input[name='salesContract.corpType'][value="
										+ data.corpType + "]").attr("checked",
								true);
						$('#createSalesContractDraft_customer_registerCapital')
								.attr("value", data.registerCapital);
						$(
								"input[name='salesContract.corpQualification'][value="
										+ data.corpQualification + "]").attr(
								"checked", true);
						$(
								"input[name='salesContract.isFirst'][value="
										+ data.ifFirst + "]").attr("checked",
								true);
						$('#createSalesContractDraft_customer_lastYearTradeAmt')
								.attr("value", data.lastYearTradeAmt);
						$('#createSalesContractDraft_customer_overdueAmt')
								.attr("value", data.overdueAmt);
						$('#createSalesContractDraft_customer_overdueRate')
								.attr("value", data.overdueRate);
						$('#createSalesContractDraft_customer_overdueTimes')
								.attr("value", data.overdueTimes);
						$(
								"input[name='salesContract.lawSuitFlag'][value="
										+ data.lawsuitFlag + "]").attr(
								"checked", true);
						$('#createSalesContractDraft_customer_commission')
								.attr("value", data.commission);
						$('#createSalesContractDraft_customer_rebate').attr(
								"value", data.rebate);
					}
				},
				error : function() {
					$.messager.alert('warning', '获取数据失败!!!', 'warning');
				}
			});

}
var contractId;
$(function() {
	contractId = $('#contractId').val();
	$('#ff').hide();
	$('#tt').datagrid({
		height : 500,
		pageSize : 10,
		pageList : [ 10, 20, 30, 40 ],
		nowrap : false,
		striped : true,
		collapsible : true,
		url : 'salesContractDetail.action?contractId=' + contractId,
		loadMsg : '数据装载中......',
		sortName : 'code',
		sortOrder : 'desc',
		remoteSort : false,
		frozenColumns : [ [ {
			field : 'ck',
			checkbox : true
		} ] ],
		columns : [ [ {
			title : '产品组',
			field : 'productGroupCode',
			width : '80',
			rowspan : 2,
			align : 'center'
		}, {
			title : '产品型号',
			field : 'matName',
			width : '80',
			rowspan : 2,
			align : 'center'
		}, {
			title : '数量',
			field : 'contractQyt',
			width : '80',
			rowspan : 2,
			align : 'center'
		}, {
			title : '预计采购单价',
			field : 'expectPrice',
			width : '80',
			rowspan : 2,
			align : 'center'
		}, {
			title : '销售单价',
			field : 'contractPrice',
			width : '80',
			rowspan : 2,
			align : 'center'
		}, {
			title : '销售总额',
			field : 'contractPrice',
			width : '80',
			rowspan : 2,
			align : 'center'
		}, {
			title : '毛利率(F)',
			field : 'grossProfitRate',
			width : '80',
			rowspan : 2,
			align : 'center'
		}, {
			title : '变动费率(G)',
			field : 'variantFeeRate',
			width : '80',
			rowspan : 2,
			align : 'center'
		}, {
			title : '固定费率(H)',
			field : 'fixFeeRate',
			width : '80',
			rowspan : 2,
			align : 'center'
		}, {
			title : '净利润率(F-G-H)',
			field : 'netProfitRate',
			width : '80',
			rowspan : 2,
			align : 'center'
		}, {
			title : '状态',
			field : 'statusDesc',
			width : '80',
			rowspan : 2,
			align : 'center'
		} ] ],
		pagination : true,
		rownumbers : true,
		toolbar : [ {
			text : '全部',
			iconCls : 'icon-ok',
			handler : function() {
				$('#tt').datagrid({
					url : 'salesContractDetail.action?contractId=' + contractId
				});
			}
		}, '-', {
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				contractId = $('#contractId').val();
				if (contractId.length == 0) {
					$.messager.alert('message', '请先保存合同主体.', 'info');
					return;
				}
				$('#add').window('open');
				$('#ff').show();
				$('#ff').form('clear');
				getFeeItemTreeByParentCode1();
				getFeeItemTreeByParentCode2();
				getSalesContractById();
				$('#ff').appendTo('#aa');
			}
		}, '-', {
			text : '修改',
			iconCls : 'icon-edit',
			handler : getSelect
		}, '-', {
			text : '删除',
			iconCls : 'icon-remove',
			handler : del
		} ]
	});
	displayMsg();
});
function displayMsg() {
	$('#tt').datagrid('getPager').pagination({
		displayMsg : '当前显示从{from}到{to}共{total}记录'
	});
}

function add() {
	$('#ff').form('submit', {
		url : 'createSalesContractDetail.action',
		onSubmit : function() {
			return $('#ff').form('validate');
		},
		success : function() {
			$.messager.alert('add', '添加信息成功!!!', 'info');
			close1();
		}
	});
	$('#tt').datagrid({
		url : 'salesContractDetail.action?contractId=' + contractId,
		loadMsg : '更新数据中......'
	});
}
var id;
function getSelect() {
	var select = $('#tt').datagrid('getSelected');
	if (select) {
		$('#edit').window('open');
		$('#ff').show();
		$('#ff').form('clear');
		$('#ff').appendTo('#ee');
		id = select.id;
		getSalesContractAndFeeItem(select.id);
		getSalesContractFee1(select.id);
		getSalesContractFee2(select.id);
	} else {
		$.messager.alert('warning', '请选择一行数据', 'warning');
	}
}
function edit() {
	$('#ff').form('submit', {
		url : 'updateSalesContractDetail.action?id=' + id,
		onSubmit : function() {
			return $('#ff').form('validate');
		},
		success : function() {
			$.messager.alert('edit', '修改信息成功!!!', 'info');
			close2();
		}
	});
	$('#tt').datagrid({
		url : 'salesContractDetail.action?contractId=' + contractId,
		loadMsg : '更新数据中......'
	});

}
function del() {
	var selected = $('#tt').datagrid('getSelections');
	if (selected) {
		$.messager.confirm('warning', '确认删除么?', function(id) {
			if (id) {
				var ids = [];
				for(var i=0; i<selected.length; i++){
				    ids.push(selected[i].id);
				}
				$.ajax({
					type : "POST",
					url : "deleteSalesContractDetailById.action",
					data : "ids=" + ids,
					dataType : "json",
					success : function callback() {
						$.messager.alert('info', '删除成功!', 'info')
						$('#tt').datagrid('reload');
					}
				});
				
			}
		});
	} else {
		$.messager.alert('warning', '请选择一行数据', 'warning');
	}
}
function query() {
	var queryParams = $('#tt').datagrid('options').queryParams;
	queryParams.queryWord = $('#qq').val();
	$('#tt').datagrid({
		url : 'easyQuery.action'
	});
	displayMsg();
	$('#query').window('close');
}
function close1() {
	$('#add').window('close');
}
function close2() {
	$('#edit').window('close');
}
function getSalesContractFee1(selectId){
	$.ajax({
		type : 'GET',
		async : false,
		url : '${dynamicURL}/contract/getContractFeesByContractDetailId1.action?id='
				+ selectId + '&time=' + new Date(),
		dataType : 'json',
		success : function(data) {
			if (data) {
				var feeitemContent = '';
				for ( var i = 0; i < data.length; i++) {
					if (i == 0) {
						// alert(item[i].value);
						feeitemContent += '<tr><td width="160" rowspan="'
								+ data.length
								+ 1
								+ '" colspan=1>二.'
								+ data[i].feeLevelName
								+ '</td>';
						feeitemContent += '<td width="130" nowrap="nowrap" colspan=1><input type="hidden" name="feeID" value="'+data[i].id+'"><input type="hidden" name="feeLevel" value="1"><input type="hidden" name="feeLevelName" value="'+data[i].feeLevelName+'"> <input name="feeName" type="hidden" value="'+data[i].feeName+'">'
								+ data[i].feeName + '</td>';
						feeitemContent += '<td colspan=2><input id="fee'
								+ i
								+ '" type="text" name="feeValue" value="'+data[i].feeValue+'" onchange="calFeeRate('
								+ i
								+ ')"> <input type="hidden" name="feeCode" value="'
								+ data[i].feeCode + '"></td>';
						feeitemContent += '<td width="150" nowrap="nowrap" colspan=2>'
								+ data[i].feeName + '率：</td>';
						feeitemContent += '<td colspan=2><input id="feeRate'
								+ i
								+ '" type="text" name="feeRate" value="'+data[i].feeRate+'" onchange="calFee('
								+ i + ')"></td></tr>';
					} else {
						feeitemContent += '<tr>';
						feeitemContent += '<td nowrap="nowrap" colspan=1><input type="hidden" name="feeID" value="'+data[i].id+'"><input type="hidden" name="feeLevel" value="1"><input type="hidden" name="feeLevelName" value="'+data[i].feeLevelName+'"> <input name="feeName" type="hidden" value="'+data[i].feeName+'">'
								+ data[i].feeName + '</td>';
						feeitemContent += '<td colspan=2><input id="fee'
								+ i
								+ '" type="text" name="feeValue" value="'+data[i].feeValue+'" onchange="calFeeRate('
								+ i
								+ ')"><input type="hidden" name="feeCode" value="'
								+ data[i].feeCode + '" > </td>';
						feeitemContent += '<td nowrap="nowrap" colspan=2>'
								+ data[i].feeName+ '率：</td>';
						feeitemContent += '<td colspan=2><input id="feeRate'
								+ i
								+ '" type="text" name="feeRate" value="'+data[i].feeRate+'" onchange="calFee('
								+ i + ')"></td></tr>';

					}

				}
				feeitemContent += '<tr>';
				feeitemContent += '<td nowrap="nowrap" colspan=1>小计:</td>';
				feeitemContent += '<td colspan=2><input type="text" id="totalfee1" onclick="calTotalFee1('
						+ data.length
						+ ')" name="contractFee.fee" value="0"></td></tr>';
				$('#feeItemTable1').html(feeitemContent);
			}
		},
		error : function() {
			alert("error");
		}
	});
}

function getSalesContractFee2(selectId){
	$.ajax({
		type : 'GET',
		async : false,
		url : '${dynamicURL}/contract/getContractFeesByContractDetailId2.action?id='
				+ selectId + '&time=' + new Date(),
		dataType : 'json',
		success : function(data) {
			if (data) {
				var feeitemContent = '';
				for ( var i = 0; i < data.length; i++) {
					if (i == 0) {
						feeitemContent += '<tr><td width="160" rowspan="'
								+ data.length
								+ 1
								+ '" colspan=1>三.'
								+ data[i].feeLevelName
								+ '</td>';
						feeitemContent += '<td width="130" nowrap="nowrap" colspan=1><input type="hidden" name="feeID" value="'+data[i].id+'"><input type="hidden" name="feeLevel" value="1"><input type="hidden" name="feeLevelName" value="'+data[i].feeLevelName+'"> <input name="feeName" type="hidden" value="'+data[i].feeName+'">'
								+ data[i].feeName + '</td>';
						feeitemContent += '<td colspan=2><input id="fee2'
								+ i
								+ '" type="text" name="feeValue" value="'+data[i].feeValue+'" onchange="calFeeRate2('
								+ i
								+ ')"> <input type="hidden" name="feeCode" value="'
								+ data[i].feeCode + '"></td>';
						feeitemContent += '<td width="150" nowrap="nowrap" colspan=2>'
								+ data[i].feeName + '率：</td>';
						feeitemContent += '<td colspan=2><input id="feeRate2'
								+ i
								+ '" type="text" name="feeRate" value="'+data[i].feeRate+'" onchange="calFee2('
								+ i + ')"></td></tr>';
					} else {
						feeitemContent += '<tr>';
						feeitemContent += '<td nowrap="nowrap" colspan=1><input type="hidden" name="feeID" value="'+data[i].id+'"><input type="hidden" name="feeLevel" value="1"><input type="hidden" name="feeLevelName" value="'+data[i].feeLevelName+'"> <input name="feeName" type="hidden" value="'+data[i].feeName+'">'
								+ data[i].feeName + '</td>';
						feeitemContent += '<td colspan=2><input id="fee2'
								+ i
								+ '" type="text" name="feeValue" value="'+data[i].feeValue+'" onchange="calFeeRate2('
								+ i
								+ ')"><input type="hidden" name="feeCode" value="'
								+ data[i].feeCode + '" > </td>';
						feeitemContent += '<td nowrap="nowrap" colspan=2>'
								+ data[i].feeName+ '率：</td>';
						feeitemContent += '<td colspan=2><input id="feeRate2'
								+ i
								+ '" type="text" name="feeRate" value="'+data[i].feeRate+'" onchange="calFee2('
								+ i + ')"></td></tr>';

					}

				}
				feeitemContent += '<tr>';
				feeitemContent += '<td nowrap="nowrap" colspan=1>小计:</td>';
				feeitemContent += '<td colspan=2><input type="text" id="totalfee2" onclick="calTotalFee2('
						+ data.length
						+ ')" name="contractFee.fee" value="0"></td></tr>';
				$('#feeItemTable2').html(feeitemContent);
			}
		},
		error : function() {
			alert("error");
		}
	});
}
function getSalesContractAndFeeItem(selectId) {

	$.ajax({
		type : 'GET',
		async : false,
		url : '${dynamicURL}/contract/getSalesContractAndFeeItem.action?id='
				+ selectId + '&time=' + new Date(),
		dataType : 'json',
		success : function(data) {
			if (data) {
				$('#ff_salesContractDetail_productGroupCode').attr("value",
						data.productGroupCode);
				$('#productGroupDesc').attr("value",
						data.productGroupDesc);
				$('#salesContractDetail_matNo').attr("value", data.matNo);
				$('#salesContractDetail_matName').attr("value", data.matName);
				$('#contractId').attr("value", data.contractId);
				$('#contractNo').attr("value", data.contractNo);
				$('#contractPrice').attr("value", data.contractPrice);
				$('#salesContractDetail_expectPrice').attr("value",
						data.expectPrice);
				$('#contractQyt').attr("value", data.contractQyt);
				$('#salesContractDetail_tradeTerm').attr("value",
						data.tradeTerm);
				$('#salesContractDetail_tranSportMode').attr("value",
						data.tranSportMode);
				$("#detail_shipForm").combobox('setValue',data.shipFrom);
				$("#detail_shipTo").combobox('setValue',data.shipTo);
			}
		},
		error : function() {
			alert("error");
		}
	});
}
/**
 * getFeeItemTreeByParentCode1
 */

function getFeeItemTreeByParentCode1() {
	$
			.ajax({
				type : 'GET',
				async : false,
				url : '${dynamicURL}/contract/getFeeItemTreeByParentCode1.action?time='
						+ new Date(),
				dataType : 'json',
				success : function(data) {
					if (data) {
						// alert(data.childCodeMappingList[0].descriptionCN);
						var item = data.childCodeMappingList;
						var feeitemContent = '';
						for ( var i = 0; i < item.length; i++) {
							if (i == 0) {
								// alert(item[i].value);
								feeitemContent += '<tr><td width="160" rowspan="'
										+ item.length
										+ 1
										+ '" colspan=1>二.'
										+ data.parentCodeMapping.descriptionCN
										+ '</td>';
								feeitemContent += '<td width="130" nowrap="nowrap" colspan=1><input type="hidden" name="feeLevel" value="1"><input type="hidden" name="feeLevelName" value="'+data.parentCodeMapping.descriptionCN+'"> <input name="feeName" type="hidden" value="'+item[i].descriptionCN+'">'
										+ item[i].descriptionCN + '</td>';
								feeitemContent += '<td colspan=2><input id="fee'
										+ i
										+ '" type="text" name="feeValue" value="0" onchange="calFeeRate('
										+ i
										+ ')"> <input type="hidden" name="feeCode" value="'
										+ item[i].value + '"></td>';
								feeitemContent += '<td width="150" nowrap="nowrap" colspan=2>'
										+ item[i].descriptionCN + '率：</td>';
								feeitemContent += '<td colspan=2><input id="feeRate'
										+ i
										+ '" type="text" name="feeRate" value="0" onchange="calFee('
										+ i + ')"></td></tr>';
							} else {
								feeitemContent += '<tr>';
								feeitemContent += '<td nowrap="nowrap" colspan=1><input type="hidden" name="feeLevel" value="1"><input type="hidden" name="feeLevelName" value="'+data.parentCodeMapping.descriptionCN+'"> <input name="feeName" type="hidden" value="'+item[i].descriptionCN+'">'
										+ item[i].descriptionCN + '</td>';
								feeitemContent += '<td colspan=2><input id="fee'
										+ i
										+ '" type="text" name="feeValue" value="0" onchange="calFeeRate('
										+ i
										+ ')"><input type="hidden" name="feeCode" value="'
										+ item[i].value + '" > </td>';
								feeitemContent += '<td nowrap="nowrap" colspan=2>'
										+ item[i].descriptionCN + '率：</td>';
								feeitemContent += '<td colspan=2><input id="feeRate'
										+ i
										+ '" type="text" name="feeRate" value="0" onchange="calFee('
										+ i + ')"></td></tr>';

							}

						}
						feeitemContent += '<tr>';
						feeitemContent += '<td nowrap="nowrap" colspan=1>小计:</td>';
						feeitemContent += '<td colspan=2><input type="text" id="totalfee1" onclick="calTotalFee1('
								+ item.length
								+ ')" name="contractFee.fee" value="0"></td></tr>';
						$('#feeItemTable1').html(feeitemContent);
					}
				},
				error : function() {
					alert("error");
				}
			});

}
function calTotalFee1(length) {
	var total_fee1 = 0;
	for ( var j = 0; j < length; j++) {
		total_fee1 += $('#fee' + j).val() * 1;
	}
	$('#totalfee1').attr("value", total_fee1);
}
function calFeeRate(i) {
	var total = $('#contractPrice').val() * $('#contractQyt').val();
	var value=$('#fee' + i).val() / total;
	$('#feeRate' + i).attr("value", value*1000/1000);
}
function calFee(i) {
	var total = $('#contractPrice').val() * $('#contractQyt').val();
	var value=$('#feeRate' + i).val() * total;
	$('#fee' + i).attr("value", value*1000/1000);
}

function getFeeItemTreeByParentCode2() {
	$
			.ajax({
				type : 'GET',
				async : false,
				url : '${dynamicURL}/contract/getFeeItemTreeByParentCode2.action?time='
						+ new Date(),
				dataType : 'json',
				success : function(data) {
					if (data) {
						var item = data.childCodeMappingList;
						var feeitemContent = '';
						for ( var i = 0; i < item.length; i++) {
							if (i == 0) {
								feeitemContent += '<tr><td  width="160" rowspan="'
										+ item.length
										+ 1
										+ '" colspan=1>三.'
										+ data.parentCodeMapping.descriptionCN
										+ '</td>';
								feeitemContent += '<td nowrap="nowrap" colspan=1> <input type="hidden" name="feeLevel" value="2"><input type="hidden" name="feeLevelName" value="'+data.parentCodeMapping.descriptionCN+'"><input name="feeName" type="hidden" value="'+item[i].descriptionCN+'">'
										+ item[i].descriptionCN + '</td>';
								feeitemContent += '<td colspan=2><input id="fee2'
										+ i
										+ '" type="text" name="feeValue" value="0" onchange="calFeeRate2('
										+ i
										+ ')"><input type="hidden" name="feeCode" value="'
										+ item[i].value + '"  </td>';
								feeitemContent += '<td nowrap="nowrap" colspan=2>'
										+ item[i].descriptionCN + '率：</td>';
								feeitemContent += '<td colspan=2><input id="feeRate2'
										+ i
										+ '" type="text" name="feeRate" value="0" onchange="calFee2('
										+ i + ')" ></td></tr>';
							} else {
								feeitemContent += '<tr>';
								feeitemContent += '<td nowrap="nowrap" colspan=1> <input type="hidden" name="feeLevel" value="2"><input type="hidden" name="feeLevelName" value="'+data.parentCodeMapping.descriptionCN+'"><input name="feeName" type="hidden" value="'+item[i].descriptionCN+'">'
										+ item[i].descriptionCN + '</td>';
								feeitemContent += '<td colspan=2><input id="fee2'
										+ i
										+ '"type="text" name="feeValue" value="0" onchange="calFeeRate2('
										+ i
										+ ')"> <input type="hidden" name="feeCode" value="'
										+ item[i].value + '" </td>';
								feeitemContent += '<td nowrap="nowrap" colspan=2>'
										+ item[i].descriptionCN + '率：</td>';
								feeitemContent += '<td colspan=2><input id="feeRate2'
										+ i
										+ '" type="text" name="feeRate" value="0" onchange="calFee2('
										+ i + ')"></td></tr>';

							}
						}
						feeitemContent += '<tr>';
						feeitemContent += '<td nowrap="nowrap" colspan=1>小计:</td>';
						feeitemContent += '<td colspan=2><input id="totalfee2" onclick="calTotalFee2('
								+ item.length
								+ ')" type="text" name="contractFee.fee" value="0"> </td></tr>';
						$('#feeItemTable2').html(feeitemContent);
					}
				},
				error : function() {
					alert("error");
				}
			});

}
function calTotalFee2(length) {
	var total_fee2 = 0;
	for ( var j = 0; j < length; j++) {
		total_fee2 += $('#fee2' + j).val() * 1;
	}
	$('#totalfee2').attr("value", total_fee2);
}
function calFeeRate2(i) {
	var total = $('#contractPrice').val() * $('#contractQyt').val();
	var value=$('#fee2' + i).val() / total;
	$('#feeRate2' + i).attr("value",value*1000/1000);
}
function calFee2(i) {
	var total = $('#contractPrice').val() * $('#contractQyt').val();
	var value=$('#feeRate2' + i).val() * total;
	$('#fee2' + i).attr("value", value*1000/1000);
}
// getSalesContractById
function getSalesContractById() {
	$
			.ajax({
				type : 'GET',
				async : false,
				url : '${dynamicURL}/contract/getSalesContractById.action?contractId='+contractId+'&time='
						+ new Date(),
				dataType : 'json',
				success : function(data) {
					if (data) {
						$('#contractId').attr("value", data.id);
						$('#contractNo').attr("value", data.contractNo);
						$("#detail_shipForm").combobox('setValue',data.shipFrom);
						$("#detail_shipTo").combobox('setValue',data.shipTo);
					}
				},
				error : function() {
					alert("error");
				}
			});

}

function tofileupload() {
	window.open("../upload/toFileupload.action", "合同附件上传", "width=550px");
}
function removeFile(id) {
	var new_tr = id.parentNode.parentNode;
	try {
		var tmp = new_tr.parentNode;
		// 为了在ie和firefox下都能正常使用,就要用另一个方法代替,最取上一层的父结点,然后remove.
		tmp.removeChild(new_tr);
	} catch (e) {
	}
}