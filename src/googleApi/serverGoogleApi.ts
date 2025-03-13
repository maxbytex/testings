// import { Billing } from "./../api/billing/billingModel";
// import { BillingService } from "@/api/billing/billingService";
// import { Provider } from "@/api/provider/providerModel";
// import { ProviderService } from "@/api/provider/providerSevice";
// import { Base64 } from "js-base64";
// import { SourceType } from "./source";

// const pdfParse = require("pdf-parse");

// const { google } = require("googleapis");

// // const oauth2Client = new google.auth.OAuth2(
// //   process.env.GOOGLE_CLIENT_ID,
// //   process.env.GOOGLE_CLIENT_SECRET,
// //   process.env.OOGLE_REDIRECT_URI
// // );

// oauth2Client.setCredentials({
//   refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
// });

// async function getEmails() {
//   try {
//     const gmail = google.gmail({ version: "v1", auth: oauth2Client });

//     const {
//       data: { messages },
//     } = await gmail.users.messages.list({
//       userId: "me",
//       q: "is:unread in:inbox",
//     });

//     if (!messages || messages.length === 0)
//       return console.log("No messages found.");

//     for (const { id } of messages) {
//       const {
//         data: {
//           payload: { parts },
//         },
//       } = await gmail.users.messages.get({ userId: "me", id });
//       fetchAttachments(parts, id);
//     }

//     return messages;
//   } catch (err) {
//     console.error("Error retrieving emails:", err);
//   }
// }

// async function fetchAttachments(parts: any[], messageId: any) {
//   try {
//     parts?.forEach((part: any) => {
//       if (part.filename && part.body.attachmentId) {
//         getAttachment(messageId, part.body.attachmentId);
//       }

//       if (part.parts && part.parts.length > 0) {
//         fetchAttachments(part.parts, messageId);
//       }
//     });
//   } catch (err) {
//     console.error("Error processing attachments:", err);
//   }
// }

// async function getAttachment(messageId: number, attachmentId: number) {
//   try {
//     const gmail = google.gmail({ version: "v1", auth: oauth2Client });

//     const res = await gmail.users.messages.attachments.get({
//       userId: "me",
//       messageId: messageId,
//       id: attachmentId,
//     });

//     const attachmentData = res.data.data;
//     const buffer = Buffer.from(attachmentData, "base64");
//     processAttachmentCreateBilling(buffer);
//   } catch (err) {
//     console.error("Error downloading attachment:", err);
//   }
// }

// const processAttachmentCreateBilling = async (buffer: any) => {
//   extractTotal(buffer)
//     .then((response) => {
//       if (response) {
//         return extractProviderName(response.pdfText, response.largestNumber);
//       }
//     })
//     .then((billingData) => {
//       if (billingData) {
//         const newBilling: Billing = {
//           providerId: billingData.providerId,
//           createdAt: new Date(),
//           name: billingData.providerName,
//           source: SourceType.ATTACHMENT,
//           total: billingData.totalAmount,
//         };

//         createBilling(newBilling);
//       }
//     });
// };

// async function extractProviderName(pdfText: string, totalAmount: number) {
//   let providers: Provider[] = await fetchProviders();
//   let providerName: string = "";
//   let providerId: number = 0;

//   providers.forEach((provider) => {
//     const escapedProviderName = provider.name.replace(
//       /[.*+?^${}()|[\]\\]/g,
//       "\\$&"
//     );
//     const regex = new RegExp(escapedProviderName, "gi");

//     const match = pdfText.match(regex);
//     if (match) {
//       providerName = match[0];
//       providerId = provider.id;
//     }
//   });

//   return {
//     providerName: providerName,
//     providerId: providerId,
//     pdfText: pdfText,
//     totalAmount: totalAmount,
//   };
// }

// async function extractTotal(buffer: any) {
//   try {
//     const data = await pdfParse(buffer);
//     const pdfText = data.text;
//     const regex = /\d+[\.,]?\d*\s?€/g;
//     const matches = pdfText.match(regex);

//     if (matches && matches.length > 0) {
//       const numbers = matches.map((match: string) => {
//         let numberStr = match.replace(/[€\s]/g, "");

//         if (numberStr.includes(",")) {
//           numberStr = numberStr.replace(",", ".");
//         }

//         return parseFloat(numberStr);
//       });
//       const largestNumber = Math.max(...numbers);

//       return { largestNumber: largestNumber, pdfText: pdfText };
//     }
//   } catch (err) {
//     console.error("Error processing PDF:", err);
//     return null;
//   }
// }

// async function createBilling(billing: Billing) {
//   const billingService = new BillingService();

//   const serviceResponse = await billingService.createBilling(billing);
//   // sendMail(newBilling);

//   return serviceResponse;
// }

// async function fetchProviders() {
//   const providerService = new ProviderService();
//   const serviceResponse = await providerService.getAllProviders();
//   const providers: Provider[] = serviceResponse.responseObject || [];
//   return providers;
// }

// export async function processFileGoogle() {
//   await getEmails()
//     .then((resp) => {
//       deleteEmail(resp);
//     })
//     .then(() => {
//       processEmails();
//     });
// }

// async function deleteEmail(messages: string[]) {
//   try {
//     if (messages) {
//       const gmail = google.gmail({ version: "v1", auth: oauth2Client });
//       messages.map((m: any) => {
//         gmail.users.messages.trash({ userId: "me", id: m.id });
//       });
//     }
//   } catch (err) {
//     console.error("Error deleting emails:", err);
//   }
// }

// async function processEmails() {
//   const gmail = google.gmail({ version: "v1", auth: oauth2Client });

//   const {
//     data: { messages },
//   } = await gmail.users.messages.list({
//     userId: "me",
//     q: "is:unread in:inbox",
//   });

//   if (!messages) {
//     return;
//   }
//   const providers: Provider[] = await fetchProviders();
//   const billingService = new BillingService();
//   let newBillings: Billing[] = [];

//   for (const message of messages) {
//     const res = await gmail.users.messages.get({
//       userId: "me",
//       id: message.id,
//     });

//     const email = res.data;
//     const payload = email.payload;
//     let emailBody = "";

//     if (payload.parts) {
//       for (const part of payload.parts) {
//         if (part.mimeType === "text/plain" && part.body?.data) {
//           emailBody = Base64.decode(
//             part.body.data.replace(/-/g, "+").replace(/_/g, "/")
//           );
//           break;
//         }
//       }
//     } else if (payload.body?.data) {
//       // Process single-part messages
//       emailBody = Base64.decode(
//         payload.body.data.replace(/-/g, "+").replace(/_/g, "/")
//       );
//     }

//     providers.forEach(async (provider) => {
//       const regex = new RegExp(provider.body_regex, "g");
//       const emailRegex = new RegExp(provider.email, "g");

//       const amountMatch = emailBody.match(regex);
//       const emailMatch = emailBody.match(emailRegex);

//       if (
//         amountMatch &&
//         emailMatch &&
//         emailRegex &&
//         emailMatch[0] !== "" &&
//         emailMatch[0] === provider.email
//       ) {
//         console.log("Amount match: ", amountMatch);
//         console.log("Email match: ", emailMatch);
//         console.log("Provider email: ", provider.email);
//         console.log(emailMatch[0] === provider.email);
//         const formatToNumber = Number(
//           amountMatch[0].replace(/,/g, ".").replace("€", "")
//         );

//         newBillings.push({
//           providerId: provider.id,
//           total: formatToNumber,
//           name: provider.name,
//           createdAt: new Date(),
//           source: SourceType.BODY,
//         });
//       }
//     });
//   }
//   await billingService.createBillings(newBillings);
// }
