function ucfirst(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getPeriods(json) {
  const periods = new Set();

  json.forEach(function (value) {
    for (const key in value.timeframes) {
      periods.add(key);
    };
  });

  return periods;
}

function getBackgroundColor(activity) {
  if (activity.toLowerCase().includes("work")) return "var(--activity-work)";
  if (activity.toLowerCase().includes("play")) return "var(--activity-play)";
  if (activity.toLowerCase().includes("study")) return "var(--activity-study)";
  if (activity.toLowerCase().includes("exercise")) return "var(--activity-exercise)";
  if (activity.toLowerCase().includes("social")) return "var(--activity-social)";
  if (activity.toLowerCase().includes("self care")) return "var(--activity-selfcare)";
  return "var(--activity)";
}

function getBackgrounImage(activity) {
  if (activity.toLowerCase().includes("work")) return "url('./images/icon-work.svg')";
  if (activity.toLowerCase().includes("play")) return "url('./images/icon-play.svg')";
  if (activity.toLowerCase().includes("study")) return "url('./images/icon-study.svg')";
  if (activity.toLowerCase().includes("exercise")) return "url('./images/icon-exercise.svg')";
  if (activity.toLowerCase().includes("social")) return "url('./images/icon-social.svg')";
  if (activity.toLowerCase().includes("self care")) return "url('./images/icon-self-care.svg')";
  return "unset";
}

function getPreviousLabelByPeriod(period) {
  if (period.toLowerCase().includes("daily")) return "Yesterday";
  if (period.toLowerCase().includes("weekly")) return "Last Week";
  if (period.toLowerCase().includes("monthly")) return "Last Month";
  return "Previous";
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function createElementFromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  const result = div.firstChild;
  div.remove();
  return result;
}

function createStringFromNode(node) {
  var div = document.createElement("div");
  div.appendChild(node);
  const result = div.innerHTML;
  div.remove();
  return result;
}

const navigationList = document.querySelector("#navigation-list");
const main = document.querySelector("main");
let currentPeriod = null;

function activatePeriod(period) {
  navigationList.querySelectorAll('li').forEach(function(node) {
    node.classList.remove('active');
  });
  navigationList.querySelector(`li#tab-${period}`).classList.add('active');

  main.querySelectorAll('section').forEach(function(node) {
    node.classList.remove('active');
  })
  main.querySelector(`section#${period}`).classList.add('active');
}

document.addEventListener("DOMContentLoaded", async function (event) {
  try {
    const getAll = await Promise.allSettled([
      fetch("data.json").then((response) => response.json()),
      fetch("./images/icon-ellipsis.svg").then((response) => response.text()),
    ]);
 
    const result = getAll[0].value;
    const strIconEllipsis = getAll[1].value;

    const icon = createElementFromHTML(strIconEllipsis);
    icon.querySelector("path").setAttribute("fill", "currentColor");
    
    const periods = getPeriods(result);
    currentPeriod = [...periods][1];

    periods.forEach(function(period) {
      navigationList.innerHTML += `
        <li id="tab-${period}" class="${period == currentPeriod ? 'active' : ''}">
          <a href="#" onClick="activatePeriod('${period}')">${ucfirst(period)}</a>
        </li>
      `;
    });

    const sections = {};

    result.forEach(function(value) {
      for (const period in value.timeframes) {
        if (!(period in sections)) {
          sections[period] = [];
        }

        const article = `
          <article style="background-color: ${ getBackgroundColor(value.title) }; background-image: ${ getBackgrounImage(value.title) };">
            <div class="content-wrapper">
              <div class="content-header">
                <h3>${value.title}</h3>
                <span class="icon-ellipsis">${createStringFromNode(icon)}</span>
              </div>
              <div class="content-body">
                <p>${value.timeframes[period].current}hrs</p>
                <p>${getPreviousLabelByPeriod(period)} - ${value.timeframes[period].previous}hrs</p>
              </div>
            </div>
          </article>
        `;

        sections[period].push(article);
      };

    });
  
    for (const period in sections) {
      console.log("period " + period)
      
      const sectionHtml = `
        <section id="${period}" class="${ period == currentPeriod ? 'active' : '' }" >
          ${sections[period].join("")}
        </section>
      `;

      main.innerHTML += sectionHtml;
    };

  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    console.info("DOM Content Loaded");
  }
});


