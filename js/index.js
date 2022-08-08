
var li = document.getElementById('o').children
var u = document.getElementById('u')
var left = document.getElementById('left')
var timer
var num = 0
var banners = ['images/lb1.png', 'images/lb2.jpg', 'images/lb3.jpg', 'images/nav-2.jpg']
nav3.style.background = `url(${banners[num]})`
nav3.style.backgroundSize = "1112px 240000px"
function go() {
    timer = setInterval(function () {
        num++;
        if (num == 4) { num = 0 };
        nav3.style.background = `url(${banners[num]})`
        nav3.style.backgroundSize = "1112px 240000px"
        u.style.transform = 'translateX(' + -num * 1112 + 'px)';

        for (t = 0; t < li.length; t++) {
            li[t].removeAttribute('class')
        }

        li[num].setAttribute('class', 'o-l')
    }, 1000)
}
go()

warp.onmouseenter = function () {
    clearInterval(timer)

}
warp.onmouseleave = function () {
    go()

}

warp.onmouseenter = function () {
    clearInterval(timer)
}
warp.onmouseleave = function () {
    go()
}

for (var i = 0; i < li.length; i++) {
    li[i].setAttribute('index', i)
    li[i].onclick = function () {
        num = this.getAttribute('index')
        for (t = 0; t < li.length; t++) {
            li[t].removeAttribute('class')
        }
        nav3.style.background = `url(${banners[num]})`
        nav3.style.backgroundSize = "1112px 240000px"
        u.style.transform = 'translateX(' + -num * 1112 + 'px)'
        li[num].setAttribute('class', 'o-l')
    }
}
left.onclick = function () {
    num--
    if (num == -1) { num = 3 }
    nav3.style.background = `url(${banners[num]})`
    nav3.style.backgroundSize = "1112px 240000px"
    u.style.transform = 'translateX(' + -num * 1112 + 'px)'

    for (t = 0; t < li.length; t++) {
        li[t].removeAttribute('class')
    }
    li[num].setAttribute('class', 'o-l')
}

right.onclick = function () {
    num++
    if (num == 4) { num = 0 }
    nav3.style.background = `url(${banners[num]})`
    nav3.style.backgroundSize = "1112px 240000px"
    u.style.transform = 'translate(' + -num * 1112 + 'px)'
    for (t = 0; t < li.length; t++) {
        li[t].removeAttribute('class')

    }
    li[num].setAttribute('class', 'o-l')
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


login.onclick = function (event) {
    login111.style.display = 'block'
    clearInterval(timer)

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


tow.onmouseenter = function () {
    gd.style.display = 'block'

}
tow.onmouseleave = function () {
    gd.style.display = 'none'
}

var m = document.getElementsByClassName('m-1')
var st = document.getElementsByClassName('start')

for (var i = 0; i < m.length; i++) {
    m[i].setAttribute('index', i)
    m[i].onmouseenter = function () {
        var c = this.getAttribute('index')
        st[c].style.opacity = 1
    }
    m[i].onmouseleave = function () {
        var c = this.getAttribute('index')
        st[c].style.opacity = 0
    }
}

tj.onclick = function () {
    gd222.style.display = 'none'
    gd111.style.display = 'block'
    gd333.style.display = 'none'
    gd444.style.display = 'none'
    gd555.style.display = 'none'

}
fc.onclick = function () {
    gd222.style.display = 'block'
    gd111.style.display = 'none'
    gd333.style.display = 'none'
    gd444.style.display = 'none'
    gd555.style.display = 'none'
}

wl.onclick = function () {
    gd222.style.display = 'none'
    gd111.style.display = 'none'
    gd333.style.display = 'block'
    gd444.style.display = 'none'
    gd555.style.display = 'none'

}
sg.onclick = function () {
    gd222.style.display = 'none'
    gd111.style.display = 'none'
    gd333.style.display = 'none'
    gd444.style.display = 'block'
    gd555.style.display = 'none'

}
um.onclick = function () {
    gd222.style.display = 'none'
    gd555.style.display = 'block'
    gd333.style.display = 'none'
    gd444.style.display = 'none'
    gd111.style.display = 'none'
}





