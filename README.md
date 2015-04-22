#Assignment 10: Angular: AJAX and Dependency Injection

## Repository Forking Instructions:
1. Go to the "assignment10" repository on the CWEB221 GitHub page. Assignment instructions are in the readme below.
2. Click "Fork" to fork this repository into your own account.
3. Open the GitHub app and clone the forked repo to your computer.
4. Complete the assignment per the instructions.
5. Once the assignment is completed, go back to the GitHub app. Commit and sync your changes back to GitHub.
6. Go back to the GitHub website, and go to the forked version of the "assignment10" repo on your account page (NOT the CWEB221 page). Click "Pull Requests," then "New pull request," then "Create pull request." You're done!


## Assignment Instructions:
1. TIme to find the International Space Station again! Much like assignment #6, the goal of this assignment is to display on a map the location on Earth that the ISS is currently above -- but this time, we'll use Angular.
2. **IMPORTANT:** work within Cloud9 or from a local server. The AJAX functionality won't work if you run it from a file only.
3. Open "index.html" and "editme.js". Inside, you'll find a structured (but non-working) Angular application skeleton. The URLs for Open Notify (the ISS API) and Google Maps are commented in the file.
4. In the HTML file, add the appropriate ng-app and ng-controller directives.
5. Using Angular's dependency injection system, inject $scope and the $http service into the controller.
6. Using the Open Notify API and the $http Angular service, make an AJAX call to retrieve lat/long coordinates for the space station, and add the resulting data to our $scope, so that the map placeholder in our HTML is populated correctly (hint: you can construct the entire URL in JavaScript and insert it, or put the URL in the HTML and just fill in the appropriate values).
7. If all goes well, you should see a map with a marker indicating the ISS's current position when you open "index.html" in a browser.
8. So far, our code will only run once. Add functionality that will allow the page to refresh(hint: add a button or use JavaScript's built-in setTimeout method to automatically refresh the AJAX data).
9. Submit the completed project via GitHub pull request before the beginning of next week's class (04/29/15).


## Grading Criteria:
1. Successfully add ng-app and ng-controller directives to HTML: 2pts.
2. Use Angular's dependency injection to add $http and $scope to the controller: 2pts.
3. Use $http to retrieve Open Notify data, and successfully update the Google Static Map: 2pts.
4. Create mechanism to refresh data: 1pt.
5. Turned in on time via a GitHub pull request: 3pts.