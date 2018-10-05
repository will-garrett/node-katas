const Stack = require('./stack');

function string_validator(my_string){
    let the_string = my_string.split('');
    let the_stack = new Stack();
    for(character of the_string){
        if(character === '(' 
        || character === '{' 
        || character === '['){
            the_stack.push(character);
        }
        else {
            if(the_string.empty){
                return false;
            }
            last_one = the_stack.peek(); 
            switch(character){
                case ')':
                    if(last_one == '('){
                        the_stack.pop();
                    }
                    else{
                        return false;
                    }
                    break;
                case '}':
                    if(last_one == '{'){
                        the_stack.pop();
                    }
                    else{
                        return false;
                    }
                    break;
                case ']':
                    if(last_one == '['){
                        the_stack.pop();
                    }
                    else{
                        return false;
                    }
                    break;
                default:
                    return false;
                    break;
            }
        }
    }
    return true;
}

module.exports = string_validator;