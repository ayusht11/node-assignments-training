// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var largest, secLargest;
  if(array[0] > array[1])
  {
    largest = array[0];
    secLargest = array[1];
  }else
  {
    largest = array[1];
    secLargest = array[0];
  }
  for(var i = 2; i < array.length; i++)
  {
    if (array[i] > largest)
    {
        secLargest = largest;
        largest = array[i];
    }
      else if ( array[i] > secLargest)
        {
          secLargest = array[i];
        }
    }
  return secLargest;
  }

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
     if((string.charAt(i) != char[k]) && (j==k) && (string.charAt(i) != " ") && (string.charAt(i) != "!") && (string.charAt(i) != "@") && (string.charAt(i) != "#") && (string.charAt(i) != "$") && (string.charAt(i) != "%") && (string.charAt(i) != "^") && (string.charAt(i) != "&") && (string.charAt(i) != "*"))
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

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  var flatObject = new Object();
  for(var key in unflatObject)
  { 
    console.log(unflatObject);
    if(typeOf(unflatObject[key])=="object")
      {
        console.log(unflatObject);
        flatObject[key] = flatten(unflatObject[key]);
        
      }
    else
      {
        console.log("else reached");
        flatObject[key] = unflatObject[key];
      
      
      }
    }
  
     
    return flatObject;
    
  }

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
}
