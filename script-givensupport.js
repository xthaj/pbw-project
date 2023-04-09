const supports = [
  {
    id: 1,
    name: 'James',
    email: 'james@email.com',
    phone: '02183023912',
    donationAmount: 50000,
    donationMethod: 'Transfer Bank',
    proof: 'image/proof.png',
    preference: ['Exhibits Preservation', 'Projects Funding']
  },
  {
    id: 2,
    name: 'Emily',
    email: 'emily@gmail.com',
    phone: '08567238492',
    donationAmount: 100000,
    donationMethod: 'QRIS',
    proof: 'image/proof.png',
    preference: ['Exhibits Acquirements']
  },
  {
    id: 3,
    name: 'David',
    email: 'david@yahoo.com',
    phone: '08123456789',
    donationAmount: 25000,
    donationMethod: 'Supermarket',
    proof: 'image/proof.png',
    preference: ['Exhibits Preservation', 'Projects Funding', 'Exhibits Acquirements']
  },
  {
    id: 4,
    name: 'Sophia',
    email: 'sophia@hotmail.com',
    phone: '08129876543',
    donationAmount: 75000,
    donationMethod: 'Transfer Bank',
    proof: 'image/proof.png',
    preference: []
  },
  {
    id: 5,
    name: 'Benjamin',
    email: 'benjamin@gmail.com',
    phone: '08123456789',
    donationAmount: 50000,
    donationMethod: 'QRIS',
    proof: 'image/proof.png',
    preference: ['Exhibits Preservation']
  },
  {
    id: 6,
    name: 'Ava',
    email: 'ava@yahoo.com',
    phone: '08567890123',
    donationAmount: 100000,
    donationMethod: 'Transfer Bank',
    proof: 'image/proof.png',
    preference: ['Projects Funding', 'Exhibits Acquirements']
  },
  {
    id: 7,
    name: 'Ethan',
    email: 'ethan@hotmail.com',
    phone: '08129876543',
    donationAmount: 25000,
    donationMethod: 'Supermarket',
    proof: 'image/proof.png',
    preference: ['Exhibits Preservation']
  },
  {
    id: 8,
    name: 'Isabella',
    email: 'isabella@gmail.com',
    phone: '08123456789',
    donationAmount: 50000,
    donationMethod: 'QRIS',
    proof: 'image/proof.png',
    preference: ['Exhibits Acquirements']
  },
  {
    id: 9,
    name: 'Mason',
    email: 'mason@yahoo.com',
    phone: '08567890123',
    donationAmount: 75000,
    donationMethod: 'Transfer Bank',
    proof: 'image/proof.png',
    preference: ['Projects Funding']
  },
  {
    id: 10,
    name: 'Charlotte',
    email: 'charlotte@hotmail.com',
    phone: '08129876543',
    donationAmount: 100000,
    donationMethod: 'QRIS',
    proof: 'image/proof.png',
    preference: ['Exhibits Preservation', 'Projects Funding', 'Exhibits Acquirements']
  }
];


// Function to display supporter information in the table
function displaySupports() {
  var table = document.getElementById('supportTable').getElementsByTagName('tbody')[0];
  console.log("hey");
  // Clear existing rows from the table
  table.innerHTML = '';

  // Loop through supporters array and add rows to the table
  for (var i = 0; i < supports.length; i++) {
    var row = table.insertRow(i);

    // Create cell for supporter contact person
    var contactCell = row.insertCell(0);
    contactCell.innerHTML = supports[i].name + '<br>' + supports[i].phone + '<br>' + supports[i].email;

    // Create cells for other supporter information
    var amountCell = row.insertCell(1);
    amountCell.innerHTML = supports[i].donationAmount;

    var methodCell = row.insertCell(2);
    methodCell.innerHTML = supports[i].donationMethod;

    var proofCell = row.insertCell(3);
    proofCell.innerHTML = '<a target="_blank" href="' + supports[i].proof + '">View proof</a>';

    var preferenceCell = row.insertCell(4);
    preferenceCell.innerHTML = supports[i].preference.join(', ');
  }
}