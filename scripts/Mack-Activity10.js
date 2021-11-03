$(document).ready(function() {
        // preload the image for each link
        $('#image_list a').each(function() 
        {
                //create new var imageToSwap = new Image()
                var imageToSwap = new Image();
                //set imageToSwap = to this href attr
                imageToSwap.src = $(this).attr('href');
        });

        // set up the event handlers for each link
        $('#image_list a').click(function (event) 
        {
                // cancel the default action of each link
                event.preventDefault();
                
                //imageUrl = href and caption = title
                var imageUrl = $(this).attr('href');
                $('#image').attr('src', imageUrl);
                var caption = $(this).attr('title');

                // get the image URL and caption for each image and animate the caption
                $('#image').fadeOut(3000, function () 
                {       //find image by src attribute and href attribute 'imageUrl' was set equal to this.attr.href, so use imageUrl object
                        $('#image').attr('src', imageUrl).fadeIn(3000);

                });   
                $('#caption').fadeOut(3000, function () 
                {       
                        $('#caption').css('font-size', '2.0em'); //Source: https://stackoverflow.com/questions/56306428/how-to-change-id-font-size-using-jquery-attr
                        //find caption by title attr - 'caption' was set equal to this.attr.title, so use caption object
                        $('#caption').text(caption).fadeIn(3000);
                });
        });
    // move the focus to the first link
    $('li:first-child a').focus();
}); // end ready