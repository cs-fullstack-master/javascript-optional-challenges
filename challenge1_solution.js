// Create mailing label program to print labels
// See the challenge1.md file for detailed requirements

// sanity test
console.log('loaded challenge1_solution.js...');

// Create variables for name, street address, city, state, zip code for 3 people
/*
    Note: Not the best way to do this with all these dang variables repeated per person.
    Objects would work waaaay better but haven't covered much ;-)
*/

// Setup vars for person #1
person1_name = 'Chuck Jones';
person1_address = 'Looney Tunes Avenue';
person1_city = 'Hollywood';
person1_state = 'CA';
person1_zip = 90210;

// Setup vars for person #2
person2_name = 'Queue Queue';
person2_address = 'Sad Sack Street';
person2_city = 'Pooptown';
person2_state = 'FL';
person2_zip = 10001;

// Setup vars for person #3
person3_name = 'Claude Hay';
person3_address = 'Deep Fried and Satisfied (Google it)';
person3_city = 'Ontario';
person3_state = 'CANADA';
person3_zip = '00000';

// Create a `printLabel()` function that takes all the variables for a person and will use a 
// template literal to create a formatted label string
function printLabel(name, address, city, state, zip)
{
    // Let's create the template literal and place in a variable
    let address_label = 
        `
        ${name}
        ${address}
        ${city}, ${state} ${zip}
        `;
    // Return the formatted address string
    return address_label;
}

// From your main calling code, print each person's address returned from the function in the console 

// Print label passing in values from person 1 variables
console.log(printLabel(person1_name,person1_address,person1_city,person1_state,person1_zip));
// Print label passing in values from person 2 variables
console.log(printLabel(person2_name,person2_address,person2_city,person2_state,person2_zip));
// Print label passing in values from person 3 variables
console.log(printLabel(person3_name,person3_address,person3_city,person3_state,person3_zip));

// Program exit. Just print something so we know we r done
console.log('Game over man...');