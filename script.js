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
    let ebtotal=eval((parseFloat(ebu1=document.validform.ebu1.value)+parseFloat(ebu2=document.validform.ebu2.value))/2+parseFloat(ebfinal=document.validform.ebfinal.value));
    document.getElementById("totaleb").innerHTML=ebtotal;

    // Internet Programming
    let Ipu1=document.validform.Ipu1.value;
    document.getElementById("u1ip").innerHTML=Ipu1;
    let Ipu2=document.validform.Ipu2.value;
    document.getElementById("u2ip").innerHTML=Ipu2;
    let Ipfinal=document.validform.Ipfinal.value;
    document.getElementById("finalip").innerHTML=Ipfinal;
    let iptotal=eval((parseFloat(document.validform.Ipu1.value)+parseFloat(document.validform.Ipu2.value))/2+parseFloat(document.validform.Ipfinal.value));
    document.getElementById("totalip").innerHTML=iptotal;

    // Software Engineering
    let Seu1=document.validform.Seu1.value;
    document.getElementById("u1se").innerHTML=Seu1;
    let Seu2=document.validform.Seu2.value;
    document.getElementById("u2se").innerHTML=Seu2;
    let Sefinal=document.validform.Sefinal.value;
    document.getElementById("finalse").innerHTML=Sefinal;
    let setotal=eval((parseFloat(document.validform.Seu1.value)+parseFloat(document.validform.Seu2.value))/2+parseFloat(document.validform.Sefinal.value))
    document.getElementById("totalse").innerHTML=setotal;


    // Advance Technology Mnagement
    let Mtu1=document.validform.Mtu1.value;
    document.getElementById("u1mt").innerHTML=Mtu1;
    let Mtu2=document.validform.Mtu2.value;
    document.getElementById("u2mt").innerHTML=Mtu2;
    let Mtfinal=document.validform.Mtfinal.value;
    document.getElementById("finalmt").innerHTML=Mtfinal;
    let mttotal=eval((parseFloat(document.validform.Mtu1.value)+parseFloat(document.validform.Mtu1.value))/2+parseFloat(document.validform.Mtfinal.value));
    document.getElementById("totalmt").innerHTML=mttotal;

    // Computer Security Technology
    let Cnu1=document.validform.Cnu1.value;
    document.getElementById("u1cns").innerHTML=Cnu1;
    let Cnu2=document.validform.Cnu2.value;
    document.getElementById("u2cns").innerHTML=Cnu2;
    let Cnfinal=document.validform.Cnfinal.value;
    document.getElementById("finalcns").innerHTML=Cnfinal;
    let cnstotal=eval((parseFloat(document.validform.Cnu1.value)+parseFloat(document.validform.Cnu1.value))/2+parseFloat(document.validform.Cnfinal.value));
    document.getElementById("totalcns").innerHTML=cnstotal;


    // finding the total marks:
    let totalall=eval(cnstotal+mttotal+iptotal+ebtotal+setotal);
    document.getElementById("total").innerHTML=totalall;

    let percentage=eval(parseFloat(totalall*100)/500);
    document.getElementById("percentage").innerHTML=percentage.toFixed(2)+" %";

    if(ebfinal<33){
        document.getElementById("finaleb").innerHTML=ebfinal+"F";
        document.getElementById("finaleb").style.backgroundColor="red";
    }
    if(Ipfinal<33){
        document.getElementById("finalip").innerHTML=Ipfinal+"F";
        document.getElementById("finalip").style.backgroundColor="red";
    }
    if(Sefinal<33){
        document.getElementById("finalse").innerHTML=Sefinal+"F";
        document.getElementById("finalse").style.backgroundColor="red";
    }
    if(Mtfinal<33){
        document.getElementById("finalmt").innerHTML=Mtfinal+"F";
        document.getElementById("finalmt").style.backgroundColor="red";
    }
    if(Cnfinal<33){
        document.getElementById("finalcns").innerHTML=Cnfinal+"F";
        document.getElementById("finalcns").style.backgroundColor="red";
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