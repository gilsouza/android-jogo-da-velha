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

var Control = ( function( ) {
	const MOVE = 4, // até aqui não será feito nenhum tipo de avaliação no checkEnd.
		  LENGTH = 3; 

	var privates = {
		intMove : 0
	};
	
	return {
		reset: function( ) {
			privates.intMove = 0;
		},
		
		checkMove: function( strMove ) {
			if (strMove === "") {
				privates.intMove++;
				return {
					bolValid: true,
					strMessage: ""
				};
			}
			else {
				return {
					bolValid: false,
					strMessage: "Jogada Inválida!"
				};
			}
		},

		checkEnd: function( arrMoves ) {
			var i = 0,
				bolEnd = false;
			
			if ( privates.intMove > MOVE ) {
				// verificará horizontais e verticais
				for ( i = 0; i < LENGTH; i++ ) {
					if ( (arrMoves[i][0] !== "") && (arrMoves[i][0] === arrMoves[i][1] && arrMoves[i][2] === arrMoves[i][1]) ||
						( arrMoves[0][i] !== "") && (arrMoves[0][i] === arrMoves[1][i] && arrMoves[2][i] === arrMoves[1][i]) ) {
						bolEnd = true;
					}
				}
				// verificará diagonais
                if ( arrMoves[1][1] !== "" ) {
                    if ( (arrMoves[0][0] === arrMoves[1][1] && arrMoves[2][2] === arrMoves[1][1]) ||
                   		( arrMoves[0][2] === arrMoves[1][1] && arrMoves[2][0] === arrMoves[1][1]) ) {
                            bolEnd = true;
                    }
                }
				if ( !bolEnd ) {
					if ( privates.intMove === 9 ) {
						return {
							bolEnd: true,
							strBy: "draw"
						};
					} else if ( privates.intMove !== 9 ) {
						return {
							bolEnd: false,
							strBy: ""
						};
					}
				} else {
					return {
						bolEnd: true,
						strBy: "player"
					};
				}
			}
			return {
				bolEnd: false,
				strBy: ""
			};
		}
	};
})( );