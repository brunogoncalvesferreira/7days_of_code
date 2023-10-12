import { dataMetrics } from "./database.js";
const metrics = document.getElementById("metrics");

dataMetrics.forEach(
  (metric) =>
    (metrics.innerHTML += `
    <div id="card-metric">
      <strong>${metric.number}</strong>
      <h3>${metric.title}</h3>
      <p>${metric.description}</p>
    </div>
  `)
);
