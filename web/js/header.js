import { dataLinks } from "./database.js";

const links = document.getElementById("list-link");

dataLinks.forEach(
  (data) =>
    (links.innerHTML += `
      <li>
        <a href='#${data.link}'>${data.title}<a/>
      </li>
  `)
);
