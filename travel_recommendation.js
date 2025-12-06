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

                if (
                    country
                ) {
                   console.log(country.name) 
                }
            }
        )
}


