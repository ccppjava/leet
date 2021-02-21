/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const len = gas.length;
    const ab = [];
    const po = [];
    for (let i = 0; i < len; i++) {
        ab[i] = gas[i] - cost[i];
        if (ab[i] >= 0) {
            po.push(i);
        }
    }
    
    // console.log(ab, po);
    for (let i = 0; i < po.length; i++) {
        const index = po[i];
        let failed = false;
        let sum = 0;
        for (let j = 0; j < len; j++) {
            sum = sum + ab[(index + j) % len];
            if (sum < 0) {
                failed = true;
                break;
            }
        }
        // console.log(index, failed);
        
        if (!failed) {
            return index;
        }
    }
    
    return -1;
};