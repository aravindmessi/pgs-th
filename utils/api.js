const hostname = window.location.hostname;

export const API_BASE_URL =
  hostname === "localhost" || hostname === "127.0.0.1"
    ? "http://localhost:5000"
    : "https://pgs-th.onrender.com";  // <-- YOUR RENDER BACKEND URL
