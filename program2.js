const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;

  // dp[i][j] will be true if s[0:i] matches p[0:j]
  const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

  // Empty string and empty pattern match
  dp[0][0] = true;

  // Fill for patterns that start with '*'
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
        // '?' matches any single character, or characters match
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        // '*' matches any sequence (0 or more characters)
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  // Final answer is whether the entire string matches the entire pattern
  return dp[m][n];
};

module.exports = decodeTheRing;
