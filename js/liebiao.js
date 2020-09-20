// 列表滚动

$(function (){
    $("#slide").slidebox({
        boxh: 400,//盒子的高度
        w: 1200,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
    
})
// 畅销榜
$("#kell .boxs-right ul li").mouseenter(function () {
    $(this).find("div").show();
    $(this).find(".title").hide()
    $(this).siblings().find("div").hide()
    $(this).siblings().find(".title").show()
})


$(function (){
    $(".haha").slidebox({
        boxh: 400,//盒子的高度
        w: 1200,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
    
})
// 独家提供
$("#banner .recommends p").mouseenter(function () {
    console.log(this);
    
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    let re = $("#banner .slidebox").eq(index).show().siblings(".slidebox").hide();
    console.log(re);
})

