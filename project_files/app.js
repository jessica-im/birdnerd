



$.ajax(
    {
        url: `https://api.ebird.org/v2/data/obs/US-PA/recent/notable?detail=full&back=1`,
        type: "GET",
        headers: { "X-ebirdApiToken": '3ucptnnv43do' },

    }
).then(
    (data) => {
        console.log(data);
    },
    () => {
        console.log('bad request');
    }


)
