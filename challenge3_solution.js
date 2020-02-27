// Write a program that lets the user enter grades (numeric)
// Let the user keep entering grades until they enter a -1
// Add each grade entered to an array
// Create a function that average the grades that will take the array of grades 
// as the parameter and RETURNS the average of the grades.
// Notify the user with an alert of what their average grade is. Calculate the average 
// by adding up all the numbers and 
// dividing by the number of values entered..

// Set up initial condition value for loop
let grade_entry = 0;
// Create an array to hold grades
let grade_list = [];
// Keep asking for grades until user enters a -1 as a score
while(grade_entry!=-1)
{
    // Get next grade
    grade_entry = parseInt(prompt('Enter next grade or enter -1 to quit:'));
    if (grade_entry != -1 && grade_entry != NaN) // If they entered a grade and not a blank or -1 add to grade array
    {
        grade_list.push(grade_entry); // push in array
    }
}

// Now calculate average from grades in array
let grade_total = 0;
let grade_average = 0;

// Add up all the grades
for (step = 0; step < grade_list.length; step++)
{
    grade_total = grade_total + grade_list[step];
}

// Divide by number of grades to get average
grade_average = (grade_total / grade_list.length);

// Display average as an alert
alert(`The average of the ${grade_list.length} grades is ${grade_average}`);

// pgm exit