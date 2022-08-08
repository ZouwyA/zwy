var list=document.getElementById('box').children
var ggg=document.getElementsByClassName('ggg')

for (var t = 0; t < list.length; t++) {
    list[t].setAttribute('index', t)

    list[t].onmouseenter = function () {
        var t1 = this.getAttribute('index')

        ggg[t1].style.opacity =1;
    }
    list[t].onmouseleave = function () {
        var t1 = this.getAttribute('index')

        ggg[t1].style.opacity =0;
    }
}


tow.onmouseenter = function () {
    gd.style.display = 'block'

}
tow.onmouseleave = function () {
    gd.style.display = 'none'
}

sss.onmouseenter = function () {
    input.style.transform = 'translateX(-254px)'
    search.style.transform = 'translateX(-254px)'
    input.style.display = 'block';
}
sss.onmouseleave = function () {
    input.style.transform = 'translateX(0px)'
    input.style.display = 'none';
    search.style.transform = 'translateX(0px)'
}

$(document).ready(function() {
    //首先将ul隐藏
    $(".to-top").hide();
    //当滚动条的位置处于距顶部300像素以下时，让ul出现，否则消失
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          $(".to-top").fadeIn(200);
        } else {
          $(".to-top").fadeOut(200);
        }
      });
      //当点击跳转链接后，回到页面顶部位置
      $("#ttt").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
        return false;
      });
    });
  })



  login.onclick = function (event) {
    login111.style.display = 'block'
    event.preventDefault();
}
span1.onclick = function () {
    login111.style.display = 'none'
    login1.style.display = 'none'

}




login11.onclick = function (event) {
    login1.style.display = 'block'
    login111.style.display = 'none'

    event.preventDefault();
}
span.onclick = function () {
    login1.style.display = 'none'
    login111.style.display = 'none'
}

register.onclick = function (event) {
    login222.style.display = 'block'
    login111.style.display = 'none'

    event.preventDefault();
}
span2.onclick = function () {
    login222.style.display = 'none'
    login111.style.display = 'none'

}

login333.onclick = function (event) {
    login1.style.display = 'block'
    login111.style.display = 'none'
    login222.style.display = 'none'
    event.preventDefault();
}
span2.onclick = function () {
    login222.style.display = 'none'
}



ccc.onclick = function () {
  login1.style.display = 'none'
  login222.style.display = 'block'

}
ccc1.onclick = function () {
  login1.style.display = 'none'
  login222.style.display = 'block'
}