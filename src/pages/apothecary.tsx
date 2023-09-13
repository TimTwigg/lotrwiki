import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { AnchorLinkBar } from "../components/linkBar";

const ApothecaryPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "    ">
            <h1>Apothecary</h1>
            <hr/>

            <p>
                Middle Earth has an abundance of herbs and medicinal plants of many different kinds. The apothecaries of Men, Dwarves, Elves, and even
                Orcs have created useful potions, salves, and poultices from these plants, infusing them with the latent magic of the world. These
                potions, salves, and poultices are often the difference between victory and defeat, wisdom and corruption, life and death.
                <br/><br/>
                This is the Middle Earth Apothecary.
            </p>
            <AnchorLinkBar hideWhenSmall = {true} links = {[
                { name: "Common Remedies", url: "/apothecary#common" },
                { name: "Cultural Remedies", url: "/apothecary#cultural" }
            ]}/>
            <hr/>

            <h3 id = "common">Common Remedies</h3>
            <p>
                Apothecaries around the world are constantly experimenting with different mixtures and preparation techniques, discovering and
                rediscovering new remedies. These are the commonly known products of the trade.
            </p>
            <table className = "infotable">
                <tbody>
                    <tr>
                        <td>Athelas Salve</td>
                        <td>Heals 1d4 + 1 HP</td>
                    </tr>
                    <tr>
                        <td>Athelas Powder</td>
                        <td>Removes 1 level of exhaustion from a number of people equal to your proficiency bonus</td>
                    </tr>
                    <tr>
                        <td>Hagweed Potion</td>
                        <td>Advantage on Corruption Saving throws for a week</td>
                    </tr>
                    <tr>
                        <td>Hagweed Paste</td>
                        <td>Smoking cures 1 Shadow Point per year</td>
                    </tr>
                    <tr>
                        <td>Kingscup Bracelet</td>
                        <td>Lucky for 1d4 + 1 days (Lucky: re-roll natural 1s on the d20)</td>
                    </tr>
                    <tr>
                        <td>Kingscup Poultice</td>
                        <td>Cures poison and heals all damage done by that poison</td>
                    </tr>
                    <tr>
                        <td>Red Water Lily Potion</td>
                        <td>+2 damage on melee attacks for 1 hour</td>
                    </tr>
                    <tr>
                        <td>Red Water Lily Syrup</td>
                        <td>+2 on attack and damage rolls for 1 hour, but gain 1 Shadow Point</td>
                    </tr>
                    <tr>
                        <td>Reedmace Salve</td>
                        <td>Recover 2 Hit Dice</td>
                    </tr>
                    <tr>
                        <td>Reedmace Powder</td>
                        <td>Allows you to go 3 days without food or rest, after which you gain 2 levels of exhaustion</td>
                    </tr>
                    <tr>
                        <td>Shadow-Thorn Potion</td>
                        <td>Advantage on Constitution Saving throws against poison for 1 hour</td>
                    </tr>
                    <tr>
                        <td>Shadow-Thorn Residue</td>
                        <td>Advantage on Dexterity (Stealth) checks for 3 days</td>
                    </tr>
                    <tr>
                        <td>White Water Lily Potion</td>
                        <td>Max any Hit Dice used over a night's rest</td>
                    </tr>
                    <tr>
                        <td>White Water Lily Cake</td>
                        <td>Allows you to gain the benefits of a long rest on a short rest night's sleep</td>
                    </tr>
                </tbody>
            </table>

            <h3 id = "cultural">Cultural Remedies</h3>
            <p>
                Apothecaries from some cultures have created unique remedies that are not widely known outside their sphere of influence.
            </p>
            <table className = "infotable">
                <tbody>
                    <tr>
                        <td>Dwarven Tonic</td>
                        <td>Dwarves</td>
                        <td>
                            Your eyesight sharpens and you have advantage on Perception checks in daylight, as well as gaining dark vision for 30 feet. You also gain 3d4
                            temporary hit points. This lasts for 3 hours.
                        </td>
                    </tr>
                    <tr>
                        <td>Kraftrank</td>
                        <td>Beornings</td>
                        <td>
                            Invigorates the body. Your movement speed increases by 10 feet and you can take an extra action each turn (only the Attack (one weapon attack only),
                            Dash, Disengage, Dodge, Hide, or Use an Object actions can be used). This lasts for 1 minute, after which the potion wears off and you gain 1 level of
                            exhaustion. If you take the dodge action while under the effects of Kraftrank, enemies have disadvantage to you and you additionally gain a bonus 1 to
                            your AC if your Dexterity modifier is at least +2.
                        </td>
                    </tr>
                    <tr>
                        <td>Orc Draught</td>
                        <td>Orcs</td>
                        <td>It hurts. I think it helps a little too though, unless Merry was just a really good actor...</td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    );
}

export default ApothecaryPage;

export const Head: HeadFC = () => (
    <title>Apothecary</title>
);