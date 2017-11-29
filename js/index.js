/**
 * Created by lsmtty on 2017/11/29.
 */
$(function () {
    initEvents();
});

function initEvents() {
    $(".module").hover(moduleActiveEvent);
    $(".module").mouseleave(function () {
        $(this).find("img").attr({"src":$(this).find("img").attr("src").replace("active","normal")});
    })
}
var moduleActiveEvent = function () {
    $(".module").siblings().each(function () {
        $(this).find("img").attr({"src":$(this).find("img").attr("src").replace("active","normal")});
    });
    $(this).find("img").attr({"src":$(this).find("img").attr("src").replace("normal","active")});
};