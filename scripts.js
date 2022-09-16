const image_1=document.getElementById('image_1');
const image_2=document.getElementById('image_2');
const image_3=document.getElementById('image_3');
const image_4=document.getElementById('image_4');
const image_5=document.getElementById('image_5');
const image_6=document.getElementById('image_6');
const moves_paragraph=document.getElementById('moves_paragraph');
const score_paragraph=document.getElementById('score_paragraph');

const c_url="images/c_logo.png";
const c_java="images/c_logo.png";
const c_python="images/c_logo.png";
let moves=0;
let score=0;
let array=[];
const initializeArray = ()=>{
    let counter1=2;
    let counter2=2;
    let counter3=2;
    for(let i=0;i<6;i++){
        let random = Math.floor((Math.random() * 3) + 1);
        if(random==1){
            if(counter1==0){
                i--;
                continue;
            }else{
                array.push(1);
                counter1--;
            }
        }else if(random==2){
            if(counter2==0){
                i--;
                continue;
            }else{
                array.push(2);
                counter2--;
            }
        }else{
            if(counter3==0){
                i--;
                continue;
            }else{
                array.push(3);
                counter3--;
            }
        }
    }
}





const increaseMoves = () =>{
    moves++;
    moves_paragraph.innerText=`Moves: ${moves}`;
    if(moves%2==0){
        console.log('we have to check');
    }
}
const increaseScore = () =>{
    score+=10;
    score_paragraph.innerText = `Score: ${score}`;
}
const decreaseScore = () =>{
    score-=10;
    if(score<0)
        score=0;
    score_paragraph.innerText = `Score: ${score}`;
}

// let function1 = ()=>{
//     if(image_1.src.match('images/question_mark.jpg')){
//         image_1.src="images/c_logo.png";
//     }else{
//         image_1.src="images/question_mark.jpg";
//     }

// }



image_1.addEventListener('click',function(){
    increaseMoves();
});
image_2.addEventListener('click',function(){
    increaseMoves();
});
image_3.addEventListener('click',function(){
    increaseMoves();
});
image_4.addEventListener('click',function(){
    increaseMoves();
});
image_5.addEventListener('click',function(){
    increaseMoves();
});
image_6.addEventListener('click',function(){
    increaseMoves();
});
initializeArray();


