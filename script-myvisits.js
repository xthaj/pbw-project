var visitors = [
    //these data are ai-generated.
	{
		name: 'John Doe',
		email: 'johndoe@gmail.com',
		phone: '123-456-7890',
		destination: 'Art & Design Museum',
		visitDate: '2023-04-10',
		visitTime: '14:00',
		groupSize: 4,
		reasonForVisit: 'leisure',
		additionalRequests: 'none'
	},
	{
		name: 'Jane Smith',
		email: 'janesmith@gmail.com',
		phone: '555-555-5555',
		destination: 'History & Culture Museum',
		visitDate: '2023-04-12',
		visitTime: '10:00',
		groupSize: 2,
		reasonForVisit: 'education',
		additionalRequests: 'wheelchair accessible'
	},
    {
        name: 'Mark Johnson',
        email: 'markjohnson@gmail.com',
        phone: '444-444-4444',
        destination: 'Science & Conservation Museum',
        visitDate: '2023-04-15',
        visitTime: '11:00',
        groupSize: 3,
        reasonForVisit: 'education',
        additionalRequests: 'guided tour'
      },
      {
        name: 'Lisa Lee',
        email: 'lisalee@gmail.com',
        phone: '777-777-7777',
        destination: 'Art & Design Museum',
        visitDate: '2023-04-17',
        visitTime: '15:00',
        groupSize: 2,
        reasonForVisit: 'leisure',
        additionalRequests: 'audio guide'
      },
      {
        name: 'David Wang',
        email: 'davidwang@gmail.com',
        phone: '888-888-8888',
        destination: 'History & Culture Museum',
        visitDate: '2023-04-19',
        visitTime: '12:00',
        groupSize: 5,
        reasonForVisit: 'leisure',
        additionalRequests: 'none'
      },
      {
        name: 'Sarah Kim',
        email: 'sarahkim@gmail.com',
        phone: '555-123-4567',
        destination: 'Science & Conservation Museum',
        visitDate: '2023-04-22',
        visitTime: '16:00',
        groupSize: 1,
        reasonForVisit: 'education',
        additionalRequests: 'guided tour'
      },
      {
        name: 'Michael Chen',
        email: 'michaelchen@gmail.com',
        phone: '666-666-6666',
        destination: 'Art & Design Museum',
        visitDate: '2023-04-24',
        visitTime: '13:00',
        groupSize: 2,
        reasonForVisit: 'leisure',
        additionalRequests: 'audio guide'
      },
      {
        name: 'Karen Davis',
        email: 'karendavis@gmail.com',
        phone: '777-777-7777',
        destination: 'History & Culture Museum',
        visitDate: '2023-04-26',
        visitTime: '10:00',
        groupSize: 4,
        reasonForVisit: 'leisure',
        additionalRequests: 'none'
      },
      {
        name: 'Tom Wilson',
        email: 'tomwilson@gmail.com',
        phone: '888-888-8888',
        destination: 'Art & Design Museum',
        visitDate: '2023-04-29',
        visitTime: '14:00',
        groupSize: 1,
        reasonForVisit: 'leisure',
        additionalRequests: 'none'
      },
      {
        name: 'Emily Johnson',
        email: 'emilyjohnson@gmail.com',
        phone: '333-333-3333',
        destination: 'History & Culture Museum',
        visitDate: '2023-05-01',
        visitTime: '11:00',
        groupSize: 3,
        reasonForVisit: 'education',
        additionalRequests: 'guided tour'
      }
];

// Function to display visitor information in the table
function displayVisitors() {
	var table = document.getElementById('visitorTable').getElementsByTagName('tbody')[0];

	// Clear existing rows from the table
	table.innerHTML = '';

	// Loop through visitors array and add rows to the table
	for (var i = 0; i < visitors.length; i++) {
		var row = table.insertRow(i);

		// Create cell for contact person
		var contactCell = row.insertCell(0);
		contactCell.innerHTML = visitors[i].name + '<br>' + visitors[i].phone + '<br>' + visitors[i].email;

		// Create cells for other visitor information
		var destCell = row.insertCell(1);
		destCell.innerHTML = visitors[i].destination;

		var dateCell = row.insertCell(2);
		dateCell.innerHTML = visitors[i].visitDate;

		var timeCell = row.insertCell(3);
		timeCell.innerHTML = visitors[i].visitTime;

		var sizeCell = row.insertCell(4);
		sizeCell.innerHTML = visitors[i].groupSize;

		var reasonCell = row.insertCell(5);
		reasonCell.innerHTML = visitors[i].reasonForVisit;

		var requestCell = row.insertCell(6);
		requestCell.innerHTML = visitors[i].additionalRequests;
	}
}
