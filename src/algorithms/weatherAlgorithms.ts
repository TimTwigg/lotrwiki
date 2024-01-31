import { d20, d4 } from "./utilities";

export type Region = {
    name: string,
    terrain: "valley" | "mountains" | "foothills" | "forest" | "tundra" | "desert" | "oceanside" | "lake" | "plains" | "plateau"
}

export const REGIONS: Region[] = [
    {
        name: "Dorwinion",
        terrain: "lake"
    },
    {
        name: "Folds of Rohan",
        terrain: "valley"
    },
    {
        name: "Lonely Mountain",
        terrain: "lake"
    },
    {
        name: "Mirkwood",
        terrain: "forest"
    },
    {
        name: "Misty Mountains",
        terrain: "mountains"
    },
    {
        name: "Misty Mountain Foothills",
        terrain: "foothills"
    },
    {
        name: "Plains of Rohan",
        terrain: "plains"
    },
    {
        name: "Rivendell",
        terrain: "valley"
    },
    {
        name: "Vales of Anduin",
        terrain: "valley"
    },
    {
        name: "Wold",
        terrain: "plateau"
    }
]

export const SEASONS: string[] = [
    "Winter",
    "Spring",
    "Summer",
    "Fall"
]

export function setRandomWeather(region: string, season: string) {
    if (region == "Region" || season == "Season") return "No Region or Season Selected";
    let temp = null;
    let wind = null;
    let precipitation = null;

    // temp
    let x = d20();
    if (x < 5) temp = "cold";
    else if (x < 16) temp = "normal";
    else temp = "hot";

    // wind
    x = d20();
    if (x < 12) wind = "no wind";
    else if (x < 17) wind = "light winds";
    else wind = "strong winds";

    // precipitation
    x = d20();
    if (zone == "oceanside" || zone == "lake") x += 3; // precipitation is more likely nearby large bodies of water
    else if (zone == "desert") x -= 5; // precipitation is less likely in dry zones
    if (x < 12) precipitation = "clear skies";
    else if (x < 17) precipitation = "light rain";
    else precipitation = "heavy rain";

    var zone = REGIONS.find(r => r.name == region)?.terrain;

    // no hot in mountains in winter
    if (season == "Winter" && (zone == "mountains" || zone == "foothills" || zone == "tundra")) {
        if (temp == "normal") temp = "cold";
        else if (temp == "hot") temp = "normal";
        precipitation = precipitation.replace("rain", "snow");
    }

    // adjust temp and set snow instead of rain for hot and cold conditions.
    if (temp != "normal") {
        var mod = d4() * 10;
        // hot -> extremely hot conditions:
        // - hot + (high mod or summer)
        // - hot region + fairly high mod
        if (temp == "hot" && (zone == "desert" || mod == 40 ||
        (mod == 30 && season == "Summer")) && zone != "oceanside") {
            temp = "extremely hot";
        }

        // cold -> extremely cold conditions:
        // - cold + (high mod or winter)
        // - cold + cold region
        else if (temp == "cold" && // it's cold
        (zone == "mountains" || zone == "foothills" || zone == "tundra" || mod == 40 || (mod == 30 && season == "Winter")) && // either it's very cold or it's a cold region
        (zone != "oceanside")) { // it's not a mild climate
            temp = "extremely cold";
            if (precipitation != "clear skies" &&
            (zone != "desert" && zone != "plains")) { // non-snow regions
                precipitation = precipitation.replace("rain", "snow");
            }
        }
    }

    // windier regions
    if (zone == "plateau" || zone == "tundra" || zone == "oceanside") {
        if (wind == "no wind") wind = "light winds";
        else if (wind == "light winds") wind = "strong winds";
    }

    var outString = "The weather is " + temp + " with " + wind + " and " + precipitation + ".";
    return outString;
}