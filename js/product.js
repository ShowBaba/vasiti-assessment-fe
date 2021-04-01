const viewEntriesBtn = document.querySelector("#view-diary-btn");
const container = document.querySelector(".entry-container");

const getProduts = async () => {
  const headers = new Headers();
  let url = "https://avios0-api.herokuapp.com/api/v1/product";
  headers.append("Content-Type", "application/json");
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    let json = await response.json();
    console.log(json);
    let products = json.products;
    // console.log(`RESULT === ${products}`);
    products.forEach((product) => {
      let element = document.createElement("div");
      element.className = "card diary-data";
      element.innerHTML = JSON.stringify(product);
      container.appendChild(element);
    });
  } catch (error) {
    console.log(error);
  }
};
window.onload = getProduts;
