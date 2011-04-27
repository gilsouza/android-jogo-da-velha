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

var Board = ( function( ){
	const LENGTH = 3;
	var privates = {
	
		arrBoard: [ ],
		
		startBoard: function( ) {
			privates.arrBoard = [
				[document.getElementById("top1"), document.getElementById("top2"), document.getElementById("top3")],
				[document.getElementById("center1"), document.getElementById("center2"), document.getElementById("center3")],
				[document.getElementById("bottom1"), document.getElementById("bottom2"), document.getElementById("bottom3")]
			];
		},

		finalizeBoard: function( ) {
			privates.arrBoard = [ ];
		},

		shot: function( intI, intJ ) {
			//alert("clicou" + intI + intJ );
			/*var strValue = Board.getArrBoard(intI, intJ);

			Control.checkMove(strValue);*/
			Game.updateMove(intI, intJ);
		}
	};

	return {
		init: function( ) {
			//console.log("Board.init");

			privates.startBoard();
			Board.disable(true)
			Board.enable();
			Board.show();
		},

		destroy: function( ) {
			View.getViewBoard().hide();
			Board.disable();
			//privates.finalizeBoard();
		},

		enable: function( ){
			for (var i = 0; i < LENGTH; i++) { // 3 linhas
				for (var j = 0; j < LENGTH; j++) { // 3 colunas
					// realiza (habilita a escuta) dos elementos do tabuleiro
					View.getViewBoard().listen(privates.arrBoard[i][j], "click", privates.shot, i, j);
				}
			}
		},

		disable: function( bolClean ) {
			for ( var i = 0; i < LENGTH; i++ ) {
				for ( var j = 0; j < LENGTH; j++ ) {
					View.getViewBoard().unlisten(privates.arrBoard[i][j]);
					if ( bolClean ) { // limpa células
						View.getViewBoard().cleanCell(privates.arrBoard[i][j]);
					}
				}
			}
		},

		getArrBoard: function( intI, intJ ) {
			return privates.arrBoard[intI][intJ];
		},

		setBoard: function(intI, intJ, strValue) {
			View.getViewBoard().markCell(privates.arrBoard[intI][intJ], strValue);
			
		},
		
		enableCell: function(intCol, intRow) {
			View.getViewBoard().listen(privates.arrBoard[intCol][intRow], "click", privates.shot, intCol, intRow);
		},

		disableCell: function(intCol, intRow) {
			View.getViewBoard().unlisten(arrBoard[intCol][intRow]);
		},

		hide: function( ) {
			View.getViewBoard().hide();
		},

		show: function( ) {
			View.getViewBoard().show();
		}
	};
})();
