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
                        <td>Ale of Strength</td>
                        <td>Your Strength and Constitution scores increase by 2, to a max of 20. You are poisoned. This lasts for 1 hour or until the poison wears off, whichever comes first</td>
                    </tr>
                    <tr>
                        <td>Athelas Salve</td>
                        <td>Heals 1d4 + 1 HP</td>
                    </tr>
                    <tr>
                        <td>Athelas Powder</td>
                        <td>Removes 1 level of exhaustion from a number of people equal to your proficiency bonus d4s</td>
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
                        <td>Kindler's Lace Tea</td>
                        <td>Reduces your Exhaustion level by 1, once per long rest</td>
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
                        <td>Malsya Extract</td>
                        <td>
                            Induces a sleepy state during which your movement speed is 10 ft, you cannot take reactions, and you can take either an
                            action, bonus action, or move each turn. You experience hallucinations. After 30 minutes, you fall into a deep sleep during
                            which you experience a vision and pee yourself. The unconsciousness lasts for 24 hours
                        </td>
                    </tr>
                    <tr>
                        <td>Passiflora Flowers</td>
                        <td>Induces a state of calmness and lethargy, suppressing emotions. Ends any effect causing you to be Frightened. You also feel generally friendly towards those around you</td>
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
                        <td>Traveler's Aid</td>
                        <td>Gain Advantage on Constitution saving throws for 3 days</td>
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
                            temporary hit points. This lasts for 3 hours
                        </td>
                    </tr>
                    <tr>
                        <td>Kraftrank</td>
                        <td>Beornings</td>
                        <td>
                            Invigorates the body. Your movement speed increases by 10 feet and you can take an extra action each turn (only the Attack (one weapon attack only),
                            Dash, Disengage, Dodge, Hide, or Use an Object actions can be used). This lasts for 1 minute, after which the potion wears off and you gain 1 level of
                            exhaustion. If you take the Dodge action while under the effects of Kraftrank, enemies have disadvantage to you and you additionally gain a bonus 1 to
                            your AC if your Dexterity modifier is at least +2
                        </td>
                    </tr>
                    <tr>
                        <td>Frenzy Potion</td>
                        <td>The Toft</td>
                        <td>
                            A cocktail of stimulants that speeds up your body, at a cost. Your movement speed increases by 30 ft, and you can take an extra action, bonus action, and
                            reaction per turn. Lasts 24 seconds. When the potion wears off, you gain 4 levels of exhaustion and take 3d6 damage
                        </td>
                    </tr>
                    <tr>
                        <td>Orc Draught</td>
                        <td>Orcs</td>
                        <td>It hurts. I think it helps a little too though, unless Merry was just a really good actor...</td>
                    </tr>
                    <tr>
                        <td>Queenblossom Salve</td>
                        <td>Rohan</td>
                        <td>Heals 2d6 + 3 hit points and reduces temporary Shadow Points by 1. Can only be used once per Adventuring Phase</td>
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