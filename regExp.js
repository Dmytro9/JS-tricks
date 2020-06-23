// find str
/hij/;

// find at beginning
const reg = /^abc/;

// find at the end
const reg = /xyz$/;

// matches exactly the string foo bar
/^foo bar$/;

// escaping characters ( to search need to be ecaped by backslash - '\' )
// [ \ ^ $ . | ? * + ( )

// search for ?
/\?/;

/*  Flags:
 *   Global               /e/g
 *   Case insensitive     /e/gi
 *   Multi-line           /are/m
 **/

// Character classes:
//  /\d/g     matches any digit
//  /\w/g     matches any wordly character
//  /\s/g     matches a space symbol

// Inverse:
// \W               non wordly character
// \D               non digit
// \S               non whitespace

//  Quantifiers:
// a?               matches an `a` character or nothing
// a*               matches zero or more consecutive `a` characters
// a+               matches one or more consecutive `a` characters
// a{2}             matches exactly 2 consecutive `a` characters
// a{2,4}           matches between 2 and 4 consecutive `a` characters
// a{2,}            matches at least 2 consecutive `a` characters
