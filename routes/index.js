/**
 * Created by Bianwangyang on 2016/10/19.
 */
const path = require('path');

const express = require('express');
const router = express.Router();

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

const fs = require('fs');

router.all('/',function(req,res){
    res.sendFile(path.join(__dirname, '/../public/html/index.html'));
});

router.post('/uploadfile',multipartMiddleware,function(req,res) {
    console.log(req.body);
    console.log(req.files);
    const filename = req.files.myfile.name;
    //�����ļ�
    //fs.renameSync(req.files.myfile.path,path.join(__dirname,filename));
    var readStream = fs.createReadStream(req.files.myfile.path);
    var writeStream = fs.createWriteStream(path.join(__dirname,'../upload',filename));
    readStream.pipe(writeStream);
    //ɾ����ʱ�ļ�
    fs.unlink(req.files.myfile.path);
    res.send("upload success!");
});

module.exports = router;