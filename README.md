# Bird Nerd
Rare birds at your fingertips!

## About Bird Nerd

Do you find yourself looking out the window, daydreaming often? During these daydreams, do you ever wonder what rare birds are flying through my state today? I know I do.

With Bird Nerd, you can get a current list of the notable\* birds that were observed in your state by your fellow bird nerds. As an enthusiastic birder, the desire to "catch (see) them all" is all too important! Bird Nerd helps to keep me up to date with notable sightings that I can quickly zoom off to.

\*According to the [eBird API](https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest#intro), notable observations can be for locally or nationally rare species or are otherwise unusual, e.g. over-wintering birds in a species which is normally only a summer visitor.

## Technologies Used

- HTML
- CSS / Flexbox
- JavaScript
- jQuery
- Ajax

## Approach Taken

### About the API

Bird Nerd works by utilizing an API via eBird, an application where birders can log their sightings. This program specifically calls the API that has notable sightings with query parameters of "regionCode - state" and "back - number of days back to fetch observations". This returns an array of objects, where each object is an individual sighting, and each object contains multiple properties.

### Creating a Dynamic Ajax URL

When a user selects the state they want to search, upon the click of the submit button, the value of the state dropdown will be assigned to a variable. That variable is then used within the API URL to get just that state's data. The API URL also used a query parameter to only fetch results from the past 24 hours.

### Formatting the Data

To make the data more user friendly for my jQuery methods, I needed to format it a bit.

***Consolidate***  
Each object included 28 properties but the program only needed a handful. I used the JavaScript forEach function to iterate over my array and remove specific properties from each object.

***Filter Duplicates***  
Filtering out duplicates was a challenge to figure out since I was trying to test two specific values within each object. I tried to use the JS Set function on my consolidated dataset but it did not seem to work.

Since I wanted to test for two values, I could string that together and make a new property and push that into the object. I used a loop to string the two values and put back into each object.

I found an article that used the JS reduce and find function to check for one property, [credit](https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep). Using the a combination of these functions, I was able to test for this composite string value I pushed into each object. If it was a duplicate, it put those objects into a separate array and left me with an original array free of duplicates.

***Alphabetize***  
After filtering out the duplicate records, I wanted my results to show on the page in alphabetical order by County to make the it easier to sift through. I found an article that walked through the steps in alphabetizing an array of objects by one property, [credit](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/) and applied this to my filtered dataset.

### Rendering

After the data is ready to go, the render function I created would render the data into the DOM by using jQuery to create elements and append them accordingly.

Within the render function, I created click events that were applied to the modals to allow them to open and close.

### iFrames

iFrames are great because you can display a whole external website and embed it into your modal. However, they are terrible because you can run into issues with that external site's cookies. Although my iFrames all worked properly, I encountered issues within the Chrome Dev Tools notifying me that I had not specified the SameSite attribute which directs how Cookies are to be shared. This was causing my app to crash!

The best fix was an idea that Nolo Marsh came up with where I should only create and append the iFrame upon the function where I click the modal open and then upon closing the modal, remove that iFrame entirely. So, instead of iFrames being generated upon load of the results, they would only get generated upon opening the modal for each specific bird.


### Fun Things
Two fun things:

1. A little chick trailing the cursor. I did this through using the jQuery mousemove event, and attaching an image to it. This only shows up when the \@media query hits a min-width of 1000px.

2. A fun animations to my app's nav and footer.

## Link to Live Site

[bird nerd](https://birdnerdalert.netlify.app/)


## Unsolved Problems

I could not figure out the SameSite cookie attribute to prevent issues showing within the Chrome Dev Tools - in the future, I will try to refrain from using iFrames and linking to an external URL.
