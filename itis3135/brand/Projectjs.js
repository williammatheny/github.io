const n = prompt("Have you been here before?");
getAnswer();
validateEntry();
float2int();


// The getAnswer Function
function getAnswer()
{
   {
   if (n == "yes" || n == "Yes")
      {
      alert("Welcome back!");
      }
   else if (n == "no" || n == "No")
      {
      alert("Welcome to our home page! feel free to browse around!");
      }  
	else
	  {
		  alert("Please enter yes or no.");
	  }
   }
}
   // The validatEntry function
   function validateEntry()
   {
	   if (n == null)
	   {
		 alert("Please enter yes or no.");
	   }
   }

	