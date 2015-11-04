/**
 * Created by Stefanie on 11/4/2015.
 */

//Any global variable go here
var player1_turn=true;
var player1_piece='images/betafish.png';
var player2_piece='images/puffer.png';

//Main board object
var game_board={
    s0:undefined,
    s1:undefined,
    s2:undefined,
    s3:undefined,
    s4:undefined,
    s5:undefined,
    s6:undefined,
    s7:undefined,
    s8:undefined
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
function update_board(square){
    for(i in game_board){
        if(square.id==i){
            if (player1_turn==true){
                game_board[i]='x';
                player1_turn=false;
            }
            else{
                game_board[i]='o';
                player1_turn=true;
            }

        }
    }


}
//Win condition function
var game_board_array = [];
var win_condition_array = [
    [s0,s1,s2],[s3,s4,s5],[s6,s7,s8],[s0,s3,s6],[s1,s4,s7],[s2,s5,s8],[s0,s4,s8],[s2,s4,s6]
];

function check_for_win(){

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
}

//Document Ready - should include basic click handler
$(document).ready(function () {
    $('.gameboard_wrapper').on('click','.game_board',function(){
        var current_square=this;
        if($(this).hasClass("clicked")){
            return}
        else{
            insert_player_piece(current_square);
            update_board(current_square);
            console.log(game_board);
        }


    })

});