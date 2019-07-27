/*
$(p1).on('click',function(){
    $(images).css({
        transform:'translateX(0)'
    })
})
$(p2).on('click',function(){
    $(images).css({
        transform:'translateX(-300px)'
    })
})
$(p3).on('click',function(){
    $(images).css({
        transform:'translateX(-600px)'
    })
})*/

var allButtons = $('#buttons > button')
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var px = index * (-300)
        $('#images').css({
            transform:'translate(' + px + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

var n = 0
var size = allButtons.length
var timeId = setTimer()
$('.window').on('mouseenter',function(){
    window.clearInterval(timeId)
})
$('.window').on('mouseleave',function(){
    timeId = setTimer()
})

//函数区
function setTimer(){
    return setInterval(() => {
        playSlide(n%size)
        n += 1
    }, 1000)
}

function playSlide(index){
    allButtons.eq(index).trigger('click')
}

function activeButton($button){
    $button.addClass('red')
        .siblings('.red').removeClass('red')
}