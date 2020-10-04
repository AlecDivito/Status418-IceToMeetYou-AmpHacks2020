import ILocation from "../models/ILocation";

const Location: { [key: number]: ILocation[] } = {
    7: [
        { title: "White Oaks, London ON", picture: "/Status418-IceToMeetYou-AmpHacks2020/static/images/whiteoaks.png" },
        { title: "Bostwick, London ON", picture: "/Status418-IceToMeetYou-AmpHacks2020/static/images/whiteoaks.png" },
        { title: "High Land, London ON", picture: "/Status418-IceToMeetYou-AmpHacks2020/static/images/whiteoaks.png" }
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