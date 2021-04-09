/**
 * 
 */
$(function(){
	$('a:eq(0)').prettyPopin({
		width:550,
		callback:function(){//팝업이 닫았을때 주는 이벤트
			alert('팝업이 닫힌다')
		}
	});
	
})