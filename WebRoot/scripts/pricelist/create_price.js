$(document)
		.ready(function() {
//-------------------------------------salesContract DataGrids-------------------------------------------------------
			var salescontractNo;	
			$('#salesContractTable')
					.datagrid(
							{
								height : 200,
								pageSize : 10,
								pageList : [ 10, 20, 30, 40 ],
								nowrap : false,
								striped : true,
								singleSelect:true,
								collapsible : true,
								url : '../contract/searchSalesContractDetailByContractNo.action?contractNo='
										+ salescontractNo,
								loadMsg : '数据装载中......',
								sortName : 'productGroupCode',
								sortOrder : 'desc',
								remoteSort : false,
								frozenColumns : [ [ {
									field : 'ck',
									checkbox : true
								} ] ],
								columns : [ [ {
									title : '行项目',
									field : 'sapItemNo',
									width : '60',
									rowspan : 2,
									align : 'center'
								}, {
									title : '产品组',
									field : 'productGroupDesc',
									width : '80',
									rowspan : 2,
									align : 'center',
									fitColumns : true,
									sortable : true
								}, {
									title : '产品编号',
									field : 'matNo',
									width : '80',
									rowspan : 2,
									align : 'center'
								}, {
									title : '产品名称',
									field : 'matName',
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
										$('#salesContractTable')
												.datagrid(
														{
															url : '../contract/searchSalesContractDetailByContractNo.action?contractNo='
																	+ salescontractNo
														});
									}
								} ]
							});
//------------------------------PurchaseContract DataGrids--------------------------------------------
			var purchasecontractNo;
			//alert(purchasecontractNo);
			$('#purchaseContractTable')
					.datagrid(
							{
								height : 200,
								pageSize : 10,
								pageList : [ 10, 20, 30, 40 ],
								nowrap : false,
								striped : true,
								singleSelect:true,
								collapsible : true,
								url : '../contract/searchPurchaseContractDetailByContractNo.action?contractNo='
										+ purchasecontractNo,
								loadMsg : '数据装载中......',
								sortName : 'productGroupCode',
								sortOrder : 'desc',
								remoteSort : false,
								frozenColumns : [ [ {
									field : 'ck',
									checkbox : true
								} ] ],
								columns : [ [ {
									title : '行项目',
									field : 'sapItemNo',
									width : '80',
									rowspan : 2,
									align : 'center'
								}, {
									title : '产品组',
									field : 'productGroupDesc',
									width : '80',
									rowspan : 2,
									align : 'center'
								}, {
									title : '产品编号',
									field : 'matNo',
									width : '80',
									rowspan : 2,
									align : 'center'
								}, {
									title : '产品名称',
									field : 'matName',
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
								} , {
									title : '状态',
									field : 'contractStatusDesc',
									width : '80',
									rowspan : 2,
									align : 'center'
								}] ],
								pagination : true,
								rownumbers : true,
								toolbar : [ {
									text : '全部',
									iconCls : 'icon-ok',
									handler : function() {
										$('#purchaseContractTable')
												.datagrid(
														{
															url : 'searchPurchaseContractDetailByContractNo.action?contractNo='
																	+ purchasecontractNo
														});
									}
								} ]
							});
			
					$('#searchButton').click(
							function() {
								$('#searchContractPriceForm').attr("action",
										"searchContractPrice.action");
								$('#searchContractPriceForm').submit();
							});

					$('#salesContractNoID').combobox({
						onChange : function(newValue, oldValue) {
							salescontractNo=newValue;
							$('#salesContractTable').datagrid({
							 url : '../contract/searchSalesContractDetailByContractNo.action?contractNo='
									+ salescontractNo,
								loadMsg : '更新数据中......'
							});
						}
					});
					$('#purchaseContractNoID').combobox({
						onChange : function(newValue, oldValue) {
							purchasecontractNo = newValue;
							$('#purchaseContractTable').datagrid({
								url : '../contract/searchPurchaseContractDetailByContractNo.action?contractNo='
									+ purchasecontractNo,
									loadMsg : '更新数据中......'
								});
						}
					});

					$('#selectSalesConractID')
							.click(
									function() {
										openWin(
												"../contract/selectSalesContract.action",
												'选择销售合同', '500', '300', 1);
									});

					$('#selectPurchaseConractID')
							.click(
									function() {
										openWin(
												"../contract/selectPurchaseContract.action",
												'选择采购合同', '500', '300', 1);
									});
					$('#selectPurchaseConractID')
							.click(
									function() {
										openWin(
												"../contract/selectPurchaseContract.action",
												'选择采购合同', '500', '300', 1);
									});
					$('#checkContractPriceID')
							.click(
									function() {
										var selectedSalesContractDetail = $(
												'#salesContractTable')
												.datagrid('getSelected');
										var selectedPurchaseContractDetail = $(
												'#purchaseContractTable')
												.datagrid('getSelected');
										if(null==selectedSalesContractDetail||null==selectedPurchaseContractDetail){
											$.messager.alert('信息提示', '请同时选择一个销售合同行信息和采购合同行信息,再进行下一步审核!!!', 'info');
											return;
										}
										window.location.href = '${dynamicURL}/checkContractPrice.action?salesContractDetailId='
												+ selectedSalesContractDetail.id
												+ '&purchaseContractDetailId='
												+ selectedPurchaseContractDetail.id;

									});
					


				});

