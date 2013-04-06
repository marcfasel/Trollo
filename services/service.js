
var mockBoard = {
	"title": "Trollo Board",
	"lists": [
        {"id": "list_1", "title": "ToDo", 
        	"cards": [
        		{ "id": "card_1", "title": "First card"},
        		{ "id": "card_2", "title": "Second card"}
        	]
       	},
        {"id": "list_2", "title": "Doing",
        	"cards": [
        		{ "id": "card_3", "title": "Third card"},
        		{ "id": "card_4", "title": "Fourth card"},
                { "id": "card_5", "title": "Fifth card"},
                { "id": "card_6", "title": "Sixth card"}
        	]
	    },
       {"id": "list_3", "title": "In Test",
            "cards": [
            ]
        },
        {"id": "list_4", "title": "Done",
            "cards": [
             { "id": "card_3", "title": "Third card"}
            ]
        }
    ]
};

var board = mockBoard;

exports.getBoard = function () {
	console.log('getBoard()');	
	return board;
};
exports.addCard = function (card,listId) {
    console.log('addCard()'); 
    var boardLists = board.lists;
    for (var i=0;i<boardLists.length;i++){
        var list = boardLists[i];
        if (list.id===listId) {
            list.cards.push(card);
        }
    }
    console.log(board);
}