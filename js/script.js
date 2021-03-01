function validate(event){
    event.preventDefault();
    let myForm = $('#myForm')
    let name = $('name').val();
    let email = $('email').val();
    let message = $('message').val();

    if(name=='' || email=='' || message==''){
        nameInput.addclass('error')
        alert('Error! Kindly Include all fields')
        return('false')
    }
    else{
        let link =
        myForm.attr('action', link)
        myForm.attr('method','post')
        let response =`Hey ${name}, your message has been Received`
        alert(response)
    }
}

$(document).ready(function(){
    $('.clickable-design').click(function(){
        $('#act').toggle();
        $('#view.details').toggle();
        $('#react').toggle();     
    })
}) 


