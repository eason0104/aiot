var mapArray, ctx, currentImgMainX, currentImagMainY;
var imgMountain, imgMain, imgEnemy;

$(document).ready(function() {
    //0:可走; 1:障礙; 2:終點; 3:敵人; 4:門; 5:鑰匙; 6:開門
    mapArray = [0,1,1,0,0,0,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "rpg_game/images/spriteSheet.png";
    currentImgMainX = 0;
    currentImagMainY = 0;
    imgMain.onload=function() {
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImagMainY,200,200);
    };
    
    imgMountain = new Image();
    imgMountain.src = "rpg_game/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "rpg_game/images/Enemy.png";
    imgdoor = new Image();
    imgdoor.src = "rpg_game/images/door.gif";
    imgkey = new Image();
    imgkey.src = "rpg_game/images/key.png";
    imgopen = new Image();
    imgopen.src = "rpg_game/images/opendoor.jpg";
    imgMountain.onload=function() {
        imgEnemy.onload=function() {
            imgdoor.onload=function() {
                imgkey.onload=function() {
                    for(var x in mapArray) {
                        if(mapArray[x]==1) { //擺上障礙物
                            ctx.drawImage(imgMountain,32,192,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                        }else if(mapArray[x]==3) { //擺上敵人
                            ctx.drawImage(imgEnemy,280,40,70,135,x%3*200,Math.floor(x/3)*200,200,200);
                        }else if(mapArray[x]==4) { //門
                            ctx.drawImage(imgdoor,60,40,240,285,x%3*200,Math.floor(x/3)*200,200,200);
                        }else if(mapArray[x]==5) { //鑰匙
                            ctx.drawImage(imgkey,0,0,205,255,x%3*200,Math.floor(x/3)*200,200,200);
                        }else if(mapArray[x]==6) { //開門
                            ctx.drawImage(imgopen,125,0,240,500,x%3*200,Math.floor(x/3)*200,200,200);
                        }
                    }
                }
            }
        };
    };
});

$(document).keydown(function(event) {
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    event.preventDefault();
    console.log(event.which);
    switch(event.which) {
        case 37:
            targetImgMainX = currentImgMainX-200;
            targetImgMainY = currentImagMainY;
            cutImagePositionX =175;
            break;
        case 38:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImagMainY-200;
            cutImagePositionX =355;
            break;
        case 39:
            targetImgMainX = currentImgMainX+200;
            targetImgMainY = currentImagMainY;
            cutImagePositionX =540;
            break;
        case 40:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImagMainY+200;
            cutImagePositionX =0;
            break;
        default:
            return;
    }
    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0){
        targetBlock=targetImgMainX/200+targetImgMainY/200*3;
    }else{
        targetBlock=-1;
    }
    
    ctx.clearRect(currentImgMainX, currentImagMainY,200,200);
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3){
    
    }else{
        $("#talkBox").text("");
        currentImgMainX=targetImgMainX;
        currentImagMainY=targetImgMainY;
    }
    
    /*if(mapArray[targetBlock]==2) {
        ctx.clearRect(currentImgMainX, currentImagMainY,200,200);
        var key = 1;
        console.log(key);
    }
    
    if(mapArray[targetBlock]==8 & key==1){
        ctx.clearRect(currentImgMainX, currentImagMainY,200,200);    
    }*/
        ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImagMainY,200,200);

    switch(mapArray[targetBlock])
        {
            case undefined:
                $("#talkBox").text("邊界");
            break;
            case 1:
                $("#talkBox").text("有山");
            break;
            case 2:
                $("#talkBox").text("抵達終點!");
            break;
            case 3:
                $("#talkBox").text("嗨～");
            break;
            case 4:
                $("#talkBox").text("沒有鑰匙不能開門～");
            break;
            case 5:
                $("#talkBox").text("取得鑰匙");
            break;
            case 6:
                $("#talkBox").text("恭喜過關");
            break;
        }
});