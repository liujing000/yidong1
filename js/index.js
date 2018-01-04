/*
* @Author: Administrator
* @Date:   2017-12-29 10:43:45
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-04 09:07:07
*/
{
	let imgs=document.querySelectorAll(".img-container li");
	let pagers=document.querySelectorAll(".btn-box li");
	let bnContainer=document.querySelector(".bn-container");
	let bnpre=document.querySelector(".bnpre");
	let bnnext=document.querySelector(".bnnext");
	
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<pagers.length;i++){
				pagers[i].classList.remove("active");
				imgs[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}

	});

    let n=0;
    function bannerFn(dir="r"){
    	if(dir==="r"){
    		n++;
    	}
    	if(dir==="l"){
    		n--;
    	}
    	if(n===imgs.length){
    		n=0;
    	}
    	if(n===-1){
    		n=imgs.length-1;
    	}
    	for(let i=0;i<imgs.length;i++){
    		pagers[i].classList.remove("active");
    		imgs[i].classList.remove("active");
    	}
    	pagers[n].classList.add("active");
    	imgs[n].classList.add("active");
    }

    let st=setInterval(bannerFn, 3000);


}