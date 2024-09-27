// const getTotalIsles = function (grid) {


//   // write your code here

// };

// module.exports = getTotalIsles;
const getTotalIsles = function (grid) {
  // Check for edge case if the grid is empty
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function to perform DFS and mark the land as visited
  const dfs = function (r, c) {
    // Base case: if out of bounds or it's water ('W'), return
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
      return;
    }

    // Mark the current cell as visited by changing 'L' to 'W'
    grid[r][c] = 'W';

    // Explore the four possible directions: down, up, right, left
    dfs(r + 1, c);  // down
    dfs(r - 1, c);  // up
    dfs(r, c + 1);  // right
    dfs(r, c - 1);  // left
  };

  // Iterate through the grid to find land ('L') cells
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'L') {
        // Start a DFS search from the current land cell and mark all connected land
        dfs(r, c);
        // Increment the island count for each new DFS initiation
        islandCount++;
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
