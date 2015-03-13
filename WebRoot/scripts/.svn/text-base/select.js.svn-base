/**
 * author shangyantao
 * CheckBox 全选
 * @param ckboxAll
 * @param ckbox
 */
//checkbox 全选

function doAllSelect(ckboxAll, ckbox){

  if (ckbox == null) return;

  if (ckbox.length != null) {

    for(var i = 0; i <ckbox.length; i++) {

      if (ckboxAll.checked == true) ckbox[i].checked = true;

      else ckbox[i].checked = false;

    }

  } else {

    if (ckboxAll.checked == true) ckbox.checked = true;

    else ckbox.checked = false;

  }

}

 

//checkBox 是否被选择

function isSelected(ckbox) {

  if (ckbox == null) return false;

  var flag = false;

  if (ckbox.length != null) {

    for(var i = 0; i <ckbox.length; i++) {

      if (ckbox[i].checked == true) {flag = true;break;}

    }

  } else {

    if (ckbox.checked == true) flag = true;

  }

  return flag;

}