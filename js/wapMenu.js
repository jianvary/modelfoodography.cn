window.onload = function () {
	var oPcNO = document.getElementById("pcNO");
	var oMenu = document.getElementById("onMenu");
	var oUl = oMenu.getElementsByTagName("ul")[0];
	var onOff = true;
	oPcNO.onclick = function(){
		if(onOff)
		{
			oUl.style.display='block';
			onOff = false;
		}
		else
		{
			oUl.style.display='none';
			onOff = true;
		}	
	};	
};