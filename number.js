
function check(){
    var score = 0;
    var one = document.getElementById("frm1").elements[0].value.toLowerCase();
    var two = document.getElementById("frm1").elements[1].value.toLowerCase();
    var three = document.getElementById("frm1").elements[2].value.toLowerCase();
    var four = document.getElementById("frm1").elements[3].value.toLowerCase();
    var five = document.getElementById("frm1").elements[4].value.toLowerCase();
    var six = document.getElementById("frm1").elements[5].value.toLowerCase();
    var seven = document.getElementById("frm1").elements[6].value.toLowerCase();
    var eight = document.getElementById("frm1").elements[7].value.toLowerCase();
    var nine = document.getElementById("frm1").elements[8].value.toLowerCase();
    var ten = document.getElementById("frm1").elements[9].value.toLowerCase();

    if((one == 'one')&&(two == 'two')&&(three == 'three')&&(four == 'four')&&(five == 'five')&&(six == 'six')&&(seven == 'seven')&&(eight == 'eight')&&(nine == 'nine')&&(ten == 'ten')&&(eleven=='eleven')&&(twelve=='twelve')&&(thirteen=='thirteen')&&(fourteen=='fourteen')&&(fifteen=='fifteen')&&(sixteen=='sixteen')&&(seventeen=='seventeen')&&(eighteen=='eighteen')&&(nineteen=='nineteen')&&(twenty=='twenty')&&(twentyone=='twenty one')&&(twentytwo=='twenty two')&&(twentythree=='twenty three')&&(twentyfour=='twenty four')&&(twentyfive=='twenty five')&&(twentysix=='twenty six')&&(twentyseven=='twenty seven')&&(twentyeight=='twenty eight')&&(twentynine=='twenty nine')&&(thirty=='thirty')&&(thirtyone=='thirty one')&&(thirtytwo=='thirty two')&&(thirtythree=='thirty three')&&(thirtyfour=='thirty four')&&(thirtyfive=='thirty five')&&(thirtysix=='thirty six')&&(thirtyseven=='thirty seven')&&(thirtyeight=='thirty eight')&&(thirtynine=='thirty nine')&&(forty=='forty')&&(fortyone=='forty one')&&(fortytwo=='forty two')&&(fortythree=='forty three')&&(fortyfour=='forty four')&&(fortyfive=='forty five')&&(fortysix=='forty six')&&(fortyseven=='forty seven')&&(fortyeight=='forty eight')&&(fortynine=='forty nine')&&(fifty=='fifty')){
        score = 10;
        document.getElementById("demo").innerHTML = score;

    }else{
        document.getElementById("demo").innerHTML = "Wrong 🙁 RESTART to try again";
    }
    if(one == 'one'){score = score +1;}
    if(two == 'two'){score = score +1;}
    if(three == 'three'){score = score +1;}
    if(four == 'four'){score = score +1;}
    if(five == 'five'){score = score +1;}
    if(six == 'six'){score = score +1;}
    if(seven == 'seven'){score = score +1;}
    if(eight == 'eight'){score = score +1;}
    if(nine =='nine'){score = score +1;}
    if(ten == 'ten'){score = score +1;}
    document.getElementById("demo").innerHTML = score;
    if(score>3){
        document.getElementById("link").className = "unblock";
    }
    else{
        //document.getElementById("error").className = "unblock";
        document.getElementById("link").className = "block";
    }

    if(one == 'one'){document.getElementById("tn").innerHTML ="✔️";}else{document.getElementById("tn").innerHTML ="❌ One";}
    if(two == 'two'){document.getElementById("tn2").innerHTML ="✔️";}else{document.getElementById("tn2").innerHTML ="❌ Two";}
    if(three == 'three'){document.getElementById("tn3").innerHTML ="✔️";}else{document.getElementById("tn3").innerHTML ="❌ Three";}
    if(four == 'four'){document.getElementById("tn4").innerHTML ="✔️";}else{document.getElementById("tn4").innerHTML ="❌ Four";}
    if(five == 'five'){document.getElementById("tn5").innerHTML ="✔️";}else{document.getElementById("tn5").innerHTML ="❌ Five";}
    if(six == 'six'){document.getElementById("tn6").innerHTML ="✔️";}else{document.getElementById("tn6").innerHTML ="❌ Six";}
    if(seven == 'seven'){document.getElementById("tn7").innerHTML ="✔️";}else{document.getElementById("tn7").innerHTML ="❌ Seven";}
    if(eight == 'eight'){document.getElementById("tn8").innerHTML ="✔️";}else{document.getElementById("tn8").innerHTML ="❌ Eight";}
    if(nine =='nine'){document.getElementById("tn9").innerHTML ="✔️";}else{document.getElementById("tn9").innerHTML ="❌ Nine";}
    if(ten == 'ten'){document.getElementById("tn10").innerHTML ="✔️";}else{document.getElementById("tn10").innerHTML ="❌ Ten";}

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
    
    document.getElementById("demo").innerHTML = null;
    document.getElementById("tn").innerHTML = null;
    document.getElementById("tn2").innerHTML = null;
    document.getElementById("tn3").innerHTML = null;
    document.getElementById("tn4").innerHTML = null;
    document.getElementById("tn5").innerHTML = null;
    document.getElementById("tn6").innerHTML = null;
    document.getElementById("tn7").innerHTML = null;
    document.getElementById("tn8").innerHTML = null;
    document.getElementById("tn9").innerHTML = null;
    document.getElementById("tn10").innerHTML = null;

}
/*
function hide(){
    document.getElementById("error").className = "block";
}
*/
