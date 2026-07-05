let apiKey = "";

function saveKey() {
  apiKey = document.getElementById("apiKeyInput").value;

  localStorage.setItem("tnet_key", apiKey);

  alert("API Key saved!");

  loadUsage();
}

async function loadUsage() {
  const key = localStorage.getItem("tnet_key");

  if (!key) return;

  const res = await fetch("https://tnet-nine.vercel.app/api/image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key
    },
    body: JSON.stringify({
      imageUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
    })
  });

  const data = await res.json();

  document.getElementById("usage").innerText =
    "System active ✔";
}

async function analyzeImage() {
  const key = localStorage.getItem("tnet_key");
  const imageUrl = document.getElementById("imageUrl").value;

  const res = await fetch("https://tnet-nine.vercel.app/api/image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key
    },
    body: JSON.stringify({ imageUrl })
  });

  const data = await res.json();

  document.getElementById("result").innerText =
    JSON.stringify(data, null, 2);
}
