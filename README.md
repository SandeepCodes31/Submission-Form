1️⃣ What is onChange?

onChange is a React event handler
It runs every time the user types in the input field
So whenever the input value changes, this function is triggered.
--------------------------------------------------------------------------------------------------------------------

2️⃣ What is e?

(e) => { ... }

e stands for event
It is a Synthetic Event object provided by React
It contains all information about what just happened

You can think of e as:
“An object that tells React what the user did”

📌 You can rename it to anything:
(event) => setFirstName(event.target.value)
But e is the most commonly used name.

----------------------------------------------------------------------------------------------------

3️⃣ What is e.target?

target is the HTML element that triggered the event
Here, it is the <input /> element
Example:
<input type="text" />
So:  e.target
refers to the input field itself.

-------------------------------------------------

4️⃣ What is e.target.value?

value is the current text inside the input box
Example:
If the user types "Sandeep", then:
e.target.value === "Sandeep"

-----------------------------------------------------

5️⃣ What does setFirstName(e.target.value) do?

setFirstName updates React state
It stores whatever the user typed into firstName
setFirstName("Sandeep")

Now React:
Saves the value
Re-renders the component
Keeps UI and state in sync

🔄 Full flow (step-by-step)

User types S
onChange fires
React creates event object → e
e.target.value gets "S"
setFirstName("S") updates state
Input stays updated (controlled component)

--------------------------------------------------

What is <fieldset>?
<fieldset> is an HTML form element used to group related form inputs together in a clear and structured way.
<fieldset> = Box to group form inputs.

Why do we use <fieldset>?

Group related inputs
Example: Personal Details, Address Info, Login Details

<fieldset>
  <legend>Personal Information</legend>

  <label>First Name</label>
  <input type="text" />

  <label>Last Name</label>
  <input type="text" />
</fieldset>

What is <legend>?
<legend> gives a title to the fieldset
It appears as a caption on the border

Disable multiple inputs at once
You can disable all inputs inside a fieldset:

<fieldset disabled>
  <input type="text" />
  <input type="email" />
</fieldset>

-------------------------------------------------------

<form> tag
<form action="#" method="get">

action="#"
Tells the browser where to send the form data

"#" means don’t actually navigate anywhere
In React, form submission is usually handled with JavaScript, not page reloads

method="get"
Sends form data via URL query parameters
Example: ?firstname=Sandeep
In React apps, this is often ignored because submission is handled using onSubmit

--------------------------------------------------------------------

value={firstName}
Makes the input a controlled component

The input value comes from React state
const [firstName, setFirstName] = useState("");

onChange={(e) => setFirstName(e.target.value)}

Runs every time the user types
e = event object
e.target.value = current text inside the input
setFirstName() updates React state

How everything works together?
User types in input
onChange fires
React gets the value via e.target.value
setFirstName updates state
value={firstName} updates UI
➡ This is called a controlled input

--------------------------------------

❌ id and name are NOT the same
✅ They have different purposes

id="firstname" – Identity for the element
What is id?
A unique identifier for an element in the HTML page
Must be unique (only one element with that id)

Why we use id?
✅ To link <label> with <input>
✅ To access the element via JavaScript
✅ For CSS styling

name="firstname" – Data key for form submission

What is name?
Used to identify form data
Acts as the key when sending data to backend

Example (GET request)
<input name="firstname" value="Sandeep" />

URL becomes: ?firstname=Sandeep

Here: firstname = key (name)  // key value pair
      Sandeep = value

-------------------

What exactly is firstName here?
const [firstName, setFirstName] = useState("");

firstName → State variable (data stored in memory)
setFirstName → Function to update that data
useState("") → Initial value (empty string)

It is a React state variable.

📌 This exists only in React (JavaScript memory)
📌 It is not part of HTML

👉 firstName is NEITHER id nor name.

Data flow (VERY important)
User types in input
Browser fires onChange
e.target.value gets text
setFirstName() updates state
value={firstName} updates UI
👉 State controls the input

Key rule to remember:
State variables store data.
id and name identify HTML elements or form data.

They live in different worlds:
firstName → React (JS)
id / name → HTML

Remember:
firstName is a React state variable, not an HTML id or name.
id and name belong to the input element, while firstName belongs to React state.
















































































