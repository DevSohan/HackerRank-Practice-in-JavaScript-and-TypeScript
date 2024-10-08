//Two Pointer

function isSubsequence(a, b) {
    // good luck. Add any arguments you deem necessary.
      if(!a) return true
      let i = 0
      let j = 0
  
      while(j < b.length){
          if(a[i] == b[j]) i++
          if(i == a.length) return true
          j++
      }
  
      return false
      
  }