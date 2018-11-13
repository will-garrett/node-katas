var crypto = require('crypto');
class cipher{
    constructor(algorithm){
        if(algorithm in this){
            this.alg = algorithm;
            let new_args = Array.from(arguments);
            this.aes(new_args.splice(1));
            this.caesar(new_args.splice(1));
        }
    }
    aes(){
        console.log("AES",arguments);
    }
    caesar(){
        console.log("CAESAR",arguments);
    }
    
}
module.exports=cipher;