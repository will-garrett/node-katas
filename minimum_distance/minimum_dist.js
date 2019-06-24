function minimumDistances(a) {
    let i = 0;
    let j = 1;
    let current_minimum = Infinity;
    for (i = 0; i < a.length; i++){
        j = i+1;
        while (j < a.length) {
            if (a[i] == a[j]) {
                let comparison = Math.abs(i - j);
                current_minimum = Math.min(current_minimum, comparison);
                break;
            }
            j++;
        }
    }
    return (current_minimum == Infinity) ? -1 : current_minimum;
}

module.exports = minimumDistances;
