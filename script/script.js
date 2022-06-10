"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

if (personalMovieDB.count <= 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 11 && personalMovieDB < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('error!');
}


for (let i = 0; i < 2; i++) {
	const answer1 = prompt('Один из последних просмотренных фильмов?', ""),
		answer2 = +prompt('На сколько оцените его?', "");

	if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
		personalMovieDB.movies[answer1] = answer2;
	} else {
		i--;
		continue;
	}

}

console.log(personalMovieDB);

// if (4 != 4) {
// 	console.log('Ok!');
// } else {
// 	console.log('Wrong!');
// }


//

// let hamgurger;
// const fries = NaN,
// 	cola = 0,
// 	nuggets = 2;

// if (hamgurger && cola || fries === 3 && nuggets) {
// 	console.log('Done!');
// }


//

// for (let i = 5; i < 11; i++) {

// 	console.log(i);

// }


//

// for (let i = 20; i > 10; i--) {
// 	if (i === 13) {
// 		break;
// 	}

// 	console.log(i);
// }


//

// for (let i = 1; i < 11; i++) {
// 	if (i === 1) {
// 		continue;
// 	}
// 	if (i === 3) {
// 		continue;
// 	}
// 	if (i === 5) {
// 		continue;
// 	}
// 	if (i === 7) {
// 		continue;
// 	}
// 	if (i === 9) {
// 		continue;
// 	}
// 	console.log(i);
// }


//


// function fourthTask() {
// 	let i = 2;

// 	while (i <= 16) {
// 		if (i % 2 === 0) {
// 			i++;
// 			continue;
// 		} else {
// 			console.log(i);
// 		}
// 		i++;
// 	}
// }

