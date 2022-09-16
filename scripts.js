const image_1=document.getElementById('image_1');
const image_2=document.getElementById('image_2');
const image_3=document.getElementById('image_3');
const image_4=document.getElementById('image_4');
const image_5=document.getElementById('image_5');
const image_6=document.getElementById('image_6');
const moves_paragraph=document.getElementById('moves_paragraph');
const score_paragraph=document.getElementById('score_paragraph');

const c_url="images/c_logo.png";
const java_url="images/java_logo.png";
const python_url="images/python_logo.png";
const question_mark_url="images/question_mark.jpg";

let first_image,Last_image;
let moves=0;
let score=0;
let array=[];
let array_images_url=[];
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
    for(let i=0;i<6;i++){
        if(array[i]==1){
            array_images_url[i]=c_url;
        }else if(array[i]==2){
            array_images_url[i]=java_url;
        } else {
            array_images_url[i]=python_url;
        }
        console.log(array[i]);
    }
    
}

const checkDuplicateImages = () =>{
    console.log(first_image);
    console.log(Last_image);
    // if(first_image.src.match(Last_image.src)){
    //     console.log("same");
    // }
    // else{
    //     console.log("not smae");
    // }
}

const increaseMoves = (image) =>{
    moves++;
    moves_paragraph.innerText=`Moves: ${moves}`;
    if(moves%2!=0){
        first_image=image;
        // console.log(first_image);
        // console.log(image);
    }else{
        Last_image=image;
        checkDuplicateImages();
    }
    // console.log(image);
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


image_1.addEventListener('click',function(){
    if(image_1.src.match(question_mark_url)){
        image_1.src=array_images_url[0];
    }else{
        image_1.src=question_mark_url;
    }
    increaseMoves(image_1);
});
image_2.addEventListener('click',function(){
    if(image_2.src.match(question_mark_url)){
        image_2.src=array_images_url[1];
    }else{
        image_2.src=question_mark_url;
    }
    increaseMoves(image_2);
});
image_3.addEventListener('click',function(){
    if(image_3.src.match(question_mark_url)){
        image_3.src=array_images_url[2];
    }else{
        image_3.src=question_mark_url;
    }
    increaseMoves(image_3);
});
image_4.addEventListener('click',function(){
    if(image_4.src.match(question_mark_url)){
        image_4.src=array_images_url[3];
    }else{
        image_4.src=question_mark_url;
    }
    increaseMoves(image_4);
});
image_5.addEventListener('click',function(){
    if(image_5.src.match(question_mark_url)){
        image_5.src=array_images_url[4];
    }else{
        image_5.src=question_mark_url;
    }
    increaseMoves(image_5);
});
image_6.addEventListener('click',function(){
    if(image_6.src.match(question_mark_url)){
        image_6.src=array_images_url[5];
    }else{
        image_6.src=question_mark_url;
    }
    increaseMoves(image_6);
});
initializeArray();


