function validateHTMlform()
{
  let form = document.StudentEnrolmentForm;
   if( form.firstnames.value == "" )
   {
     alert( "Enter Your First Name!" );
     form.firstnames.focus() ;
     return;
   }
   if( form.lastnames.value == "" )
   {
     alert( "Enter Your Last Name!" );
     form.lastnames.focus() ;
     return;
   }
  
   if ((StudentEnrolmentForm.sex[0].checked == false) && (StudentEnrolmentForm.sex[1].checked == false))
   {
   alert ( "Choose Your Gender: Male or Female" );
   return false;
   }  
   
   if( form.Course.value == "-1" )
   {
     alert( "Enter Your Course!" );
    
     return;
   }  
   
var email = form.emailadd.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
{
     alert("Enter your correct email address")
     form.emailid.focus() ;
     return;
}
  if( form.dob.value == "" )
   {
     alert( "Enter your DOB!" );
     form.dob.focus() ;
     return;
   }
  if( form.mobileno.value == "" ||
           isNaN( form.mobileno.value) ||
           form.mobileno.value.length != 10 )
   {
     alert( "Enter your Mobile No. in the format 123." );
     form.mobileno.focus() ;
     return;
   }
   return( true );
}
