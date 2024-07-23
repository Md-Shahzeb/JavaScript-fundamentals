function extractGroups(pattern, str) {
    const regex = new RegExp(pattern);

    const match = regex.exec(str);

    if (!match) {
        return null;
    }

    const groups = match.groups;

    return groups;
}
const datePattern = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;
const testString1 = "Today's date is 25-12-2021.";
const testString2 = "Another date is 04-07-1776.";

console.log(extractGroups(datePattern, testString1));

console.log(extractGroups(datePattern, testString2));

const testString3 = "This string does not contain a date.";

console.log(extractGroups(datePattern, testString3));
