# Bird Nerd

## About Bird Nerd

Do you find yourself looking out the window, daydreaming often? During these daydreams, do you ever wonder what rare birds are flying through my state that day? I know I do.

With Bird Nerd, you can get a current list of the notable\* birds that were observed in your state by your fellow bird nerds. As an enthusiastic bird nerd, the desire to "catch (see) them all" is very important! This app helps to keep me up to date with notable sightings that I can zoom off to.

\*According to the [eBird API](https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest#intro), notable observations can be for locally or nationally rare species or are otherwise unusual, e.g. over-wintering birds in a species which is normally only a summer visitor.

## Technologies Used

-HTML
-CSS
-JavaScript
-jQuery
-Ajax

## Approach Taken

### About the API

Bird Nerd works by utilizing an API via eBird, an application where birders can log their sightings. This program specifically calls the API that has notable sightings with query parameters of "regionCode - state" and "back - number of days back to fetch observations". This returns an array of objects, where each object is an individual sighting, and each object contains multiple properties.

### Formatting the Data

To make the data more user friendly for my jQuery methods, I needed to format it a bit.

-*Consolidate*
Each object included 28 properties but the program only needed a handful. I used the JavaScript forEach function to iterate over my array and remove specific properties from each object.

-*Filter Duplicates*




-*Alphabetize*





## Challenging Problems







## Link to Live Site







## Unsolved Problems
