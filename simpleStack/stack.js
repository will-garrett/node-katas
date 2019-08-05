module.exports = {
  data: [],
  push(val){
    this.data.push(val);
  },
  pop(){
    return this.data.pop();
  }
}