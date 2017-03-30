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
  // Input: n integer
  // Output: solutionCount integer

  // Edge cases:
  // if (n === 0) { return 0; }
  if (n === 1) { return 1; }

  // Create new board of n by n
  var game = new Board({n: n});

  // Initialize solution count to 0
  // Initialize pieces count to 0
  var solutionCount = 0;
  var piecesCount = 0;

  // Recursive solver function, arg: a row
    // If the row = n && pieces = n
      // Increment solution count
      // Set pieces to 0
      // return
  var solver = function (rowIndex) {
    if (rowIndex === n ) {
      solutionCount++;
      //piecesCount = 0;
      return;
    }
    for (var colIndex = 0; colIndex < n; colIndex++) {
      game.togglePiece(rowIndex, colIndex);
      if (!game.hasAnyRooksConflicts()) {
        //piecesCount++;
        solver(rowIndex + 1);
      }
      game.togglePiece(rowIndex, colIndex);
    }
  };

  solver(0);

    // Loop through row i, (row 0 row n)
    // for (var colIndex = 0; colIndex < n; colIndex++)
      // Toggle(row, i) ON
      // If no conflicts on currently ON piece,
        // increment pieces by 1
        // Recurse solver function (row + 1)
      // Toggle(row, i) OFF
    // Invoke recursive solver with (0)




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
