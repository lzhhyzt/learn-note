### ajax使用问题总结

#### 1. ajax请求时，一次点击两次提交的问题解决


	$(function(){
	    $('#jsStayBtn').off().on('click', function(){
	        $.ajax({
	            cache: false,
	            type: "POST",
	            url:"/org/add_ask/",
	            data:$('#jsStayForm').serialize(),
	            async: true,
	            success: function(data) {
	                if(data.status == 'success'){
	                    $('#jsStayForm')[0].reset();
	                    alert("提交成功")
	                }else if(data.status == 'fail'){
	                    $('#jsCompanyTips').html(data.msg)
	                }
	            },
	        });
	    });
	})




避免一次点击两次提交的问题主要是对下面这个地方进行修改，这是一个小技巧

```
$('#jsStayBtn').on('click', function(){})  #这个地方进行修改
```

修改为：  

```
 $('#jsStayBtn').off().on('click', function(){})
```

修改后全部代码：  


    $(function(){
        $('#jsStayBtn').off().on('click', function(){
            $.ajax({
                cache: false,
                type: "POST",
                url:"/org/add_ask/",
                data:$('#jsStayForm').serialize(),
                async: true,
                success: function(data) {
                    if(data.status == 'success'){
                        $('#jsStayForm')[0].reset();
                        alert("提交成功")
                    }else if(data.status == 'fail'){
                        $('#jsCompanyTips').html(data.msg)
                    }
                },
            });
        });
    })


