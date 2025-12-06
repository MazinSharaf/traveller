function searchDestination() {
    const input = document.getElementById(
        'searchInput'
    ).value.toLowerCase();

    const resultDiv = document.getElementById(
        'result'
    );

    fetch (
        'travel_recommendation_api.json'
    )

        .then (
            response => response.json()
        )

        .then (
            data => {
                const country = data.countries.find(
                    item => item.name.toLowerCase() === input
                );

                const city = data.countries.cities.find(
                    item => item.name.toLowerCase === input
                );

                const temple = data.temples.find(
                    item => item.name.toLowerCase() === input
                );

                const beach = data.beaches.find(
                    item => item.name.toLowerCase() === input
                );

                if (
                    country
                ) {
                    console.log(country.name) 
                }

                if (
                    temple
                ) {
                    console.log(temple.name)
                }

                if (
                    beach
                ) {
                    console.log(beach.name)
                }
            }
        )
}


