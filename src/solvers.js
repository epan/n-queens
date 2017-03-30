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

window.findNRooksSolution = function(n) {
  // Input: n integer
  // Output: first array solution board

  // Edge case:
    // If n = 0, return: []
    // If n = 1, return: [[1]]
  // First, initialize new board of n by n
  // Recurse this on each row:
    // If row = n
      // return the board
    //


  // var solution; //[]
  // for (var i = 1; i < Math.pow(n, 2); i++){
  //   var child = new Board(
  // }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

window.countNRooksSolutions = function(n) {
  if (n === 1) { return 1; }

  var game = new Board({n: n});
  var solutionCount = 0;
  var piecesCount = 0;

  var solver = function (rowIndex) {
    if (rowIndex === n ) {
      solutionCount++;
      return;
    }
    for (var colIndex = 0; colIndex < n; colIndex++) {
      game.togglePiece(rowIndex, colIndex);
      if (!game.hasAnyRooksConflicts()) {
        solver(rowIndex + 1);
      }
      game.togglePiece(rowIndex, colIndex);
    }
  };

  solver(0);

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
