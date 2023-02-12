import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    //console.log("REQ: ", req);
    await sendgrid.send({
      to: "tinoreyna1984@gmail.com",
      from: "tinoreyna1984@gmail.com",
      subject: "Nuevo mensaje",
      html: `<!DOCTYPE html>
      <html
        lang="en"
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
      >
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="x-apple-disable-message-reformatting" />
          <title></title>
          <!--[if mso]>
            <noscript>
              <xml>
                <o:OfficeDocumentSettings>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
              </xml>
            </noscript>
          <![endif]-->
          <style>
            table,
            td,
            div,
            h1,
            p {
              font-family: Arial, sans-serif;
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0">
          <table
            role="presentation"
            style="
              width: 100%;
              border-collapse: collapse;
              border: 0;
              border-spacing: 0;
              background: #ffffff;
            "
          >
            <tr>
              <td align="center" style="padding: 0">
                <table
                  role="presentation"
                  style="
                    width: 602px;
                    border-collapse: collapse;
                    border: 1px solid #cccccc;
                    border-spacing: 0;
                    text-align: left;
                  "
                >
                  <tr>
                    <td
                      align="center"
                      style="padding: 40px 0 30px 0; background: #e9e9e9"
                    >
                      <p
                        style="
                          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                          font-size: 3.5rem;
                        "
                      >
                        TinexLab
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 36px 30px 42px 30px">
                      <table
                        role="presentation"
                        style="
                          width: 100%;
                          border-collapse: collapse;
                          border: 0;
                          border-spacing: 0;
                        "
                      >
                        <tr>
                          <td style="padding: 0 0 36px 0; color: #153643">
                            <h1
                              style="
                                font-size: 24px;
                                margin: 0 0 20px 0;
                                font-family: Arial, sans-serif;
                              "
                            >
                              Nuevo mensaje de ${req.body.email}:
                            </h1>
                            <p
                              style="
                                margin: 0 0 12px 0;
                                font-size: 16px;
                                line-height: 24px;
                                font-family: Arial, sans-serif;
                              "
                            >
                              ${req.body.message}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px; background: #e9e9e9">
                      <table
                        role="presentation"
                        style="
                          width: 100%;
                          border-collapse: collapse;
                          border: 0;
                          border-spacing: 0;
                          font-size: 9px;
                          font-family: Arial, sans-serif;
                        "
                      >
                        <tr>
                          <td style="padding: 0; width: 50%" align="left">
                          <p
                            style="
                            margin: 0;
                            font-size: 14px;
                            line-height: 16px;
                            font-family: Arial, sans-serif;
                            color: #000000;
                          "
                        >
                          TinexLab &copy;
                          ${new Date().getFullYear()}
                          <br />
                        </p>
                          </td>
                          <td style="padding: 0; width: 50%" align="right">
                            <table
                              role="presentation"
                              style="
                                border-collapse: collapse;
                                border: 0;
                                border-spacing: 0;
                              "
                            >
                              <tr>
                                <td style="padding: 0 0 0 10px; width: 38px">
                                  <a
                                    href="https://twitter.com/tinoreyna1984"
                                    style="color: #000000; text-decoration: none; font-size: 0.8rem;"
                                    >Twitter</a>
                                </td>
                                <td style="padding: 0 0 0 10px; width: 38px">
                                  <a
                                    href="https://www.facebook.com/tinoreyna1984"
                                    style="color: #000000; text-decoration: none; font-size: 0.8rem;"
                                    >Facebook</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
        `,
    });
    return res.status(200).json({ error: "" });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
