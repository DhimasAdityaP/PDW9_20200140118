document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let checkbox = document.querySelectorAll('input[name="Makanan"]:checked');
  
  if (checkbox.length === 0 || checkbox.length < 3) {
    alert("Please select at least three foods!");
  } else {
    let fname = document.getElementById("first-name").value;
    let lname = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.getElementById("gender").value;
    let Makanan = Array.from(checkbox).map((checkboxs) => checkboxs.value);
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    let tableBody = document.querySelector("#table tbody");
    var newRow = tableBody.insertRow();

    var cells = [];
    for (var i = 0; i < 8; i++) {
      cells.push(newRow.insertCell(i));
    }

    cells[0].innerText = fname;
    cells[1].innerText = lname;
    cells[2].innerText = address;
    cells[3].innerText = pincode;
    cells[4].innerText = gender;
    cells[5].innerText = Makanan.join(", ");
    cells[6].innerText = state;
    cells[7].innerText = country;

    document.getElementById("form").reset();
  }
});
