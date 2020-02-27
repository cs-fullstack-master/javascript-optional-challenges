// Get the name from the user
let the_users_name = prompt('Please enter your name:');

// Check to see if they entered anything then respond accordingly
if (the_users_name == '') // check if user entered a blank
{
    // Display a who r u alert
    alert('No Idea Who You Are Pal...');
}
else // The user entered something
{
    alert(`Hello there ${the_users_name}!!!`);
}

// pgm exit