
//文档加载事件
$(function (){
    $("#slider").slidebox({
        boxh: 400,//盒子的高度
        w: 1000,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
})
//文档加载事件
$(function (){
    $(".con #slider").slidebox({
        boxh: 220,//盒子的高度
        w: 330,//图片的宽度
        h: 220,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
})
$(function (){
    $(".zlu #slider").slidebox({
        boxh: 338,//盒子的高度
        w: 430,//图片的宽度
        h: 338,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
    
})

// 电子书
$("#ebox .boxs-left .recommends li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    let re = $("#ebox .boolslist").eq(index).show().siblings(".boolslist").hide();
    console.log(re);
})
// 服装 
$("#cloth .bont .like li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    let re = $("#cloth .lang").eq(index).show().siblings(".lang").hide();
    console.log(re);
})
// 户外
$("#sport .bont .like li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    let re = $("#sport .lang").eq(index).show().siblings(".lang").hide();
    console.log(re);
})

// 童装
$("#childcloth .bont .like li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    let re = $("#childcloth .lang").eq(index).show().siblings(".lang").hide();
    console.log(re);
})

// 新手畅销榜
$("#ebox .boxs-right ul li").mouseenter(function () {
    $(this).find("div").show();
    $(this).find(".title").hide()
    $(this).siblings().find("div").hide()
    $(this).siblings().find(".title").show()
})
// 楼层
let bgcolors=["red","pink","red","pink","red"];
$(".floornav ul li").hover(function(){
let index=$(this).index();
$(this).css("backgroundColor",bgcolors[index]);
},function(){
$(this).css("backgroundColor","");

})

$(".floornav ul li").hover(function(){
    $(this).css({
        width: 40
    });

},function(){
    $(this).css({
        width: 0
    });
})


// 顶部
$(".gototop").gototop();  
$(".gototop").gototop({
    position : 0,
    duration : 1250,
    visibleAt : 300,
    classname : "isvisible"
});

$(window).scroll(function(){
    console.log(window)
    let st=$("html,body").scrollTop();
    if(st>400){
        $(".topsearch").stop().slideDown();
    }else{
        $(".topsearch").stop().slideUp();
    }
})
// 领劵
$(".Togoo").hover(function(){
    $(".din-a").css({display:"block"})
},function(){
    $(".din-a").css({display:"none"})
}
)
