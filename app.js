var typed = new Typed('#element', {
    strings: ['Web Designer. ^800', 'Programmer. ^800', 'Engineer. ^800', 'Developer. ^800'],
    typeSpeed: 40, loop: true,
});

function sendEmail(){
    Email.send({
        Host : "smtp.gamil.com",
        Username : "mail.princekumar.0@gmail.com",
        Password : "password",
        To : 'mail.princekumar.0@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}