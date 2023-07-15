function Substring(str) {
    let longestSubstring = '';
    let start = 0;
    let charMap = new Map();
  
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
  
      if (charMap.has(currentChar)) {
       
        start = Math.max(start, charMap.get(currentChar) + 1);
      }
  
      charMap.set(currentChar, i);
  
      if (i - start + 1 > Substring.length) {
        Substring = str.slice(start, i + 1);
      }
    }
  
    return Substring;
  }
  
  // Example usage
  const inputString = 'sarthak';
  const longestSubstring = Substring(inputString);
  console.log("Longest Substring is "+longestSubstring.length); 
  console.log("The substring is "+longestSubstring); 
  