$(function() {   
    var dateArr = [], slashIndex, fixDate;
 
    $('#date').find('td').each(function() {
        slashIndex = $(this).text().lastIndexOf('/');
        fixDate = $(this).text().slice(0, slashIndex);
        dateArr.push(fixDate);
    });

    for(var i=0;i<dateArr.length;i++) 
    {
        $('#fixedDate').find('td').eq(i).text(dateArr[i]);
    }
});

$(function() { 
    $("#datepicker").datepicker();
});

function processFormData() {
    var input_element = document.getElementsByTagName('input');
    var topic = input_element[0].value;
    var date = input_element[1].value; 
    
    for (var x=0;x<1;x++){
        $("#courseTable").empty();
        $("#courseTable").append("<th>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append("<td>"+topic+"</td>");
        $("#courseTable").append("<td>"+date+"</td>");
        $("#courseTable").append("</th>");
    }
};