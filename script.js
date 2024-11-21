document.addEventListener('DOMContentLoaded', function() {
    
    var emailCopyDiv = document.getElementById('email-copy');
    
    
    var emailAddress = '+358 44 2455457'; 

    emailCopyDiv.addEventListener('click', function() {
       
        var textarea = document.createElement('textarea');
        textarea.value = emailAddress;
        document.body.appendChild(textarea);

        
        textarea.select();
        document.execCommand('copy');

       
        document.body.removeChild(textarea);

      
        document.querySelector('.numbe1').innerHTML = 'Copied';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    
    var phoneCopyDiv = document.getElementById('phone-copy');
    
    
    var phoneNumber = 'kaido.agency@gmail.com'; 

    phoneCopyDiv.addEventListener('click', function() {
        
        var textarea = document.createElement('textarea');
        textarea.value = phoneNumber;
        document.body.appendChild(textarea);

        
        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);


        document.querySelector('.numbe2').innerHTML = 'Copied';
    });
});



