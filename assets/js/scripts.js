
// 注册
 function check(){
        if (check1()&&check2()&&check3()&&check4()&&check5()&&check6()&&check7()) {
        return true;
      }else{
        return false;
      }
    }
   
    function check7(){
        var box = document.getElementById("false");
        if (!box.checked) {
          return false;
        }else{
          return true;
        }
    }


      function check1(){
        var name=document.form1.input1.value;
        var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
        var span1=document.getElementById("span1");
        
        if (!reg.test(name)) {
            span1.innerHTML="网名必须是4-16位，且第一位必须是字母";
            return false;
        }else{
              span1.innerHTML="";
            return true;
        }
      
      }

    function check2(){
        var password=document.form1.input2.value;
        var reg=/^[a-zA-Z0-9]{4,10}$/;
        var span2=document.getElementById("span2");

        if (!reg.test(password)) {
            span2.innerHTML="学号只能由英文字母和数字组成，长度为4-10个字符";
            return false;
        }else{
              span2.innerHTML="";
            return true;
        }
    }

       function check3(){
      var password1=document.form1.input3.value;
      var password2=document.form1.input2.value;
      var span3 = document.getElementById("span3");
      if (password1!=password2) {
        span3.innerHTML="重复学号必须与学号相同必须是4-10位";
        return false;
      }else{
        span3.innerHTML="";
        return true;
      }
    }

    function check4(){
      var bir=document.form1.input4.value;
        var reg=/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/;
        var span4=document.getElementById("span4");

        var arr=null;
        if ((arr=reg.exec(bir))!=null) {
          if (arr[1]<1900 || arr[1]>2014) {
            span4.innerHTML="生日的年份在1900-2014之间";
            return false;

          }else if (arr[2]<1 || arr[2]>12) {
            span4.innerHTML="生日的月份在01~12之间";
            return false;

          }else if (arr[3]<1 || arr[3]>31) {
            span4.innerHTML="生日的日期必须在01-31之间";
            return false;

          }else{
            span4.innerHTML=""
            return true;
          }
      }else{
        span4.innerHTML="生日格式为1980-05-12或1988-05-04的形式";
        return false;
      }
    }

    function check5(){
        var email=document.form1.input5.value;
         var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        //var reg=/^[a-zA-Z][a-zA-Z0-9]*@([a-zA-Z0-9]+\.)+(com|cn)$/;

        var span5=document.getElementById("span5");

        if (!reg.test(email)) {
          span5.innerHTML="email地址必须是字母开始并且***@***.***.com或***@***.***.cn这种格式";
          return false;
        }else{
          span5.innerHTML="";
          return true;
        }
    }
     
    function check6(){
        var moble=document.form1.input6.value;
        var reg=/^1[0-9]{10}$/;
        var span6=document.getElementById("span6");

        if (!reg.test(moble)) {
          span6.innerHTML="电话号码必须是1开始的11位数字";
          return false;
        }else{
          span6.innerHTML="";
          return true;
        }
    }
// 登录
function fnLogin() {
 var oUname = document.getElementById("uname")
 var oUpass = document.getElementById("upass")
 var oError = document.getElementById("error_box")
 var isError = true;
   if (oUname.value.length > 6 || oUname.value.length < 2) {
    oError.innerHTML = "用户名请输入2-4位汉字";
    isError = false;
    return;
    }
   if (oUpass.value.length != 8) {
    oError.innerHTML = "学号请输入8位数字"
    isError = false;
    return;
   }
 alert("登录成功");window.location.href="main.html";
}


jQuery(document).ready(function() {

    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
		
        if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
    });

    $('.page-container form .username, .page-container form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});
