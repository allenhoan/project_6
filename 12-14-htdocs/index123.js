
const d3_title = document.getElementById('d3-1');
let class1;

function classChange(){
	class1=event.srcElement.id;
	if(class1=='all')d3_title.innerText="所有看板";
	else if(class1=='emotion')d3_title.innerText="感情看板";
	else if(class1=='game')d3_title.innerText="電玩看板";
	else if(class1=='sport')d3_title.innerText="運動看板";
	else if(class1=='food')d3_title.innerText="美食看板";
	else if(class1=='schoolwork')d3_title.innerText="課業看板";
	else if(class1=='politics')d3_title.innerText="政治看板";
	else if(class1=='others')d3_title.innerText="其它看板";
}

$(document).ready(function(){
    class1="all";


    // const jsonUrl = "query_API.php";
    //     $.getJSON(jsonUrl, function (data) {
    //         for (let item in data) {
    //             let content =
    //                 "<tr>" +
    //                 "<td>" + data[item].author + "</td>" +
    //                 "<td>" + data[item].title + "</td>" +
    //                 "<td>" + data[item].category + "</td>" +
    //                 "<td>" + data[item].year + "</td>" +
    //                 "<td>" + data[item].isbn + "</td>" +
    //                 "</tr>";
    //             $("#menu").append(content);
    //         }
    //     });
    function load1()
    {
    	$.ajax({
            url: "getindexData.php",
            method: "POST",
            data: {class:class1},
            dataType: JSON.stringify(),
            async: false,
            processData: false,
            contentType: false,
            success: function(data) {
                //console.log(data);
                $('#accountName').text('帳號　:　' + data[0].accountName);
                $('#email').text('信箱　:　' + data[0].email);
                $('#password').attr("value", data[0].password);
                $('#nickname').attr("value", data[0].nickname);
                $('#gender').attr("value", data[1].gender);
                $('#birthday').attr("value", data[1].birthday);
                $('#introction').attr("value", data[1].introction);
                $('#img1').attr("src", (data[1].picture));
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            },
            complete: function() {}
        })
    }
    //load1();



})
function t1() {
	alert("= =");
}

