async function display()
{
    
    const url='https://imdb-api.com/API/AdvancedSearch/k_elm7zlup?user_rating=8.0,10&num_votes=0,&languages=te';
    const response =await fetch(url);
    var data=await response.json();
    console.log(data);
    let{results}=data;
    results.forEach(element => {
        let{title,imDbrating,stars}=element;
        console.log("movie name is:"+title);
        console.log("Rating is:"+imDbrating);
        console.log("stars:"+stars);
        
    });
}