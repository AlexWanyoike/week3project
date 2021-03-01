function validate(event){
    
    let myForm = $('#myForm')
    let Name = $('#mce-FNAME').val();
    let Email = $('#mce-EMAIL').val();
    let Message = $('#mce-MESSAGE').val();

    if(Name=='' || Email=='' || Message==''){
        alert('Error! Kindly Fill all fields');
    }
    else{
        let link = 'https://gmail.us1.list-manage.com/subscribe/post?u=c870bb4abca93f5adc14be03c&amp;id=75d864dff8';
        myForm.attr('action', link);
        myForm.attr('method','post');
        let response =`Hey ${Name}, your message has been Received`;
        alert(response);
    }
}
///
$(document).ready(function(){
    $('.clickable-design').click(function(){
        $('#act').toggle();
        $('#view.details').toggle();
        $('#react').toggle();     
    });
}) 
$(document).ready(function(){
    $('.clickable-development').click(function(){
        $('#new').toggle();
        $('#view.dev').toggle();
        $('#old').toggle();     
    });
}) 
$(document).ready(function(){
    $('.clickable-project').click(function(){
        $('#mute').toggle();
        $('#view.project').toggle();
        $('#unmute').toggle();     
    });
}) 
///
$('.caraousel-caption').hoves(function(){
    $('.carousel',this).slideToggle('slow');
},function(){
    $('.caraousel',this).slideToggle('slow')
});














