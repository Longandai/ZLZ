  <!-- BPM Worklist Application / wlxpresssvalidate.js -->
<!--
function dropdown(mySel, message)
{
  var myindex=mySel.selectedIndex;
  var myvalue=mySel.options[myindex].value;
  if (myvalue=="") {
    alert(message);
    mySel.selectedIndex=0;
    mySel.focus();
    return false;
  }
  else {
    return true;
  }  
}
function getRadioSelectedIndex(radioGroup)
{
 //Handle case where radio group is undefined, or contains a single button
 if ( !radioGroup )
 {
   return -1;
 }
 
 if ( !radioGroup.length )
 {
   if ( radioGroup.checked )
   { 
     return 0;
   }
   else
   {
     return -1;
   }
 }
 
 var max = radioGroup.length;
  for (i=0;i<max;i++)
  {
    if (radioGroup[i].checked)
    {
      return i;
    }
  }
  return -1;
}

function getRadioValue(radioGroup)
{
   //Handle case where radio group is undefined, or contains a single button
   if ( !radioGroup )
   {
     return '';
   }
   
   if ( !radioGroup.length )
   {
     if (radioGroup.checked)
     {
       return radioGroup.value;
     }
     else
     {
       return '';
     }
   }
   
   var max = radioGroup.length;
   for (i=0;i<max;i++)
   {
     if (radioGroup[i].checked)
     {
       return radioGroup[i].value;
     }
   }
   return '';
}

//Enables 'move up' and 'move down' buttons
//depending on which radio button in a group is selected
function setMoveButtons(radioGroup,upBtn,dnBtn)
{
  var checkIdx = getRadioSelectedIndex(radioGroup);
  upBtn.disabled=false;
  dnBtn.disabled=false;
  //No button checked or only one button
  if ( checkIdx == -1 || !radioGroup.length)
  {
    upBtn.disabled=true;
    dnBtn.disabled=true;
  }
  //Top button 
  else if ( checkIdx == 0 )
  {
    upBtn.disabled=true;
  }
  //Bottom button
  else if ( checkIdx == radioGroup.length -1 )
  {
    dnBtn.disabled=true;
  }

}

//Enables/Disables the specified button depending
//on whether any elements in the specified group
//are selected or not (useful for delete buttons etc.
function setButtonFromGroup(group, btn)
{
  //Since we only care if any radio button or
  //checkbox is selected, we can use getRadioSelectedIndex
  //for radio and checkbox
  var checkIdx = getRadioSelectedIndex(group);
  if ( checkIdx == -1)
  {
    btn.disabled=true;
  }
  else
  {
    btn.disabled=false;
  }
}

function validateRoute(myForm, message1, message2)
{
  var myDropDown = myForm.routeConclusion;
  var myDropDownIndex=myDropDown.selectedIndex; 
  var myCheckBox = myForm.delegatees;
  var myDropDownValue=myDropDown.options[myDropDownIndex].value;

  // checkBox validation
  if (!myCheckBox) {
    alert(message1);
    return false;
  }
  else {
    var myCheckBoxLength = myCheckBox.length;
    var userSelected = false;
    if (!myCheckBoxLength) { // only one item
      userSelected = myCheckBox.checked;
    }
    else {
      for (i = 0; i < myCheckBoxLength; i++) {
	  if (myCheckBox[i].checked)
          userSelected = myCheckBox[i].checked;
      }
    }
    if (!userSelected) {
      alert(message1);
      return false;
    }
  }
  // dropdown validation
  if (myDropDownValue=="") {
    alert(message2);
    myDropDown.focus();
    return false;
  }
  else {
    return true;
  }  
}

function validateReassign(myForm, message)
{
  var myCheckBox = myForm.delegatees;

  // checkBox validation
  if (!myCheckBox) {
    alert(message);
    return false;
  }
  else {
    var myCheckBoxLength = myCheckBox.length;
    var userSelected = false;
    if (!myCheckBoxLength) { // only one item
      userSelected = myCheckBox.checked;
    }
    else {
      for (i = 0; i < myCheckBoxLength; i++) {
	  if (myCheckBox[i].checked)
          userSelected = myCheckBox[i].checked;
      }
    }
    if (!userSelected) {
      alert(message);
      return false;
    }
    else {
      return true;
    }
  } 
}

function actionConfirm(baseURL, mySel, taskId, taskTitle, message, displayArrayString)
{
  var myindex=mySel.selectedIndex;
  var myvalue=mySel.options[myindex].value;
  if (myvalue=="") {
    mySel.selectedIndex=0;
    mySel.focus();
    return false;
  }
  else {
    displayArray = displayArrayString.split("|");
    var args = new Array(displayArray[myindex], taskTitle)

    var regex = /\{[0-9]\}/;
    var str = message;
    i=0;
    while (info = regex.exec(str)) {
      str = str.replace(regex, args[i]);
      i++;
    }

    var answer = confirm(str)
    if (answer){
      location.href = baseURL + "taskAction=" + myvalue + "&taskId=" + taskId;
      return true;
    }
    else{
      mySel.selectedIndex=0;
      return false;
    }
  } 
}

function expandIt(elementId)
{
  document.getElementById(elementId).style.display = 
    (document.getElementById(elementId).style.display == 'block' ) ? 'none' : 'block';
}

function checkAll(field)
{
  for (i = 0; i < field.length; i++)
	field[i].checked = true ;
}

function uncheckAll(field)
{
  for (i = 0; i < field.length; i++)
	field[i].checked = false ;
}

//-->


function validateAdvanceSearch( aForm)
{        
  for( var i = 0; i < aForm.elements.length; i++ )
  {
        var name = trim(aForm.elements[i].name);
        if(name == "ExpDateFromFilter" ||
           name == "ExpDateToFilter" ||
           name == "CreateDateFromFilter" ||
           name == "CreateDateToFilter")
        {
           var value = trim(aForm.elements[i].value);
           if( ! validateAdvanceSearchDate(value) )
           {
                alert("Invalid format: \"" + value + "\" valid format is MM/DD/YY");
                return false;
           }
        }  
    }
    return true;
}


function validateAdvanceSearchDate( str )
{
      // Format: MM-DD-YEAR
      //
      // Quick check ... the size of the string must be at least as
      // large as the format.
      //
      if(str.length == 0)
         return true
      if( str.length != 8 )
          return false;
  
      return  isDigit( str.charAt( 0 ) ) &&
              isDigit( str.charAt( 1 ) ) &&
              str.charAt( 2 ) == '/' &&
              isDigit( str.charAt( 3 ) ) &&
              isDigit( str.charAt( 4 ) ) &&
              str.charAt( 5 ) == '/' &&
              isDigit( str.charAt( 6 ) ) &&
              isDigit( str.charAt( 7 ) );
}
