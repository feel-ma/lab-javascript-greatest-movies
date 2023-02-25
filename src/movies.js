
  


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors=moviesArray.map(function (moviesArray){
        return moviesArray.director
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const directorMovies = moviesArray.filter(function(films){
        return films.director=='Steven Spielberg'
    })
    console.log (directorMovies);
    const dramaMovies= directorMovies.filter(function(type){
        return type.genre.includes(`Drama`)
    })
    console.log(dramaMovies)

    return dramaMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let avg=0; 
    if (moviesArray.length == 0) return 0
    avg = (moviesArray.reduce((a,b) => a+b.score,0))/moviesArray.length
    return +avg.toFixed(2)
}
console.log(scoresAverage(movies))



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaArray = moviesArray.filter((films) => films.genre.includes('Drama'))
    let avg = (dramaArray.reduce((a,b) => a+b.score,0))/moviesArray.length
    return +avg.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearArray=[...moviesArray]
     const endArray = yearArray.sort(function(a,b){
        if (a.year!=b.year) return a.year-b.year
        else {
            if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;
        }
    })
    return endArray

}

//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
 /*  function orderAlphabetically(moviesArray) {
    const copy= [...moviesArray]
    const alphaOrder = copy.sort(//(a,b) => a.localeCompare(b))
    const finalArray =[]

    for(let x = 0; x < 21; x++){
        finalArray.push(alphaOrder[x].title)
        console.log(alphaOrder[x].title)
    }
    return finalArray
}  */


function orderAlphabetically(moviesArray){
    const newArray=[]
    moviesArray.map((film) => newArray.push(film.title) )
    newArray.sort()
    const stringArray=newArray.map((title) => String(title))
    console.log(stringArray)
    const finalArray=[]
    for(let x=0; x<21; x++) finalArray.push((stringArray[x]) )
    //for(let x=0; x<21; x++) finalArray==String(finalArray[x])

    return (finalArray)

}

const d = "string "
console.log(d)

//console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray=[...moviesArray]
    for(let film of moviesArray){
        let split =film.duration.split("h")
        let hours = split[0]
        hours.substring(0,-1)
        hours*=60
        //console.log(hours)
        let minutes=split[1]
        //console.log(minutes)
        minutes.substring(1,-3)
        minutes+=0
        console.log(minutes)
        film.duration=(hours+minutes)
        //console.log(film.duration)

    }

}

console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
