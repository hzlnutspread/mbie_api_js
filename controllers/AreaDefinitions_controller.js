import fetch from "node-fetch";
import * as url from "url";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const endpoint =
  "https://api.business.govt.nz/services/v1/tenancy-services/market-rent/area-definitions";
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    Accept: "application/json",
  },
};

export const getAreaDefinitions = async (req, res) => {
  console.log("Getting area definitions");
  try {
    const runAreaDefinitions = await fetch(endpoint, options);
    const areaDefinitions = await runAreaDefinitions.json();
    console.log(areaDefinitions);
    res.send(areaDefinitions);
  } catch (error) {
    console.log(error);
  }
};
