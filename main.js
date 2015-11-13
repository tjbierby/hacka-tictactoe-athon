/**
 * Created by Stefanie on 11/4/2015.
 */

//Global Variables
var player1_turn=true;
var player1_piece='images/betafish.png';
var player2_piece='images/puffer.png';

//Main board object
var game_board={
      column1:{p1:0,p2:0},
      column2:{p1:0,p2:0},
      column3:{p1:0,p2:0},
      column4:{p1:0,p2:0},
      row1:{p1:0,p2:0},
      row2:{p1:0,p2:0},
      row3:{p1:0,p2:0},
      row4:{p1:0,p2:0},
      diagonal1:{p1:0,p2:0},
      diagonal2:{p1:0,p2:0},
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

//Player point tracking function
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


//Win Check on 3 x 3 Board
function check_for_win() {
    for (i in game_board) {
        if (game_board[i]['p1'] == 3) {
            //Activate the modal and fill it with proper contents
            $('#pix-modal img').attr('src', 'images/betafish.png');
            $('.modal-footer p').text('Beta Fish Wins!');
            $('#pix-modal').modal();
            reset_game_board();
            return
        }
        else if (game_board[i]['p2'] == 3) {
            $('#pix-modal img').attr('src', 'images/puffer.png');
            $('.modal-footer p').text('Puffer Fish Wins!'); 
            $('#pix-modal').modal();
            reset_game_board();
            return
        }
    }
}

//Win Check on 4 x 4 Board
function check_for_win_lg() {
    for (i in game_board) {
        if (game_board[i]['p1'] == 4) {
            //Activate the modal and fill it with proper contents
            $('#pix-modal img').attr('src', 'images/betafish.png');
            $('.modal-footer p').text('Beta Fish Wins!');
            $('#pix-modal').modal(); 
            reset_game_board();
            return
        }
        else if (game_board[i]['p2'] == 4) {
            $('#pix-modal img').attr('src', 'images/puffer.png');
            $('.modal-footer p').text('Puffer Fish Wins!'); 
            $('#pix-modal').modal();  
            reset_game_board();
            return
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
        column4:{p1:0,p2:0},
        row1:{p1:0,p2:0},
        row2:{p1:0,p2:0},
        row3:{p1:0,p2:0},
        row4:{p1:0,p2:0},
        diagonal1:{p1:0,p2:0},
        diagonal2:{p1:0,p2:0},
    };

}

//Document Ready - Click Handler
$(document).ready(function () {
    $('.gameboard_wrapper, .lg_gameboard_wrapper').on('click','.game_board',function(){
        var current_square=this;
        if($(this).hasClass("clicked")){
            return;
        }
        else{
            insert_player_piece(current_square);
            update_board2(current_square);
            //Which Difficulty Board Check
            if  ($('.gameboard_wrapper').hasClass('hide')) {
                check_for_win_lg();
            }
            else {
                check_for_win();
            }
            //Player Toggle
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
        reset_game_board();
    });
    $("#difficult").click(function() {
        $(".lg_gameboard_wrapper").removeClass('hide');
        $(".gameboard_wrapper").addClass('hide');
        reset_game_board();
    });

});