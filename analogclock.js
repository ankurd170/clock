var hours=0,mins=0,sec=0,intr,mindeg=0;
var hrdeg=0;

function anaclockstart()
{
	hr=document.getElementById('hr');
	mn=document.getElementById('min');
	sc=document.getElementById('sec');

intr=setInterval(function(){
	var secdeg=((sec/60)*360);
	
	

	if (sec<60) {
		sc.style.transform="rotate("+secdeg+"deg)";
		sec++;
	}
	else if(sec>=60 && mins<60)
	{

		sc.style.transform="rotate("+secdeg+"deg)";
		mins++;
		mindeg=((mins/60)*360);
		mn.style.transform="rotate("+mindeg+"deg)";
		sec=0;
		
	}
	else if(mins>=60)
	{
		sc.style.transform="rotate("+secdeg+"deg)";
		mn.style.transform="rotate("+mindeg+"deg)";
		hours++;
		hrdeg=((mins/60)*360);
		hr.style.transform="rotate("+hrdeg+"deg)";
		sec=0;
		mins=0;		
	}
	else
	{
		sec++;
	}



console.log(sec);
console.log(secdeg);
},1000);
}

function stopclock()
{
	clearInterval(intr);
}



