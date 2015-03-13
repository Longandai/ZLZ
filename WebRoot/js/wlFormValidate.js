<!--

    var XPATH_INDEX_SEP = "/";

    function findNamedItem( dhtmlElement, childElemId ) {
        return dhtmlElement.getElementsByTagName("*").namedItem( childElemId );
    }

    function switchView(newMode)
    {
        var xmlView = findNamedItem( document.body, "xmlView" );
        var htmlView = findNamedItem( document.body, "htmlView" );
	

        if( newMode == "xml" )
        {
            htmlView.style.display = "none";
            xmlView.style.display = "block";
        }
        else if (newMode == "html")
        {
            xmlView.style.display = "none";
            htmlView.style.display = "block";
        }

    }


    function validateData( aForm )
    {        
        for( var i = 0; i < aForm.elements.length; i++ )
        {
            var name = trim(aForm.elements[i].name);
            var value = trim(aForm.elements[i].value);
            var type = trim(aForm.elements[i].dataType);
            var required = trim(aForm.elements[i].required);
            if (required && !value) {
                alert("Required field: " + getReadableName(name));
                return false;                
            }
            if (type && name) {
                if( ! validate(trim(value), trim(type)) )
                {
                    alert("Invalid format: " + getReadableName(name));
                    return false;
                }
                 
            }

        }
        return true;
    }

    function getReadableName(name){
       var beg;
       var slash = name.lastIndexOf("_sl_");
       var colon = name.lastIndexOf("_cl_");
       if (slash > colon)
          beg = slash;
       else
          beg = colon;
       return name.substring(beg + 4);
    }
    
    function validate(str, type)
    {
        // If the field value is empty, don't validate
        //
        if( isEmpty( str ) )
            return true;
        /*
        else if( type == "duration" )
            return validateDuration( str );
        else if( type == "dateTime" )
            return validateDateTime( str );
        else if( type == "time" )
            return validateTime( str );
        else if( type == "date" )
            return validateDate( str );
        else if( type == "gYearMonth" )
            return validateYearMonth( str );
        else if( type == "gYear" )
            return validateYear( str );
        else if( type == "gMonthDay" )
            return validateMonthDay( str );
        else if (type == "boolean" )
            return validateBoolean( str );
        else if( type == "gDay" )
            return validateDay( str );
        else if( type == "int")
            return validateInt( str );
        else if( type == "float" || type == "decimal")
            return validateFloat( str );
        else if( type == "gMonth" )
            return validateMonth( str );
        */
        else
        {
            // Default case, all other field types do not require
            // validation.
            //
            return true;
        }
    }
    
    
    var idx;
    function validateDuration( str )
    {
        // Format: PnYnMnDTnHnMnS
        //
        idx = 0;
    
        // Duration can have optional '-'
        //
        var c = str.charAt( idx );
        if( c == '-' )
            idx++;
    
        // Designator 'P' must always be present.
        //
        c = str.charAt( idx++ );
        if( c != 'P' )
            return false;
    
        // Must have at least one unit+designator
        //
        if( idx == str.length )
            return false;
    
        // If the next designator is a 'T' then we switch over to parsing
        // the time component.
        //
        c = str.charAt( idx++ );
        if( c != 'T' )
        {
            idx--;
            if( ! parsePeriod( str ) )
                return false;
    
            if( idx == str.length )
            {
                // End of string ... no time ... okie
                //
                return true;
            }
            
            // If the next character is a 'T', parse the time
            //
            c = str.charAt( idx++ );
            if( c != 'T' )
                return false;
        }
    
        var rc = parseTime( str );
    
        // If we're not at the end of the string ... error
        //
        if( idx != str.length )
            rc = false;
    
        return rc;
    }
    
    function parsePeriod( str )
    {
        var STP = new Array( 3 );
        STP[ 0 ] = 'Y';
        STP[ 1 ] = 'M';
        STP[ 2 ] = 'D';
    
        var k = 0;
        for( ; idx < str.length; )
        {
            if( ! skipInt( str ) )
            {
                // Check if the next character is a 'T'
                //
                return( str.charAt( idx ) == 'T' );
            }
    
            // Get the units
            //
            var found = false;
            c = str.charAt( idx++ );
            for( ; k < STP.length; )
            {
                if( STP[ k++ ] == c )
                {
                    found = true;
                    break;
                }
            }
            if( ! found )
            {
                idx--;
                return false;
            }
        }
    
        return true;
    }
    
    var foundDecimal = false;
    function parseTime( str )
    {
        var STT = new Array( 3 );
        STT[ 0 ] = 'H';
        STT[ 1 ] = 'M';
        STT[ 2 ] = 'S';
    
        var n = 0;
        var k = 0;
        for( ; idx < str.length; )
        {
            if( ! skipDecimal( str ) )
                return false;
    
            // Get the units
            //
            var found = false;
            c = str.charAt( idx++ );
            for( ; k < STT.length; )
            {
                if( STT[ k++ ] == c )
                {
                    found = true;
                    n++;
    
                    // Only the 'S' component can have a decimal number
                    //
                    if( foundDecimal && c != 'S' )
                        return false;
    
                    break;
                }
            }
            if( ! found )
            {
                idx--;
                return( n > 0 );
            }
        }
    
        // Time component has to have at least one unit
        //
        return( n > 0 );
    }
    
    function skipInt( str )
    {
        var n = 0;
        for( ; idx < str.length; idx++ )
        {
            if( ! isDigit( str.charAt( idx ) ) )
                break;
    
            n++;
        }
        return( n > 0 );
    }
    
    function skipDecimal( str )
    {
        foundDecimal = false;
        var n = 0;
        var n0 = 0;
        for( ; idx < str.length; idx++ )
        {
            c = str.charAt( idx );
            if( n0 > 0 && ! foundDecimal && c == '.' )
            {
                foundDecimal = true;
            }
            else if( ! isDigit( c ) )
                break;
    
            if( ! foundDecimal )
                n0++;
    
            n++;
        }
    
        return( n > 0 );
    }
    
    function validateDateTime( str )
    {
        // Format: CCYY-MM-DDThh:mm:ss
        //
        // Quick check ... the size of the string must be at least as
        // large as the format.
        //
        if( str.length < 19 )
            return false;
    
        return( isDigit( str.charAt( 0 ) ) &&
                isDigit( str.charAt( 1 ) ) &&
                isDigit( str.charAt( 2 ) ) &&
                isDigit( str.charAt( 3 ) ) &&
                str.charAt( 4 ) == '-' &&
                isDigit( str.charAt( 5 ) ) &&
                isDigit( str.charAt( 6 ) ) &&
                str.charAt( 7 ) == '-' &&
                isDigit( str.charAt( 8 ) ) &&
                isDigit( str.charAt( 9 ) ) &&
                str.charAt( 10 ) == 'T' &&
                isDigit( str.charAt( 11 ) ) &&
                isDigit( str.charAt( 12 ) ) &&
                str.charAt( 13 ) == ':' &&
                isDigit( str.charAt( 14 ) ) &&
                isDigit( str.charAt( 15 ) ) &&
                str.charAt( 16 ) == ':' &&
                isDigit( str.charAt( 17 ) ) &&
                isDigit( str.charAt( 18 ) ) );
    }
    
    function validateTime( str )
    {
        // Format: hh:mm:ss.sss
        //
        if( str.length < 12 )
            return false;
    
        return( isDigit( str.charAt( 0 ) ) &&
                isDigit( str.charAt( 1 ) ) &&
                str.charAt( 2 ) == ':' &&
                isDigit( str.charAt( 3 ) ) &&
                isDigit( str.charAt( 4 ) ) &&
                str.charAt( 5 ) == ':' &&
                isDigit( str.charAt( 6 ) ) &&
                isDigit( str.charAt( 7 ) ) &&
                str.charAt( 8 ) == '.' &&
                isDigit( str.charAt( 9 ) ) &&
                isDigit( str.charAt( 10 ) ) &&
                isDigit( str.charAt( 11 ) ) );
    }
    
    function validateDate( str )
    {
        // Format: CCYY-MM-DD
        //
        if( str.length < 10 )
            return false;
    
        return( isDigit( str.charAt( 0 ) ) &&
                isDigit( str.charAt( 1 ) ) &&
                isDigit( str.charAt( 2 ) ) &&
                isDigit( str.charAt( 3 ) ) &&
                str.charAt( 4 ) == '-' &&
                isDigit( str.charAt( 5 ) ) &&
                isDigit( str.charAt( 6 ) ) &&
                str.charAt( 7 ) == '-' &&
                isDigit( str.charAt( 8 ) ) &&
                isDigit( str.charAt( 9 ) ) );
    }
    
    function validateYearMonth( str )
    {
        // Format: CCYY-MM
        //
        if( str.length < 7 )
            return false;
    
        return( isDigit( str.charAt( 0 ) ) &&
                isDigit( str.charAt( 1 ) ) &&
                isDigit( str.charAt( 2 ) ) &&
                isDigit( str.charAt( 3 ) ) &&
                str.charAt( 4 ) == '-' &&
                isDigit( str.charAt( 5 ) ) &&
                isDigit( str.charAt( 6 ) ) );
    }
    
    function validateYear( str )
    {
        // Format: CCYY
        //
        if( str.length < 4 )
            return false;
    
        return( isDigit( str.charAt( 0 ) ) &&
                isDigit( str.charAt( 1 ) ) &&
                isDigit( str.charAt( 2 ) ) &&
                isDigit( str.charAt( 3 ) ) );
    }
    
    function validateMonthDay( str )
    {
        // Format: MM-DD
        //
        if( str.length < 5 )
            return false;
    
        return( isDigit( str.charAt( 0 ) ) &&
                isDigit( str.charAt( 1 ) ) &&
                str.charAt( 2 ) == '-' &&
                isDigit( str.charAt( 3 ) ) &&
                isDigit( str.charAt( 4 ) ) );
    }
    
    function validateDay( str )
    {
        // Format: DD
        //
        if( str.length < 2 )
            return false;
    
        return( isDigit( str.charAt( 0 ) ) &&
                isDigit( str.charAt( 1 ) ) );
    }
    
    function validateMonth( str )
    {
        // Format: MM
        //
        if( str.length < 2 )
            return false;
    
        return( isDigit( str.charAt( 0 ) ) &&
                isDigit( str.charAt( 1 ) ) );
    }
    
    function validateBoolean ( str ) 
    {
      if (str == null || str == "true" || str == "false")
          return true;
      else
          return false;
    }

    function validateInt( str )
    {
      return isNumber(str);
    }
    
    function validateFloat(str)
    {
      for( var i = 0; i < str.length; i++ )
        {
            var c = str.charAt( i );
            if( ! isDigit(c) && c != '.' )
                return false;
        }
        return true;
    }
    function endsWith( str, suffix )
    {
        if( str == null || suffix == null )
            return false;
        if( str.length < suffix.length )
            return false;
        var ss = str.substring( str.length - suffix.length, str.length );
        return( ss == suffix );
    }
    
    function getPrefix( str, suffix )
    {
        if( endsWith( str, suffix ) )
        {
            return str.substring( 0, str.length - suffix.length );
        }
        else
            return null;
    }
    
    function isEmpty( str )
    {
        if( str == null )
            return true;
    
        for( var i = 0; i < str.length; i++ )
        {
            var c = str.charAt( i );
            if( c != ' ' )
                return false; 
        }
    
        return true;
    }
    
    function isNumber( str )
    {
        for( var i = 0; i < str.length; i++ )
        {
            if( ! isDigit( str.charAt( i ) ) )
                return false;
        }
        return true;
    }
    
    function isDigit( c )
    {
        return( c >= 0 && c <= 9 );
    }
    
    function trim( str )
    {
        if( str == null )
            return null;
    
        var start = 0;
        for( ; start < str.length; start++ )
        {
            if( str.charAt( start ) != ' ' )
                break;
        }
        if( start == str.length )
        {
            // Entire string is empty
            //
            return "";
        }
    
        var stop = str.length - 1;
        for( ; stop >= 0; stop-- )
        {
            if( str.charAt( stop ) != ' ' )
                break;
        }
        return str.substring( start, stop + 1 );
    }
//-->
 
