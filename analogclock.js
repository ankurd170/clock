var hours=0,mins=0,sec=0,intr,mindeg=0;
var hrdeg=0;

function anaclockstart()
{
	var hr=document.getElementById('hr');
	var mn=document.getElementById('min');
	var sc=document.getElementById('sec');
	var dt=new Date();
	var minnow=dt.getMinutes();
	var hrnow=dt.getHours();
	var secnow=dt.getSeconds();
	hours=hrnow-12;
	mins=minnow;
	sec=secnow; 
	document.getElementById('dateval').innerHTML="&nbsp;"+dt.toDateString();

	intr=setInterval(function(){
	var secdeg=((sec/60)*360);
	mindeg=((mins/60)*360);
	hrdeg=((hours/12)*360);

	if (sec<60) {
		sc.style.transform="rotate("+secdeg+"deg)";
		mn.style.transform="rotate("+mindeg+"deg)";
		hr.style.transform="rotate("+hrdeg+"deg)";
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



console.log(hrnow+":"+minnow+":"+secnow);
console.log(hrdeg+":"+mindeg+":"+secdeg);


},1000);
}

function stopclock()
{
	clearInterval(intr);
}



