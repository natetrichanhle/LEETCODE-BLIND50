var isValid = function (s) {
    //     if (s.length % 2 !== 0) return false;

    //     const stack = [];
    //     const map = new Map([
    //         ['(', ')'],
    //         ['[', ']'],
    //         ['{', '}']
    //     ])

    //     for (let i = 0;i < s.length; i++){
    //         if(map.has(s[i])){
    //             stack.push(map.get(s[i]));
    //         } else if (s[i] !== stack.pop()) {
    //             return false;
    //         }
    //     }
    //     return stack.length === 0;

    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else if (stack[stack.length - 1] === map[s[i]]) {
            console.log(map[s[i]]);
            stack.pop()
        } else return false;
    }
    return stack.length ? false : true;
};    