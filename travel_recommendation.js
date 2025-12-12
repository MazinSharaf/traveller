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
                        item => item.name.toLowerCase().includes(
                            input
                        )
                    );

                    const temple = data.temples.filter(
                        item => item.name.toLowerCase().includes(
                            input
                        )
                    );

                    const beach = data.beaches.filter(
                        item => item.name.toLowerCase().includes(
                            input
                        )
                    );

                    const city = [];
                    data.countries.forEach(
                        countryItem => {
                            if (
                                countryItem.cities && Array.isArray(
                                    countryItem.cities
                                )
                            ) {
                                const cities = countryItem.cities.filter(
                                    item => item.name.toLowerCase().includes(
                                        input
                                    )
                                );
                                city.push(
                                    ...cities
                                );
                            }
                        }
                    );

                    if (
                        country
                    ) {
                        console.log(
                            'Countries:',
                            country
                        );
                        resultDiv.innerHTML = country.name;
                    }
                    
                    if (
                        temple
                    ) {
                        console.log(
                            'Temples:', 
                            temple
                        );
                    }
                    
                    if (
                        beach
                    ) {
                        console.log(
                            'Beaches:',
                            beach
                        )
                    }
                    
                    if (
                        city
                    ) {
                        console.log(
                            'Cities:',
                            city
                        )
                    }
            }
        )
        .catch(
                error => {
                    console.error(
                        'Error fetching data:', 
                        error
                    );
            }
        );
}
