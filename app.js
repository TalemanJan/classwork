function studentdetails(name,studentid,clas){

return `your name is: ${name}\nyour ID: ${studentid}\nyour class: ${clas}`

}

console.log(studentdetails("taleman",1243,12))



function getobtainmarks(eng,math,urdu,sci,comp){

  return `eng: ${eng}\nmath: ${math}\nurdu: ${urdu}\nsci: ${sci}\ncomp: ${comp}\n `;


}

console.log(getobtainmarks(45,65,45,77,34,87))


function obtainmarks(obtain){

return "Marks obtained: "+obtain
}

console.log(obtainmarks(45+65+45+77+34+87))




function getPercentage(obtain){
  console.log("percentage "+(obtain/500*100))
  
}


function getGrade(percentage){
if(percentage>100 || percentage<0){console.log(Error("Percentage should be not below 0 or above 100"),percentage=undefined)}
else{
  if(percentage >= 90 && percentage <= 100){percentage="A+"}
else if(percentage >= 80 && percentage < 90){percentage="A"}
else if(percentage >= 70 && percentage < 80){percentage="B"}
else if(percentage >= 60 && percentage < 70){percentage="C"}
else if(percentage >= 50 && percentage <= 60 ){percentage="D"}
else if(percentage < 50 ){percentage="F"}
else{}
}

console.log("grade "+percentage)
}
