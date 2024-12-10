const emailjs = require("@emailjs/browser")



export async function sendEmail(serviceID, templateID, templateParams) {
    await emailjs.send(serviceID, templateID, templateParams);
}

