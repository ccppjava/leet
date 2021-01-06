/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    var count = isConnected.length;
    var provinces = [];

    for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            if (i >= j && isConnected[i][j]) {
                // if (!provinces.length) {
                //     provinces.push(new Set([i, j]));
                // } else {
                    var exist = false;
                    for (var n = 0; n < provinces.length; n++) {
                        var province = provinces[n];
                        if (province.has(i)) {
                            province.add(j);
                            exist = true;
                            break;
                        } 
                        if (province.has(j)) {
                            province.add(i);
                            exist = true;
                            break;
                        }
                    }

                    if (!exist) {
                        provinces.push(new Set([i, j]));
                    }
                // }
            }
        }
    }

    var merged = true;
    while (merged) {
        merged = false;
        for (var i = 0; i < count; i++) {
            var index = -1;
            var merge = null;
            for (var n = 0; n < provinces.length; n++) {
                if (provinces[n] && provinces[n].has(i)) {
                    // console.log(i, n, provinces, merge);
                    if (!merge) {
                        merge = provinces[n];
                        index = n;
                    } else {
                        merge = new Set([...merge, ...provinces[n]]);
                        provinces[index] = merge;
                        // delete provinces[n];
                        provinces.splice(n,1);
                        merged = true;
                    }
                }
            }
        }
    }

    // var city_count = 0;
    // var province_count = provinces.length;
    // for (var n = 0; n < province_count; n++) {
    //     city_count += provinces[n].size;
    // }

    // province_count += count - city_count;

    // console.log(province_count, provinces);
    // console.log(provinces.length);
    return provinces.length;
};

findCircleNum([[1,1,0],[1,1,0],[0,0,1]]);
findCircleNum([[1,0,0],[0,1,0],[0,0,1]]);

findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]);