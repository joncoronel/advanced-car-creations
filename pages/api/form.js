import sendgrid from "@sendgrid/mail";

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);
  try {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    // console.log("REQ.BODY", req.body);
    await sendgrid
      .send({
        to: "jonny555333@gmail.com", // Your email where you'll receive emails
        from: "joncorone@gmail.com", // your website email address here
        subject: "Lead from website",
        html: `      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${body.name}, their email is: ✉️ ${body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${body.message}</p>
              <br>
              </div>
              
              </div>
      </body>`,
      })
      .then(() => {
        console.log("Email sent");
      });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  // Guard clause checks for first and last name,
  // and returns early if they are not found

  // Found the name.
  // Sends a HTTP success code
  return res.status(200).json({ error: "" });
}
