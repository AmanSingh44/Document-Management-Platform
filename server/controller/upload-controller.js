const nodemailer = require("nodemailer");
const puppeteer = require("puppeteer");
const dotenv = require("dotenv");

dotenv.config();

// Nodemailer configuration for sending emails
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// Express route for file upload
const uploadDocument = async (req, res) => {
  try {
    const { file } = req;
    // Validate file type (HTML)
    if (!file || !file.originalname.endsWith(".html")) {
      throw new Error("Invalid file type. Please upload an HTML file.");
    }

    // Convert HTML to PDF using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(req.file.buffer.toString(), {
      waitUntil: "networkidle0",
    });
    const pdfBuffer = await page.pdf();
    await browser.close();

    // Send confirmation email with PDF attachment
    // await transporter.sendMail(mailOptions);
    await transport.sendMail({
      from: process.env.FROM,
      to: process.env.TO,
      subject: "Document uploaded",
      html: `
      <h1>Successfully Uploaded and converted to pdf</h1>
      <p>Your document was uploaded and converted to a pdf format using puppeteer.You can find the pdf in the attahment</p>
      `,
      attachments: [
        {
          filename: "document.pdf",
          content: pdfBuffer,
        },
      ],
    });

    // Respond to the client
    res
      .status(200)
      .send("File uploaded successfully and confirmation email sent.");
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send("Error processing the file and sending confirmation email.");
  }
};

module.exports = { uploadDocument };
