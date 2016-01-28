function ajaxUpload(opt) {
	/*
	    参数说明:
	    opt.frameName : iframe的name值;
	    opt.url : 文件要提交到的地址;
	    opt.fileName : file控件的name;
	    opt.format : 文件格式，以数组的形式传递，如['jpg','png','gif','bmp'];
	    opt.callBack : 上传成功后回调;
	*/
	var iName = opt.frameName; //太长了，变短点
	var iframe, form;
	//创建iframe和form表单
	iframe = $('<iframe name="' + iName + '" />');
	form = $('<form method="post" style="display:none;" target="' + iName + '" action="' + opt.url + '"  name="form_' + iName + '" enctype="multipart/form-data" />');
	file = $('<input type="file" name="' + opt.fileName + '" />');
	file.appendTo(form);
	//插入body
	$(document.body).append(iframe).append(form);
	//触发浏览事件，选择文件
	file.click();
	//选中文件后，验证文件格式是否符合要求
	file.change(function() {
		//取得所选文件的扩展名
		var fileFormat = $(this).val().exec(/\.[a-zA-Z]+$/)[0].substring(1);
		if (opt.format.join('-').indexOf(fileVal) != -1) {
			form.submit(); //格式通过验证后提交表单;
		} else {
			iframe.remove();
			form.remove();
			alert('文件格式错误，请重新选择！');
		}
	});
	//文件提交完后
	iframe.load(function() {
		var data = $(this).contents().find('body').html();
		opt.callBack(data);
		iframe.remove();
		form.remove();
	})
}