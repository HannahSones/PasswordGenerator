# PasswordGenerator
Based on criteria a user selects, this application uses javascript to generate a random password.

## About the project
The task required a random password be generated based on selected criteria from a user. Instead of using a long list of prompts in the browser, I decided to add checkboxes and a number input box in the HTML to make the form more user friendly and easy to navigate.

### Built using
* Javascript
* HTML
* CSS

-------

## Finished output

The following image shows the web application's appearance and functionality based on selecting a password 25 characters long using only uppercase characters and symbols.

![alt text](https://github.com/HannahSones/PasswordGenerator/blob/master/PasswordGenerator%20example.PNG)

-------

## Functionality
* Checkboxes and input box added into the form in HTML to improve user experience
* When the generate password button is clicked, the user recieves a randomised password based on the selected criteria
* If no password length is entered, the user will recieve and alert telling them to enter a number between 8 and 128. This is the same if a number less than 8 or greater than 128 is entered - an alert will appear correcting the user.
* Depending on which checkboxes are ticked, the password output will only contain those characcter types:
   * Uppercase
   * Lowercase
   * Numbers
   * Symbols
 If none of the checkboxes are selected, an alert will appear prompting the user to select at least one character type.
* A for loop has then been used to randomise characters based on the selected character types and length

-----

## Link to deployed application

https://hannahsones.github.io/PasswordGenerator/

-------------
© Hannah Sones. All rights reserved.
