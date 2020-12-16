
$(document).ready(function() {

    function load1() {

        $.ajax({
            url: "getArticleData.php",
            method: "POST",
            data: {},
            dataType: JSON.stringify(),
            async: false,
            //processData: false,
            //contentType: false,
            success: function(data) {
                //alert('success');
                //console.log(data);
                $('#post_nickname').text("發文者 : " +data[0].nickname);
               $('#post_accountName').text(" @"+ data[0].accountName);
               $('#post_date').text("發文日期 : "+ data[0].postDate.substr(0, 16));
               $('#post_title').text("標題 : "+ data[0].title);
               $('#post_context').text(data[0].context);
               $('#img1').attr("src",data[0].picture);

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            },
            complete: function() {}
        })
    }
    load1();


})