// ...................... hide & show & toggle..................
$("#demo").hide(3000);
$("#demo").show(2000);
// $(".btn").click();
$("#mar").hide();

$("#btn1").click(function () {
    // window.alert("hello");
    $("#demo2").hide(1000);
    $("#demo2").show(2000);
    // document.getElementById("mar").classList = "d-block";
    $("#mar").show(2000);
})
$("#btn2").click(function () {
    // window.alert("hello");
    $("#demo3").toggle(2000);
})

// ...................... slideUp & slideDown & slideToggle..................
$("#demoo1").slideUp(3000);
$("#demoo1").slideDown(2500);
$("#yes").hide();

$("#btnn1").click(function () {
    $("#demoo2").slideUp(1000);
    $("#demoo2").slideDown(1000);
    $("#yes").show();
})

$("#btnn2").click(function () {
    // window.alert("hello");
    $("#demoo3").slideToggle(1000);
})

// ...................... fadeIn & fadeOut & fadeToggle & fadeTo ..................
$("#demo4").fadeOut(5000);
$("#demo4").fadeIn(5000);

$("#btn5").click(function(){
    $("#demo5").fadeOut(1000);
    $("#demo5").fadeIn(1000);
});
$("#btn6").click(function(){
    $("#demo6").fadeToggle(2000);
});
$("#btn7").click(function(){
    $("#demo7").fadeTo(2000,0.8);
});