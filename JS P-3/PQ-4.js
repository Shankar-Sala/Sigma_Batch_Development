// PQ-4 --> Create a nested array to show the following tic-tac-toe game state. 

        //    X   null  0
        //  null   X    null
        //    0   null  X

let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];

game[0][1]='O';
console.log(game);
           