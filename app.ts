{
    let message: string = 'Hello, TypeScript!';

    // Create a new heading 1 element
    let heading = document.createElement('h1');
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
    let isLoggedIn: boolean = true;
    let favLanguages: string[] = ['Spanish', 'Korean', 'Japanese', 'Portugese']
    function doubleNumber(i: number): number {
        return i * 2;
    }
    let book: { title: string, pages: number, isPublished: boolean } = {
        title: "The Midnight Library",
        pages: 384,
        isPublished: true,
    }
}

// Exercise 1: User Profile
// Create a userProfile object with the following:
// username – a string
// age – a number
// hobbies – an array of strings
// isAdmin – a boolean
// loginCount – a number

{
    let userProfile: { 
        username: string; 
        age: number; 
        hobbies: string[]; 
        isAdmin: boolean; 
        loginCount: number }
}

// Exercise 2: Function -- Get Initials
// Write a function getInitials that takes in:
// firstName (string)
// lastName (string)
// Returns a string with their uppercase initials

{
    function getInitials(firstName: string, lastName: string): string {
        let f = (firstName[0]);
        let l = (lastName[0]);
        let upperFN = f.toUpperCase();
        let upperLN = l.toUpperCase();
        let initials: string = upperFN + upperLN;
        
        return initials;
    }

    let firstName = "bruce";
    let lastName = "wayne"
    getInitials(firstName, lastName);
}

// Exercise 3: Book Inventory