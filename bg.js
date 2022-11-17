// $(".front").remove();
// $(".c_title").remove();
$("#orgData_vision").remove();
$("#orgData_capa_plan").remove();
// $(".part.advice.half").remove();
$(".text_add").remove();
$(".q_menu").remove();

$(".col_md_6.img").append($(".section.my_file"));
// $(".col_md_6.img").after($('<div class="uploadFile"></div>'));
// $(".uploadFile").append($(".section.my_file"));
$("img").eq(3).remove();
$(".h_box").remove();
// $(".date").remove();

$(".col_md_12").eq(1).after($(".col_md_12"));

// vimg = $("<img>", {
//   src: "castle.jpg",
//   width: "1000px",
//   height: "720px",
// });
// $(".b_box").after($(vimg));

$(".section.mooc").remove();
$(".section.oer").remove();

// $("head").append("<link rel='stylesheet' href='webStyle.css'>");

// $(".col_md_6.img").css("padding", "30px");
$(".col_md_6.img").css("box-sizing", "border-box");
