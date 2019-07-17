/**
 * let travel_list = [
    {src: 'MEX', dest: 'GER'},
    {src: 'UK', dest: 'MEX'},
    {src: 'USA', dest: 'CAN'},
    {src: 'CAN', dest: 'UK'}
  ];
 */

 function buildItinerary(list){
  let sources = {};
  let destinations = new Set();
  let result = [];
  let start = null;
  for(const flight of list){
    sources[flight.src] = flight.dest;
    destinations.add(flight.dest);
  }
  for(let k of Object.keys(sources)){
    if(!destinations.has(k)){
      result = [k];
    }
  }
  currentLocation = result[0];
  while(currentLocation != null){
    let next = sources[currentLocation] ? sources[currentLocation] : null;
    currentLocation = next;
    if(next != null){
      result.push(next);
    }
  }
  return result;
 }

 module.exports = buildItinerary;