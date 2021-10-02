$(() => {

    //This is to remove properties from original array of data
    const consolidate = (u) => {
        u.forEach(u => {
            delete u.speciesCode;
            delete u.sciName;
            delete u.locId;
            delete u.obsDt;
            delete u.howMany;
            delete u.obsValid;
            delete u.obsReviewed;
            delete u.locationPrivate;
            delete u.subnational2Code;
            delete u.userDisplayName;
            delete u.subId;
            delete u.obsId;
            delete u.checklistId;
            delete u.presenceNoted;
            delete u.hasComments;
            delete u.firstName;
            delete u.lastName;
            delete u.hasRichMedia;
            delete u.locID;
        })
    }


    //This is to render the data into appropriate tags
    const render = (results) => {
        console.log(results)
        for (let i = 0; i < results.length; i++){
            const $birdDiv = $('<div>').addClass('bird-div')
            const $birdName = $('<p>').text(results[i].comName).addClass('bird-name')
            const $birdLocation = $('<p>').text(results[i].locName).addClass('bird-location')
            const $birdCounty = $('<p>').text(results[i].subnational2Name).addClass('bird-county')
            const $birdLearnMore = $('<button>').text('Learn More').addClass('off')



            $('#results').append($birdDiv)
            $birdDiv.append($birdName)
            $birdDiv.append($birdLocation)
            $birdDiv.append($birdCounty)
            $birdDiv.append($birdLearnMore)

        }
    }

    $('input[type="submit"]').on('click', (event) => {
        event.preventDefault()

        $.ajax(
            {
                url: `https://api.ebird.org/v2/data/obs/US-PA/recent/notable?detail=full&back=1`,
                type: "GET",
                headers: { "X-ebirdApiToken": '3ucptnnv43do' },
            }
        ).then(
            (data) => {

                consolidate(data)
                console.log(data);
                // const uniqueSet = new Set(data)
                // const newArray = [...noDataDupe]
                // console.log(newArray);
                // render(newArray)
            },
            () => {
                console.log('bad request');
            }

        )


    })



})


//This is to take the bird name, switch spaces to underscores, and pop into the end of URL
// const websiteLink = () => {
//
// }

//This is to make the modal toggle open and close
// const modalToggle = () => {
//
// }
