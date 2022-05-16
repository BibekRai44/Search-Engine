$("#form").submit(function (e){
    e.preventDefault()
    var query=$("#search").val()
    let result=''
    
    var API_KEY='64267fe2931ab4c71b7331fd312264f7'
    var url='http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query='+ query
    console.log(url)

    $.get(url,function(data){
        console.log(data)

        data.organic_results.forEach(res => {
            
            result = `
             <h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a>
             <p>${res.snippet}</p>
            `
            $("#result").append(result)
        });
    })
})