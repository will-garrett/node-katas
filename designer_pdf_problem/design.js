// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    let length = word.length;
    const soup = "abcdefghijklmnopqrstuvwxyz";
    let height = 0;
    for(const index in word ){
        let h_index = soup.indexOf(word[index]);
        if(h[h_index] > height){
            height = h[h_index];
        }
    }
    return height * length;
}
module.exports = designerPdfViewer;