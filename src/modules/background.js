import axios from "axios";

async function getBackground() {
    const apiKey2 = "sPo70hc9bDS9HVr5I0Yu9z2U5jCsDXSZ4D6_jY7efi4";
    const url2 = `https://api.unsplash.com/photos/?client_id=${apiKey2}`;

    try {
      const response = await axios.get(url2);
      console.log("Background successfully fetched.");
    } catch (error) {
      console.log("Background was not fetched: " + error);
    }
}

getBackground()