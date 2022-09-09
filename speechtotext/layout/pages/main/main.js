$.ajax({
    method:'GET',
    url: 'http://localhost:8080/api/learner/all',
    headers: {
        Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiQGIuY29tIiwiaWF0IjoxNjYxMjM0ODI0fQ.Y9CCUzHksscuPZNfYSOWDBI_6UGy-_qyZBToobX-13ulZu0Fda24lLBM0W4XnfaeFHxdoTVX6UUGPZJ4BI6twg"
    },
    dataType: 'json'
}).done(function(data){
    console.log(data);
    $.map(data, function(learner , i ){
    
        $('.usernme').append(" <a href = '' ><p>"+ learner.name + "</p></a>"
        )

    })
})