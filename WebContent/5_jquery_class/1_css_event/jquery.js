$(function(){
	$('#hideButton').click(function(){
		//감추기 기능 구현(그림 감추기)
		//보이기 기능 구현()
		//선택(toggle) 한번클릭하면 감추는것 다시 클릭하면 보이게
		//f5 새로고침이 안먹히는 경우 ctrl+f5를 누른다
		$('#intro>img').hide()
	})
/*	$('#showButton').click(function(){
		$('#intro>img').show()
	})
	$('#toggleButton').click(function(){
		$('#intro>img').toggle()
	})*/
/*	//테이블의 홀수행의 배경색 지정
	$('tr:odd').css({'background':'#AA34BC'}) //기본필터 선택자
	
	//테이블 내용중에서 짝수행의 배경색과 글자색을 지정
	$('tbody tr:nth-child(2n)').css(
			{
				'background':'#ADFF2F',
				'color':'#FFFF00'
			})*/

	//프로그램 언어는 0부터 세고 오라클이나 css같이 프로그램언어가 아닌경우는 1부터 센다

	$('tbody tr:odd').addClass('table_striping');
	//마우스가 올라갔을때 색깔 넣어주고  마우스가 나가면 색깔이 빠져나가고 
	$('tbody tr').mouseover(function(){
/*		$(this).css(
				{
					'background':'#ADFF2F'
				}
		);*/
		//css 대신 addClass쓰기
		$(this).addClass('td_mouseover');
	})
	$('tbody tr').mouseleave(function(){
/*		$(this).css(
				{
					'background':'transparent'
				}
		);*/
		$(this).removeClass('td_mouseover');
	})
	
	$('#toggleButton').click(function(){
		let img = $('p#intro>img');//p태그중에 id가 intro인 애들을 찾고 그 자식중에서 img를 찾는건다
		if(img.is(':visible')){//is()함수 : 현재 상태를 알려주는 함수  , :visible은 보이는상태
			img.fadeOut(1000);
		}else{
			img.fadeIn(1000);
		}
	})
})
