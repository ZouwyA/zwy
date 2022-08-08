var list = document.getElementById('ul').children
var p = document.getElementById('parent').children

for (var i = 0; i < list.length; i++) {
    list[i].setAttribute('index', i)

    list[i].onclick = function () {
        var t1 = this.getAttribute('index')

        for (t = 0; t < list.length; t++) {
            list[t].removeAttribute('class')
            p[t].removeAttribute('class')
        }
        this.setAttribute('class', 'current')
        p[t1].setAttribute('class', 'kkk')
    }
}
