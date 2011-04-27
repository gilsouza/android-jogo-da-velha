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

var Info = ( function( ) {
	
	return {
		init: function(strUpdate) {
			View.getViewInfo().clean();
			if (strUpdate !== null) {
				Info.update(strUpdate);
			} else {
				Info.update("");
			}
		},

		update: function(strUpdate){
			View.getViewInfo().clean();
			View.getViewInfo().adjust(strUpdate);
		},

		adjust: function(strUpdate) {
			View.getViewInfo().adjust(strUpdate);
		}
	};

})( );
