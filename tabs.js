// Tabs
$(".tab_content").hide();
$(".tab_content:first").show();
$("ul.tabs li").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_accordion").removeClass("d_active");
    $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
});
$(".dropdown").each((i,el) => { 
    let list =  $(el).find('.tab_content2');
    let img = $(el).find('.dropdown-img');
    let dropdown = $(el).find('.dropdown-toggler');
    dropdown.click(() => {
        list.slideToggle('fast');
        img.toggleClass("rotate-180");
        dropdown.toggleClass("active");
        list.toggleClass('hidden');
    });
});