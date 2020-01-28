/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    const colorToFill = image[sr][sc];
    if(colorToFill == newColor) {
      return image;
    }
    const fill = (x, y) => {
      if(x < 0 || x > image.length-1 || y < 0 || y > image[0].length-1){
        return;
      }
      if(image[x][y] != colorToFill){
        return;
      }
      else {
        image[x][y] = newColor;
        fill(x+1, y);
        fill(x, y+1);
        fill(x-1, y);
        fill(x, y-1);
      }
    }
    fill(sr, sc);
    return image;
};
module.exports = floodFill;