/**
 * Estimator
 */
function Estimator() {
  this.nodes = this.parseNodes(arguments[0]);
}
Estimator.prototype.addNode = function(node) {
  this.nodes.push(node);
}
Estimator.prototype.parseNodes = function (nodes) {
  return nodes;
}

/**
 * estimatedTime - in seconds
 */
Estimator.prototype.estimateTime = function(speed = 55) {
  let dist = (this.nodeDistance() * 60* 60) / speed;
  return dist;
}

Estimator.prototype.nodeDistance = function() {
  let fly_dist = 0;
  for (let i = 1; i <= this.nodes.length - 1; i++) {
    fly_dist += this.haversine(this.nodes[i-1].latitude, this.nodes[i-1].longitude, this.nodes[i].latitude, this.nodes[i].longitude, 3958.9);
  }
  return fly_dist;
}

Estimator.prototype.haversine = function(lat1, lon1, lat2, lon2, radius = 3958.9){
  let dLat = toRad(lat2 - lat1);
  let dLon = toRad(lon2 - lon1);
  let l1 = toRad(lat1);
  let l2 = toRad(lat2);

  let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(l1) * Math.cos(l2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  let ret =  radius * c;
  return ret;
}



 
function toRad(num) {
  return num * Math.PI / 180;
}

module.exports = Estimator;