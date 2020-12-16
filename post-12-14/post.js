// const sele1 = document.getElementById('sele1')
// const title = document.getElementById('title')
// const context = document.getElementById('context')
// const img1 = document.getElementById("img1")
var changeThumbnail=0;
function cancelPost() {
    if (confirm("確定取消嗎？")) {
        window.location.href = "index.html"
    }
}
var loadFile = function(event) {
	changeThumbnail=1;
    var output = document.getElementById('img1');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
};

$(document).ready(function(){

    $('#submit').click(validate);
    function validate() {
        if($("#sele1").val()=='0'){
            window.alert("請選擇看板分類!");
            return;
        }
        if($("#title").val()!=""){
            window.alert($("#title").val());
            return ;
        }
        window.alert($("#title").val());
        if($("#context").val()!=""){
            window.alert($("#context").val());
            return ;
        }
        window.alert($("#context").val());
        var input = $('#uploadImg');
        var inputLength = input[0].files.length;; //No of files selected
        var file;
        var formData = new FormData();

        formData.append("class",$("#sele1").val());
        formData.append("title",$("#title").val());
        formData.append("context",$("#context").val());
        

        for (var i = 0; i < inputLength; i++) {
            file = input[0].files[i];
            formData.append( 'myFile[]', file);
        }

        //let url="post_chk.php"
        //let obj={};
        //obj["class"]= $("#sele1").val();
        //obj["title"]= $("#title").val();
        // obj["context"]= $("#context").val();
        var x=0;
        $.ajax({
            url: "post_chk.php",
            data: formData,
            type: "POST",
            async: false,
            processData: false,
            contentType: false,
            beforeSend: function() {
                //$('#loading_div').show();
                //beforeSend 發送請求之前會執行的函式
            },
            success: function(msg) {
                //alert (msg);
                x=1;
            },
            error: function(xhr) {
                alert('Ajax request 發生錯誤');
            },
            complete: function() {

                // $('#loading_div').hide();   
                //complete請求完成實執行的函式，不管是success或是error
            }
        });
        if(x==1){
            alert("發布成功!");
            window.location.href = "index.html";
        }
        // $.post(url,obj)
        //     .done(function(data){
            
        // });
    }   
});