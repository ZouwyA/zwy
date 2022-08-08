tow.onmouseenter = function () {
  gd.style.display = 'block'

}
tow.onmouseleave = function () {
  gd.style.display = 'none'
}


var len = $("#gc p").length;
function int() {
  for (i = 23; i < len; i++) {
    $("#gc p").eq(i).addClass("hid");
  }
}
$("#zk").click(function () {
  var t = $(this).text();
  if (t == "展开 v") {
    $("#gc .hid").addClass("show");
    $("#gc").height(1050)
    $("#main").height(2350)
    $(this).text("收缩 ^");
  } else {
    $("#gc .hid").removeClass("show");
    $("#gc").height(473)
    $("#main").height(1800)

    $(this).text("展开 v");
  }
});
int();//初始化隐藏多余标签


$(document).ready(function () {
  //首先将ul隐藏
  $(".to-top").hide();
  //当滚动条的位置处于距顶部300像素以下时，让ul出现，否则消失
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        $(".to-top").fadeIn(200);
      } else {
        $(".to-top").fadeOut(200);
      }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#ttt").click(function () {
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