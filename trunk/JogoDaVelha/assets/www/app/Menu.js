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

var Menu = ( function( ) {

	var privates = {
		enable: function(arrEnable){
			var length = arrEnable.length;
			
			for (var i = 0; i < length; i++) {
				View.getViewMenu().listen(arrEnable[i]);
			}
		},
		
		disable: function(arrDisable) {
			var length = arrDisable.length;
			
			for (var i = 0; i < length; i++) {
				View.getViewMenu().unlisten(arrDisable[i]);
			}
		}
	};

	return {
		start: function() {
			privates.enable(["start"]);
		},
		
		restart: function() {
			privates.enable(["restart"]);
			privates.disable(["end"]);
		},

		startGame: function() {
			//console.log("startGame");
			privates.disable(["start"]);
			privates.enable(["restart", "end"]);
			//Board.disable(true);
			Game.gameStart();
			//game.startGame();
			//info.start();
			//return true;
		},

		restartGame: function() {
			privates.disable(["start"]);
			//privates.enable(["end"]);
			Game.gameStart();
			//return true;
			//board.disable(true);
			//game.startGame();
			//info.start();
		},

		endGame: function() {
			privates.disable(["restart", "end"]);
			privates.enable(["start"]);
			if (Game.getPlaying()){
				Game.endGame({strBy: "finalize"});	
			} else {
				Game.endGame({strBy: "over"});
			}
			//board.disable(false);
			//game.finalize();
			//info.update(strings.finalize);
		}
	};
})( );
