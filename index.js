var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var theBand = [];
  for(var i = 0; i < musicians.length; i++) {
    theBand.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBand;
}

const factsArray = ["He was the last Beatle to learn to drive", "He was never a vegetartian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(factsArray) {
  var excitedFacts = [];
  var index = 0;
  while (index < factsArray.length) {
    excitedFacts.push(`${factsArray[index]}!!!`);
    index++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(number) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return loveArray;
}