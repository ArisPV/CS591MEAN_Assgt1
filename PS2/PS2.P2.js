// Problem 2
//
// Generator that takes in a string sentence and emits each word of the sentence in turn.

function* splitSentence (str) {
    sentence = str.split(" ");
    yield* sentence;
};


const words = splitSentence("All I know is something like a bird within her sang.");
nextWord = words.next();
while (nextWord.done == false) {
    console.log(nextWord);
    nextWord = words.next();
};