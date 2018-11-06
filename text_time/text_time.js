function textTime(the_time){
    var minute_descriptions = {
        0:"O'clock",
        1:"five",
        2:"ten",
        3:"quarter",
        4:"twenty",
        5:"twenty five",
        6:"half" 
    };
    
    let hours = the_time.getHours();
    let minutes = the_time.getMinutes();
    let seconds = the_time.getSeconds();

    let min_calc = Math.floor(minutes / 5);
    let min_calc_r = minutes % 5;

    var nearly_txt = "almost";

    let realtion = "";

    let text = ["It is"];
    
    if((min_calc_r >= 2 && seconds >= 30) || (min_calc_r >= 3)){
        text.push(nearly_txt);
        min_calc++;
    }
    if(min_calc == 12){
        min_calc=0;
        hours++;
    }
    if(min_calc == 0){
        text.push(hourText(hours));
        text.push(minute_descriptions[0]);
    }
    else{
        if(min_calc > 6){
            hours+=1;
            relation = "to";
        }
        else{
            relation = "past";
        }

        text.push(minute_descriptions[min_calc <= 6 ? min_calc : 6-(min_calc-6)]);
        
        if(min_calc != 3 && min_calc != 6 && min_calc != 9){ 
            text.push("minutes");   
        }
        text.push(relation);
        text.push(hourText(hours));
    }
    //console.log("Time: "+hours+":"+minutes+":"+seconds, "Calc:", min_calc, min_calc_r);
    return text.join(" ");
}

function hourText(hour){
    var hour_descriptions = {
        0:"twelve",
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine",
        10:"ten",
        11:"eleven",
        12:"twelve"
    };
    if(hour > 12){
        hour -= 12;
    }
    return hour_descriptions[hour];
}
module.exports=textTime;