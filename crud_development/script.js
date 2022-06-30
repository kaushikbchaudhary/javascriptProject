let selectedRow = null;
let duplication = false;
let empId = [];
let vali = "";
function onFormSubmit() {
  if (duplicationValidation()) {
    if (validate()) {
      let formData = readFormData();
      if (selectedRow == null) {
        insertNewRecord(formData);
      } else {
        updateRecord(formData);
      }
      resetForm();
      console.log(empId);
    }
  }
}

function duplicationValidation(forDuplication) {
  const formData = readFormData();

  if (empId.includes(formData.empCode)) {
    document.getElementById("empCodeDuplicationError").classList.remove("hide");
    return false;
  } else {
    document.getElementById("empCodeDuplicationError").classList.add("hide");
    empId.push(formData.empCode);
    return true;
  }
}

function readFormData() {
  let formData = {};
  formData.empCode = document.getElementById("empCode").value;
  formData.fullName = document.getElementById("fullName").value;
  formData.email = document.getElementById("email").value;
  formData.city = document.getElementById("city").value;

  return formData;
}

function insertNewRecord(data) {
  let sortData = [];
  sortData.push(data);
  sortData.sort(function (a, b) {
    return a - b;
  });
  console.log(
    document.getElementById("employeeList").getElementsByTagName("tbody")[0]
  );
  let table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  console.log(table);
  console.log(data.empCode);
  console.log(table.length);
  let newRow = table.insertRow(table.length);
  console.log(newRow);
  cell1 = newRow.insertCell(0);
  // data.empCode.sort(function (a, b) { return a - b });
  cell1.innerHTML = sortData[0].empCode;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = sortData[0].fullName;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = sortData[0].email;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = sortData[0].city;

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
  duplicationValidation(1);
  selectedRow = td.parentElement.parentElement;
  document;
  document.getElementById("empCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

// This is how to select row ==> selectedRow.cells[3].innerHTML;
function updateRecord(formData) {
  document.getElementById("myText").placeholder = "Type name here..";
  selectedRow.cells[0].innerHTML.insertNewRecord = formData.empCode;
  // selectedRow.cells[0].innerHTML = formData.empCode;
  selectedRow.cells[0].innerHTML.insertNewRecord = formData.fullName;
  // selectedRow.cells[1].innerHTML = formData.fullName;
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
