/**
 * Created by Bianwangyang on 2016/10/19.
 */
$(function(){
    $('#fileBtn').change(function(e){
        var target = e.target;
        //1.准备FormData
        var fd = new FormData();
        fd.append("myfile",target.files[0]);
        //2. 创建XHR对象
        var xhr = new XMLHttpRequest();

        //3.绑定各种事件

        // 监听状态，实时响应
        // xhr 和 xhr.upload 都有progress事件，xhr.progress是下载进度，xhr.upload.progress是上传进度
        xhr.upload.onprogress = function(event) {
            if (event.lengthComputable) {
                var percent = Math.round(event.loaded * 100 / event.total);
                console.log('%d%', percent);
                $("#upprog").text(percent);
            }
        };

        //4.异步发起ajax请求发送数据
        xhr.open('POST','/uploadfile',true);
        xhr.send(fd);
    });
});