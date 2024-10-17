import { createTransport } from "nodemailer";

const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export default async function sendEmail(receiverMail, subject, body) {
    const response = await transporter.sendMail({
        from: `"iSecure Admin" <${process.env.SMTP_USER}>`,
        to: receiverMail,
        subject: subject,
        html: body
    });

    if (response.messageId) {
        return true;
    } else {
        return false;
    }
}