/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    if (S.length <= 1) {
        return S;
    }

    var ordered = [...S.split('').reduce((a,c) => {
        if (a.has(c)) { a.set(c, a.get(c) + 1); }
        else { a.set(c, 1); }
        return a;
    }, new Map()).entries()].sort((a,b) => b[1] - a[1]);


    // console.log(ordered);

    var result = [];

    while (ordered.length >= 2) {
        var a = ordered[0];
        var b = ordered[1];

        for (var n = b[1]; n > 0; n--) {
            if (result[result.length - 1] === a[0]) {
                result.push(b[0]);
                result.push(a[0])
            } else {
                result.push(a[0]);
                result.push(b[0]);
            }
            // console.log(n, result);
        }
        a[1] = a[1] - b[1];
        b[1] = 0;

        ordered = ordered.filter(a => a[1] > 0).sort((a,b) => b[1] - a[1]);
    }

    // console.log(result.join(''), ordered);

    if (ordered.length === 1) {
        var a = ordered[0];

        if (a[1] === 1) {
            result.push(a[0]);
        } else if (a[1] > 1) {
            return '';
        }
    }

    result = result.join('');
    // console.log(">>>", result);
    return result;
};


reorganizeString("aabbccdd");
reorganizeString('aab');
reorganizeString('aa');
reorganizeString('aaab');

// reorganizeString("ogccckcwmbmxtsbmozli");   // "cocgcickmlmsmtbwbxoz"
// "cmcmcmcobobogkwxtszli"

// reorganizeString("tndsewnllhrtwsvxenkscbivijfqnysamckzoyfnapuotmdexzkkrpmppttficzerdndssuveompqkemtbwbodrhwsfpbmkafpwyedpcowruntvymxtyyejqtajkcjakghtdwmuygecjncxzcxezgecrxonnszmqmecgvqqkdagvaaucewelchsmebikscciegzoiamovdojrmmwgbxeygibxxltemfgpogjkhobmhwquizuwvhfaiavsxhiknysdghcawcrphaykyashchyomklvghkyabxatmrkmrfsppfhgrwywtlxebgzmevefcqquvhvgounldxkdzndwybxhtycmlybhaaqvodntsvfhwcuhvuccwcsxelafyzushjhfyklvghpfvknprfouevsxmcuhiiiewcluehpmzrjzffnrptwbuhnyahrbzqvirvmffbxvrmynfcnupnukayjghpusewdwrbkhvjnveuiionefmnfxao");
// "eweweweweweweweweweweweweweueueueueueueueueueueueueueueuhuhuhuhuhuhshshshshshshshshshshshshshshshshshshshphphphpcpcpcpcpcpcpcpcpcpcpcpcpcpcpcrcrcrcrcrcrcrcrcrcrcrcrmrmrmrmrmrmrmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmxmgmgvgvgvgvgvgvgvgvgvgvgvgvgvgvgvgvovovovovovovovovonononononononononbnbnbnbnbnbnbnbnbnbnbnbnbnbnbabaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiatatatatatftftftftftftftftftftftfdfdfdfdfdfdfdfdfdfdfdydydydydyzyzyzyzyzyzyzyzyzyzyzyzyzyzyjyjyjyjkjkjkjkjkjkjkjklklklklklklklklklklklkqkqkqwqwqwqwqwqwqwqwq"

// var max = Math.max(...S.split('').reduce((a,c) => {
//     if (a.has(c)) { a.set(c, a.get(c) + 1); }
//     else { a.set(c, 1); }
//     return a;
// }, new Map()).values());
    
// return max <= Math.ceil(S.length / 2);