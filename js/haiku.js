export class Poem {
  constructor(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
  }

checkTest() {
    let simpleArray = [];
    let l1 = this.line1.toUpperCase().split('');
    let l2 = this.line2.toUpperCase().split('');
    let l3 = this.line3.toUpperCase().split('');
    simpleArray.push(l1);
    simpleArray.push(l2);
    simpleArray.push(l3);
    return simpleArray;
}


}
