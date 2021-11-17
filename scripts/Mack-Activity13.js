$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json", //CHANGED FROM "xml" TO "json"
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json", //CHANGED FROM "xml" TO "json"
        success: function(data) {
            $("#team").html("");
            //XML UNDER
            // $(data).find("management").children().each(function() {
            //     var xmlDoc = $(this);
            //     $("#team").append
            //     ("<h3>" + xmlDoc.find("name").text() + "</h3>" +
            //               xmlDoc.find("title").text() + "<br>" +
            //               xmlDoc.find("bio").text() + "<br>");
            // });
            //JSON UNDEr
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $('#team').append(
                        value.name + '<br>' +
                        value.title + '<br>' + 
                        value.bio + '<br>' +
                    '<br>');

                });
            });
        }
    });
});