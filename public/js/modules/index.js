/**
 * Created by Bianwangyang on 2016/10/19.
 */
$(function(){
    $('#fileBtn').change(function(e){
        var target = e.target;
        //1.׼��FormData
        var fd = new FormData();
        fd.append("myfile",target.files[0]);
        //2. ����XHR����
        var xhr = new XMLHttpRequest();

        //3.�󶨸����¼�

        // ����״̬��ʵʱ��Ӧ
        // xhr �� xhr.upload ����progress�¼���xhr.progress�����ؽ��ȣ�xhr.upload.progress���ϴ�����
        xhr.upload.onprogress = function(event) {
            if (event.lengthComputable) {
                var percent = Math.round(event.loaded * 100 / event.total);
                console.log('%d%', percent);
                $("#upprog").text(percent);
            }
        };

        //4.�첽����ajax����������
        xhr.open('POST','/uploadfile',true);
        xhr.send(fd);
    });
});