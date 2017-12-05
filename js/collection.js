$(function () {
    initEvents();
});
function initEvents() {
    $("#type-list li").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        getDeleteType();
    });
}
function getDeleteType() {
    if($("#type-list .active").text() !== "最近观看"){
        $("#delete-type").removeClass("delete-recent").addClass("delete-collection");
    }else{
        $("#delete-type").removeClass("delete-collection").addClass("delete-recent");
    }
}
