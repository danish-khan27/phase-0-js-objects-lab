// Create the attendee object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Function to log the attendee's name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Function to log the ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Function to update the ticket type
function updateTicketType(attendee, newType) {
  attendee.ticketType = newType;
}

// Function to remove the event property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Function to add the checkedIn property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}
// Function to update the ticket price
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}


// Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};
