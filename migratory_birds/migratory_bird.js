// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
    let bird_sightings = {};
    for(let bird in arr){
        bird_sightings[arr[bird]] = bird_sightings[arr[bird]] + 1 || 1;
    }
    //console.log("Bird Sightings:",bird_sightings);
    let max_bird = 0;
    let return_bird = null;
    for(let birds in bird_sightings){
        if(bird_sightings[birds] > max_bird){
            max_bird = bird_sightings[birds];
            return_bird = parseInt(birds);   
        }
        if(bird_sightings[birds] == max_bird){
            if(return_bird > parseInt(birds)){
                return_bird = parseInt(birds);
            }
        }
    }
    return return_bird;
    //chars[char] = chars[char] + 1 || 1;
}

module.exports = migratoryBirds;