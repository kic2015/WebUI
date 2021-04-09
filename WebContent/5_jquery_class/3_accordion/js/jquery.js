/** 
 *	평상시에는 내용이 숨겨져 잇다가 해당 메뉴를 클릭하면 숨겨져 있던 내용을 보여준다.
 */
$(function(){
	$('.accordion').each(function(){//accordion의 클래스 각각 분리시킨다
		var allDt = $(this).find('dt')//dt항목을 찾아서 allDt변수에 담아준다
		var allDd = $(this).find('dd')//dd항목을 찾아서 allDd변수에 담아준다
		
		allDd.hide();//dd 항목을 숨겨준다
		
		allDt.css('cursor','pointer')//손가락모양 마우스포인터
		allDt.click(function(){
			allDd.hide(); //allDd 숨기기 -  
			$(this).next().show()//내가 선택한 해당요소(this)의 다음 요소(next)를 보여주기(show)
			$(this).css('cursor','default');//클릭한 후에 마우스 포인터가 기본포인터로 다시 원상복구가 될 수 있도록
		})
	})	
	
})