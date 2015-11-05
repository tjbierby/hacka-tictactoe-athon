/**
 * Created by Stefanie on 11/4/2015.
 */

//Any global variable go here
var player1_turn=true;
var player1_piece='images/betafish.png';
var player2_piece='images/puffer.png';

//Main board object

var game_board={
      column1:{p1:0,p2:0},
      column2:{p1:0,p2:0},
      column3:{p1:0,p2:0},
      row1:{p1:0,p2:0},
      row2:{p1:0,p2:0},
      row3:{p1:0,p2:0},
      diagon1:{p1:0,p2:0},
      diagon2:{p1:0,p2:0},
    };

//Board rendering function
function insert_player_piece(square){
        if(player1_turn==true){
            var player1_icon=$('<img>').attr('src',player1_piece);
            $(square).prepend(player1_icon);
            $(square).addClass('clicked x');

        }
        else{
            var player2_icon=$('<img>').attr('src',player2_piece);
            $(square).prepend(player2_icon);
            $(square).addClass('clicked o');

        }



};
//Player tracking function

function update_board2(square){
    for(i in game_board){
        if($(square).hasClass(i)){
            if(player1_turn){
                game_board[i]['p1']+=1;

            }
            else{
                i['p2']+=1;
                game_board[i]['p2']+=1;

            }
        }
    }
}
//Win condition function
/*var game_board_array = [];
var win_condition_array = [
    [s0,s1,s2],[s3,s4,s5],[s6,s7,s8],[s0,s3,s6],[s1,s4,s7],[s2,s5,s8],[s0,s4,s8],[s2,s4,s6]
];*/

//var game_board_array = [];
//var win_condition_array = [
//    [s0,s1,s2],[s3,s4,s5],[s6,s7,s8],[s0,s3,s6],[s1,s4,s7],[s2,s5,s8],[s0,s4,s8],[s2,s4,s6]
//];

function check_for_win(){
    for(i in game_board){
        if(game_board[i]['p1']==3){
            alert('player 1 wins');
            reset_game_board();
            return
        }
        else if(game_board[i]['p2']==3){
            alert('Player 2 wins!');
            reset_game_board();
            return
        }
        else{
            return
        }
    }


for(var i=0;i<=win_condition_array.length;i++){
    var x_counter=null;
    var o_counter=null;
    for(var j=0; j<win_condition_array[i].length;i++){
        var condition = win_condition_array[i][j];
        if (game_board[condition] == 'x'){
            x_counter+=1;
            if (x_counter==3){
                console.log('x wins')
            }
        }
        else if (j=='o'){
            o_counter+=1;
            if (o_counter==3){
                console.log('o wins')
            }
        }
        else {

        }
    }
}
}

//Reset function
function reset_game_board(){
    $('.game_board').html('').removeClass('clicked');
    player1_turn=true;
    game_board={
        column1:{p1:0,p2:0},
        column2:{p1:0,p2:0},
        column3:{p1:0,p2:0},
        row1:{p1:0,p2:0},
        row2:{p1:0,p2:0},
        row3:{p1:0,p2:0},
        diagon1:{p1:0,p2:0},
        diagon2:{p1:0,p2:0},
    };

}

//Document Ready - should include basic click handler
$(document).ready(function () {
    $('.gameboard_wrapper').on('click','.game_board',function(){
        var current_square=this;
        if($(this).hasClass("clicked")){
            return}
        else{
            insert_player_piece(current_square);
            update_board2(current_square);
            check_for_win();
            console.log(game_board);
            console.log(player1_turn);
            if(player1_turn){
                player1_turn=false;
            }
            else{
                player1_turn=true;
            }
        }

    });

    //Difficulty Board Switch
    $("#easy").click(function(){
        $(".gameboard_wrapper").removeClass('hide');
        $(".lg_gameboard_wrapper").addClass('hide');
    });
    $("#difficult").click(function() {
        $(".lg_gameboard_wrapper").removeClass('hide');
        $(".gameboard_wrapper").addClass('hide');
    });

});