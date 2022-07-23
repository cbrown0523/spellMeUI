$.ajax({
    method:'GET',
    url: 'http://localhost:8080/api/learner/all',
    dataType: 'json'
}).done(function(data){
    console.log(data);
    $.map(data, function(learner , i ){
    
        $('.usernme').append(" <a href = '' ><p>"+ learner.name + "</p></a>"
        )

    })
})