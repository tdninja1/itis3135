var $ = function(id) {
	return document.getElementById(id);
};
//need var to hold: menuItems, menuPrices, orderDetails, orderTotal, orderItems
//first, start by setting order total to 0

var orderTotal = 0;
var orderItems;

//next add menuItems to array of items. 
//After, set the costs of the items in another array.
//lastly, set the details for both menu items.
var menuItems = ["Espresso", "Cappuccino"];
var menuPrices = ["1.95", "3.45"];
var orderDetails = ["Delicious espresso. Wanna try it?", "Delicious Cappuccino!"];

//for the order site to function, we need to load the 
//function immediately. 
window.onload = function() {
	//add onclick event handler for each image
	var imgTag = document.getElementsByTagName("IMG");

	// for click event add item to order and update total
    //this can be done by looping through imgTag length and increment as we go
	for (var i = 0; i < imgTag.length; i++) 
    {
		// display order and total
        imgTag[i].onclick = onClickPicture;
        console.log(imgTag[i]);
    }
		
}; // end onload


//need a function that deals with finding the clicked picture. Once the image clicked was found, we
//need to do something with it. This function deals with setting the itemCost, itemName, and
//itemDetails for this product.
function onClickPicture() 
{
    //need to set selectedImage equal to the id of the selectedImage
    var selectedImage = this.id;

    //loop through menuItems length and increment
    for (var i = 0; i < menuItems.length; i++) 
    {
        var itemCost; //holds menuPrices[i] element
        var itemName; //holds menuItems[i] element
        var itemDetails; //holds orderDetails[i] element

        if (selectedImage == menuItems[i]) 
        {
            //set items to incremented element
            itemCost = menuPrices[i];
            itemName = menuItems[i];
            itemDetails = orderDetails[i];

            //set order text
            document.getElementById("order").innerHTML += "<br>" + "$" + itemCost + " : " + itemName + " : " + itemDetails;

            //ordertotal needs to be validated by parseFloat() for the itemCost
            orderTotal = orderTotal + parseFloat(itemCost);

            //total needs to print the total and dollar sign to the hundredths place
            document.getElementById("total").innerHTML = "Total: $" + orderTotal.toFixed(2);
        }
    }
}