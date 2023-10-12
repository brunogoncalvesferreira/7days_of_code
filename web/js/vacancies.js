import { dataJobs } from "./database.js";

const jobsContainer = document.getElementById("jobs");

const data = dataJobs
  .map((item) => {
    return `
    <div id="card-role">
      <h4>${item.specialization}</h4>
      ${item.role
        .map(
          (item) =>
            `<div id="card-info">
          <h5>${item.title}</h5>
          <div id="card-info-role">
            <span>${item.fullTime}</span>
            <span>${item.salaryRange}</span>
          </div>
         </div>
        `
        )
        .join("")}
    </div>
  `;
  })
  .join("");

jobsContainer.innerHTML += data;
