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
        loginCount: number
    }
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
    console.log(getInitials(firstName, lastName));
}

// Exercise 3: Book Inventory
// Create two variables:
// bookTitle (string)
// inventoryCount (number)
// Then write a function called printInventory that returns a string like:
// "The book 'The Office Scripts' has 5 copies left."
{
    let bookTitle: string = 'The Office Scripts';
    let inventoryCount: number = 5;

    function printInventory(bookTitle: string, inventoryCount: number): string {
        return `The book '${bookTitle}' has ${inventoryCount} copies left.`
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
    type Language = {
        name: string,
        level: string,
        inProgress: boolean
    };

    let languagesLearned: Language[] = [
        { name: "English", level: "advanced", inProgress: false },
        { name: "Spanish", level: "intermediate", inProgress: true },
        { name: "Korean", level: "beginner", inProgress: true }
    ]

    console.log(languagesLearned);

    for (const lang of languagesLearned) {
        console.log(lang.name);
    }

}