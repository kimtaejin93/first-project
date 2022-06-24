let go_button = document.getElementById("btn");
let user_number = document.getElementById("user_number");
let Bull=document.getElementById("bull");
go_button.addEventListener("click",game);
let left=document.getElementById("left_life");
let random = 0;
let life=5;
let rst=document.getElementById("rst");
rst.addEventListener("click",reset);
user_number.addEventListener("focus",function(){
  user_number.value="";
});

function game(){
  if(0>=user_number.value||100<user_number.value){
    Bull.textContent="1~100사이의 숫자 입력하세요";
    return;
  }


  if(random>user_number.value){
    Bull.textContent="up";
  }
  else if(random<user_number.value){
    Bull.textContent="down";
}
else{
  Bull.textContent="정답";
  go_button.disabled=true;
} 
life--;
left.textContent=`현재 남은 목숨은 ${life} 입니다.`
if(life==0){
  go_button.disabled=true;
  Bull.textContent="Game Over";
}
}
function random_number(){
random=parseInt(Math.random()*100)+1
console.log(random);
}
function reset(){
  go_button.disabled=false;
  life=5;
  Bull.textContent="1~100사이의 숫자 입력";
  left.textContent=`현재 남은 목숨은 ${life} 입니다.`
  random_number();

}
random_number();
