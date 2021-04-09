$(function () {
	 var total=0 //합계
  $('#menu1 img').click(function () {//메뉴 이미지 클릭
	 var title=$('#menu1 img').nextAll().eq(0).text();//가격
 	 var price=$('#menu1 img').nextAll().eq(1).text();//가격
     $('#order').append($(this).nextAll().eq(0).text() + ' ')
     $('#order').append($(this).nextAll().eq(1).text() + '<br>')
     total += Number(price.replace(',','').replace('원',''))
  })
  $('#menu2 img').click(function () {
	 var total=''
 	 var price=$('#menu2 img').nextAll().eq(1).text();	  
     $('#order').append($(this).nextAll().eq(0).text() + ' ')
     $('#order').append($(this).nextAll().eq(1).text() + '<br>')
     total+=Number(price.replace(',','').replace('원',''))
     $('#money').append(total)

  })
  $('#menu3 img').click(function () {
	 var total=''
	 var price=$('#menu3 img').nextAll().eq(1).text();	  

     $('#order').append($(this).nextAll().eq(0).text() + ' ')
     $('#order').append($(this).nextAll().eq(1).text() + '<br>')
     total+=Number(price.replace(',','').replace('원',''))
     var sum=$('#money').val(total)
     alert(sum);

  })
  $('#menu4 img').click(function () {
	 var total=''
	 var price=$('#menu4 img').nextAll().eq(1).text();	  

     $('#order').append($(this).nextAll().eq(0).text() + ' ')
     $('#order').append($(this).nextAll().eq(1).text() + '<br>')
     
     total+=Number(price.replace(',','').replace('원',''))
     $('#money').append(total)

  })
}) 