function myFunction(){
    var name=document.validform.txtname.value;
    document.getElementById("name").innerHTML=name;
    var sem=document.validform.txtSemester.value;
    document.getElementById("sem").innerHTML=sem;
    var branch=document.validform.txtBranch.value;
    document.getElementById("branch").innerHTML=branch;
    var seat=document.validform.txtSeat.value;
    document.getElementById("seat").innerHTML=seat;
    var eb=document.validform.etxt.value;
    document.getElementById("eb").innerHTML=eb;
    var ip=document.validform.Iptxt.value;
    document.getElementById("ip").innerHTML=ip;
    var se=document.validform.Setxt.value;
    document.getElementById("se").innerHTML=se;
    var mt=document.validform.Mttxt.value;
    document.getElementById("mt").innerHTML=mt;
    var cns=document.validform.Cntxt.value;
    document.getElementById("cns").innerHTML=cns;
    // finding the total marks:
    let total=eval(parseFloat(document.validform.etxt.value)+parseFloat(document.validform.Iptxt.value)+parseFloat(document.validform.Setxt.value)+parseFloat(document.validform.Mttxt.value)+parseFloat(document.validform.Cntxt.value));
    document.getElementById("total").innerHTML=total;

    let percentage=eval(parseFloat(total*100)/500);
    document.getElementById("percentage").innerHTML=percentage.toFixed(2)+"%";

    if(eb<33){
        document.getElementById("eb").innerHTML=eb+"F";
    }
    if(ip<33){
        document.getElementById("ip").innerHTML=ip+"F";
    }
    if(se<33){
        document.getElementById("se").innerHTML=eb+"F";
    }
    if(mt<33){
        document.getElementById("mt").innerHTML=eb+"F";
    }
    if(cns<33){
        document.getElementById("cns").innerHTML=eb+"F";
    }

    switch(true){
        case(percentage>=80):
        document.getElementById("grade").innerHTML="O";
        break;
        case(percentage>=70):
        document.getElementById("grade").innerHTML="A";
        break;
        case(percentage>=60):
        document.getElementById("grade").innerHTML="B";
        break;
        case(percentage>=50):
        document.getElementById("grade").innerHTML="C";
        break;
        case(percentage>=40):
        document.getElementById("grade").innerHTML="D";
        break;
        case(percentage<40):
        document.getElementById("grade").innerHTML="Fail";
        break;
    }
}