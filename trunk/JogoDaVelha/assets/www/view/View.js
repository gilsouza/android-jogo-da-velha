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

var View = ( function( ) {

	return {
		getViewBoard: function( ) {
			return {
				listen: function(objElement, strEvent, objFunctionCall, intCol, intRow){
					$( objElement ).bind( strEvent, function( ){
						objFunctionCall( intCol, intRow );
					});
				},

				unlisten: function(objElement){
					$( objElement ).unbind();
				},

				markCell: function(objCell, strValue){
					objCell.className += " " + strValue;
				},

				unmarkCell: function(objCell, strValue){
					$(objCell).removeClass(strValue);
				},

				cleanCell: function(objCell){
					$(objCell).removeClass("x");
					$(objCell).removeClass("o");
				},

				hide: function(){
					document.getElementById("board").style.display = "none";
				},

				show: function(){
					document.getElementById("board").style.display = "block";
				}
			};
		},
		getViewInfo: function( ) {
			return {
				adjust: function(strUpdate) {
					document.getElementById("info").innerHTML += strUpdate;
				},

				clean: function() {
					document.getElementById("info").innerHTML = "";
				}
			};
		},
		getViewMenu: function( ) {
			return {
				listen: function(strButtom) { // rever funcção que chamará
					if ( strButtom === null ) { // habilitará todos
						$(document.getElementById("start")).bind("click", function(){
							Menu.startGame();
						}).addClass("select");
						$(document.getElementById("restart")).bind("click", function(){
							Menu.restartGame();
						}).addClass("select");
						$(document.getElementById("end")).bind("click", function(){
							Menu.endGame();
						}).addClass("select");
					} else if ( strButtom === "start" ) { // habilitará start
						$(document.getElementById("start")).bind("click", function(){
							Menu.startGame();
						}).addClass("select");
					} else if ( strButtom === "restart" ) { // habilitará restart
						$(document.getElementById("restart")).bind("click", function(){
							Menu.restartGame();
						}).addClass("select");
					} else if ( strButtom === "end" ) { // habilitará end
						$(document.getElementById("end")).bind("click", function(){
							Menu.endGame();
						}).addClass("select");
					}
				},

				unlisten: function(strButtom) {
					if ( strButtom === null ) { // desabilitará todos
						$(document.getElementById("start")).unbind().removeClass("select");
						$(document.getElementById("restart")).unbind().removeClass("select");
						$(document.getElementById("end")).unbind().removeClass("select");
					} else if ( strButtom === "start" ) { // desabilitará start
						$(document.getElementById("start")).unbind().removeClass("select");
					} else if ( strButtom === "restart" ) { // desabilitará restart
						$(document.getElementById("restart")).unbind().removeClass("select");
					} else if ( strButtom === "end" ) { // desabilitará end
						$(document.getElementById("end")).unbind().removeClass("select");
					}
				},

				updateStart: function() {
				}
			};
		}
	};
})();
