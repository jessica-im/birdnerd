


$.ajax(
    {
        url: `https://api.ebird.org/v2/data/obs/US/recent/notable`,
        type: "GET",
        headers: { "X-ebirdApiToken": '3ucptnnv43do' }
    }
).then(
    (data) => {
        console.log(data);
    },
    () => {
        console.log('bad request');
    }


)
