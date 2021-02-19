/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const emailIndex = new Map();
    const indEmail = new Map();

    for (let i = 0; i < accounts.length; i++) {
        var existing = [];
        for (let j = 1; j < accounts[i].length; j++) {
            let email = accounts[i][j];
            if (emailIndex.has(email)) {
                existing.push(emailIndex.get(email));
            }
        }

        // if found previous existing group, set all to the previous index
        if (existing.length) {
            for (let j = 1; j < accounts[i].length; j++) {
                let email = accounts[i][j];
                emailIndex.set(email, existing[0]);
                indEmail.get(existing[0]).push(email);
            }

            // console.log(existing, indEmail);
            for (let m = 1; m < existing.length; m++) {
                let ind = existing[m];
                if (ind !== existing[0]) {
                    for (let n = 0; n < indEmail.get(ind).length; n++) {
                        let email = indEmail.get(ind)[n];
                        emailIndex.set(email, existing[0]);
                        indEmail.get(existing[0]).push(email);
                    }
                }
            }
        } else {
            for (let j = 1; j < accounts[i].length; j++) {
                let email = accounts[i][j];
                emailIndex.set(email, i);
                if (!indEmail.has(i)) {
                    indEmail.set(i, []);
                }

                indEmail.get(i).push(email);
            }
        }
    }
    // console.log(emailIndex);

    const indexEmail = new Map();
    for (let [key, value] of emailIndex) {
        if (!indexEmail.has(value)) {
            indexEmail.set(value, []);
        }

        indexEmail.get(value).push(key);
    }
    // console.log(indexEmail);

    let result = [];
    for (let [key, value] of indexEmail) {
        result.push([accounts[key][0], ...value.sort()]);
    }

    // console.log(result);
    return result;
};

// accountsMerge([["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]);


// accountsMerge([["David","David0@m.co","David4@m.co","David3@m.co"],
//     ["David","David5@m.co","David5@m.co","David0@m.co"],
//     ["David","David1@m.co","David4@m.co","David0@m.co"],
//     ["David","David0@m.co","David1@m.co","David3@m.co"],
//     ["David","David4@m.co","David1@m.co","David3@m.co"]]);


// accountsMerge(
//     [["David","David0@m.co","David1@m.co"],
//     ["David","David3@m.co","David4@m.co"],
//     ["David","David4@m.co","David5@m.co"],
//     ["David","David2@m.co","David3@m.co"],
//     ["David","David1@m.co","David2@m.co"]]);

accountsMerge([["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]]);