/*对页面特定元素进行取值
* 作者：肖建
* 编写日期：
*/
//取得对象的原始值
function getControlDefaultValue(control)
{

  if (control.type == 'checkbox')
  {
    if (control.defaultChecked)
    	return control.value;
    else
    	return "";
  }
  else if (control.type == 'select-multiple')
  {
    var out = "";
    for(i=0; i<control.options.length; i++) {
      if (control.options[i].defaultSelected) {
        out = out+control.options[i].value+",";
      }
    }
    return out;
  }
  else if (control.type == 'select-one')
  {
    var val;
    var def;
    for(var i=0; i<control.options.length; i++)
    {
      if (control.options[i].defaultSelected)
        return control.options[i].value;
   }
    return null;
  }
  else
  {
    return control.defaultValue;
  }
}

//取得对象的值
function getControlValue(control)
{
  if (control.type == 'checkbox')
  {
    if (control.checked)
    	return control.value;
    else
    	return "";
  }
  else if (control.type == 'select-one')
  {
    for(var i=0; i<control.options.length; i++)
    {
      if (control.options[i].selected)
      {
        return control.options[i].value;
      }
    }
    return null;
  }
  else if (control.type == 'select-multiple')
  {
    var out = "";
    for(i=0; i<control.options.length; i++) {
      if (control.options[i].selected) {
        out = out+control.options[i].value+",";
      }
    }
    return out;
  }
  else
  {
    return control.value;
  }
}