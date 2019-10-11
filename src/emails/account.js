const sgMail = require ('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send ({
        to: email,
        from: 'vijay@task-app.com',
        subject: "Welcome To the Task App",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
        
    })
}

const sendCancellationEmail = (email, name) =>{
    sgMail.send ({
        to: email,
        from: 'vijay@task-app.com',
        subject: "Sorry to see you Go",
        text: `Good bye ${name}, Hope to see you back sometime soo.`
        
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}




