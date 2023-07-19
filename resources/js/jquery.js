



function singleExpenseElement(name, price){
    return `<tr>
                <td class = "single-expense-Item">${name}</td>
                <td class = "single-expense-price">${price}$</td>
                <td>
                    <button class="edit-button">Edit</button>
                    <button class="save-button" style="display: none;">Save</button>
                    <button class="delete-button">Delete</button>
                </td>
            </tr>    `;
}

function addExpense() {
    const nameInput = $("#expense-name").val().trim();
    const priceInput = $("#expense-price").val().trim();

    // Validation if the input is empty
    if (nameInput === "" || priceInput === "") return;

    // Create a new row with the provided name and price
    const newRow = singleExpenseElement(nameInput, priceInput);

    // Append the new row to the table
    $("#expenses-table").append(newRow);

    // Clear the input fields after adding the expense
    $("#expense-name").val("");
    $("#expense-price").val("");
}

// Editing items
function editExpenseRow(row){
    const nameElement = row.find(".single-expense-Item");
  const priceElement = row.find(".single-expense-price");
  const name = nameElement.text();
  const price = priceElement.text();

  nameElement.html(`<input type="text" class="edit-name" value="${name}">`);
  priceElement.html(`<input type="number" class="edit-price" value="${price}">`);

  row.find(".edit-button").hide();
  row.find(".save-button").show();
}

// Saving after editing 
function saveExpenseRow(row) {
    const nameInput = row.find(".edit-name").val().trim();
    const priceInput = row.find(".edit-price").val().trim();
  
    // Validation if the input is empty
    if (nameInput === "" || priceInput === "") return;
  
    const nameElement = row.find(".single-expense-Item");
    const priceElement = row.find(".single-expense-price");
  
    nameElement.text(nameInput);
    priceElement.text(priceInput);

    row.find(".edit-button").show();
    row.find(".save-button").hide();
  }

// Deleting row
function deleteExpenseRow(row) {
    row.remove();
  }

$(document).ready(function () {
    const addButton = $("#add-button");
    addButton.click(addExpense);

    $(document).on("click", ".edit-button", function () {
    const row = $(this).closest("tr");
    editExpenseRow(row);
    });

    $(document).on("click", ".save-button", function () {
    const row = $(this).closest("tr");
    saveExpenseRow(row);
    });
    
    $(document).on("click", ".delete-button", function () {
        const row = $(this).closest("tr");
        deleteExpenseRow(row);
      });

});