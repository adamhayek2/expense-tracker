



function singleExpenseElement(name, price){
    return `<tr>
                <td class = "single-expense-Item">${name}</td>
                <td class = "single-expense-price">${price}$</td>
                <td>
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
function deleteExpenseRow(row) {
    row.remove();
  }
$(document).ready(function () {
    const addButton = $("#add-button");
    addButton.click(addExpense);
    
    $(document).on("click", ".delete-button", function () {
        const row = $(this).closest("tr");
        deleteExpenseRow(row);
      });
});