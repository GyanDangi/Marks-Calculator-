function myFunction(){
    var name=document.validform.txtname.value;
    document.getElementById("name").innerHTML=name;
    var sem=document.validform.txtSemester.value;
    document.getElementById("sem").innerHTML=sem;
    var branch=document.validform.txtBranch.value;
    document.getElementById("branch").innerHTML=branch;
    var seat=document.validform.txtSeat.value;
    document.getElementById("seat").innerHTML=seat;
    // E-business
    let ebu1=document.validform.ebu1.value;
    document.getElementById("u1eb").innerHTML=ebu1;
    let ebu2=document.validform.ebu2.value;
    document.getElementById("u2eb").innerHTML=ebu2;
    let ebfinal=document.validform.ebfinal.value;
    document.getElementById("finaleb").innerHTML=ebfinal;

    // Internet Programming
    let Ipu1=document.validform.Ipu1.value;
    document.getElementById("u1ip").innerHTML=Ipu1;
    let Ipu2=document.validform.Ipu2.value;
    document.getElementById("u2ip").innerHTML=Ipu2;
    let Ipfinal=document.validform.Ipfinal.value;
    document.getElementById("finalip").innerHTML=Ipfinal;

    // Software Engineering
    let Seu1=document.validform.Seu1.value;
    document.getElementById("u1se").innerHTML=Seu1;
    let Seu2=document.validform.Seu2.value;
    document.getElementById("u2se").innerHTML=Seu2;
    let Sefinal=document.validform.Sefinal.value;
    document.getElementById("finalse").innerHTML=Sefinal;


    // Advance Technology Mnagement
    let Mtu1=document.validform.Mtu1.value;
    document.getElementById("u1mt").innerHTML=Mtu1;
    let Mtu2=document.validform.Mtu2.value;
    document.getElementById("u2mt").innerHTML=Mtu2;
    let Mtfinal=document.validform.Mtfinal.value;
    document.getElementById("finalmt").innerHTML=Mtfinal;

    // Computer Security Technology
    let Cnu1=document.validform.Cnu1.value;
    document.getElementById("u1cns").innerHTML=Cnu1;
    let Cnu2=document.validform.Cnu2.value;
    document.getElementById("u2cns").innerHTML=Cnu2;
    let Cnfinal=document.validform.Cnfinal.value;
    document.getElementById("finalcns").innerHTML=Cnfinal;


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