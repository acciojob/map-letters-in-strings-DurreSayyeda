//your JS code here. If required.
function mapLetters(word) {

	const mapLetters = {};




	for (let i = 0; i < word.length; i++) {

		const letter = word[i];




		if (mapLetters.hasOwnProperty(letter)) {

			mapLetters[letter].push(i);

		}else{

			mapLetters[letter] = [i];

		}

	}




	return mapLetters;

}




console.log(mapLetters("dodo")); 

console.log(mapLetters("froggy")); 

console.log(mapLetters("grapes"))
