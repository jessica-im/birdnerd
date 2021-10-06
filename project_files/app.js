

$(() => {


    //Mouse image code https://w3codemasters.in/jquery-image-follow-mouse/
    $(document).mousemove((event) => {
        $(".pointer").css({left: event.pageX, top: event.pageY})
    })


    //This is to remove properties from original array of data
    const consolidate = (results) => {
        results.forEach(results => {
            delete results.speciesCode;
            delete results.sciName;
            delete results.locId;
            delete results.obsDt;
            delete results.howMany;
            delete results.obsValid;
            delete results.obsReviewed;
            delete results.locationPrivate;
            delete results.subnational2Code;
            delete results.userDisplayName;
            delete results.subId;
            delete results.obsId;
            delete results.checklistId;
            delete results.presenceNoted;
            delete results.hasComments;
            delete results.firstName;
            delete results.lastName;
            delete results.hasRichMedia;
            delete results.locID;
        })
    }

    //This is to make a string to test for duplicate records
    const makeCompositeKey = (results) => {
        for (let i = 0; i < results.length; i++) {
            let compositeKey = results[i].comName + results[i].locName
            results[i].compositeKey = compositeKey
        }
    }


    //This is to render the data into appropriate tags
    const render = (results) => {
        // console.log(results)
        for (let i = 0; i < results.length; i++){ //results.length
            const $birdDiv = $('<div>').addClass('bird-div')
            const $birdName = $('<p>').text(results[i].comName).addClass('bird-name').addClass('birdinfo')
            const $birdLocation = $('<p>').text(results[i].locName).addClass('bird-location').addClass('birdinfo')
            const $birdCounty = $('<p>').text(results[i].subnational2Name).addClass('bird-county').addClass('birdinfo')
            const $buttonP = $('<p>').addClass('birdinfo').addClass('buttoncontainer')
            const $learnMoreButton = $('<button>').text('Learn More').addClass('off').attr('id', 'openModal').addClass('birdinfo')
            const $modal = $('<div>').attr('id', 'modal')
            const $modalContent = $('<div>').attr('id', 'modal-content')
            const $closeModalDiv = $('<div>').attr('id', 'close-modal')
            const $closeModal = $('<a>').attr('id', 'close').attr('href', '#').text('x CLOSE')
            const $modalHeader = $('<h1>').text('about this bird').attr('id', 'aboutbird')

            const birdNameURL = (results[i].comName).replace(" ", "_").replace("'", "")
            // console.log(birdNameURL);

            const birdURL = `https://www.allaboutbirds.org/guide/${birdNameURL}`

            // const birdURL = `https://en.wikipedia.org/wiki/${birdNameURL}`
            const $modalIframe = $('<iframe>').attr('src', birdURL).attr('id', 'iFrame')

            // const $modalEmbed = $('<embed>').attr('src', birdURL).attr('id', 'iFrame')


            $('#results').append($birdDiv)
            $birdDiv.append($birdName)
            $birdDiv.append($birdLocation)
            $birdDiv.append($birdCounty)
            $birdDiv.append($buttonP)
            $buttonP.append($learnMoreButton)
            $birdDiv.append($modal)
            $modal.append($modalContent)
            $modalContent.append($closeModalDiv)
            $closeModalDiv.append($closeModal)
            $modalContent.append($modalHeader)
            $modalContent.append($modalIframe)


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
        // console.log($userInput);


        $.ajax(
            {
                url: `https://api.ebird.org/v2/data/obs/US-${$userInput}/recent/notable?detail=full&back=1`,
                type: "GET",
                headers: { "X-ebirdApiToken": '3ucptnnv43do' },
            }
        ).then(
            (data) => {
                // console.log(data);
                consolidate(data)
                makeCompositeKey(data)
                const filteredArr = data.reduce((acc, current) => {
                    const x = acc.find(item => item.compositeKey === current.compositeKey);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        return acc;
                    }
                }, []);
                filteredArr.sort((a, b) => (a.subnational2Name > b.subnational2Name) ? 1 : -1)
                render(filteredArr)

            },
            () => {
                console.log('bad request');
            }

        )


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
