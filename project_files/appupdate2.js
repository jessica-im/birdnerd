$(document).ready(function(){
    $("#creditModal").modal('show');
});

$(() => {


    //Mouse image code https://w3codemasters.in/jquery-image-follow-mouse/
    $(document).mousemove((event) => {
        $(".pointer").css({left: event.pageX, top: event.pageY})
    })

    //This is to make a string to test for duplicate records
    const makeCompositeKey = (results) => {
        for (let i = 0; i < results.length; i++) {
            let compositeKey = results[i].comName + results[i].locName
            results[i].compositeKey = compositeKey
        }
    }

    const filterDupes = (results) => {
        results.reduce((acc, current) => {
            const x = acc.find(item => item.compositeKey === current.compositeKey);
            if (!x) { //if the compositeKey is the same, put into another array
                return acc.concat([current]);
                console.log([]);
            } else { //else return the object
                return acc;
            }
        }, []);
    }

    //This is to sort the results by county alphabetically
    const sortAlpha = (filteredArr) => {
        filteredArr.sort((a, b) => (a.subnational2Name > b.subnational2Name) ? 1 : -1)
    }

    //This is to render the data into appropriate tags
    const render = (results) => {
        // console.log(results)
        for (let i = 0; i < results.length; i++){
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
            const birdURL = `https://www.allaboutbirds.org/guide/${birdNameURL}`
            const $modalIframe = $('<iframe>').attr('src', birdURL).attr('id', 'iFrame')


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


            //Idea from Nolo Marsh to move iFrame creation and append to on openLearnMore function and to remove the iFrame upon closeModal
            const openLearnMore = () => {
                $modalContent.append($modalIframe)
                $modal.css('display', 'block')
            }
            const closeModal = () => {
                $modal.css('display', 'none')
                $modalIframe.remove()
            }

            $learnMoreButton.on('click', openLearnMore)
            $closeModal.on('click', closeModal)

        }
    }

    $('input[type="submit"]').on('click', (event) => {
        event.preventDefault()

        const $userInput = $('select').val()

        $.ajax(
            {
                url: `https://api.ebird.org/v2/data/obs/US-${$userInput}/recent/notable?detail=full&back=1`,
                type: "GET",
                headers: { "X-ebirdApiToken": '3ucptnnv43do' },
            }
        ).then(
            (data) => {

                makeCompositeKey(data)
                const filteredArr = data.reduce((acc, current) => {
                    const x = acc.find(item => item.compositeKey === current.compositeKey);
                    if (!x) { //if the compositeKey is the same, put into another array
                        return acc.concat([current]);
                        console.log([]);
                    } else { //else return the object
                        return acc;
                    }
                }, []);
                sortAlpha(filteredArr)
                render(filteredArr)

            },
            () => {
                console.log('bad request');
            }
        )

        $(event.currentTarget).trigger('reset', $('#results').empty())

    })

})
