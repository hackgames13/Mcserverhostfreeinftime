const keep_alive = require('./keep_alive.js');

async function loopRequests() {
  while (true) {
    try {
      await fetch("https://www.mcserverhost.com/api/servers/" + process.env['server'] + "/subscription", {
        headers: {
          "accept": "*/*",
          "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
          "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Google Chrome\";v=\"138\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          "cookie": process.env['cookie'],
          "Referer": "https://www.mcserverhost.com/api/servers/" + process.env['server'] + "/dashboard"
        },
        method: "POST"
      });
    } catch (err) {
      console.error("Request failed:", err);
    }

    // Delay between 10 and 15 minutes
    const delay = (10 + Math.random() * 5) * 60 * 1000;
    await new Promise(resolve => setTimeout(resolve, delay));
  }
}

loopRequests();
