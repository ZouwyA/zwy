// var list=document.getElementById('hhh').children
// var mm2=document.getElementById('main-2').children

// for(var i=0;i<list.length;i++){
//     list[i].setAttribute('index',i)
//     list[i].onclick=function(){
//         var t1=this.getAttribute('index')
//         // console.log(t1)
       

//         for(t=0;t<list.length;t++){
//             list[t].removeAttribute('class')
//             // console.log(t1)  
//             mm2[t].removeAttribute('class')

//         }

//         mm2[t1].setAttribute('class','nn2')
//         this.setAttribute('class','m-11')

//     }
// }

oum.onclick=function(event){
    gs22.style.display='block'
    gs11.style.display='none'
    gs33.style.display='none'
    gs44.style.display='none'

    event.preventDefault();

}

rh.onclick=function(event){
    gs33.style.display='block'
    gs11.style.display='none'
    gs44.style.display='none'
    gs22.style.display='none'
    event.preventDefault();
}

zh.onclick=function(event){
    gs44.style.display='block'
    gs33.style.display='none'
    gs11.style.display='none'
    gs22.style.display='none'
    event.preventDefault();
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
  });
