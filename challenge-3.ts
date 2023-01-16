function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    let map = new Map<string, string>();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            if (Array.from(map.values()).includes(t[i])) {
                return false;
            }
            map.set(s[i], t[i]);
        } else if (map.get(s[i]) !== t[i]) {
            return false;
        }
    }
    return true;
}

/*
Input: s = "egg", t = "add"
Output: true
*/
