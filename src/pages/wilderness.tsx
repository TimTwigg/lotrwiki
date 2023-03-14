import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./../styling/wilderness.css"

var init = false;

type Region = {
    name: string,
    terrain: "valley" | "mountains" | "foothills" | "forest" | "tundra" | "desert"
}

const REGIONS: Region[] = [
    {
        name: "Rivendell",
        terrain: "valley"
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

function d4() {
    return Math.ceil(Math.random() * 4);
}

function d20() {
    return Math.ceil(Math.random() * 20);
}

function setUpRegions() {
    let selector = document.getElementById("region") as HTMLSelectElement;
    for (let r of REGIONS) {
        let child = document.createElement("option");
        child.value = r.name;
        child.text = r.name;
        selector.appendChild(child);
    }
    init = true;
}

function getValueFromSelect(id:string): string {
    let selector = document.getElementById(id) as HTMLSelectElement;
    return selector.options[selector.selectedIndex].value;
}

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
    else if (x < 18) temp = "hot";
    else temp = "cold";
    // wind
    x = d20();
    if (x < 15) wind = "no wind";
    else if (x < 18) wind = "light winds";
    else wind = "strong winds";
    // precipitation
    x = d20();
    if (x < 15) precipitation = "clear skies";
    else if (x < 18) precipitation = "light rain";
    else precipitation = "heavy rain";

    if (temp != "normal") {
        var zone = REGIONS.find(r => r.name == region)?.terrain;
        var mod = d4() * 10;
        if (temp == "hot" && (zone == "desert" || mod == 40 ||
        (mod == 30 && season == "Summer"))) {
            temp = "extremely hot";
        }
        else if (temp == "cold" && 
        (zone == "mountains" || zone == "foothills" ||
        zone == "tundra" || mod == 40 || (mod == 30 && season == "Winter"))) {
            temp = "extremely cold";
        }
    }

    var outString = "The weather is " + temp + " with " + wind + " and " + precipitation + ".";
    document.getElementById("generatedWeather")!.innerText = outString;
}

const WildernessPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "Wilderness">
            <div>
                <h1>Wilderness Survival</h1>
                <hr/>
                <p>
                    The DMG specifies random tables for generating random wilderness survival conditions such as
                    weather, foraging, getting lost, etc. Here are those same tables automated to generate random conditions.
                </p>
                <div className = "contentLinks">
                    <AnchorLink to = "/wilderness#generators">Generators</AnchorLink>
                    <AnchorLink to = "/wilderness#weather">Weather</AnchorLink>
                    <AnchorLink to = "/wilderness#foraging">Foraging</AnchorLink>
                    {/* <AnchorLink to = "/wilderness#"></AnchorLink> */}
                </div>
                <hr/>

                <h3 id = "generators">Random Generators</h3>
                <h5>Weather</h5>
                <div className = "six columns offset-by-one column">
                    <select id = "region" defaultValue = {"Region"} onClick = {e => {if (!init) setUpRegions()}}>
                        <option value = "Region" disabled>Region</option>
                    </select> in <select id = "season" defaultValue = {"Season"}>
                        <option value = "Season" disabled>Season</option>
                        <option value = "Winter">Winter</option>
                        <option value = "Spring">Spring</option>
                        <option value = "Summer">Summer</option>
                        <option value = "Fall">Fall</option>
                    </select>
                    <p id = "generatedWeather" className = "output"></p>
                </div>
                <button id = "generate" className = "four columns" onClick = {setRandomWeather}>Generate Weather</button>
                <hr/>

                <h3 id = "weather">Weather</h3>
                <p>
                    The random weather tables from the <a href = "https://www.dndbeyond.com/sources/dmg/adventure-environments#Weather" target = "_blank">DMG</a>:
                </p>
                <table className = "nine columns offset-by-one column">
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
                <table className = "nine columns offset-by-one column">
                    <thead>
                        <tr>
                            <th>d20</th>
                            <th>Wind</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1-14</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>15-17</td>
                            <td>Light</td>
                        </tr>
                        <tr>
                            <td>18-20</td>
                            <td>Strong</td>
                        </tr>
                    </tbody>
                </table>
                <table className = "nine columns offset-by-one column">
                    <thead>
                        <tr>
                            <th>d20</th>
                            <th>Precipitation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1-14</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>15-17</td>
                            <td>Light rain or light snowfall</td>
                        </tr>
                        <tr>
                            <td>18-20</td>
                            <td>Heavy rain or heavy snowfall</td>
                        </tr>
                    </tbody>
                </table>
                <hr/>

                <h3 id = "foraging">Foraging</h3>
                <p>
                    The <a href = "https://www.dndbeyond.com/sources/dmg/adventure-environments#Foraging" target = "_blank">DMG</a>
                    describes foraging as follows: <br/>
                    Characters can gather food and water as the party travels at a normal or slow pace. A foraging
                    character makes a Wisdom (Survival) check whenever called for by the DM, with the DC determined
                    by the abundance of food and water in the region.
                </p>
                <table className = "nine columns offset-by-one column">
                    <thead>
                        <tr>
                            <th>DC</th>
                            <th>Food and Water Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td>Abundant food and water sources</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Limited food and water sources</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Very little, if any, food and water sources</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default WildernessPage;

export const Head: HeadFC = () => (
    <title>Wilderness</title>
);
