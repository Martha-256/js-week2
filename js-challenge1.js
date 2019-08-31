
function myfunction(){
  console.log("Enter your year of Birth");
  process.stdin.once('data', (number)=>{
  
      var age=2019-number;
      if (age<18){
          console.log("You're a MINOR!");
      }else if(age<36){
          console.log("You're a YOUTH");
      }else{
          console.log("You're an ELDER!");
      }
   
  })
  }
  console.log(myfunction());
