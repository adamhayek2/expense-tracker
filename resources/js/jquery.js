



function singleExpenseElement(name, price){
    return `<tr>
                <td class = "single-expense-Item">${name}</td>
                <td class = "single-expense-price">${price}</td>
            </tr>    `;
}

function addExpense() {
    const nameInput = $("#expense-name").val();
        const priceInput = $("#expense-price").val();

        // Create a new row with the provided name and price
        const newRow = singleExpenseElement(nameInput, priceInput);

        // Append the new row to the table
        $("#expenses-table").append(newRow);

        // Clear the input fields after adding the expense
        $("#expense-name").val("");
        $("#expense-price").val("");
        console.log("nice")
}
$(document).ready(function () {
    const addButton = $("#add-button");
    addButton.click(addExpense);
});