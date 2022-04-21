function getParagraph1(){
    var inputs_1 = [];
    
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs_1.push(document.getElementById("para1_input_box_" + i).value);
    }
    document.getElementById("showParagraph1").innerHTML=
    inputs_1.join(". ");
    }
    
    function getParagraph2(){
    var inputs_2 = [];
    
    for(var i = 7 ; i <=12 ; i++)
    {
        inputs_2.push(document.getElementById("para2_input_box_" + i).value);
    }
    document.getElementById("showParagraph2").innerHTML=
    inputs_2.join(". ");
    }