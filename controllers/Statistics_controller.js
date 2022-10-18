import path from "path";
import fetch from "node-fetch";
import * as url from "url";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const endpoint =
  "https://api.business.govt.nz/services/v1/tenancy-services/market-rent/statistics";

const monthlyUrl =
  "?period-ending=2022-08&num-months=1&area-definition=REGC2019&include-aggregates=true";

const quarterlyUrl =
  "?period-ending=2021-06&num-months=3&area-definition=TA2019&include-aggregates=true";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    Accept: "application/json",
  },
};

export const getStatisticsOptions = (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/chooseStat.html"));
};

export const getMonthlyStatistics = async (req, res) => {
  console.log("Getting monthly data");
  try {
    const runMonthlyStatistics = await fetch(endpoint + monthlyUrl, options);
    const monthlyData = await runMonthlyStatistics.json();
    res.send(monthlyData);
  } catch (error) {
    console.log(error);
  }
};

export const getQuarterlyStatistics = async (req, res) => {
  console.log("Getting quarterly data");
  try {
    const runQuarterlyStatistics = await fetch(
      endpoint + quarterlyUrl,
      options
    );
    const quarterlyData = await runQuarterlyStatistics.json();
    console.log(quarterlyData);
    res.send(quarterlyData);
  } catch (error) {
    console.log(error);
  }
};
