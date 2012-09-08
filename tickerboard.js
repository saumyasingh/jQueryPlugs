/* Author:
 Saumya Singh
*/

/* This script replicates the tickerboard on nav items, the one like at the airport terminals, just add class="tickerboard" to use it */

		function back(y, index, speed) {
			setTimeout(function() {
      			$(y).children('.ltr-top').css({'-moz-transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-o-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)', 'transform': 'rotate(0deg)'});	
			}, index*speed);
		}
		
		$(document).ready(function() {
			var originals = [];
			var indexie = 0;
			var flag = 0;
			var speed = 20;/* Speed given in miliseconds */;
			var alphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			
			/* START METHOD -- change html of all .tickerboard */
			$('.tickerboard').find('span').each( function() {
				var text = $(this).text().split('');
				$.each(
					text,
					function(index) {
 						var html = '<span class="letter"><span class="ltr-top"></span><span class="ltr-bottom"></span><span class="char">'+text[index]+'</span></span>';
 						text[index] = html;
					}
				);
				$(this).html(text.join(''));
			});
			/* END METHOD -- change html of all .tickerboard */
			
			/* Make the tickerboard non-functional for touch screens */
			var type = $('html').attr('class');
			
			/* START METHOD -- ticking on mouseenter event */
			$('a').mouseenter( function() {
			if(flag == 0) {
				flag = 1;
				var x = $(this).find('span.letter');
				x.each( function() {
				var origin = $(this).text().toUpperCase();
				switch(origin) {
					case 'A':
					originals.push('0'); break;
					case 'B':
					originals.push('1'); break;
					case 'C':
					originals.push('2'); break;
					case 'D':
					originals.push('3'); break;
					case 'E':
					originals.push('4'); break;
					case 'F':
					originals.push('5'); break;
					case 'G':
					originals.push('6'); break;
					case 'H':
					originals.push('7'); break;
					case 'I':
					originals.push('8'); break;
					case 'J':
					originals.push('9'); break;
					case 'K':
					originals.push('10'); break;
					case 'L':
					originals.push('11'); break;
					case 'M':
					originals.push('12'); break;
					case 'N':
					originals.push('13'); break;
					case 'O':
					originals.push('14'); break;
					case 'P':
					originals.push('15'); break;
					case 'Q':
					originals.push('16'); break;
					case 'R':
					originals.push('17'); break;
					case 'S':
					originals.push('18'); break;
					case 'T':
					originals.push('19'); break;
					case 'U':
					originals.push('20'); break;
					case 'V':
					originals.push('21'); break;
					case 'W':
					originals.push('22'); break;
					case 'X':
					originals.push('23'); break;
					case 'Y':
					originals.push('24'); break;
					case 'Z':
					originals.push('25'); break;
				}
			});
				$.each(
					alphaArray,
					function(index) {
 						x.each( function() {
 							var y = this;
 							if(index <= originals[indexie] && !$('span.ltr-top').is(':animated') && type.indexOf('no-touch') >= 0) {
								setTimeout(function() {
      								$(y).html('<span class="ltr-top"></span><span class="ltr-bottom"></span><span class="char">'+alphaArray[index]+'</span>');
      								$(y).children('.ltr-top').css({'-moz-transform': 'rotate(90deg)', '-ms-transform': 'rotate(90deg)', '-o-transform': 'rotate(90deg)', '-webkit-transform': 'rotate(90deg)', 'transform': 'rotate(90deg)'});
      								back(y, index, speed);
								}, index*speed);
							}
							indexie++;
						});
						indexie = 0;
					}
				);
				originals = [];
				setTimeout(function() {
      				flag = 0;				
				}, 25*speed);
			}
			});
			/* END METHOD -- ticking on mouseenter event */
			
			
 		});