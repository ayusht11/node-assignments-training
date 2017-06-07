// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  var freq = new Array();
  for(var i=0; i<string.length;i++)
    {
      freq[i] = 0;
    }
  
  var char = new Array();
  char[0] = string[0];
  freq[0] += 1;
  
  var k, j = 1;
  for(var i = 1; i<string.length;i++)
    {
     k=0;
     while(k<j)
       {
         if(string.charAt(i) == char[k])
           {
             freq[k] += 1;
            
         break;
            }
       
         
           k++;
       }
     if((string.charAt(i) != char[k]) && (j==k) && (string.charAt(i).match(/[a-z]/)) )
        {
             char[j] = string[i];
             freq[j] += 1;
             j++;
             k++;
            
        }
    }
  var temp;
  var charfreq = new Object();
  for(var i=0; i< char.length; i++)
  {
     
   charfreq[char[i]] = freq[i];
  }
  
 
 return charfreq;
}