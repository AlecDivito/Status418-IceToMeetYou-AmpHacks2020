interface ILocation {
    title: string,
    picture: string,
}

const Location: { [key: number]: ILocation[] } = {
    7: [
        { title: "White Oaks, London ON", picture: "/static/images/whiteoaks.png" },
        { title: "Bostwick, London ON", picture: "/static/images/whiteoaks.png" },
        { title: "High Land, London ON", picture: "/static/images/whiteoaks.png" }
    ]
};

function GetLocation(locationId: number): ILocation[] {
    let location = Location;
    if (location[locationId] === undefined) {
        return [];
    }
    let locations = location[locationId];
    // Shuffle array
    const shuffled = locations.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    return shuffled.slice(0, 3);
}

export default GetLocation;