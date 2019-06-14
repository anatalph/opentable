# Technical Questions

- How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
> I've spent around 3hrs coding the test. 
> If I were given more time, I would like to add more functionalities that I think will make the application more user friendly. 
> For example, I would like to make a popup so that when the user clicks on the image it will display the location using google map. 
> I also would like to add a feature to be able to rearrange the cards in list view and show each locations pin in google map. 
> I also would like to add a filter and show only results that I want.

- What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

> To able to return the data without the additional markup

```javascript
const RestaurantList = ({ results }) => {
    return (
        <div className='card-columns'>
            {
                results.map((restaurant) => (
                    <RestaurantCard restaurant={restaurant} key={restaurant.id} />
                ))
            }
        </div>
    )
}
```

- How would you track down a performance issue in production? Have you ever had to do this?

> For components, I would profile the component performance against staging or development so that I can have a baseline and then I will decide on how can I improve it.

- How would you improve the API that you just used?

> I would add error payloads, so that I would know the issue right away.

- Please describe yourself using JSON.

```json
{
    "basics": {
        "name": "Angelo Natal",
        "email": "natal.angelo@gmail.com",
        "location": {
            "city": "Mississauga",
            "province": "Ontario",
            "country": "Canada"
        }
    },
    "skills": [{
        "name": "Web Developer",
        "keywords": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    }],
    "interest": [{
        "name": "Basketball",
        "keywords": [
            "NBA",
            "NCAA"
        ]
    }],
    "volunteer": [{
        "organization": "Orphaned Starfish Foundation"
    }]
}
```


