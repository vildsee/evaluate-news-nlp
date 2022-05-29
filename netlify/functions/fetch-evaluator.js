//import { data } from "../../src/client/js/formHandler";
const axios = require("axios");

const handler = async (event) => {
  const { formData } = event.queryStringParameters;

  const meaningCloudUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${formData}&lang=en`;

  try {
    const { data } = await axios.get(meaningCloudUrl);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
