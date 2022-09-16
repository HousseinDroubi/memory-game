const image_1=document.getElementById('image_1');
const image_2=document.getElementById('image_2');
const image_3=document.getElementById('image_3');
const image_4=document.getElementById('image_4');
const image_5=document.getElementById('image_5');
const image_6=document.getElementById('image_6');
const moves_paragraph=document.getElementById('moves_paragraph');
let score=0;


let function1 = ()=>{
    if(image_1.src.match('images/question_mark.jpg')){
        image_1.src="images/c_logo.png";
    }else{
        image_1.src="images/question_mark.jpg";
    }

}
let addScore = () =>{
    score++;
    moves_paragraph.innerText=`Score: ${score}`;
}

image_1.addEventListener('click',function(){
    addScore();
});
image_2.addEventListener('click',function(){
    addScore();
});
image_3.addEventListener('click',function(){
    addScore();
});
image_4.addEventListener('click',function(){
    addScore();
});
image_5.addEventListener('click',function(){
    addScore();
});
image_6.addEventListener('click',function(){
    addScore();
});


