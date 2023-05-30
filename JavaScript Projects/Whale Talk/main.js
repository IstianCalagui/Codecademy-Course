let input = 'Istian so pogi';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++){
  if (input[i] === 'e'){
      resultArray.push(input[i]);
    }
    if(input[i] === 'i')
      resultArray.push(input[i]);
  for ( let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(input[i])
    }
  }
}
const resultString = resultArray.join(' ').toUpperCase();
console.log(resultString);