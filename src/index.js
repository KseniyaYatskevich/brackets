module.exports = function check(str, bracketsConfig) {
  
  
  const brackets = str.split('');  
  
  for (let j = 0; j < bracketsConfig.length; j++) {
    
    for ( let i = 0; i < brackets.length; i++) {
      
      if (brackets[i] === bracketsConfig[j][0] && brackets[i+1] === bracketsConfig[j][1]){
        brackets.splice(i, 2);       
      }                 
    } 

  } 
 

  if (brackets.length == 0) { 
    return true;
  } return false;
  
    
  
}  
  
  


