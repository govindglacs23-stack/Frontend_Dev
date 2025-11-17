let name = "Alice";
let age = 25;
let isMember = true;
let hobbies = ["Reading", "Music", "Sports"];
let profile = { city: "Delhi", level: "Gold" };
let emptyValue = null;
let notAssigned;

console.table([
  { Label: "Name", Value: name, Type: typeof name },
  { Label: "Age", Value: age, Type: typeof age },
  { Label: "isMember", Value: isMember, Type: typeof isMember },
  { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "Profile", Value: JSON.stringify(profile), Type: typeof profile },
  { Label: "Empty", Value: emptyValue, Type: typeof emptyValue },
  { Label: "Not Assigned", Value: notAssigned, Type: typeof notAssigned }
]);
