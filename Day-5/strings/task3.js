function searchWord(str, substr) {
    try {
        if (typeof str !== "string" || typeof substr !== "string") {
            throw new Error("Input parameters must be a string.");
        }
        let ans = 0;
        let temp = 0;
        parent: while (true) {
            let index = str.indexOf(substr[0]);
            if (index === -1) {
                return ans;
            } else {
                for (let i = 0; i < substr.length; i++) {
                    if (str[index + i] === substr[i]) {
                        temp++;
                    } else {
                        str = str.substring(0, index) + str.substring(index + 1)
                        temp = 0
                        continue parent;
                    }
                    if (i === substr.length - 1 && temp === substr.length) {
                        ans++;
                        str = str.substring(0, index) + str.substring(index + substr.length)
                        temp = 0;
                    }
                }
            }
        }
    } catch (e) {
        console.log(e.name + ": " + e.message);
        return 0
    }
}


console.log(searchWord("The quick brown fox", "fox"));
console.log(searchWord("abaa, bb, cc, dd, aa", 5));
console.log(searchWord("I love programming and solving puzzles", "programming"));