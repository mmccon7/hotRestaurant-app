// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var tableArray = [{
    customerName: "James",
    customerEmail: "james@example.com",
    customerID: "afhaque89",
    phoneNumber: "480-445-0934"
}];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;