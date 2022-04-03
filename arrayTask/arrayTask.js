var favLanguages = ["CSS","JavaScript","Bootstrap","C#","Python"]

arrayLength = favLanguages.length;

// for (i = 0; i < arrayLength; i++) {
//     text += "<lu>" + favLanguages[i] + "</lu>";
//     }
//     console.log()

favLanguages = ["CSS","JavaScript","Bootstrap","C#","Python"];
for (let value of favLanguages) {
console.log(value);
}

// var myJSTestResults = [60,65,78,80,90]
// var sum = 0
// for(i=0; i < myJSTestResults.length ; i++){
//     sum += myJSTestResults[i];
//    let average = sum / myJSTestResults.length;
//     console.log("Average marks are :" + average)
// }


var sum = 0;
for (let value of  myJSTestResults) {
  console.log("Average marks are :" + value / myJSTestResults)
}