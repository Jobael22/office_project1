async function callAPi() {
  let result = await fetch("http://192.168.1.231:8051/odata/Machines");
  result = await result.json();
  console.warn(result);
  document.getElementById("machinesData").innerHTML = result.value
    .map(
      (value) =>
        `<tr>
        <td>${value.id}</td>
        <td>${value.hall_id}</td>
        <td>${value.machine_group_id}</td>
        <td>${value.cost_center_id}</td>
        <td>${value.custom_id}</td>
        </tr>`
    )
    .join("");
}
callAPi();
function myFunction() {
  let x = document.getElementById("div1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

async function callAPi2() {
  let result = await fetch("http://192.168.1.231:8051/odata/");
  result = await result.json();
  console.warn(result);
  document.getElementById("Data").innerHTML = result.value
    .map(
      (value) =>
        `<tr>
          <td>${value.name}</td>
          <td>${value.kind}</td>
          <td>${value.url}</td>
          </tr>`
    )
    .join("");
}
callAPi2();
function myFunction2() {
  let x = document.getElementById("div2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
