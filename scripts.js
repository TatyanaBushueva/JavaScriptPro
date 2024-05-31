const newReport = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  const newData = {
    prod: document.getElementById("productText").value,
    report: document.getElementById("reportText").value,
  };
  if (data?.length) {
    data.push(newData);
  } else {
    data = [newData];
  }
  localStorage.setItem("data", JSON.stringify(data));
  window.location = "/";
};

const createReportItem = ({ prod, report }) => {
  let container = document.createElement("div");
  container.className = "report-box";
  let title = document.createElement("h5");
  title.innerText = prod;
  title.className = "title";
  let description = document.createElement("p");
  description.innerText = report;
  description.className = "description";
  container.appendChild(title);
  container.appendChild(description);
  document.getElementById("report-list-container").appendChild(container);
};

const setEmptyReportList = () => {
  let msg = document.createElement("h2");
  msg.innerHTML = "Нет отзывов";
  document.getElementById("report-list-container").appendChild(msg);
};

const loadReports = () => {
  let data = localStorage.getItem("data");
  if (data) {
    JSON.parse(data).map((el) => {
      createReportItem(el);
    });
  } else {
    setEmptyReportList();
  }
};
