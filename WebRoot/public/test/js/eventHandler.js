function handleClick()
{
	var oRow;
	var userID
	if (arguments.length==0)
		return;
	oRow=arguments[0];//当前单击的行对象
	userID=oRow.cells(1).innerText;//当前行用户代号
    var strURL="userInfo.jsp?action=display&userID="+userID;
    var strURL1 = "roleList.jsp?action=getselectlist&userID="+userID;
    parent.frames("InfoFrame").navigate(strURL);
    parent.frames("RoleListFrame").navigate(strURL1);
}
//页号跳转
function toPage(page)
{
    if (page==null){
        try{
            page=parseInt(document.getElementById("toPage").value);
            if (isNaN(page)){
                alert("请输入有效页号！");
                return;
            }
            if (page>parseInt(document.getElementById("maxPage").innerText))
                page=parseInt(document.getElementById("maxPage").innerText);
            if (page<=1)
                page=1;
        }
        catch (ex)
         {
            alert("请输入有效页号！");
            return;
        }
    }
    if (page==-2){
        try
		{
            page=parseInt(document.getElementById("maxPage").innerText);
        }catch (ex)
		{
		}
    }
    window.location.replace("userList.jsp?action=list&page="+page);
}
