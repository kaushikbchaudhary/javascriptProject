function onFormSubmit() {
  let formData = readFormData();
  insertNewRecord(formData);
  resetForm();
}

function readFormData() {
  let formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["empCode"] = document.getElementById("empCode").value;
  formData["city"] = document.getElementById("city").value;
  console.log(formData);
  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.empCode;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.fullName;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.city;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("city").value = "";
}
