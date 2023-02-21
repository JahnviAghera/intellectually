function check(){
    var score = 0;
    var eleven = document.getElementById("frm1").elements[0].value.toLowerCase();
    var twelve = document.getElementById("frm1").elements[1].value.toLowerCase();
    var thirteen = document.getElementById("frm1").elements[2].value.toLowerCase();
    var fourteen = document.getElementById("frm1").elements[3].value.toLowerCase();
    var fifteen = document.getElementById("frm1").elements[4].value.toLowerCase();
    var sixteen = document.getElementById("frm1").elements[5].value.toLowerCase();
    var seventeen = document.getElementById("frm1").elements[6].value.toLowerCase();
    var eighteen = document.getElementById("frm1").elements[7].value.toLowerCase();
    var nineteen = document.getElementById("frm1").elements[8].value.toLowerCase();
    var twenty = document.getElementById("frm1").elements[9].value.toLowerCase();


    if((eleven=='eleven')&&(twelve=='twelve')&&(thirteen=='thirteen')&&(fourteen=='fourteen')&&(fifteen=='fifteen')&&(sixteen=='sixteen')&&(seventeen=='seventeen')&&(eighteen=='eighteen')&&(nineteen=='nineteen')&&(twenty=='twenty')){
        score = 10;
        document.getElementById("demo").innerHTML = score;

    }else{
        document.getElementById("demo").innerHTML = "Wrong 🙁 RESTART to try again";
    }
    if(eleven == 'eleven'){document.getElementById("tn11").innerHTML ="✔️";}else{document.getElementById("tn11").innerHTML ="❌ Eleven";}
    if(twelve == 'twelve'){document.getElementById("tn12").innerHTML ="✔️";}else{document.getElementById("tn12").innerHTML ="❌ Twelve";}
    if(thirteen == 'thirteen'){document.getElementById("tn13").innerHTML ="✔️";}else{document.getElementById("tn13").innerHTML ="❌ Thirteen";}
    if(fourteen == 'fourteen'){document.getElementById("tn14").innerHTML ="✔️";}else{document.getElementById("tn14").innerHTML ="❌ Fourteen";}
    if(fifteen == 'fifteen'){document.getElementById("tn15").innerHTML ="✔️";}else{document.getElementById("tn15").innerHTML ="❌ Fifteen";}
    if(sixteen == 'sixteen'){document.getElementById("tn16").innerHTML ="✔️";}else{document.getElementById("tn16").innerHTML ="❌ Sixteen";}
    if(seventeen == 'seventeen'){document.getElementById("tn17").innerHTML ="✔️";}else{document.getElementById("tn17").innerHTML ="❌ Seventeen";}
    if(eighteen == 'eighteen'){document.getElementById("tn18").innerHTML ="✔️";}else{document.getElementById("tn18").innerHTML ="❌ Eighteen";}
    if(nineteen == 'nineteen'){document.getElementById("tn19").innerHTML ="✔️";}else{document.getElementById("tn19").innerHTML ="❌ Nineteen";}
    if(twenty == 'twenty'){document.getElementById("tn20").innerHTML ="✔️";}else{document.getElementById("tn20").innerHTML ="❌ Twenty";}
    if(eleven == 'eleven'){score = score +1;}
    if(twelve == 'twelve'){score = score +1;}
    if(thirteen == 'thirteen'){score = score +1;}
    if(fourteen == 'fourteen'){score = score +1;}
    if(fifteen == 'fifteen'){score = score +1;}
    if(sixteen == 'sixteen'){score = score +1;}
    if(seventeen == 'seventeen'){score = score +1;}
    if(eighteen == 'eighteen'){score = score +1;}
    if(nineteen == 'nineteen'){score = score +1;}
    if(twenty == 'twenty'){score = score +1;}
    document.getElementById("demo").innerHTML = score;
    if(score>3){
        document.getElementById("link").className = "unblock";
    }
    else{
        document.getElementById("link").className = "block";
    }
    }
function restart(){
    document.getElementById("frm1").elements[0].value= null;
    document.getElementById("frm1").elements[1].value= null;
    document.getElementById("frm1").elements[2].value= null;
    document.getElementById("frm1").elements[3].value= null;
    document.getElementById("frm1").elements[4].value= null;
    document.getElementById("frm1").elements[5].value= null;
    document.getElementById("frm1").elements[6].value= null;
    document.getElementById("frm1").elements[7].value= null;
    document.getElementById("frm1").elements[8].value= null;
    document.getElementById("frm1").elements[9].value= null;
    
    document.getElementById("tn11").innerHTML = null; 
    document.getElementById("tn12").innerHTML = null; 
    document.getElementById("tn13").innerHTML = null; 
    document.getElementById("tn14").innerHTML = null; 
    document.getElementById("tn15").innerHTML = null; 
    document.getElementById("tn16").innerHTML = null; 
    document.getElementById("tn17").innerHTML = null; 
    document.getElementById("tn18").innerHTML = null; 
    document.getElementById("tn19").innerHTML = null; 
    document.getElementById("tn20").innerHTML = null; 
}