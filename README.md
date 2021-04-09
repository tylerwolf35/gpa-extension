# FRHSD GPA Calculator Browser Extension
This is a browser extension that calculates GPA from Parent Portal for FRHSD students. This extension is compatible with both the latest versions of Firefox and Chrome.

## How do I install this?
Firefox: https://addons.mozilla.org/en-US/firefox/addon/frhsd-gpa-calculator/.

Chrome: To install this addon for Chrome you must install it as an unpacked extension. I have submitted this extension to the Chrome Web Store for review. I will provide an update when I get a response.

## What does this do?
While on the gradebook page of the parent portal, this extension will calculate your GPA of the selected marking period weighted by the guidelines in the FRHSD Student Handbook. A manual entry calculator for calculating your GPA is also built in to the extension if you would like to calculate your entire GPA. More info on the calculator can be found here: https://github.com/tylerwolf35/gpa.

## How does this work?
This extension works by retrieving your letter grade in each course by going into the correct spot in the table and finding the name of all of the courses and of the grades and storing these values in arrays. The amount of credits the course is worth is also assigned using an array based on determining if the name of the course is equal to that of a course which is not worth the usual 5 credits.

## Todo
Currently the only courses that this works with other than those with the usual 5 credits are:
* Financial Literacy
* AP Macroeconomics
* AP Microeconomics
* Health
* Safety
* Physical Ed

This means that other half year courses and etc. are not supported. I plan on adding support for all <5 credit courses offered in the district. If a course you have is not here please make an issue telling me the exact name of the course in the gradebook or create a pull request adding it, I will review all pull requests.

I would also like to make a (better) icon for this extension, as the current image of text is not very good.