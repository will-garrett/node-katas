var crypto = require('crypto');
class cryptography{

    constructor(algorithm, key){
        switch (algorithm) {
            case "aes":
                this.algorithm = new crypto_aes(key);
                break;
            default:
                console.error("No encryption selected");
                break;
        }

    }
    encrypt(text){
        return this.algorithm.encrypt(text);
    }
    decrypt(text){
        return this.algorithm.decrypt(text);
    }
    setKey(oldkey, newkey){
        if(oldkey == this.algorithm.getKey()){
            this.algorithm.setKey(newkey);
            return true;
        }
        return false;
    }
    
}
class crypto_aes{
    //#passkey;
    constructor(key){
        this.algorithm = 'aes-256-ctr';
        this.passkey = key;
    }
    setKey(key){
        this.passkey = key;
    }
    setAlgorithm(alg){
        this.algorithm = alg;
    }
    getAlgorithm(){
        return this.algorithm;
    }
    getKey(){
        return this.passkey;
    }
    encrypt(text){
        var cipher = crypto.createCipher(this.algorithm, this.passkey);
        var crypted = cipher.update(text,'utf8','hex');
        crypted+=cipher.final('hex');
        return crypted;
    }
    decrypt(text){
        var decipher = crypto.createDecipher(this.algorithm, this.passkey);
        var dec = decipher.update(text, 'hex', 'utf-8');
        dec+=decipher.final('utf-8');
        return dec;
    }
}
module.exports=cryptography;