let selectedRow = null;
// let arr = [];
function onFormSubmit() {
  if (validate()) {
    let formData = readFormData();
    if (selectedRow == null) {
      insertNewRecord(formData);
    } else {
      updateRecord(formData);
    }
    resetForm();
    sorting();
  }
}

function readFormData() {
  let formData = {};
  formData.empCode = document.getElementById("empCode").value;
  formData.fullName = document.getElementById("fullName").value;
  formData.email = document.getElementById("email").value;
  formData.city = document.getElementById("city").value;
  // console.log(formData);
  // arr.push(formData.empCode);
  // console.log(arr);
  return formData;
}

// function sorting() {
//   let data = readFormData(); // read form data
//   let arr1 = [];
//   arr1.push(insertNewRecord(data)); // does inset value into table
//   console.log(`arr1: ${arr1}`);
// }
function insertNewRecord(data) {
  console.log(
    document.getElementById("employeeList").getElementsByTagName("tbody")[0]
  );
  let table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  // console.log(table.length);
  // for(let data of table.length)
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.empCode;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.fullName;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<a onClick="onEdit(this)">Update</a>
  <a onClick="onDelete(this)">Delete</a>`;
  console.log(this);
  console.log(table.length);
}

function resetForm() {
  document.getElementById("empCode").value = "";
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document;
  document.getElementById("empCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.empCode;
  selectedRow.cells[1].innerHTML = formData.fullName;
  selectedRow.cells[2].innerHTML = formData.email;
  selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function validate() {
  isValid = true;
  if (document.getElementById("empCode").value == "") {
    isValid = false;
    document.getElementById("empCodeValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("empCodeValidationError")
        .classList.contains("hide")
    )
      document.getElementById("empCodeValidationError").classList.add("hide");
  }
  return isValid;
}

// function sort() {}
const row = document.querySelector("tbody").value;
const tableData = [{}];
