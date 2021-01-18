

$("#ddemo").animate({ width: '100%' }, 1500);
$("#ddemo").animate({ height: '250%' }, 1500, function () {
    $(".welcome").fadeIn(1000, function () {
        $("#sec2").show(2000, function () {
            // $("#cont").show(1000, function () {
            $("#secc1").fadeIn(1500, function () {
                $(".cont1").show(1000, function () {
                    $(".cont2").show(1000, function () {
                        $(".cont3").show(1000, function () {
                            $("#demo").hide(1500);
                            $("#demo").show(1500, function () {
                                $("#secc2").show(1500, function () {
                                    $(".cont4").show(1000, function () {
                                        $(".cont5").show(1000, function () {
                                            $(".cont6").show(1000, function () {
                                                $("#demoo1").slideUp(1500);
                                                $("#demoo1").slideDown(1500, function () {
                                                    $("#secc3").slideDown(1500, function () {
                                                        $(".cont7").show(1000, function () {
                                                            $(".cont8").show(1000, function () {
                                                                $(".cont9").show(1000, function () {
                                                                    $(".cont10").show(1000, function () {
                                                                        $("#demo4").fadeOut(1500);
                                                                        $("#demo4").fadeIn(1500);
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                    // });
                });
            });
        });

    });
});

$("#start").click(function () {
    $("#wide").animate({ width: '100%' }, 2000);
    $("#wide").animate({ height: '50vh' }, 2000);
    $("#wide").animate({ borderRadius: '50%' }, 2000);
})
$("#stop").click(function () {
    $("#wide").stop(true, false);
});
// ...................... hide & show & toggle..................
// $("#demo").hide(3000);
// $("#demo").show(2000);
// $(".btn").click();
$("#mar").hide();

$("#btn1").click(function () {
    // window.alert("hello");
    $("#demo2").hide(1000);
    $("#demo2").show(2000);
    // document.getElementById("mar").classList = "d-block";
    // $("#mar").show(2000);
})
$("#bbtn1").click(function () {
    $("#mar").toggle(1000);
})
$("#btn2").click(function () {
    // window.alert("hello");
    $("#demo3").toggle(2000);
})

// ...................... slideUp & slideDown & slideToggle..................
// $("#demoo1").slideUp(3000);
// $("#demoo1").slideDown(2500);
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
// $("#demo4").fadeOut(5000);
// $("#demo4").fadeIn(5000);

$("#btn5").click(function () {
    $("#demo5").fadeOut(1000);
    $("#demo5").fadeIn(1000);
});
$("#btn6").click(function () {
    $("#demo6").fadeToggle(2000);
});
$("#btn7").click(function () {
    $("#demo7").fadeTo(2000, 0.8);
});