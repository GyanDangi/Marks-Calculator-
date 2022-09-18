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
    let cgpa=eval(percentage/9.5);
    document.getElementById("cgpa").innerHTML=cgpa;

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
    // Grade for E-Business:
    if(ebtotal>=80){
        document.getElementById("gradeeb").innerHTML="O";
    }
    if(ebtotal>=70 && ebtotal<80){
        document.getElementById("gradeeb").innerHTML="A";
    }
    if(ebtotal>=60 && ebtotal<70){
        document.getElementById("gradeeb").innerHTML="B";
    }
    if(ebtotal>=50 && ebtotal<60){
        document.getElementById("gradeeb").innerHTML="C";
    }
    if(ebtotal>=40 && ebtotal<50){
        document.getElementById("gradeeb").innerHTML="D";
    }
    if(ebtotal<40 && ebtotal>=0){
        document.getElementById("gradeeb").innerHTML="Fail";
    }

    // Ip Grade:
    if(iptotal>=80){
        document.getElementById("gradeip").innerHTML="O";
    }
    if(iptotal>=70 && iptotal<80){
        document.getElementById("gradeip").innerHTML="A";
    }
    if(iptotal>=60 && iptotal<70){
        document.getElementById("gradeip").innerHTML="B";
    }
    if(iptotal>=50 && iptotal<60){
        document.getElementById("gradeip").innerHTML="C";
    }
    if(iptotal>=40 && iptotal<50){
        document.getElementById("gradeip").innerHTML="D";
    }
    if(iptotal<40 && iptotal>=0){
        document.getElementById("gradeip").innerHTML="Fail";
    }

    // Software Engineering Grade:
    if(setotal>=80){
        document.getElementById("gradese").innerHTML="O";
    }
    if(setotal>=70 && setotal<80){
        document.getElementById("gradese").innerHTML="A";
    }
    if(setotal>=60 && setotal<70){
        document.getElementById("gradese").innerHTML="B";
    }
    if(setotal<60 &&setotal>=50){
        document.getElementById("gradese").innerHTML="C";
    }
    if(setotal>=40 && setotal<50){
        document.getElementById("gradese").innerHTML="D";
    }
    if(setotal<40 && setotal>=0){
        document.getElementById("gradese").innerHTML="Fail";
    }

    // Mangement Technology Grade:
    if(mttotal>=80){
        document.getElementById("grademt").innerHTML="O";
    }
    if(mttotal>=70 && mttotal<80){
        document.getElementById("grademt").innerHTML="A";
    }
    if(mttotal>=60 && mttotal<70){
        document.getElementById("grademt").innerHTML="B";
    }
    if(mttotal>=50 && mttotal<60){
        document.getElementById("grademt").innerHTML="C";
    }
    if(mttotal>=40 && mttotal<50){
        document.getElementById("grademt").innerHTML="D";
    }
    if(mttotal<40 && mttotal>=0){
        document.getElementById("grademt").innerHTML="Fail";
    }

    // Computer Technology Grade:
    if(cnstotal>=80){
        document.getElementById("gradecns").innerHTML="O";
    }
    if(cnstotal>=70 && cnstotal<80){
        document.getElementById("gradecns").innerHTML="A";
    }
    if(cnstotal>=60 && cnstotal<70){
        document.getElementById("gradecns").innerHTML="B";
    }
    if(cnstotal>=50 && cnstotal<60){
        document.getElementById("gradecns").innerHTML="C";
    }
    if(cnstotal>=40 && cnstotal<50){
        document.getElementById("gradecns").innerHTML="D";
    }
    if(cnstotal<40 && cnstotal>=0){
        document.getElementById("gradecns").innerHTML="Fail";
    }
    
    
   

    switch(true){
        case(percentage>=80):
        if(ebfinal<33 || Ipfinal<33 || Sefinal<33 || Cnfinal<33 ||Mtfinal<33){
            document.getElementById("grade").innerHTML="Fail";
            document.getElementById("grade").style.backgroundColor="red";
        }
        else{
            document.getElementById("grade").innerHTML="Pass";
            break;
        }
        break;
        case(percentage>=70):
        
        if(ebfinal<33 ||Ipfinal<33 || Sefinal<33 ||Cnfinal<33 ||Mtfinal<33){
            document.getElementById("grade").innerHTML="Fail";
            document.getElementById("grade").style.backgroundColor="red";
        }
        else{
            document.getElementById("grade").innerHTML="Pass";
            break;
        }
        break;
        case(percentage>=60):
        if(ebfinal<33 || Ipfinal<33 || Sefinal<33 || Cnfinal<33 ||Mtfinal<33){
            document.getElementById("grade").innerHTML="Fail";
            document.getElementById("grade").style.backgroundColor="red";
        }
        else{
            document.getElementById("grade").innerHTML="Pass";
            break;
        }
        break;
        case(percentage>=50):
        if(ebfinal<33 || Ipfinal<33 || Sefinal<33 || Cnfinal<33 ||Mtfinal<33){
            document.getElementById("grade").innerHTML="Fail";
            document.getElementById("grade").style.backgroundColor="red";
        }
        else{
            document.getElementById("grade").innerHTML="Pass";
            break;
        }
        break;
        case(percentage>=40):
        document.getElementById("grade").innerHTML="Pass";
        break;
        case(percentage<40):
        document.getElementById("grade").innerHTML="Fail";
        document.getElementById("grade").style.backgroundColor="red";
        break;
    }
}