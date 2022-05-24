export const Country = [
  {
    Country: 'Denmark',
    Language: {},
    Search: {},
    City: [
      {
        City: 'Copenhagen',
        Destination: [
          {
            Attraction: [
              {
                Title: 'Tivoli Gardens',
                meta_description: 'Brief Description 155 - 160 character',
                Image: 'Image',
                Location: 'Location',
                Time: 'Date and Time',
                Price: 24,
                Rating: 3,
                Time_to_explore: '2.4 hours',
                Description: 'A long description of the attractions',
                status: 0, // Available, Closed, Temporary Closed, Permanently Closed
              },
            ],
            Events: [
              {
                Title: 'Copenhagen Carnival',
                meta_description: 'Brief Description 155 - 160 character',
                Image: 'Image',
                Location: 'Location',
                Time: 'Year, Month, Date and Time',
                Price: 800,
                Rating: 6,
                Time_spend: '2 hours',
                Description: 'A long description of the Event',
                status: 0, // Available, Closed, Temporary Closed, Permanently Closed
              },
            ],
            Cafe: [
              {
                Title: 'Copenhagen cafe',
                meta_description: 'Brief Description 155 - 160 character',
                Image: 'Image',
                Location: 'Location',
                Time: 'Year, Month, Date and Time',
                Price: 60,
                Rating: 6,
                Time_spend: '2 hours',
                Description: 'A long description of the cafe',
                status: 0, // Available, Closed, Temporary Closed, Permanently Closed
              },
            ],
          },
          {
            Planning: {
              Staying_location: 'Nyhavn',
              Recommended_hotel: [
                {
                  hotel_name: 'Raddisson',
                  hotel_website: 'raddisson.com',
                  hotel_price: 900,
                },
              ],
              Recommended_hostel: [
                {
                  hostel_name: 'Raddisson',
                  hostel_website: 'raddisson.com',
                  hostel_price: 200,
                },
              ],
            },
          },
        ],
      },
    ],
  },
];
