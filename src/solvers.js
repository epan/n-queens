/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// Need a function that can place a piece in every single position
  // Check if board is

// IDEA 1
// superclass
  // property: solution array
  // property: count of solutions
  // property: count of pieces on board
  // property: position of all(?) pieces
  // method: create n x n board
  // method: place pieces
  // method: detect hasConflict
  // method: detect solution
  // method: create child board
// subclass for
  // inheriting n x n board
  //

window.findNRooksSolution = function(n) {
  // Input: n integer
  // Output: first array solution board

  // First, create new board of n by n
  // Toggle first (0,0) piece
  // Create child generation qty: n*n -1
    // for child 1
      // Make sure prev generation pieces are all toggled
      // Toggle first non-toggled piece
    // for child 2
      // Make sure prev generation pieces are all toggled
      // Toggle the 2nd non-toggled piece
    // for child 3
      // Make sure prev generation pieces are all toggled
      // Toggle the 3rd non-toggled piece
    // for child M
      // Make sure prev generation pieces are all toggled
      // Toggle the Mth non-toggled piece

  var solution; //[]
  for (var i = 1; i < Math.pow(n, 2); i++){
    var child = new Board(
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;



  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
