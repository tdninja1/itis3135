//Ideas for JS Functions
/*
1.) Preload images to website
2.) Image Slideshow
3.) Random Item Picker from 10 listed items
*/

//declare randomProduct array
function randomProduct() 
{
    var myRandomProductArray = ["Delightful Cocoa Bombs", "Chocolate Orange Cake", "Gingerbread Man Cake", 
                                "Fathers Special Vanilla Business Cake", "Pink Velvet Flamingo Cake", "Pink Velvet Flower Cake", 
                                "Easter Bunny Cake", "Doughnut Cake", "Mexican Cake", "Chocolate Covered Strawberries"
                            ];
    //next get random number by creating a variable named randomProductItem and set that equal to the 
    //Math.floor(Math.random() function multiplied by the array's length 
    var randomProductItem = myRandomProductArray[Math.floor(Math.random() * myRandomProductArray.length)];
    //and set the innerHTML to the var created
    document.getElementById("randomProduct").innerHTML = randomProductItem;
}

//variables needed
var currentImage = 0, images = [], time = 1200; 

function changeFavoriteImg() 
{
    
    //add images to empty array
    images[0] = "images/1.jpg", images[1] = "images/3.jpg"
    images[2] = "images/5.jpg", images[3] = "images/7.jpg";
    //transition to next current available image
    document.slide.src = images[currentImage];

    //loop through images length and progress. If images length is less than i,
    //incremenet
    if (currentImage < images.length - 1 ) 
    {
        currentImage++;
    }
    //otherwise set current image to 0
    else 
    {
       currentImage = 0;
    }

   setTimeout("changeFavoriteImg()", time);
}
//as soon as the page starts, make sure changeImg function runs
//this can be done with the "window.onload" function. Set that equal to change img.
    window.onload = changeFavoriteImg;

//useful to load images before site is seen
function preloader() {
    //counter
    var j = 0;

    //need imageObject
    imageObj = new Image();

    imagesTwo = new Array();
    imagesTwo[0] = "images/1.jpg", imagesTwo[1] = "images/3.jpg"
    imagesTwo[2] = "images/5.jpg", imagesTwo[3] = "images/7.jpg";
    
    for (j = 0; j <= 3; j++) {
        imageObj.src=images[i];
    }
}