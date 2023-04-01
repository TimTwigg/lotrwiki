import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { AnchorLinkBar } from "../components/linkBar";
import { d4, d20, getValueFromSelect } from "../algorithms/utilities";
import "./../styling/weather.scss";

type Region = {
    name: string,
    terrain: "valley" | "mountains" | "foothills" | "forest" | "tundra" | "desert" | "oceanside" | "lake" | "plains"
}

const REGIONS: Region[] = [
    {
        name: "Dorwinion",
        terrain: "lake"
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
        name: "Rivendell",
        terrain: "valley"
    },
    {
        name: "Rohan",
        terrain: "plains"
    },
    {
        name: "Vales of Anduin",
        terrain: "valley"
    }
]

const SEASONS: string[] = [
    "Winter",
    "Spring",
    "Summer",
    "Fall"
]

function setRandomWeather() {
    let region = getValueFromSelect("region");
    let season = getValueFromSelect("season");
    if (region == "Region" || season == "Season") {
        document.getElementById("generatedWeather")!.innerText = "No Region or Season Selected";
        return;
    }
    let temp = null;
    let wind = null;
    let precipitation = null;
    // temp
    let x = d20();
    if (x < 15) temp = "normal";
    else if (x < 18) temp = "cold";
    else temp = "hot";
    // wind
    x = d20();
    if (x < 13) wind = "no wind";
    else if (x < 18) wind = "light winds";
    else wind = "strong winds";
    // precipitation
    x = d20();
    if (zone == "oceanside" || zone == "lake") x += 3; // precipitation is more likely nearby large bodies of water
    else if (zone == "desert") x -= 3; // precipitation is less likely in dry zones
    if (x < 13) precipitation = "clear skies";
    else if (x < 18) precipitation = "light rain";
    else precipitation = "heavy rain";

    var zone = REGIONS.find(r => r.name == region)?.terrain;

    // no hot in mountains in winter
    if (season == "Winter" && (zone == "mountains" || zone == "foothills" || zone == "tundra")) {
        if (temp == "normal") temp = "cold";
        else if (temp == "hot") temp = "normal";
        precipitation = precipitation.replace("rain", "snow");
    }

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
        else if (temp == "cold" && 
        (zone == "mountains" || zone == "foothills" ||
        zone == "tundra" || mod == 40 || (mod == 30 && season == "Winter")) && zone != "oceanside") {
            temp = "extremely cold";
            if (precipitation != "clear skies") precipitation = precipitation.replace("rain", "snow");
        }
    }

    var outString = "The weather is " + temp + " with " + wind + " and " + precipitation + ".";
    document.getElementById("generatedWeather")!.innerText = outString;
}

const WeatherPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "Weather">
            <h1>Weather</h1>
            <hr/>
            <p>
                Using the <a href = "https://www.dndbeyond.com/sources/dmg/adventure-environments#Weather" target = "_blank">DMG</a>,
                random weather can be generated. I have fine-tuned the generation a little to take zones such as mountains,
                valleys, and deserts which have different weather scales, as well as seasons, into account. But the application
                of weather in terms of the mechanics involved in RAW is still lacklustre. This alternate system of weather
                mechanics is adapted from <a href = "https://rpgbot.net/dnd5/dungeonmasters/temperature-and-weather-rules/" target = "_blank">
                this post</a>. The changes I made were mostly to allow for the greater impact of exhaustion in a game where long rests are
                exceedingly rare.
            </p>
            <AnchorLinkBar hideWhenSmall = {true} pageTitle = "Weather" links = {[
                { name: "Generator", url: "/weather#generator" },
                { name: "Mechanics", url: "/weather#mechanics" },
                { name: "Example", url: "/weather#example" },
                { name: "DMG Tables", url: "/weather#tables" }
            ]}/>
            <hr/>

            <h3 id = "generator">Random Weather Generator</h3>
            <div className = "six columns offset-by-one column">
                <select id = "region" defaultValue = {"Region"}>
                    <option value = "Region" disabled>Region</option>
                    {
                        REGIONS.map((v, i) => <option key = {i} value = {v.name}>{v.name}</option>)
                    }
                </select> in <select id = "season" defaultValue = {"Season"}>
                    <option value = "Season" disabled>Season</option>
                    {
                        SEASONS.map((v, i) => <option key = {i} value = {v}>{v}</option>)
                    }
                </select>
            </div>
            <p id = "generatedWeather" className = "output seven columns offset-by-one column"></p>
            <button id = "generate" className = "three columns" onClick = {setRandomWeather}>Generate Weather</button>
            <hr/>

            <h3 id = "mechanics">Mechanics</h3>
            <p>
                This may seem like a lot of information. The system is simpler than it looks though. The first table is the
                important one. It breaks weather into temperature brackets, and sets a penalty for being in that bracket. The
                rest of the tables describe different weather- and character-related things which affect your experience of the
                temperature, mostly by moving you up or down a bracket. <br/>
                I didn't come up with this system. Credit goes to <a href = "https://rpgbot.net/dnd5/dungeonmasters/temperature-and-weather-rules/" target = "_blank">
                this post</a>. <br/>
                <br/>
                Hot and Cold brackets have a DC and damage time scale. Players in that bracket must make a daily Constitution saving
                throw against the given DC or get 1 level of exhaustion. Every given time unit, they take 1d8 heat/cold damage.
            </p>
            <table className = "eleven columns tableCenter">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Temperature</th>
                        <th>Description</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Incredibly Hot</td>
                        <td>140F or hotter</td>
                        <td>Lethally hot without precautions</td>
                        <td>Con Save DC: 18* <br/>Damage Time Scale: 5 minutes</td>
                    </tr>
                    <tr>
                        <td>Extremely Hot</td>
                        <td>126F to 139F</td>
                        <td>Heat stroke is likely</td>
                        <td>Con Save DC: 16* <br/>Damage Time Scale: 10 minutes</td>
                    </tr>
                    <tr>
                        <td>Severely Hot</td>
                        <td>104F to 125F</td>
                        <td>Heat exhaustion likely, heat stroke possible</td>
                        <td>Con Save DC: 14* <br/>Damage Time Scale: 30 minutes</td>
                    </tr>
                    <tr>
                        <td>Hot</td>
                        <td>91F to 103F</td>
                        <td>Light clothing recommended</td>
                        <td>Con Save DC: 12 <br/>Damage Time Scale: 1 hour</td>
                    </tr>
                    <tr>
                        <td>Warm</td>
                        <td>80F to 90F</td>
                        <td>Comfortable</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Comfortable</td>
                        <td>60F to 79F</td>
                        <td>Comfortable</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Cool</td>
                        <td>33F to 59F</td>
                        <td>Comfortable</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Cold</td>
                        <td>0F to 32F</td>
                        <td>Water freezes, frostbite is possible</td>
                        <td>Con Save DC: 12 <br/>Damage Time Scale: 1 hour</td>
                    </tr>
                    <tr>
                        <td>Severely Cold</td>
                        <td>-20F to -1F</td>
                        <td>Frostbite likely without precautions</td>
                        <td>Con Save DC: 14 <br/>Damage Time Scale: 30 minutes</td>
                    </tr>
                    <tr>
                        <td>Extremely Cold</td>
                        <td>-79F to -21F</td>
                        <td>Spit goes "clink"</td>
                        <td>Con Save DC: 16 <br/>Damage Time Scale: 10 minutes</td>
                    </tr>
                    <tr>
                        <td>Incredibly Cold</td>
                        <td>-80F or colder</td>
                        <td>Lethally cold without precautions</td>
                        <td>Con Save DC: 18 <br/>Damage Time Scale: 5 minutes</td>
                    </tr>
                </tbody>
            </table>
            <p>
                * Creatures must drink a double portion of water or make the save with disadvantage.
            </p>

            <h4>Modifiers</h4>
            <p>
                The following tables describe different modifiers to the above table. To move a step "up" means towards hotter brackets, and "down"
                means towards colder brackets.
            </p>
            <table className = "six columns fixMargin">
                <thead>
                    <tr>
                        <th>Precipitation</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Light rain, gentle snowfall</td>
                        <td>Move one step down, disadvantage on Perception checks at a distance</td>
                    </tr>
                    <tr>
                        <td>Heavy rain or snowfall</td>
                        <td>Move two steps down, everything is lightly obscured, disadvantage on Perception checks that rely on sight, and extinguishes open flames.</td>
                    </tr>
                </tbody>
            </table>
            <table className = "six columns fixMargin">
                <thead>
                    <tr>
                        <th>Wind</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Low</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Moderate</td>
                        <td>Move one step down</td>
                    </tr>
                    <tr>
                        <td>Strong</td>
                        <td>Move two steps down, disadvantage on ranged weapon attacks and Perception checks that rely on hearing, extinguishes open flames, and can cause sand, snow, or dust to obscure vision.</td>
                    </tr>
                </tbody>
            </table>
            <table className = "six columns fixMargin">
                <thead>
                    <tr>
                        <th>Precautions</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cooling apparatus</td>
                        <td>Move one step down</td>
                    </tr>
                    <tr>
                        <td>Cold food/drink</td>
                        <td>Advantage on hot Con saves, disadvantage on cold Con saves</td>
                    </tr>
                    <tr>
                        <td>Extended shade</td>
                        <td>Move one step down</td>
                    </tr>
                    <tr>
                        <td>Natural adaptations</td>
                        <td>Move one step, ignore humidity, *</td>
                    </tr>
                    <tr>
                        <td>Extended direct sun</td>
                        <td>Move one step up</td>
                    </tr>
                    <tr>
                        <td>Warming apparatus</td>
                        <td>Move one step up</td>
                    </tr>
                    <tr>
                        <td>Hot food/drink</td>
                        <td>Advantage on cold Con saves, disadvantage on hot Con saves</td>
                    </tr>
                </tbody>
            </table>
            <table className = "six columns fixMargin">
                <thead>
                    <tr>
                        <th>Humidity</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Low</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Medium</td>
                        <td>Move one step away from comfortable</td>
                    </tr>
                    <tr>
                        <td>High</td>
                        <td>Move two steps away from comfortable</td>
                    </tr>
                </tbody>
            </table>
            <table className = "six columns fixMargin">
                <thead>
                    <tr>
                        <th>Clothing</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cold weather clothing</td>
                        <td>Move two steps up</td>
                    </tr>
                    <tr>
                        <td>Heavy armor</td>
                        <td>Move one step up</td>
                    </tr>
                    <tr>
                        <td>Heavy clothing</td>
                        <td>Move one step up</td>
                    </tr>
                    <tr>
                        <td>Light/no clothing</td>
                        <td>Move one step down</td>
                    </tr>
                    <tr>
                        <td>Hot weather clothing</td>
                        <td>Move two steps down</td>
                    </tr>
                </tbody>
            </table>
            <div className = "break"/>
            <p>
                * Determined by the DM.
            </p>
            <hr/>

            <h3 id = "example">Example</h3>
            <p>
                It is winter in the Misty Mountains, and the weather is extremely cold with light snowfall and moderate winds. Bob wants to cross the mountains,
                but he knows it's going to be cold so he prepares. He is wearing cold weather clothing, and he is wearing his heavy armor for protection. Bob
                grew up in the Misty Mountains and is accustomed to cold, so the DM rules that he takes half damage from cold. Feeling cold, Bob stops for lunch
                in a cave and makes a fire. He drinks hot soup, takes a short rest, and then continues. <br/>
                <br/>
                The temperature is Extremely Cold, the light snowfall moves it down a step, and the moderate winds move it down another step. Bob's clothing
                moves him up two steps and his armor moves him up one step. The fire at lunch is a warming apparatus and moves him up another step. This places Bob
                in the Cold bracket, and he will make a Constitution saving throw against a DC 12, and take 1d8 cold damage every hour, resulting in a total of 8d8
                damage over his 8-hour day's march! Fortunately, he takes half damage from the cold, and his hot soup means that he will make the Constitution saving
                throw with advantage. <br/>
                <br/>
                The next day, the winds continue, but the sun comes out. Without moving down a step from snowfall, Bob ends up in the Cool bracket, meaning that,
                although crossing the Misty Mountains in winter is still not very bright, Bob will make the days march with no negative effects.
            </p>
            <hr/>

            <h3 id = "tables">DMG Tables</h3>
            <p>
                The random weather tables from the <a href = "https://www.dndbeyond.com/sources/dmg/adventure-environments#Weather" target = "_blank">DMG</a>:
            </p>
            <table className = "nine columns offset-by-one column diceTable">
                <thead>
                    <tr>
                        <th>d20</th>
                        <th>Temperature</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1-14</td>
                        <td>Normal for the season</td>
                    </tr>
                    <tr>
                        <td>15-17</td>
                        <td>1d4 x 10 degrees Fahrenheit colder than normal</td>
                    </tr>
                    <tr>
                        <td>18-20</td>
                        <td>1d4 x 10 degrees Fahrenheit hotter than normal</td>
                    </tr>
                </tbody>
            </table>
            <table className = "nine columns offset-by-one column diceTable">
                <thead>
                    <tr>
                        <th>d20</th>
                        <th>Wind</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1-12</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>13-17</td>
                        <td>Light</td>
                    </tr>
                    <tr>
                        <td>18-20</td>
                        <td>Strong</td>
                    </tr>
                </tbody>
            </table>
            <table className = "nine columns offset-by-one column diceTable">
                <thead>
                    <tr>
                        <th>d20</th>
                        <th>Precipitation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1-12</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>13-17</td>
                        <td>Light rain or light snowfall</td>
                    </tr>
                    <tr>
                        <td>18-20</td>
                        <td>Heavy rain or heavy snowfall</td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    );
}

export default WeatherPage;

export const Head: HeadFC = () => <title>Weather</title>;