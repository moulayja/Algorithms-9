const isPositiveDominant=a=> 
	a.filter((e,i,a)=>e>0 && a.indexOf(e)==i).length>
			a.filter((e,i,a)=>e<0 && a.indexOf(e)==i).length