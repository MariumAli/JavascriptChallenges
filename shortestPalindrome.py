class Solution:
    def shortestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if not s or len(s) == 1: return s
        
        s_l = 0
        s_r = len(s)-1
        rev = s[::-1]
        r_l = 0
        r_r = s_r
        
        MOD = 131
        P = 127
        INV_P = pow(P, MOD-2) % MOD
        
        def code(t):
            return ord(t)-ord('a')+1
        
        def rkHash(text, P, MOD):
            power = 1
            ans = 0
            for t in text:
                power = (power*P) % MOD
                ans = (ans + code(t)*power) % MOD
            return ans, power
        
        hash_s, power = rkHash(s, P, MOD)
        hash_r, power = rkHash(rev, P, MOD)
        if hash_s == hash_r and s == rev:
            return s
        
        s_power = power
        for i in range(len(s)):
            s_i = len(s)-1-i
            hash_s = (hash_s - code(s[s_i])*s_power) % MOD
            hash_r = ((hash_r - code(rev[i])*P) * INV_P) % MOD
            s_power = (s_power * INV_P) % MOD
            if hash_s == hash_r and rev[i+1:] == s[:-(i+1)]:
                return rev[:i+1] + s
        return rev + s