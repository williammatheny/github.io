// Prints out the hungry crocodile needs you to give him a number between 1-10
// then prompts the user to enter a number
var n = prompt("The hungry crocodile needs you to give him a number between 1-10", "Enter number here");
n = parseInt(n);
getShape();
validateEntry();
float2int();

// The getShape Function
function getShape()
{
   {
   if (n == 1 || n == -1)
      {
      alert("henagon");
      }
   else if (n == 2 || n == -2)
      {
      alert("digon");
      }
   else if (n == 3 || n == -3)
      {
      alert("trigon");
      }
	  else if (n == 4 || n == -4)
      {
      alert("tetragon");
      }
	  else if (n == 5 || n == -5)
      {
      alert("pentagon");
      }
	  else if (n == 6 || n == -6)
      {
      alert("hexagon");
      }
	  else if (n == 7 || n == -7)
      {
      alert("heptagon");
      }
	  else if (n == 8 || n == -8)
      {
      alert("octagon");
      }
	  else if (n == 9 || n == -9)
      {
      alert("enneagon");
      }
	  else if (n == 10 || n == -10)
      {
      alert("decagon");
      }
   }
}
   // The validatEntry function
   function validateEntry()
   {
	   if (n > 10 || n < 0)
	   {
		 alert("Number is out of range, the crocodile ate you.");
	   }
	   if (isNaN(n))
       {
       alert("That's not even a number fool, the crocodile ate you.");
       }  
   }



   