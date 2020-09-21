$(".selall").click(function(){
    let bool=$(this).prop("checked");
    $(".singlechk, .selall").prop("checked",bool);
    totalprice()
    totalnum()
})

$("table .singlechk").click(function(){
    let singleNum=$("table .singlechk:checked").length;
    let singleAll=$("table .singlechk").length;
    if(singleNum===singleAll){
        $(".selall").prop("checked",true);
    }else{
        $(".selall").prop("checked",false);
    }
    totalprice()
    totalnum()
})
//   增加数量
$("#shopcartarea table tbody .addbtn").click(function(){
    let num=$(this).siblings(".count").val()
    ++num;
    $(this).siblings(".count").val(num)
    singleTotalprice(this,num);
    totalprice()
    totalnum()
})
// 减少数量
$("#shopcartarea table tbody .reducebtn").click(function(){
    let num=$(this).siblings(".count").val()
    if(num>1){
        --num;
    }
   
    $(this).siblings(".count").val(num)
    singleTotalprice(this,num);
    totalprice()
    totalnum()
})

// 删除单个商品
$(".danbtn").click(function(){
    $(this).parent().parent().remove();
    totalprice()
}
)

// 删除多个商品
$(".danllbtn").click(function(){
    $("table .singlechk:checked").each(function(index,dom){
        $(this).parent().parent().remove();
        totalprice()
    })
    
    
}
)
function singleTotalprice(obj,num){
    // 单价
    let singleprice=$(obj).parent().siblings(".singleprice").html()
    // 小计
    let singleTotalprice=singleprice*num;
    // 赋回界面
    $(obj).parent().siblings(".singleTotalprice").html(singleTotalprice.toFixed(2))
    // console.log(singleTotalprice,typeof singleTotalprice);
    
}
// 计算总价
function totalprice(){
    let sum=0;
    $("table .singlechk:checked").each(function(index,dom){
        let singleTotalprice=$(dom).parent().siblings(".singleTotalprice").html();
        sum += parseFloat(singleTotalprice);
console.log(sum)
    })
    $(".totalprice").html(sum.toFixed(2))
}

// 总数
function totalnum(){
    let sum=0;
    $("table .singlechk:checked").each(function(index,dom){
        let ke=$(dom).parent().siblings().find(".count").val();
        console.log(ke);
        
        sum += parseInt(ke);
console.log(sum)
    })
    $(".totalnum").html(sum.toFixed(2))
}