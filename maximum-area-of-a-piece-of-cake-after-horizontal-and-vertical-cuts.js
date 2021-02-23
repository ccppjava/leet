/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    const hc = horizontalCuts.sort((a, b) => a -b);
    const vc = verticalCuts.sort((a, b) => a - b);
    
    let hm = hc[0];
    for (var i = 1; i < hc.length; i++) {
        if (hc[i] > h) {
            break;
        }
        let height = hc[i] - hc[i - 1];
        if (height > hm) {
            hm = height;
        }
    }
    let hl = h - hc[i - 1];
    if (hl > hm) {
        hm = hl;
    }
    
    let vm = vc[0];
    for (var j = 1; j < vc.length; j++) {
        if (vc[j] > w) {
            break;
        }
        let width = vc[j] - vc[j - 1];
        if (width > vm) {
            vm = width;
        }
    }
    let vl = w - vc[j - 1];
    if (vl > vm) {
        vm = vl;
    }
    
    let result = vm * hm;
    result = result % 1000000007;
    return result;
};