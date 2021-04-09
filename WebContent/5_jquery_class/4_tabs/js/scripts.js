/*
tabs의 해당항목을 누르면 panels의 항목의 같은 아뒤값을 찾아서 반응할 수 있도록
*/
$(function(){
	var topDiv = $('.tabSet');
	var anchors = topDiv.find('ul.tabs>li>a');//ul의 tabs의 자식 li태그 의 자손 a 태그를 찾아라
	var panelDivs= topDiv.find('div.panel');//div클래스중에서 panel이름의 클래스를 찾아라

	anchors.show();//anchors를 보여준다
	panelDivs.hide();//panelDivs를 숨긴다
	
	//자식을 찾을때는 find //속성같은거 찾을때는 filter
	var lastAnchor = anchors.filter('.on')//anchors변수 안에서 on클래스라는 속성을 찾는다          
	var lastPanel = $(lastAnchor.attr('href'))//lastAnchor의 href속성을 찾아온다.속성을 찾게되면 순수( #panel1-1 )인데 $를 붙여야 지칭하는 요소가 된다. 
	
	anchors.click(function(){//anchors 클릭이벤트 함수
		var currAnchor =$(this);
		var currPanel = $(currAnchor.attr('href'))////currAnchor의 href속성을 찾아온다.속성을 찾게되면 순수( #panel1-1 )인데 
		
		lastPanel.hide();//lastPanel를 숨겨준다. lastPanel는  on이라는 이름의 클래스의 href속성
		currPanel.show();//currPanel를 보여준다. currPanel는 현재 클릭한 애의 href속성
		
		lastAnchor.removeClass('on');
		currAnchor.addClass('on');			
		lastAnchor = currAnchor;//lastAnchor(클릭했던)의 변수에 currAnchor(현재 클릭한 상태)의 변수를 담아준다.
		lastPanel=currPanel;//lastPanel(클릭했던애의 href 속성)의 변수에 currPanel(현재 클릭한 애의 href속성) 변수를 담아준다.
		//이유는  이렇게 해주지 않으면 옛날값이 남아 있는 경우가 잇어 새로운 것을 클릭햇을때 옛날값이 다 보여지는 경우가 있다. 옛날 값(과거클릭햇던)을 새로운(현재클릭) 값으로 계속 변경 해줘야 현재 클릭한 값만 제대로 보여준다. 
		
	})
})