
/*
 * GET board.
 */

exports.list = function(req, res){
 console.log('Getting board');
 var board = service.getBoard();
 res.end(JSON.stringify(board)); 
};