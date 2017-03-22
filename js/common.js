
window.onload = function start (){	

	setTimeout("nextSlide()",10000);
	
}

function nextSlide(){
var interval = 10; // 5 sec
var length = ($("div.element").length);
var hideElemID;
var showElemID;
$("div.element").each(function(i,elem){
		if($(this).hasClass("active")){
			hideElemID = i;
			if(i == 2){
				showElemID = 0;				
			}else{
				showElemID = i+1;

			}
			
			return false;

		}
		
		
	});


var does = document.getElementsByClassName("element");

	does[hideElemID].style.transition = "1.5s";
	does[hideElemID].style.opacity = "0";

	setTimeout(function(){
		does[hideElemID].classList.remove('active');				
		does[showElemID].classList.add('active');		
		does[showElemID].style.opacity = "1";		
	},1500);	

	setTimeout("nextSlide()",interval*1000);


}