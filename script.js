function ageInDays() {
  const birthYear = prompt('What is your birthyear...Homie?');
  let userAgeInDays = (2022 - birthYear) * 365;
  let h1 = document.createElement('h1');
  let textAnswer = document.createTextNode('You are ' + userAgeInDays + ' days old');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}
