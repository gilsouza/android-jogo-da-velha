/*
 * Copyright (C) 2011 The Code Bakers
 * Authors: Gilmar Costa
 * e-mail: thecodebakers@gmail.com e gilmarcs@gmail.com
 * Project: https://code.google.com/p/open-source-android-blackjack/
 * Site: http://thecodebakers.blogspot.com
 *
 * Licensed under the GNU GPL, Version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://gplv3.fsf.org/
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * @author Gilmar Costa - thecodebakers@gmail.com
 */

var Game = ( function( ) {
	
	var privates = {
		arrMoves: [ ],
		bolPlayer: true, // TRUE: indica o player 1 e FALSE: indica o player 2.
		//bolWin: false,
		bolPlaying: false,
		timeMove: null // armazenará o tempo restante de cada movimento, para exibição de mensagem.
	};

	return {
		gameStart: function( ) {
			//console.log("gameStart");
			Game.init();
			Info.init(Strings.playerOne);
			Board.init();
		},

		endGame: function( objEnd ) {
			clearTimeout(privates.timeMove);
			
			navigator.notification.vibrate(1500);
			
			if (objEnd.strBy === "player") {
				if (Game.getPlayer()) {
					Info.update(Strings.gameEndOne);
				} else {
					Info.update(Strings.gameEndTwo);
				}
				Board.disable(false);	
			} else if (objEnd.strBy === "draw") {
				Info.update(Strings.draw);
				Board.disable(false);
			} else if (objEnd.strBy === "finalize") {
				Info.update(Strings.finalize);
				Board.destroy();
			} else if (objEnd.strBy === "over") {
				Info.update(Strings.over);
			}
			
			privates.bolPlaying = false;
		},

		init: function( ) {
			//console.log("init");
			
			privates.intMoves = 0;
			privates.arrMoves = [ ["", "", ""],["", "", ""],["","",""] ];
			privates.bolPlayer = true;
			privates.bolPlaying = true;
			Control.reset();
			//privates.bolWin = false;
		},

		getMove: function(intCol, intRow) {
			return privates.arrMoves[ intCol ][ intRow ];
		},

		setMove: function(intCol, intRow, strPlay) {
			privates.arrMoves[ intCol ][ intRow ] = strPlay; 
		},

		updateMove: function( intCol, intRow ) {
			clearTimeout(privates.timeMove);
			
			var	objValidate = Control.checkMove(Game.getMove(intCol, intRow)),
				strPlay = (Game.getPlayer()) ? "x" : "o",
				objEnd;

			if (objValidate.bolValid) {
				Board.setBoard(intCol, intRow, strPlay);
				Game.setMove(intCol, intRow, strPlay);
				
				objEnd = Control.checkEnd(privates.arrMoves);
				
				if ( objEnd.bolEnd ) {
					Game.endGame(objEnd);
				} else {
					Game.updatePlayer();
				}

			} else {
				Info.update(objValidate.strMessage);
			}
		},

		updatePlayer: function( ) {
			privates.timeMove = setTimeout(function(){
										Info.adjust(Strings.wait);
									}, 8000);
			
			if( !Game.getPlayer() ) {
				Info.update(Strings.playerOne);
			} else {
				Info.update(Strings.playerTwo);
			}
			
			navigator.notification.vibrate(70);
			
			Game.setPlayer(Game.getPlayer());
		},
		
		getGameMoves: function( ) {
			return privates.arrMoves;
		},

		getPlayer: function( ) {
			return privates.bolPlayer;
		},

		setPlayer: function(bolPlayer) {
			privates.bolPlayer = ( !bolPlayer );
		},
		
		getPlaying: function( ) {
			return privates.bolPlaying;
		},

		setPlaying: function(bolPlaying) {
			privates.bolPlaying = bolPlaying;
		}
	};
})( );