function hi(){
	console.log('this is user for fetch data')
	const response = await axios.get(`${BASE_URL}/todos?_limit=5`);
    const todoItems = response.data;
    console.log(`GET: Here's the list of todos`, todoItems);
}


function kano(){
	
    const response = await axios.get(`${money_heist}/todos?_limit=5`);
    const todoItems = response.data;
    console.log(`GET: Here's the list of tp be done `, todoItems);
}

function vi()
{	
	
	
	URLL=document.getElementById("li").value;
	if(URLL=="" || URLL[8]!='y')
	{
		alert("PLEASE CHECK URL");
	}
	else{
		url="https://api.onlinevideoconverter.pro/api/convert"
    child_url={"url":URLL}
    var x=JSON.stringify(child_url);
    params={
    	method:'post',
    	headers:
    	{
   		'Accept': 'application/json, text/plain',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36',
		'Content-Type': 'application/json;charset=UTF-8',
		'Access-Control-Allow-Methods':'HEAD, GET, POST, PUT, DELETE',
		'Access-Control-Allow-Origin':"*"
    	},
    	body:x
    }
    let loader = `
    
	<div class="loader2"></div>
	`
document.getElementById('LLL').innerHTML = loader;
// document.getElementById('th').innerHTML = loader;
    fetch(url,params,{mode: 'no-cors'}).then(response=>{
    	return response.json();
    }).then(
    	data=>{
    		var links=data.url;
    		// const thu=data.thumb;
    		document.getElementById("vishal").src = data.thumb;
			// document.getElementById("LLL").innerHTML = data
    		document.getElementById("LLL").innerHTML=`
    
    		${links.map(function(vishu){
                
                	return `<div class="row">
                <a href="${vishu.url}" class="filink" > ${vishu.attr.title} </a>
                <hr style="border: solid 2px;  color: black;">
            </div>`
   
    			
    		}).join('')}
    		`
    	
    		
    });

     



	console.log("vishal worked")
}
	}
	




