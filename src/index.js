module.exports = function check(str, bracketsConfig) {
  
  
  const brackets = str.split('');  
  
  for (let i = 0; i < brackets.length; i++) {
    
    for (let j = 0; j < bracketsConfig.length; j++) {
      
      if (brackets[i] === bracketsConfig[j][0] && brackets[i+1] === bracketsConfig[j][1]){
        brackets.splice(i, 2);
        i=i-2;               
        break;
      }  
    } 
    
  } 
  //  console.log(brackets);  

        
   
  
  console.log(brackets);   

// console.log(brackets); 
 

  if (brackets.length == 0) { 
    return true;
  } return false;
  
    
  
}  
  
  


