// Definig all contents of used elements
const image_1=document.getElementById('image_1');
const image_2=document.getElementById('image_2');
const image_3=document.getElementById('image_3');
const image_4=document.getElementById('image_4');
const image_5=document.getElementById('image_5');
const image_6=document.getElementById('image_6');
const moves_paragraph=document.getElementById('moves_paragraph');
const score_paragraph=document.getElementById('score_paragraph');
const button_reset=document.getElementById('button_reset');

// Definig urls of each image
const c_url="images/c_logo.png";
const java_url="images/java_logo.png";
const python_url="images/python_logo.png";
const question_mark_url="images/question_mark.jpg";

// Definig Some attributes that weill be used in the whole code
let first_image,Last_image;
let moves=0;
let score=0;
let array=[];
let array_images_url=[];
let attempt=0;

// Initialize the array that contains 6 indexes, every 2 indexes contain 1, 2 or 3
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
    // Fill the array of urls
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
// Increase score by 10 every time the user got 2 duplicate images.
const increaseScore = () =>{
    score+=10;
    score_paragraph.innerText = `Score: ${score}`;
}
// Decrease score by 5 every time the user got 2 duplicate images.
const decreaseScore = () =>{
    score-=5;
    if(score<0)
        score=0;
    score_paragraph.innerText = `Score: ${score}`;
}
// Check for duplicate images
const checkDuplicateImages = () =>{
    if(first_image.src.match(Last_image.src) && (!first_image.src.match(question_mark_url)|| !Last_image.src.match(question_mark_url))){
        //In case first and last images are the same, the score will be increased by 10 and they will be hidden.    
        increaseScore();
        first_image.style.visibility = "hidden";
        Last_image.style.visibility = "hidden";
        attempt++;
        // In case the user got 3 duplicates images, every thing will be reinitialized except the score and the moves.
        if(attempt==3){
            // Return back images to question mark image
            image_1.src=question_mark_url;
            image_2.src=question_mark_url;
            image_3.src=question_mark_url;
            image_4.src=question_mark_url;
            image_5.src=question_mark_url;
            image_6.src=question_mark_url;
            // Return back images to visible case
            image_1.style.visibility = "visible";
            image_2.style.visibility = "visible";
            image_3.style.visibility = "visible";
            image_4.style.visibility = "visible";
            image_5.style.visibility = "visible";
            image_6.style.visibility = "visible";
            // Return back the other attributes needed to continue with other random array containing 6 indexes, every 2 indexes contain 1, 2 or 3.
            attempt=0;
            array=[];
            array_images_url=[];
            initializeArray();
        }
    }
    else{
        //In case first and last images aren't the same, the score will be decreased by 5 and they will return back to question mark image. 
        decreaseScore();
        first_image.src=question_mark_url;
        Last_image.src=question_mark_url;
    }
}
// Increase moves and put it beside move paragraph below the nav
const increaseMoves = (image) =>{
    moves++;
    moves_paragraph.innerText=`Moves: ${moves}`;
    if(moves%2!=0){
        first_image=image;
    }else{
        // Since the number of moves is even here, that means if it's odd, the user has clicking one image and about to 
        // ckick another image, so, no need to check when number of moves is odd.
        Last_image=image;
        checkDuplicateImages();
    }
}
// Set listener on image 1 and increase moves
image_1.addEventListener('click',function(){
    if(image_1.src.match(question_mark_url)){
        image_1.src=array_images_url[0];
    }else{
        image_1.src=question_mark_url;
    }
    increaseMoves(image_1);
});
// Set listener on image 2 and increase moves
image_2.addEventListener('click',function(){
    if(image_2.src.match(question_mark_url)){
        image_2.src=array_images_url[1];
    }else{
        image_2.src=question_mark_url;
    }
    increaseMoves(image_2);
});
// Set listener on image 3 and increase moves
image_3.addEventListener('click',function(){
    if(image_3.src.match(question_mark_url)){
        image_3.src=array_images_url[2];
    }else{
        image_3.src=question_mark_url;
    }
    increaseMoves(image_3);
});
// Set listener on image 4 and increase moves
image_4.addEventListener('click',function(){
    if(image_4.src.match(question_mark_url)){
        image_4.src=array_images_url[3];
    }else{
        image_4.src=question_mark_url;
    }
    increaseMoves(image_4);
});
// Set listener on image 5 and increase moves
image_5.addEventListener('click',function(){
    if(image_5.src.match(question_mark_url)){
        image_5.src=array_images_url[4];
    }else{
        image_5.src=question_mark_url;
    }
    increaseMoves(image_5);
});
// Set listener on image 6 and increase moves
image_6.addEventListener('click',function(){
    if(image_6.src.match(question_mark_url)){
        image_6.src=array_images_url[5];
    }else{
        image_6.src=question_mark_url;
    }
    increaseMoves(image_6);
});
// For the first time, we need to initialize the array.
initializeArray();
// Reset image by returning back every attribute to its inital case.
const resetGame=()=>{
    image_1.src=question_mark_url;
    image_2.src=question_mark_url;
    image_3.src=question_mark_url;
    image_4.src=question_mark_url;
    image_5.src=question_mark_url;
    image_6.src=question_mark_url;
    
    image_1.style.visibility = "visible";
    image_2.style.visibility = "visible";
    image_3.style.visibility = "visible";
    image_4.style.visibility = "visible";
    image_5.style.visibility = "visible";
    image_6.style.visibility = "visible";
    attempt=0;
    score=0;
    moves=0;
    array=[];
    array_images_url=[];
    initializeArray();
}
// Add listener on button reset.
button_reset.addEventListener('click',resetGame);