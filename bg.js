$(".front").remove();
$("#orgData_vision").remove();
$("#orgData_capa_plan").remove();
$(".text_add").remove();
$(".q_menu").remove();

$(".col_md_6.img").after($(".section.my_file"));
$(".col_md_6.img").remove();

$(".col_md_12").eq(1).after($(".col_md_12"));

// vimg = $("<img>", {
//   src: "castle.jpg",
//   width: "1000px",
//   height: "720px",
// });
// $(".b_box").after($(vimg));

$(".section.mooc").remove();
$(".section.oer").remove();
