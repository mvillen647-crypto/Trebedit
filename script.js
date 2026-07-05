let apiKey = "";

async function generateKey() {
  const res = await fetch("https://tnet-nine.vercel.app/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();

  apiKey = data.apiKey;

  document.getElementById("apiKey").innerText = apiKey;
}

async function testAPI() {
  const imageUrl = document.getElementById("imageUrl").value;

  const res = await fetch("https://tnet-nine.vercel.app/api/image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey
    },
    body: JSON.stringify({ imageUrl })
  });

  const data = await res.json();

  document.getElementById("result").innerText =
    JSON.stringify(data, null, 2);
}
