///////////////////////
//About
///////////////////////

Do you ever think, "I wish I knew what birds were flying through my state today?". Well, you're in luck, with this app, you'll get a live list of birds flying through your state today!

You will be able to search for your state in the top input box.

After submitting, you will get a list of bird names and their location.

There will be a "Learn More" button you can click on to get a modal pop-up of the "All About Birds" website to that specific bird.

////////////////////////
//Components to Build
////////////////////////

Input Box

Submit Button

Live List Feed
    -Bird Name
    -Bird Location
    *Need to consider duplicate logs of same bird / location and only list the most recent
        -Maybe do if bird name & bird location is same, skip?
        -Maybe do a set() on the data array... but can you check two specific object properties? (https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/)
            -I could push from the original array, just bird name & location of each object into an object in a new array and then do set()?
            -https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects

            Using the data, push the

Learn More Button
    -This Learn More button upon creation needs to have an id
    -To open on click to modal

Modal
    -https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Beaker/tree/master/unit_1/w03d01/morning_exercise
    -Clickable website page to All About Birds on that specific bird
    *Need to consider grabbing Bird Name from API and adding in _ for spaces to plug into https://www.allaboutbirds.org/guide/(insert bird name here)
        -https://www.developintelligence.com/blog/2016/02/replace-spaces-underscores-javascript/
        -https://stackoverflow.com/questions/5660263/how-to-display-an-iframe-inside-a-jquery-ui-dialog


/////////////////////////
//Schedule
////////////////////////

Friday 10/1
1. Work through showing results on website from one specific state
    -On submit click, I need to be able to create an element with that bird name, location, and learn more button. I can make a function that loops through the objects results and pulls the properties from each object I want. Then, I need to append to the results container.
2. Parse out duplicate results with same bird & location

Saturday 10/2
1. If above is completed...
2. Make the input value change the api url dynamically
3. Work on making a modal show up with a static website

Sunday 10/3
1. If above is completed...
2. Work on populating modal with website to specific bird

Monday 10/4
1. Start the CSS

Tuesday 10/5
1. Refine the CSS
