//Process and return ASCII grid data and elevation in an array

async function threeASC(dat,dataP,imgP){
	//create div for buttons
	var div=document.createElement("div");
	div.setAttribute("id", "btnDiv");
	div.setAttribute("style", "display:flex;position:absolute;top:10px;left:10px;flex-direction:column;font-family:Arial;justify-content:center;");
	document.body.appendChild(div);
	div=document.getElementById("btnDiv");

	//create input for ASCIIfile
	var inp=document.createElement("input");
	inp.setAttribute("type", "file");
	inp.setAttribute("id", "asciiF");
	inp.setAttribute("name", "asciiF");
	inp.setAttribute("style", "display:none;");
	div.appendChild(inp);

	//create label for ASCII input
	var lab=document.createElement("label");
	lab.setAttribute("for", "asciiF");
	lab.setAttribute("id", "asciiL");
	lab.setAttribute("style", "background-color: lightgrey;width:125px;margin-top:10px;border:1px solid black;border-radius:3px;padding:5px 5px 5px 0px;text-shadow:1px 1px 1px black;text-align:center;");
	div.appendChild(lab);
	lab=document.getElementById("asciiL");
	lab.innerHTML="🏔 ASCII file";
	
	//create input for image file
	var inp=document.createElement("input");
	inp.setAttribute("type", "file");
	inp.setAttribute("id", "imgF");
	inp.setAttribute("name", "imgF");
	inp.setAttribute("style", "display:none;");
	div.appendChild(inp);

	//create label for image input
	var lab=document.createElement("label");
	lab.setAttribute("for", "imgF");
	lab.setAttribute("id", "imgL");
	lab.setAttribute("style", "background-color: lightgrey;width:125px;margin-top:10px;border:1px solid black;border-radius:3px;padding:5px 5px 5px 0px;text-shadow:1px 1px 1px black;text-align:center;");
	div.appendChild(lab);
	lab=document.getElementById("imgL");
	lab.innerHTML="🌎 Image file";

	//when ASCIIinput changed
	var ascIn=document.getElementById("asciiF");
	ascIn.onchange=function(){
		//call loader
		switchLoader("");
		var reader=new FileReader();
		//actions when reader is calles
		reader.onload=async function(){
			getData(this.result,dat,dataP);
			return dat;
		}
		reader.readAsText(ascIn.files[0], 'ASCII');
	}
	
	//when image input changed
	var imgIn=document.getElementById("imgF");
	imgIn.onchange=function(){
		//call loader
		switchLoader("");
		var reader=new FileReader();
		//actions when reader is calles
		reader.onload=async function(){
			imgP.src="";
			imgP.src=this.result;
			return imgP;
		}
		reader.readAsDataURL(imgF.files[0]);
	}
}

//function to extract data to variables
async function getData(file,d,dP){
	//extract file data
	//line 1 - ncols			(terrain width)
	//line 2 - nrows			(terrain height)
	//line 3 - xllcorner		(x axis origin)
	//line 4 - yllcorner		(y axis origin)
	//line 5 - cellsize			(value displacement in X and Y directions)
	//line 6 - NODATA_value		(empty data)
	//line 7 to nrows - data	(elevation values)
	
	//split file by spaces, new lines, and carriage returns
	var fileValues=file.split(/[\s\r\n]+/g);
	
	//terrain width
	d["width"]=parseInt(fileValues[1]);
	//terrain height
	d["height"]=parseInt(fileValues[3]);
	//terrain X origin
	d["Xo"]=parseFloat(fileValues[5]);
	//terrain Y origin
	d["Yo"]=parseFloat(fileValues[7]);
	//terrain cellsize
	//different definitions here
	if(fileValues[8]=="dx"){
		d["cellSize"]=parseFloat(fileValues[9]);		
		//terrain nodata value
		d["noData"]=fileValues[13];
	}else{
		d["cellSize"]=parseFloat(fileValues[9]);		
		//terrain nodata value
		d["noData"]=fileValues[11];
	}
	//terrain elevation data
	dP["elevation"]=[];
	for(var i=0;i<(d["width"]*d["height"]);i++){
		dP["elevation"][i]=parseFloat(parseFloat(fileValues[(12+i)]).toFixed(1));
	}
	return d;
}

function switchLoader(txt){
	//remove if exists
	if(document.getElementById("loader")){
		document.getElementById("loader").remove();
	}else{//create if not
		//create main element
		var loader=document.createElement("span");
		loader.setAttribute("id","loader");
		loader.setAttribute("class","carga-box");
		document.body.insertBefore(loader, document.body.firstChild);
		//create loader
		loader=document.createElement("span");
		loader.setAttribute("class","carga");
		document.getElementById("loader").appendChild(loader);
		//add text
		loader=document.createElement("span");
		loader.setAttribute("style","color:white;display:block;position:absolute;width:100vw;text-align:center;top:50vh;");
		loader.innerHTML=txt;
		document.getElementById("loader").appendChild(loader);
	}
}
