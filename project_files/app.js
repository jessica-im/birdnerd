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
        for (let i = 0; i < results.length; i++){ //results.length
            const $birdDiv = $('<div>').addClass('bird-div')
            const $birdName = $('<p>').text(results[i].comName).addClass('bird-name')
            const $birdLocation = $('<p>').text(results[i].locName).addClass('bird-location')
            const $birdCounty = $('<p>').text(results[i].subnational2Name).addClass('bird-county')
            const $learnMoreButton = $('<button>').text('Learn More').addClass('off').attr('id', 'openModal')
            const $modal = $('<div>').attr('id', 'modal')
            const $modalContent = $('<div>').attr('id', 'modal-content')
            const $closeModal = $('<a>').attr('id', 'close').attr('href', '#').text('Close')
            const $modalHeader = $('<h1>').text('About this bird')


            $('#results').append($birdDiv)
            $birdDiv.append($birdName)
            $birdDiv.append($birdLocation)
            $birdDiv.append($birdCounty)
            $birdDiv.append($learnMoreButton)
            $birdDiv.append($modal)
            $modal.append($modalContent)
            $modalContent.append($closeModal)
            $modalContent.append($modalHeader)


            const openLearnMore = () => {
                $modal.css('display', 'block')
            }
            const closeModal = () => {
                $modal.css('display', 'none')
            }

            $learnMoreButton.on('click', openLearnMore)
            $closeModal.on('click', closeModal)
        }
    }

    $('input[type="submit"]').on('click', (event) => {
        event.preventDefault()

        const $userInput = $('select').val()
        console.log($userInput);

        $.ajax(
            {
                url: `https://api.ebird.org/v2/data/obs/US-${$userInput}/recent/notable?detail=full&back=1`,
                type: "GET",
                headers: { "X-ebirdApiToken": '3ucptnnv43do' },
            }
        ).then(
            (data) => {

                consolidate(data)
                // console.log(data)

                // const uniqueSet = new Set(data)
                // const newArray = [...noDataDupe]
                // console.log(newArray);
                render(data)
            },
            () => {
                console.log('bad request');
            }

        )

        // $('input[type="submit"]').trigger($('#results').empty())
        // $('input[type="submit"]').trigger('reset', event)
        $(event.currentTarget).trigger('reset', $('#results').empty())


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
