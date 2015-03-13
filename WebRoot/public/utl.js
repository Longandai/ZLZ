/*************************************************************************
Rem               PROGRAM (P) Vst Software Corporation
Rem  Program:     utl.js
Rem  System:      人力资源管理信息系统
Rem  Descripton:  创建程序用JAVASCRIPT
Rem
Rem
Rem  Modification History:
Rem  ----------------------------------------------------------------------
Rem     Date                By                Remarks/Reason
Rem  ----------------------------------------------------------------------
Rem    2003.10.29         BaiHaifei                 Created
Rem
Rem  Global Variables:
Rem    <variable>
Rem  <description>
Rem  Usage:
Rem  utl.js
Rem
Rem
Rem  Count: 1
Rem  *********************************************************************/


/**************************************************************************

1   	给String 类型添加trim方法         	trim()                               	入口参数
2  	判断EMAIL的格式                   	IsEmail(str)                         	入口参数为str
3   判断输入的日期的格式              	check_date(intime,format)            	入口参数为日期和日期格式 例: 2001.1.1 或 2002-02-02 或check_date("2002-02","y")
	return: 错误信息文本。若返回""，则intime合法

4  	判断月份的年份数目是否正确
5  	判断月份的数目是否正确
6  	判断日期的数目是否正确
7	判断输入全部是数字			check_number(num)			参数类型:String
8	判断输入为len1或len2长度的数字串	check_number_length(num,len1,len2)	参数类型:String,int,int
9	判断长度小于len1的数字串   		check_number_maxlength(num,len1)	参数类型:String,int
10	判断输入浮点数串 			check_number_point(num,x,y)		参数:num为String,x为小数点前位数,y为小数点后位数
11	判断年的数目是否正确     		check_year (year)			参数类型:int
12	判断输入的字符串是否为空 		check_item_null(num)			参数类型:String
13.判断输入串全部是字母				check_c(str)
14. 检查身份证号			_checkSfzh(sfzh)  自带打印错误，若身份证为空，返回0；其他的不合法情况返回负值；如果合法返回1；
15. 检查申请表编号		_checkSqbbh(sqbbh) 若申请表编号为空，返回0；其他的不合法情况返回负值；如果合法返回1；
16. 检查认定编号			_checkRdbh(rdbh)		若认定编号项目为空，返回0；其他的不合法情况返回负值；如果合法返回1；
17. 检查工伤证号 			_checkGszh(gszh)	若工伤证号为空，返回0；其他的不合法情况返回负值；如果合法返回1；
18. 比较起始日期的合法性：start<=end ? 		checkStartEndDate(startRQ, endRQ)
	返回：如果两个日期有""的，返回0；如果第一个日期格式不合法，返回-1；
	如果第二个日期格式不合法，返回-2；如果第一个日期大于第二个日期，返回-3；
	如果第一个日期小于或者等于第二个日期，返回1；
19. 得到当前日期 格式：yyyy.mm.dd
20. 求两个日期相差的天数:endRQ - startRQ。 输入参数格式：yyyy.mm.dd 或 yyyy.m.d
**************************************************************************/

/**************************
1  给String 类型添加trim方法
   截掉首尾的空格
***************************/
/*String.prototype.trim = function()
{
    return this.replace(/(^\s*)|(\s*$)/g, "");
}*/
function trim(theData)
{
	var checkStr = theData;
	if (checkStr==null)
		return ;
	if (checkStr=="")
		return "";
	var theStrLength=0;
	while (checkStr.charAt(0)==" ")
		checkStr=checkStr.substring(1,checkStr.length);
	theStrLength=checkStr.length;
	while (checkStr.charAt(theStrLength-1)==" ")
	{
		checkStr=checkStr.substring(0,checkStr.length-1);
		theStrLength=checkStr.length
	}
	return checkStr;
}

/**************************
2   判断输入的数据是否符合email的规范
***************************/
function IsEmail(str)
{
  var email = str;
  var flag = 0 ;
  for (i=0;i<email.length;i++){
    n = email.substr(i,1);
    if (n == "@"){
      if (i==0){
        return false;
      }else{
        if (flag==0){
          flag++;
        }
      }
    }else{
      if (n=="."){
        if (flag>0){
          flag++;
        }
      }
    }
  }
  if (flag>1){
    return false;
  }else{
    return true;
  }
}

/**************************
3   判断输入的日期的格式
***************************/
function check_date(intime,format)
{
		var ret ="";
        var date = intime;
        var str = "";
        var year = "";
        var month = "";
        var day = "";
        var msg = "";
        var pattern;
        //判断输入值是否为空
        if ((format.toUpperCase() != "Y")&&(format.toUpperCase() !="M")&&(format.toUpperCase() != "D"))
        {
          msg = "输入参数错误！";
        }
        if (format.toUpperCase() =="D")
        {
          pattern = /[1-2][0-9][0-9][0-9][^0-9][0-1]{0,1}[0-9][^0-9][0-3]{0,1}[0-9]/;
        }
        else if (format.toUpperCase() == "M")
        {
          pattern =/[1-2][0-9][0-9][0-9][^0-9][0-1]{0,1}[0-9]/;
        }
        else if (format.toUpperCase() == "Y")
        {
          pattern =/[1-2][0-9][0-9][0-9]/;
        }
        if (pattern.test(date)){
                str = date;
                year = parseInt(str,10);
                if (isNaN(str.charAt(4)))
                {
                        str = str.substr(5);
                }
                month = parseInt(str,10);
                if (isNaN(str.charAt(2)))
                {
                        str = str.substr(3);
                }
                else
                {
                        str = str.substr(2);
                }
                day = parseInt(str,10);

        }
        else{
                msg = "日期格式不对！";
        }
		if(check_number(year) == '1')
	        msg = "日期格式不对！";
		if(check_number(month) == '1')
	        msg = "日期格式不对！";
		if(check_number(day) == '1')
	        msg = "日期格式不对！";

        if (format.toUpperCase() =="D")
        {
			ret = check_year(year);
          	if (ret!=""){msg = ret ;}
          	ret = check_month(month);
          	if (ret!=""){msg = ret ;}
            ret = check_day(year,month,day);
          	if (ret!=""){msg = ret ;}
        }
        else if (format.toUpperCase() == "M")
        {
			ret = check_year(year);
          	if (ret!=""){msg = ret ;}
          	ret = check_month(month);
          	if (ret!=""){msg = ret ;}
        }
        else if (format.toUpperCase() == "Y")
        {
			ret = check_year(year);
          	if (ret!=""){msg = ret ;}
        }

		//附加：日期以“.”分割：
		var strs = intime.split(".");
		if(check_number(strs[0]) == '1')
	        msg = "日期格式不对！";
		if(check_number(strs[1]) == '1')
	        msg = "日期格式不对！";
		if(check_number(strs[2]) == '1')
	        msg = "日期格式不对！";
	    //如果msg为空说明格式正确，否则说明格式错误
	    //if(msg != "")
        //{
        	//alert(msg);
        	//return(false);
        //}else
        	//return(true);
        return(msg);
        	
}

/**************************
4  判断月份的年份数目是否正确
***************************/
function check_year(inyear)
{
  if (isNaN(inyear)){
    return ("年份必须为数字！");
  }else{
    if ((inyear<1900)||(inyear>3000)){
      return("输入年份超出有效范围！");
    }
  }
  return "" ;
}

/**************************
5  判断月份的数目是否正确
***************************/
function check_month(inmonth)
{
  if (isNaN(inmonth)){
    return("月份必须为数字！");
  }
  else
        {
                if ((inmonth > 12)||(inmonth<1))
                {
                        return("输入月份超出有效范围！");
                }
        }
        return "" ;
}

/**************************
6  判断日期的数目是否正确
***************************/
function check_day( inyear, inmonth, inday )
{
        if (isNaN(inday)){
                return("日期必须为数字！");
        }
        else
        {
                if ((inday < 1) || (inday > 31))
                {
                        return("每月最多只有31天！");
                }
                else if (( inmonth==4) || (inmonth==6) || (inmonth==9) || (inmonth==11) )
                {
                        if (inday > 30)
                        {
                                return("小月只有30天！");
                        }
                }
                else if( inmonth==2 )
                {
                        if ((( inyear % 100 ) != 0 && (inyear % 4) == 0) || (( inyear % 100 ) == 0 && ( inyear % 400) == 0 ))
                        {
                                if ( inday > 29 )
                                {
                                        return("润年2月只有29天！");
                                }
                        }
                        else
                        {
                                if ( inday > 28 )
                                {
                                        return("平年2月只有28天！");
                                }
                        }
                }
        }
        return "";
}


/**************************
7.判断输入串全部是数字
***************************/

function check_number(num)
{
	for(i=0;i<num.length;i++)
	{
		var a=num.substr(i,1);
		if (a<'0' || a>'9')
		return('1');
	}
	return('0');
}

/********************************
8.判断输入为len1或len2长度的数字串
*********************************/
function check_number_length(num,len1,len2)
{
	if(num.length==len1||num.length==len2)
		return(check_number(num));
	else return('2');
}
/**************************
9.判断长度小于len1的数字串
***************************/
function check_number_maxlength(num,len1)
{
	if(num.substring(0,1) == "-")
		num = num.substring(1,num.length);
	if(num.length<=len1)
		return(check_number(num));
	else return('2');
}


/**********************
10.判断输入浮点数串
***********************/
function check_number_point(num,x,y)
{
	var num1="";
	var num2="";
	var flag=0;
	var m=0+x;
	var n=0+y;
	var chk1,chk2;
	flag=num.indexOf('.',0);
	if(flag==-1) flag=num.length;
	num1=num.substring(0,flag);
	chk1=check_number_maxlength(num1,m);
	if(flag<num.length)
	{
	num2=num.substring(++flag,num.length);
	chk2=check_number_maxlength(num2,n);
	if(chk2!='0')
	return(chk2);
	}
	if(chk1!='0')
	return(chk1);
	return('0');
}
/**************************
11.判断输入的字符串是否为空
***************************/

function check_item_null(num)
{
	if (num=="null" || num.length==0)
	  return(true);
	  	else
	  return(false);
}

function getCurrentDate()
{
    var currDate,strDate;
    var year,month,day;
    currDate = new Date();
    year = currDate.getYear();
    month = currDate.getMonth()+1;
    day = currDate.getDate();
    if(month<10)
        month="0"+month;
    if(day<10)
      day="0"+day;
    strDate = year+"."+month+"."+day;
    return strDate;
}

/**************************
13.判断输入串全部是字母
***************************/

function check_c(str)
{
	for(i=0;i<str.length;i++)
	{
		var a=str.substr(i,1);
		if (a<'A' || (a>'Z' && a<'a') || a>'z')
		return('1');
	}
	return('0');
}

/**********************************************************
14. 若身份证为空，返回0；其他的不合法情况返回负值；如果合法返回1；
**********************************************************/
function _checkSfzh(sfzh)
{
	return __checkSfzh(sfzh, 1);
/*	var val = sfzh;
	var ret ="";
	if(val.length == 0)
		return 0;
	if(check_number(val) == '1')
	{
		alert("公民身份号码只能是数字！");
		return -3;
	}
	if(val.length!=15 && val.length!=18 )
	{
		alert("公民身份号码应为15位或18位！");
		return -1;
	}
	else if(val.length == 15 )
    {
		var birthday = "19" + val.substring(6,8) + "." + val.substring(8,10) + "." +val.substring(10,12);
		var sex = parseInt(val.substring(14,15));
		ret = check_date(birthday,"D");
		if(ret != "")
		{
			alert("公民身份号码7-12位应是日期格式！");
			return -2;//日期格式不对
        }
    }
    else if(val.length == 18 )
    {
		var birthday = val.substring(6,10) + "." + val.substring(10,12) + "." +val.substring(12,14);
		var sex = parseInt(val.substring(16,17));
		ret = check_date(birthday,"D");
		if(ret != "")
		{
			alert("公民身份号码7-14位应是日期格式！");
			return -2;//日期格式不对
        }
    }
	return 1;
*/
}

/*******************************************************
15. 若申请表编号为空，返回0；其他的不合法情况返回负值；如果合法返回1；
********************************************************/


/********************************************************
16. 若认定编号项目为空，返回0；其他的不合法情况返回负值；如果合法返回1；
*********************************************************/


/**************************************************
17. 若工伤证号为空，返回0；其他的不合法情况返回负值；如果合法返回1；
*****************************************************/


/************************************************************************
18. 比较起始日期的合法性：start<=end ? 要求日期格式：yyyy.mm.dd or yyyy.m.d
//返回：如果两个日期有""的，返回0；如果第一个日期格式不合法，返回-1；
//如果第二个日期格式不合法，返回-2；如果第一个日期大于第二个日期，返回-3；
//如果第一个日期小于或者等于第二个日期，返回1；
************************************************************************/

function checkStartEndDate(startRQ, endRQ)
{
	if(startRQ.length <=0 && endRQ.length <= 0)
		return 0; //both length are 0;
    	if( startRQ.length > 0)
    	{//第一个不空
        	var msg = "";
		msg = check_date(startRQ,"D");
		if(trim(msg) != "")
		{
			//return(msg);
			return -1;//startRQ 有错
		}
		if(endRQ.length>0)
		{//第二个不空
			msg = check_date(endRQ,"D");
			if(trim(msg)!="")
			{
				//alert(msg);
				return -2;//endRQ 有错
			}
			//两个都不空，且都合法，
			var strs1 = startRQ.split(".");
			var strs2 = endRQ.split(".");
			if(parseInt(strs1[0], 10) < parseInt(strs2[0], 10))
				return 1;
			else if(parseInt(strs1[0], 10) == parseInt(strs2[0], 10))
			{	if(parseInt(strs1[1], 10) < parseInt(strs2[1], 10))
					return 1;
				else if(parseInt(strs1[1], 10) == parseInt(strs2[1], 10))
				{
					if(parseInt(strs1[2], 10) <= parseInt(strs2[2], 10))
						return 1;
					else
						return -3;//alert("查询开始日期不得大于结束日期!");
				}else
					return -3;
			}else //
				return -3;
		}else
			return 0;//第二个为空；
	}else //第一个为空,第二个不空
	{
		msg = check_date(endRQ,"D");
		if(trim(msg)!="")
		{
			//alert(msg);
			return -2;//endRQ 有错
		}
	}

	return 1;//两个不空，且都合法，且startRQ<=endRQ
}

/*****************************************************************************
19. 得到当前日期 格式：yyyy.mm.dd
*****************************************************************************/
function getCurDate()
{
	var today = new Date();
	var year = "";
	var month = "";
	var day = "";
	year = today.getYear() + "";
	month = (today.getMonth()+1) + "";
	day = today.getDate() + "";
	if(month.length<2)
		month = "0" + month;
	if(day.length<2)
		day = "0" + day;

	return year + "." + month + "." + day;
}

/*****************************************************************************
19. 得到当前日期 格式：yyyy年mm月dd日星期day
*****************************************************************************/
function getChsCurDate()
{
	var weekday = new Array(7);
	weekday[0] = "日";
	weekday[1] = "一";
	weekday[2] = "二";
	weekday[3] = "三";
	weekday[4] = "四";
	weekday[5] = "五";
	weekday[6] = "六";
	var today = new Date();
	var year = "";
	var month = "";
	var day = "";
	var week = "";
	year = today.getYear() + "";
	month = (today.getMonth()+1) + "";
	day = today.getDate() + "";
	week = today.getDay();
	//if(month.length<2)
		//month = "0" + month;
	//if(day.length<2)
		//day = "0" + day;

	return year + "年" + month + "月" + day + "日" + " 星期" + weekday[week];
}

/*****************************************************************************
20. 求两个日期相差的天数:endRQ - startRQ。 输入参数格式：yyyy.mm.dd 或 yyyy.m.d
*****************************************************************************/
function diffDate(startRQ, endRQ)
{
	if(startRQ.length <=0)
		return ; //开始日期为空;
	if(endRQ.length <=0)
		return ; //结束日期为空;

	var	msg = check_date(startRQ,"D");
	if(trim(msg) != "")
	{
		//return(msg);
		return ;//startRQ 有错
	}
	msg = check_date(endRQ,"D");
	if(trim(msg)!="")
	{
		//alert(msg);
		return ;//endRQ 有错
	}

	var strs1 = startRQ.split(".");
	var strs2 = endRQ.split(".");

	var date1 = new Date(strs1[0], strs1[1], strs1[2]);
	var date2 = new Date(strs2[0], strs2[1], strs2[2]);
	var diffDay = (date2.getTime() + 0 - date1.getTime())/1000/60/60/24;	//days

	return diffDay;
}
/*****************************************************************************
21. 将身份证号统一为18位。输入参数为身份证号字符串。
    返回：如果sfzh不空且为合法的15位或者18位身份证号，返回统一成18位的身份证号；
		  否则返回"";不弹警告窗口。
*****************************************************************************/
function sfzh15to18(sfzh)
{
	if(__checkSfzh(sfzh, 0) <= 0)
		return "";
	if(sfzh.length == 18)
		return sfzh;

	//sfzh已是合法的15位，下面开始转换
	var i, num = 0;
	var clast = -1;
	var rs = "";
	rs = sfzh.substr(0, 6);
	rs += "19";
	rs += sfzh.substr(6, 9);

	for(i=18; i>=2; i--)
	{
		num += ((1<<(i-1))%11)*(parseInt(rs.substr(18-i, 1))-parseInt('0'));
	}
	num %= 11;
	switch(num)
	{
		case 0:
			clast = 1;
			break;
		case 1:
			clast = 0;
			break;
		case 2:
			clast = paserInt('X');
			break;
		default:
			clast = 12 - num;
			break;
	}
	rs = rs.substr(0, 17);
	rs += (clast + parseInt('0'));
	return rs;
}

//showMessage:1,show message; 0:don't show message
function _checkSfzh(sfzh, showMessage)
{
	var val = sfzh;
	var ret ="";
	if(val.length == 0)
		return 0;
/*
	if(check_number(val) == '1')
	{
		if(showMessage == 1)
			alert("公民身份号码只能是数字！");
		return -3;
	}
*/
	if(val.length!=15 && val.length!=18 )
	{
		if(showMessage == 1)
			alert("公民身份号码应为15位或18位！");
		return -1;
	}

	if(val.length == 15 )
    {
		if(check_number(val) == '1')
		{
			if(showMessage == 1)
				alert("15位公民身份号码只能是数字！");
			return -3;
		}
		var birthday = "19" + val.substring(6,8) + "." + val.substring(8,10) + "." +val.substring(10,12);
		var sex = parseInt(val.substring(14,15));
		ret = check_date(birthday,"D");
		if(ret != "")
		{
			if(showMessage == 1)
				alert("公民身份号码7-12位应是日期格式！");
			return -2;//日期格式不对
        }
    }
    else if(val.length == 18 )
    {
		if(check_number(val.substr(0,17)) == '1')
		{
			if(showMessage == 1)
				alert("18位公民身份号码前17位只能是数字！");
			return -4;
		}
		if( ((val.substr(17,1)).toUpperCase() != 'X') && (check_number(val.substr(17,1)) == '1'))
		{
			if(showMessage == 1)
				alert("18位公民身份号码末位只能是'X'或者数字！");
			return -4;
		}

		var birthday = val.substring(6,10) + "." + val.substring(10,12) + "." +val.substring(12,14);
		var sex = parseInt(val.substring(16,17));
		ret = check_date(birthday,"D");
		if(ret != "")
		{
			if(showMessage == 1)
				alert("公民身份号码7-14位应是日期格式！");
			return -2;//日期格式不对
        }
    }
	return 1;
}

/**
  日期转换函数
  2002.08.04－2002年8月4日
*/
function chsDate(str)
{
	var chsStr = "";
	if(str != "" && str != null)
    {
    	if(str.length>0)
        {
            var vals = str.split(".");
            if(vals.length == 3)
			{
				chsStr = vals[0]+"年"+ parseInt(vals[1],10)+"月"+parseInt(vals[2],10)+"日";
				return chsStr;
			}
            else return str;
        }
        else return "";
	}
	else return "";
}
/**
 * 日期转换函数
 * 2002.12.08
 *  二OO二年十二月八日
 */
function chsDate2(str)
{
	var a = new Array(11);
	a[0]="O";
    a[1]="一";
    a[2]="二";
	a[3]="三";
	a[4]="四";
	a[5]="五";
	a[6]="六";
	a[7]="七";
    a[8]="八";
	a[9]="九";
	a[10]="十";

	var chsStr = "";
	var tmp,y,m,d,t;
    var i = 0;
	if(str != "" && str != null)
    {

        var vals = str.split(".");
        if(vals.length == 3)
        {
            for(i=0;i<vals[0].length;i++)
            {
            	tmp = vals[0].charAt(i);
				chsStr += a[parseInt(tmp)];
            }
			chsStr += "年";

			m = parseInt(vals[1],10);
			if(m<=10)
			{
				chsStr += a[m];
			}else
			{
				t = m-10;
				chsStr += a[10]+a[t];
			}
			chsStr += "月";

			m = parseInt(vals[2],10);
            if(m<=10)
			{
				chsStr += a[m];
			}else if(m>10 && m<20 )
			{
				t = m-10;
				chsStr += a[10]+a[t];
			}else if(m==20 || m==30)
			{
				tmp = vals[2].charAt(0);
				chsStr += a[parseInt(tmp)]+a[10];
			}else
			{
				tmp = vals[2].charAt(0);
				chsStr += a[parseInt(tmp)]+a[10];
				tmp = vals[2].charAt(1);
				chsStr += a[parseInt(tmp)];
			}
			chsStr += "日";
			return chsStr;
        }
        else return str;
}
	else return "";
}

/**
* 检查浮点数的合法性.
* 只有下列是合法的:
* 43.9078, 654, 0.324, .8
*/
function _checkFloat(val)
{
	var msg = "";
	if(arguments.length<1)
   		return msg;
	if(val.length<1)
   	{
      	return msg;
   	}

	var ret = 0;
	var vals= val.split(".");

	if(vals.length == 2)
		if(vals[0].length==0 && check_number(vals[1]) == '0')
		{
			ret=1;//".98"
		}

	if(vals.length<1 || vals.length>2)
	{
		msg = "“.”多于一个";
		ret = -1;//
	}
	else if(check_number(vals[0].substr(1, vals[0].length-1)) == '1')
	{
		msg = "整数部分不是数字";
		ret = -2;
	}
	else if((vals[0].substr(0,1) == '-') || (vals[0].substr(0,1) == '+'))
	{
		if(vals[0].substr(0,1) == '-')
		{
			msg = "不能为负数";
			ret = -1;//
		}
	}
	else if(check_number(vals[0].substr(0,1)) == '1')
	{
			msg = "整数部分不是数字";
			ret = -2;//整数部分不是数字
    }
	else if(vals.length == 2)
	{
		if(check_number(vals[1]) == '1')
		{
			msg = "小数部分不是数字";
			ret = -3;//小数部分不是数字
		}
	}
	return msg;
}

//函数名：chkNumEng
//功能介绍：检查是否含有非数字或字母,主要用于判断各种编号，如人员编号、部门编号等
//参数说明：要检查的字符串
//返回值：false：含有 true：全部为数字或字母 
function chkNumEng(str)
{
  var strSource ="_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ch;
  var i;
  var temp;

  for (i=0;i<=(str.length-1);i++)
  {
  
    ch = str.charAt(i);
    temp = strSource.indexOf(ch);
    if (temp==-1)
    {
     return(false);
    }
  }
  return(true);
}

//为防止多次转换（%->%25），加bForce参数和isConverted函数，若bForce不真则判断一下
//增加数字0-9为保留字符
function getUTF8Format(chsStr, bForce)
{
	//--------
	var hexToken = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
	function isReserve( code ) {
		flag = false;
		if( code > 64 && code < 91 ) flag = true;	//A-Z
		else if ( code > 96 && code < 123 ) flag = true;	//a-z
		else if ( code > 47 && code <58 ) flag = true;		//0-9
		else if ( code == 46 || code == 47 || code == 58 || code == 63 || code == 64) flag = true;	//./:?@
		return flag;
	}
	var strHexToken = hexToken.toString();
	function isConverted( str, idx ) {
		if ( bForce ) return false;
		if (str.charAt(idx)=='%') {
			if ( (strHexToken.indexOf(str.charAt(idx+1)) != -1) && (strHexToken.indexOf(str.charAt(idx+2)) != -1) )
				return true;
		}
		return false;
	}
	//----------
	var result = "";
	//if( typeof(encodeURI) == "function" ) {
	//	return encodeURI( chsStr );
	//}
	for( var i = 0; i < chsStr.length; i++ ) {
		var code = chsStr.charCodeAt( i );
		if( isReserve( code ) ) {
			result += chsStr.charAt(i);
		} else if ( isConverted(chsStr,i) ) {
			result += chsStr.substr(i, 3);
			i += 2;
		} else if ( code < 128 ) {
			result += '%' + hexToken[Math.floor( code / 16)] + hexToken[code % 16];
		} else if ( code < 2048 ) {
			var partA = Math.floor(code / 64);
			var partB = code % 64;
			result += '%' + hexToken[12 + Math.floor(partA / 16)] + hexToken[partA % 16];
			result += '%' + hexToken[8 + Math.floor(partB / 16)] + hexToken[partB % 16];
		} else {
			var partA = Math.floor(code / 4096);
			var partB = ( Math.floor(code / 64) ) % 64;
			var partC = code % 64;
			result += '%E' + hexToken[partA];
			result += '%' + hexToken[8 + Math.floor(partB / 16)] + hexToken[partB % 16];
			result += '%' + hexToken[8 + Math.floor(partC / 16)] + hexToken[partC % 16];
		}
	}
	return result;
}

//判断是否为电话号码
function isTel(telstr)
{
   	var reg=/[^0-9-]/g;
   	if (telstr!="")
   	{
   		if (reg.test(telstr))
   		{
   			return(false);
   		}else
  		{
   			return(true);
   		}
   	}
}

//判断是否为email开始
function isEmail(emailstr)
{
	if ((emailstr.indexOf('@', 0) == -1) || emailstr.indexOf('.') == -1) 
    {
    	return false;
    } else
   	{
        return true;
    }
}

//中文输入判断开始
function ischinese(str)
{
	var reg=/[^A-Za-z0-9_]/g;
    if (reg.test(str))
    {
    	return (true);
    } else 
    {
		return(false);
	}
}