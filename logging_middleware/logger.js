// const axios = require("axios");

// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJydWZpbmEubTIwMjJAdml0c3R1ZGVudC5hYy5pbiIsImV4cCI6MTc3ODkyODQ0OSwiaWF0IjoxNzc4OTI3NTQ5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiODA4NmNiZmEtYmU3Yy00ZWI4LTgwOWItYjQ5ZGMxZGJhNjhkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicnVmaW5hIG0iLCJzdWIiOiJiMTM2OWI4MC1lNjVmLTQxYWUtYmRhNC01MWVmMzcyYzY0OWQifSwiZW1haWwiOiJydWZpbmEubTIwMjJAdml0c3R1ZGVudC5hYy5pbiIsIm5hbWUiOiJydWZpbmEgbSIsInJvbGxObyI6IjIybWljMDAxOSIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6ImIxMzY5YjgwLWU2NWYtNDFhZS1iZGE0LTUxZWYzNzJjNjQ5ZCIsImNsaWVudFNlY3JldCI6IldaYkVnZGhWemV3dUdtQ1YifQ.YxI_qzu0RhmBERkesc_9hpUdvg1w_SHX4cDXWiMKAjQ";

// async function Log(stack, level, packageName, message) {
//   try {
//     const response = await axios.post(
//       "http://4.224.186.213/evaluation-service/logs",
//       {
//         stack: stack,
//         level: level,
//         package: packageName,
//         message: message,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       },
//     );

//     console.log("Log sent successfully");
//     return response.data;
//   } catch (error) {
//     console.error("Logging failed");

//     if (error.response) {
//       console.error(error.response.data);
//     } else {
//       console.error(error.message);
//     }
//   }
// }

// module.exports = Log;

require("dotenv").config();

const axios = require("axios");

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log(error.response?.data);
  }
}

module.exports = Log;
