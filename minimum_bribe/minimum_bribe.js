function minimumBribes(q) {
    let ans = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++)
            if (q[j] > q[i]) ans++;
    }
    return ans;
}
module.exports=minimumBribes;