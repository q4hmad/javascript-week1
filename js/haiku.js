export class Poem {
  constructor(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
  }
checkTest() {
    let arrayOfInputtedLines = [this.line1, this.line2, this.line3]
    let simpleArray = []

     arrayOfInputtedLines.forEach(function(line) {
      simpleArray.push(line.toUpperCase());
    })
    return simpleArray;
    console.log(simpleArray);
  }

}
