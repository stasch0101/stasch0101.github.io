$(document).ready(function() {

    var images = [
        {
            image: 'images/spring_1.jpg',
            thumb: 'images/spring_1t.jpg',
            title: 'London ',
             description: 'London is the capital city of England',
             size: '',
            link: 'images/spring_1.jpg'
        },
        {
            image: 'images/spring_2.jpg',
            thumb: 'images/spring_2t.jpg',
            title: 'Paris',
            description: 'Paris is the capital of France.',
            size: '',
            link: 'images/spring_2.jpg'
        },
        {
            image: 'images/spring_3.jpg',
            thumb: 'images/spring_3t.jpg',
            title: 'Tokyo',
            description: 'Tokyo is the capital of Japan.',
             size: '',
            link: 'images/spring_3.jpg'
        },
        {
            image: 'images/spring_4.jpg',
            thumb: 'images/spring_4t.jpg',
            title:'Sydney' ,
            description: 'Sydney is the state capital of New South Wales.',
             size: '',
            link: 'images/spring_4.jpg'
        },
        {
            image: 'images/spring_5.jpg',
            thumb: 'images/spring_5t.jpg',
            title: 'New York',
             description: 'New York City is populated major city in the United States.',
             size: '',
            link: 'images/spring_5.jpg'
        },
		{
            image: 'images/spring_6.jpg',
            thumb: 'images/spring_6t.jpg',
            title: 'Barcelona',
            description: 'Barcelona is the capital and largest city of Catalonia',
             size: '',
            link: 'images/spring_6.jpg'
        },
		{
            image: 'images/spring_7.jpg',
            thumb: 'images/spring_7t.jpg',
            title: 'Beijing',
            description: 'Beijing is the capital of  China.',
             size: '',
            link: 'images/spring_7.jpg'
        },
		{
            image: 'images/spring_8.jpg',
            thumb: 'images/spring_8t.jpg',
            title: 'Odessa',
            description: 'Odessa is the third most populous city of Ukraine .',
             size: '',
            link: 'images/spring_8.jpg'
        }
    ];


    
    var gallery = $("#gallery");
     
    
    Galleria.loadTheme('galleria/themes/simplecoding/galleria.simplecoding.js');
    

 $('.box1').click(function() {

 if( screen.width <= 1000){
     console.log(''+screen.width  )

        $("#gallery").galleria({
            data_source: images,

            width: screen.width ,
            height: 350 ,
            
            clicknext: true
        });


}else {

    console.log(''+screen.width  )

    $("#gallery").galleria({
            data_source: images,
            width:  screen.width*0.7 ,
            height: screen.height*0.5 ,
            clicknext: true
        });

}




        return false;
    });

 


/*  
 
  $('.box1').click(function() {
        $("#gallery").galleria({
            data_source: images,
            width: 800,
            height: 500,
            clicknext: true
        });
        return false;
    });


     

    $('#openGallery').click(function() {
        $("#gallery").galleria({
            data_source: images,
            width: 800,
            height: 500,
            clicknext: true
        });
        return false;
    });

    
    */
	
    overlay.click(function() {
        gallery.css('display', 'none');
        overlay.css('display', 'none');
    });

 
 

});
