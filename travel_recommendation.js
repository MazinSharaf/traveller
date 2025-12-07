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
                const country = data.countries.filter(
                    item => item.name.toLowerCase().includes(input)
                );

                const city = country ? country.cities.filter(
                    item => item.name.toLowerCase().include(input)
                ) : undefined;

                const temple = data.temples.filter(
                    item => item.name.toLowerCase().include(input)
                );

                const beach = data.beaches.filter(
                    item => item.name.toLowerCase().include(input)
                );

                country.forEach(
                    country => {
                        console.log(
                            country.name
                        );
                    }
                );

                city.forEach(
                    city => {
                        console.log(
                            city.name
                        );
                    }
                );

                temple.forEach(
                    temple => {
                        console.log(
                            temple.name
                        );
                    }
                );

                beach.forEach(
                    beach => {
                        console.log(
                            beach.name
                        );
                    }
                );
            }
        )

        .catch (
            {}
        )
}


