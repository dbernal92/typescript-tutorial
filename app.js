{
    var message = 'Hello, TypeScript!';
    // Create a new heading 1 element
    var heading = document.createElement('h1');
    heading.textContent = message;
    // Add the heading the document
    document.body.appendChild(heading);
}
// Exercise 1
// Create a variable called isLoggedIn that is a boolean.
// Create a variable called favLanguages that is an array of strings.
// Write a function called double that takes a number and returns the doubled value.
// Create an object book with a title (string), pages (number), and isPublished (boolean).
{
    var isLoggedIn = true;
    var favLanguages = ['Spanish', 'Korean', 'Japanese', 'Portugese'];
    function doubleNumber(i) {
        return i * 2;
    }
    var book = {
        title: "The Midnight Library",
        pages: 384,
        isPublished: true,
    };
}
// Exercise 1: User Profile
// Create a userProfile object with the following:
// username – a string
// age – a number
// hobbies – an array of strings
// isAdmin – a boolean
// loginCount – a number
{
    var userProfile = void 0;
}
// Exercise 2: Function -- Get Initials
// Write a function getInitials that takes in:
// firstName (string)
// lastName (string)
// Returns a string with their uppercase initials
{
    function getInitials(firstName, lastName) {
        var f = (firstName[0]);
        var l = (lastName[0]);
        var upperFN = f.toUpperCase();
        var upperLN = l.toUpperCase();
        var initials = upperFN + upperLN;
        return initials;
    }
    var firstName = "bruce";
    var lastName = "wayne";
    console.log(getInitials(firstName, lastName));
}
// Exercise 3: Book Inventory
// Create two variables:
// bookTitle (string)
// inventoryCount (number)
// Then write a function called printInventory that returns a string like:
// "The book 'The Office Scripts' has 5 copies left."
{
    var bookTitle = 'The Office Scripts';
    var inventoryCount = 5;
    function printInventory(bookTitle, inventoryCount) {
        return "The book '".concat(bookTitle, "' has ").concat(inventoryCount, " copies left.");
    }
    console.log(printInventory(bookTitle, inventoryCount));
}
// Exercise 4: Languages Learned Tracker
// Create a new array of objects called languagesLearned, where each object has:
// name (string)
// level (string — values can be 'beginner' | 'intermediate' | 'advanced')
// inProgress (boolean)
// Add at least three objects.
{
    var languagesLearned = [
        { name: "English", level: "advanced", inProgress: false },
        { name: "Spanish", level: "intermediate", inProgress: true },
        { name: "Korean", level: "beginner", inProgress: true }
    ];
    console.log(languagesLearned);
    for (var _i = 0, languagesLearned_1 = languagesLearned; _i < languagesLearned_1.length; _i++) {
        var lang = languagesLearned_1[_i];
        console.log(lang.name);
    }
}
