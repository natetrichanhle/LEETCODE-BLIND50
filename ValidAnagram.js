var isAnagram = function(s, t) {
    //     if the lengths arent equal, then you know it's not an anagram (base case)
        if (s.length !== t.length) return false;
    //     instantiate a hashmap
        let visited = {};
    //     loop through the anagram
        for(let i = 0; i < s.length; i++) {
    //         if the character hasn't been seen before then initialize it to 0;
            if(!visited[s[i]]) visited[s[i]] = 0;
            if(!visited[t[i]]) visited[t[i]] = 0;
    //         increment and decrement the characters count
            visited[s[i]]++;
            visited[t[i]]--;
        }
    //     loop through the counts of the hashmap
        for (let count in visited) {
    //         if the count of each character isn't equal to 0 then return false (it isn't an anagram)
            if(visited[count] !== 0) return false;
        }
        return true;
    };