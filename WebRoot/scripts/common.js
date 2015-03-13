function removeErrors(){
	$('#_error_message_box').html('').removeClass('errorMessage');
	$('.errorLabel').html('').removeClass('errorLabel');  
}
function handleErrors(event,data,handler) {
	removeErrors();
	var json = $.parseJSON(event.originalEvent.request.responseText);  
    if(json.actionErrors && json.actionErrors.length>0){//判断有没有actionErrors  
        $.each(json.actionErrors,function(index,data){  
            $("#_error_message_box").append(data+"<br/>");  
        });  
        $('#_error_message_box').addClass('errorMessage');
        handler.onFaild();
        return;  
    }  
    if(json.fieldErrors && !isEmpty(json.fieldErrors)) {//判断有没有fieldError(LoginAction-validation.xml验证错误)  
        $.each(json.fieldErrors,function(index,value) {//index就是field的name,value就是该filed对应的错误列表，这里取第一个  
        	$("#_error_message_box").append(value[0]+"<br/>");  
            //$("#error_"+index).html(value[0]);  
            //$("#error_"+index).addClass("errorLabel");  
        });  
        $('#_error_message_box').addClass('errorMessage');
        handler.onFaild();
        return;  
    }  
    handler.onSuccess();
}
//判断对象是否为空(处理Object obj = {}这种情况认为isEmpty=true)  
function isEmpty(obj){
    for(var p in obj){  
        return false;  
    }  
    return true;  
} 

/*
 * 打开新窗口
 * f:链接地址
 * n:窗口的名称
 * w:窗口的宽度
 * h:窗口的高度
 * s:窗口是否有滚动条，1：有滚动条；0：没有滚动条
 */
function openWin(f,n,w,h,s){
	sb = s == "1" ? "1" : "0";
	l = (screen.width - w)/2;
	t = (screen.height - h)/2;
	sFeatures = "left="+ l +",top="+ t +",height="+ h +",width="+ w
			+ ",center=1,scrollbars=" + sb + ",status=0,directories=0,channelmode=0";
	openwin = window.open(f , n , sFeatures );
	if (!openwin.opener)
		openwin.opener = self;
	openwin.focus();
	return openwin;
}
//各行变色表格
$(document).ready(function(){  
    $(".color_table tr").mouseover(function(){  
     $(this).addClass("over");  
    });  
    $(".color_table tr").mouseout(function(){  
     $(this).removeClass("over");  
    });   
     
    $(".color_table tr:even").addClass("double");   
});  