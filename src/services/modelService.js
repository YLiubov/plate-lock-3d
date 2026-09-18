const API_BASE = "/api";
const API_URL = `${import.meta.env.BASE_URL.replace(/\/$/, "")}${API_BASE}`;
const BEARER_TOKEN = "demo-token-12345";
const MODEL_ENDPOINTS = {
  base: "/models/base.glb",
  adapter: "/models/adapter.glb"
};

const requestHeaders = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${BEARER_TOKEN}`
};

export function fetchModels(params = {}) {
  const query = new URLSearchParams(params).toString();
  const url = `${API_URL}/models.json${query ? "?" + query : ""}`;

  return fetch(url, {
    method: "GET",
    headers: requestHeaders
  }).then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });
}

export function saveConfig(config) {
  return fetch(`${API_URL}/config.json`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(config)
  }).then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });
}
