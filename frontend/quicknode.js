const quickNodeUrl = "https://alien-long-asphalt.ethereum-goerli.discover.quiknode.pro/9ecaa55061b5a3ac2199546e8134d7f6f99671da/";

async function fetchData() {
  try {
    const response = await fetch(quickNodeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "<ETH_METHOD>", // Replace with the Ethereum method you want to call
        params: [], // Replace with the parameters for the Ethereum method you are calling
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data from QuickNode", error);
  }
}

fetchData();
