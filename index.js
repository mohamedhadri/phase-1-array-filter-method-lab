// Code your solution here
function findMatching(driv,drivName){
return driv.filter((x)=>x.toLowerCase()=== drivName.toLowerCase())
}

let arr= ['mohamed','hadri','ahmad','hasan']

console.log(findMatching(arr,'hasan'))

function  fuzzyMatch(driv,drivName){

    return driv.filter(
        (possibleMatch) =>
          possibleMatch.toLowerCase().indexOf(drivName.toLowerCase()) === 0
      );
    }


console.log(fuzzyMatch(arr,'h'))

function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }