    // sticky-nav
    $(window).on('scroll',function(){

        // if($(window).scrollTop()>200){
        //     $(".nav").addClass("nav-stick")
        // }else{
        //     $(".nav").removeClass("nav-stick")
        // }
        
        
        //  to-top-events
        if($(window).scrollTop()>400){
        $(".to-top").fadeIn()
        }else{
            $(".to-top").fadeOut()
        }
        })
        $(".to-top").click(function(){
        $('html,body').animate({
             scrollTop:0
        })
        })
        $(".foot-prof").click(function(){
        $('html,body').animate({
             scrollTop:0
        })
        })
        $(".top").click(function(){
        $('html,body').animate({
             scrollTop:0
        })
        })
        
        
        // animated headlines
        $('.cont-box1').animatedHeadline({
        animationType: "rotate-1",
        animationDelay: 2500,
        barAnimationDelay: 3800,
        barWaiting: 800,
        lettersDelay: 50,
        typeLettersDelay: 150,
        selectionDuration: 500,
        typeAnimationDelay: 1300,
        revealDuration: 600,
        revealAnimationDelay: 1500
        });
        
        
        
        // drop-down
        $(".d-bt").click(function(){
        $(".def").slideToggle()
        })
        
        //  testimotional-slider
        
        $(document).ready(function(){
        $(".test-cont").slick({
        dots:true
        });
        });
        
        //  for-buy-the-resume
        $("#buy").click(function(){
        $("#buynw").fadeIn(1000)
        $(".buynw-back").fadeIn(1000)
        })
        
        $("#back").click(function(){
        $("#buynw").fadeToggle(1000)
        $(".buynw-back").fadeToggle(1000)
        })
        
        
        // selective-resume-content
        // Show the first tab and hide the rest
        $('.r-opt li:first-child').addClass('active');
        $('.resume-cont').hide();
        $('.resume-cont:first').show();
        
        // Click function
        $('.r-opt li').click(function(){
        $('.r-opt li').removeClass('active');
        $(this).addClass('active');
        $('.resume-cont').hide();
        
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
        });
        
        // sidepannel
        $(".prof-pic").click(function(){
        $(".side-bar").fadeToggle(500)
        })
        $("#s-back").click(function(){
        $(".side-bar").fadeToggle(500)
        })
        
        
        //  theme
        $("#light").click(function(){
        (body).css("Background-Color","white")
        })
        
        
        
        var cursor = document.querySelector('.cursor');
        var cursorinner = document.querySelector('.cursor2');
        var a = document.querySelectorAll('a');
        
        document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
        });
        
        document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
        });
        
        document.addEventListener('mousedown', function(){
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover')
        });
        
        document.addEventListener('mouseup', function(){
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
        });
        
        a.forEach(item => {
        item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        });
        })






        // --------------------------contact form


        /*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
e.preventDefault()

/** ETAPE POUR CONNECTER EMAILJS AU FORMULAIRE DE CONTACT
* 1. https://www.emailjs.com - Sign In our Sign Up
* 2. "Email Services" => "Add New Service" => "Gmail" for example 
* 3. "Connect Account" => "Create Service" => Copy the "Service ID"
* 4. "Email Templates" => "Create New Template" 
* Subject *
New message from {{user_name}}
Content *
    Names: {{user_name}}

    Email: {{user_email}}

    Subject: {{user_subject}}

    Message: {{user_message}}

    Best wishes,
    EmailJS team
* => "Settings" => copy "Template ID
* 5. "Integration" => "Copy the Form ID" in html page
* 6. "API KEYS" => "Account" => "Create Key" => "Copy the Public Key"
* 7. serviceID - templateID - #form - publicKey
*/
emailjs.sendForm('', '', '#contact-form', '')
.then(() => {
    // Affiche le message de réussite d'envoi du message
    contactMessage.textContent = 'Message sent successfully ✅'

    // Supprime le message après cinq secondes
    setTimeout(() => {
        contactMessage.textContent = ''
    }, 5000)

    // Efface les champs de saisie après l'envoi du message
    contactForm.reset()
}, () => {
    // Affiche un message d'erreur d'envoi du message en cas de problème avec le service
    contactMessage.textContent = 'Message not sent (service error) ❌'
})
}
contactForm.addEventListener('submit', sendEmail)

        
        