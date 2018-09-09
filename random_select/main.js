/*$(document).ready(function() {
    $("input").click(function()
    {
        var numberoflistitem = $("#choices li").length;
        var randomchildnumber = Math.floor(Math.random()*numberoflistitem);
        console.log(randomchildnumber);
        
        $("H2").text($("#choices li").eq(randomchildnumber).text());
    });
});*/


var food=[
    "拉麵",
    "水餃",
    "牛肉麵",
    "水煎包",
    "大腸麵線",
    "火鍋",
    "牛排",
    "冰淇淋",
    "乾麵",
    "珍珠奶茶",
    "餅乾",
    "大腸包小腸",
    "豬血糕",
    "陽春麵",
    "泡麵",
    "滷肉飯",
    "生菜沙拉",
    "義大利麵",
    "麥當勞",
    "肯德基"
];

var food_img=[
    "img/food01.jpg",
    "img/food02.jpg",
    "img/food03.jpg",
    "img/food04.jpg",
    "img/food05.jpeg",
    "img/food06.jpg",
    "img/food07.jpg",
    "img/food08.jpg",
    "img/food09.jpg",
    "img/food10.jpeg",
    "img/food11.jpg",
    "img/food12.jpg",
    "img/food13.jpeg",
    "img/food14.jpg",
    "img/food15.jpeg",
    "img/food16.jpg",
    "img/food17.jpg",
    "img/food18.jpg",
    "img/food19.jpg",
    "img/food20.png"
];

function foodname(){
    var numberoflistitem = food.length;
    var randomchildnumber = Math.floor(Math.random()*numberoflistitem);
    //console.log(randomchildnumber);
    $("H4").text(food[randomchildnumber]);
    console.log(food_img[randomchildnumber]);
    //$("foodpicture").append($('food_img[randomchildnumber]'));
    $('H4').attr('src', "img/food01.jpg");
};