$(document).ready(function() 
{
    //occurs when <a> elements are clicked
    $('#nav_list li').click(function() 
    {
        var title = $(this).children("a").attr("title");
        var jsonFileName = title+ '.json';
        //run ajax method from function
        startParsingJSON(jsonFileName);
    });
	
}); // end ready

function startParsingJSON(jsonFile) 
{
    $.ajax({
        dataType: 'text',
        url: "json_files/" + jsonFile,
        success: function(jsonText) {
            var json = $.parseJSON(jsonText);

            //get results to display
            //img
            $('main > img').attr('src', json.speakers[0].image);
            //h1 h2 h3
            $('main > h1').html(json.speakers[0].title);
            $('main > h2').html(json.speakers[0].month);
            $('main > h3').html(json.speakers[0].speaker);
            //p
            $('main > p').html(json.speakers[0].text);
        }
    });
}