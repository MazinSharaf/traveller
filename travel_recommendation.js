function clearSearch() {
    inputElement = document.getElementById(
        'searchInput'
    ).value = '';
    
    resultDiv = document.getElementById(
        'result'
    ).innerHTML = '';
}


function searchDestination() {
    const input = document.getElementById(
        'searchInput'
    ).value.toLowerCase();

    const resultDiv = document.getElementById(
        'result'
    );

    if (
        input != ''
    ) {
        fetch (
            'travel_recommendation_api.json'
        )
            .then (
                response => response.json()
            )

            .then (
                    data => {
                        resultDiv.innerHTML = ``;
                        // const country = data.countries.filter(
                        //     item => item.name.toLowerCase().includes(
                        //         input
                        //     ) || (
                        //         item.description && item.description.toLowerCase().includes(
                        //             input
                        //         )
                        //     )
                        // );

                        const temple = data.temples.filter(
                            item => item.name.toLowerCase().includes(
                                input
                            ) || (
                                item.description && item.description.toLowerCase().includes(
                                    input
                                )
                            )
                        );

                        const beach = data.beaches.filter(
                            item => item.name.toLowerCase().includes(
                                input
                            ) || (
                                item.description && item.description.toLowerCase().includes(
                                    input
                                )
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
                                        ) || (
                                            item.description && item.description.toLowerCase().includes(
                                                input
                                            )
                                        )
                                    );

                                    city.push(
                                        ...cities
                                    )
                                }
                            }
                        );

                        // if (
                        //     country.length > 0
                        // ) {
                        //     console.log(
                        //         'Countries:',
                        //         country
                        //     );
                        //     for (
                        //         let i = 0;
                        //         i < country.length;
                        //         i++
                        //     ) {
                        //         if (
                        //             country[i].cities && Array.isArray(
                        //                 country[i].cities
                        //             )
                        //         ) {
                        //                 resultDiv.innerHTML += `<h1>${country[i].cities[i].name}</h1><br>`;
                        //                 // resultDiv.innerHTML += `<img src=${country[0].cities[i].imageUrl}>`;
                        //                 resultDiv.innerHTML += `<h3>About:</h3><br>`;
                        //                 resultDiv.innerHTML += `<p>${country[i].cities[i].description}</p><br>`;
                        //         }
                        //     }
                        // }
                        
                        if (
                            temple.length > 0
                        ) {
                            console.log(
                                'Temples:', 
                                temple
                            );
                            for (
                                i = 0;
                                i < temple.length;
                                i++
                            ) {
                                resultDiv.innerHTML += `<h1>${temple[i].name}</h1><br>`;
                                // resultDiv.innerHTML += `<img src=${temple[i].imageUrl}>`;
                                resultDiv.innerHTML += `<h3>About:</h3><br>`;
                                resultDiv.innerHTML += `<p>${temple[i].description}</p><br>`;
                            }
                        }
                        
                        if (
                            beach.length > 0
                        ) {
                            console.log(
                                'Beaches:',
                                beach
                            )
                            for (
                                i = 0;
                                i < beach.length;
                                i++
                            ) {
                                resultDiv.innerHTML += `<h1>${beach[i].name}</h1><br>`;
                                // resultDiv.innerHTML += `<img src=${beach[i].imageUrl}>`;
                                resultDiv.innerHTML += `<h3>About:</h3><br>`;
                                resultDiv.innerHTML += `<p>${beach[i].description}</p><br>`;
                            }
                        }
                        
                        if (
                            city.length > 0
                        ) {
                            console.log(
                                'Cities:',
                                city
                            )
                            for (
                                i = 0;
                                i < city.length;
                                i++
                            ) {
                                resultDiv.innerHTML += `<h1>${city[i].name}</h1><br>`;
                                // resultDiv.innerHTML += `<img src=${temple[i]imageUrl}>`;
                                resultDiv.innerHTML += `<h3>About:</h3><br>`;
                                resultDiv.innerHTML += `<p>${city[i].description}</p><br>`;
                            }
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
}
