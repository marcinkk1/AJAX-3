$(document).ready(function(){
    $('#get-data').click(function(){

        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data){
                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title ID: ${data.title}`);
                let pBody = $('<p></p>').text(`Post ID: ${data.body}`);

                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pTitle);
                $('body').append(pBody);

                console.log(pId);
            })
            .fail(function(error){
                console.error(error);
            })
    })

    $('#get-data').click(function(){

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data){
                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title ID: ${data.title}`);
                let pBody = $('<p></p>').text(`Post ID: ${data.body}`);

                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pTitle);
                $('body').append(pBody);

                console.log(pId);
            })
            .fail(function(error){
                console.error(error);
            })
    })
})