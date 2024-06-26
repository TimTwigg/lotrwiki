import * as React from "react";
import { HeadFC, PageProps, Link } from "gatsby";
import Layout from "../components/layout";
import { AnchorLinkBar } from "../components/linkBar";

const RulesPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "          ">
            <h1>Rules</h1>
            <hr/>
            <p>
                The world of Middle Earth is a very different sort of world to the more common worldtypes D&D is played in, such as the ones described
                in the official source books. Mostly because absolute good and evil exist, and magic takes a very different form. As such, we are
                using a few optional rules from the DMG, as well as a bunch of homebrew table rules and mechanics. These make combat more interesting,
                and compensate for the otherwise-grity combo of no magical healing and rare long rests within the Adventures in Middle Earth system.
            </p>
            <AnchorLinkBar hideWhenSmall = {true} links = {[
                { name: "Combat Rules", url: "/rules#combatrules" },
                { name: "Critical Hits", url: "/rules#criticalhits" },
                { name: "Skill Check Successes", url: "/rules#skillchecks" },
                { name: "Encumbrance", url: "/rules#encumbrance" },
                { name: "Exhaustion", url: "/rules#exhaustion" },
                { name: "Dying", url: "/rules#dying" }
            ]}/>
            <p className = "tmargin">
                Note: Some mechanics require more involved descriptions, and as such get their own pages.
                Namely, these are the <Link to = "/calendar">Calendar</Link> and <Link to = "/weather">Weather</Link> pages.
            </p>
            <hr/>

            <h3 id = "combatrules">Combat Rules</h3>
            <p>
                These rules come mostly from the Dungeon Master's Workshop at the back of
                the <a href = "https://www.dndbeyond.com/sources/dmg/dungeon-masters-workshop" target = "_blank">DMG</a>. Some of them have been
                modified slightly to better fit our table. <br/><br/>
                Listed here: Healing Surges, Flanking, Climb onto a Bigger Creature, Disarm, Shove Aside, Overrun/Tumble, Reduced to 0 HP, and Give Ground. <br/>
            </p>
            <h5>Healing Surges</h5>
            <p>
                As an action, a character can use a healing surge and spend up to half their Hit Dice. The player can decide to spend an additional Hit
                Dice after each roll (up to half their level rounded down). A character who uses a healing surge can't do so again until they finish a
                short or long rest. <br/><br/>
                Under this optional rule, a character regains all spent Hit Dice at the end of a long rest. With a short rest, a character regains Hit
                Dice equal to his or her level divided by four (minimum of one die).
            </p>
            <h5>Flanking</h5>
            <p>
                If you attack an enemy, and an ally is within 5 feet of that enemy directly opposite you, you gain a +2 modifier to hit as the enemy struggles
                to keep track of both of you. The enemy must rely on sight for this to take effect.
            </p>
            <h5>Climb onto a Bigger Creature</h5>
            <p>
                If one creature wants to jump onto another creature, it can do so by grappling. A Small or Medium creature has little chance of making a
                successful grapple against a Huge or Gargantuan creature, however. As an alternative, a suitably large opponent can be treated as terrain
                for the purpose of jumping onto its back or clinging to a limb. After making any ability checks necessary to get into position and onto
                the larger creature, the smaller creature uses its action to make a Strength (Athletics) or Dexterity (Acrobatics) check contested by the
                target's Dexterity (Acrobatics) check. If it wins the contest, the smaller creature successfully moves into the target creature's space
                and clings to its body. <br/>
                While in the target's space, the smaller creature moves with the target and has advantage on attack rolls against it. <br/><br/>
                The smaller creature can move around within the larger creature's space, treating the space as difficult terrain. The larger creature's
                ability to attack the smaller creature depends on the smaller creature's location, and is left to your discretion. The larger creature can
                dislodge the smaller creature as an action—knocking it off, scraping it against a wall, or grabbing and throwing it—by making a Strength
                (Athletics) check contested by the smaller creature's Strength (Athletics) or Dexterity (Acrobatics) check. The smaller creature chooses
                which ability to use.
            </p>
            <h5>Disarm</h5>
            <p>
                A creature can use a weapon attack to knock a weapon or another item from a target's grasp. The attacker makes an attack roll contested
                by the target's Strength (Athletics) check or Dexterity (Acrobatics) check. If the attacker wins the contest, the attack causes no damage
                or other ill effect, but the defender drops the item. <br/> <br/>

                The attacker has disadvantage on its attack roll if the target is holding the item with two or more hands. The target has advantage on its
                ability check if it is larger than the attacking creature, or disadvantage if it is smaller.
            </p>
            <h5>Shove Aside</h5>
            <p>
                With this option, a creature uses the special shove attack from the Player's Handbook to force a target to the side, rather than away. The attacker
                has disadvantage on its Strength (Athletics) check when it does so. If that check is successful, the attacker moves the target 5 feet to a different
                space within its reach.
            </p>
            <h5>Overrun/Tumble</h5>
            <p>
                A creature can try to run through a hostile creature's space. As an action, the mover can either attempt to force its way through by overrunning
                the creature, or can try to tumble through by ducking and weaving past it. The mover must make a contested Strength (Athletics) check or
                Dexterity (Acrobatics) check. If the mover wins, it can move through the hostile creature's space once this turn. This does provoke opportunity
                attacks as normal.
            </p>
            <h5>Reduced to 0 HP</h5>
            <p>
                Being reduced to 0 hit points is a harrowing experience. If a character is reduced to 0 hit points (in combat or out of it), they must make a
                DC 15 Corruption saving throw against 1 shadow point. Additionally, they gain 1 level of exhaustion.
            </p>
            <h5>Give Ground</h5>
            <p>
                This rule was created by <a href = "https://www.brandesstoddard.com/2013/02/dd-next-design-idea-giving-ground/">Brandes Stoddard</a>. <br/>
                As a reaction, whenever you take damage from a melee weapon attack, you may move five feet away from that attacker in order to reduce the damage of the
                attack by a number of d6 equal to half your proficiency bonus (rounded down).
            </p>
            <ul>
                <li>
                    The attacker has the immediate option to move five feet to follow, though if the attacker has caused more than one opponent to Give Ground in
                    the same round of actions, he may follow only once.
                </li>
                <li>
                    If none of the three squares behind the defender that increase his distance from the attacker are legal destinations, he may not Give Ground
                    (even if he could otherwise pass through the square, such as when occupied by an ally).
                </li>
                <li>
                    The defender also may not Give Ground to move into difficult terrain. Situationally, the DM may find it appropriate to allow a character to
                    Give Ground with a move onto difficult terrain with a successful skill check (such as using Acrobatics to leap backward onto a table.)
                </li>
                <li>
                    If for any reason the move backward fails, the defender does not reduce the incoming damage.
                </li>
                <li>
                    A character may Give Ground in addition to being pushed, but not when knocked down, pulled, or teleported. The character must be able to move,
                    and (obviously) must also be able to take reactions.
                </li>
            </ul>
            <hr/>

            <h3 id = "criticalhits">Critical Hits</h3>
            <p>
                When a character scores a critical hit in combat, choose on of the following effects: <br/>
            </p>
            <ul>
                <li>
                    <b>Brutality:</b> Take the max damage of the weapon or spell attack, and roll the damage dice again.
                </li>
                <li>
                    <b>Hamstring</b> Your attack impedes the target's movement and opens a gaping wound. During the target's next turn, it takes 1d6 slashing damage for every 5ft it
                    chooses to move. Involuntary movement does not trigger this damage.
                </li>
                <li>
                    <b>Identify Weakness</b> You spot a gap in the target's defenses and call it out to allies. All allies within 10ft of the target are granted advantage on their next attack. If
                    an ally makes multiple attacks on their turn, only the first is made at advantage.
                </li> 
                <li>
                    <b>Knockdown</b> Your attack caught the target off balance. They are knocked prone.
                </li>
                <li>
                    <b>Menacing Strike</b> The confidence of your attack demoralizes the target. On its next turn, it spends all of its movement attempting to run from you.
                </li>
                <li>
                    <b>Stumble</b> The force of your critical attack stumbles the target. Its next roll (i.e., attack, ability check, or saving throw) is made at disadvantage.
                </li>
                <li>
                    <b>Swift Strike</b> The quickness of your attack has granted you an additional attack this turn. You may choose this effect only once per turn.
                </li>
            </ul>
            <hr/>

            <h3 id = "skillchecks">Skill Check Successes</h3>
            <p>
                Once more, the lack of direct magic can sometimes make things a little repetitive. Plus the question arises: If there are no spells, then
                how does the ambient magic of Middle Earth come into play? My answer, at least in part, is to use skill check success effects. <br/>
                If a player character more than succeeds on a skill check they are proficient in, they can trigger an effect. Different effects have different
                requirements and costs. <br/><br/>
                
                Note: most do not trigger necessarily on a natural 20, but on a roll of more than x. This reduces the likelihood of the scenario
                where someone with a -3 modifier to a skill somehow outdoes the other character with expertise who just rolled badly.
            </p>
            <h5>Inspire</h5>
            <p>
                Requirement: 20+ <br/>
                Describe how your success is inspiring to others. They must be able to hear, see, or otherwise detect your success. Allied creatures who
                hear/see/detect your success and with whom your description resonates gain inspiration.
            </p>
            <h5>Lose Shadow Point</h5>
            <p>
                Requirement: 25+ <br/>
                Describe how your success encourages your spirit and makes you feel that good will ultimately triumph. Remove 1 temporary shadow point.
            </p>
            <h5>Magical Effect</h5>
            <p>
                Requirement: 25+, or 20+ with a Wondrous Artefact. <br/>
                You may declare that you wish to spend Inspiration and a variable number of Hit Dice in order to succeed at something "impossible" by turning
                a successful skill check into a Magical Result. A Magical Result indicates that the outcome of the task not only surpassed all expectations but
                achieved something beyond your normal capabilities - in other words, a feat that could hardly be accomplished without magical aid. If you were
                not using a Wondrous Artefact, then you may trigger the effect, but the DM decides the outcome.
            </p>
            <hr/>

            <h3 id = "encumbrance">Encumbrance</h3>
            <p>
                If a player is carrying more than 8 times their Strength score, then their speed decreases by 10. <br/>
                If a player is carrying more than 12 times their Strength score, then their speed is decreased by 20, and they have disadvantage on skill checks,
                attack rolls, and saving throws made with Dexterity, Strength, and Constitution. <br/>
                If a player is dragging or pushing more than 15 times their Strength score, their movements speed drops to 5 ft. <br/>
                A player cannot move at all with more than 30 times their Strength score. <br/>
                A player cannot carry more than 15 times their Strength score on a journey.
            </p>
            <hr/>

            <h3 id = "exhaustion">Exhaustion</h3>
            <p>
                The exhaustion system is very important in this sort of low-magic campaign where things such as the serious injuries from the back of the DMG
                would be too debilitating due to the lack of magical healing. The sparsity of long rests also means that it narratively makes sense. But the
                5E exhaustion system is fairly debilitating. In order to use the exhaustion system to indicate weariness without making the game less fun for
                players, we are implementing a modified form of the One D&D exhaustion rules. <br/> <br/>

                Exhaustion is cumulative. There are 10 levels of exhaustion, and a character dies if they hit the 10th level. Whenever an exhausted character
                makes a d20 roll, they subtract their exhaustion level from the result. Additionally, an exhausted character's movement speed decreases by 5
                feet for every two levels of exhaustion, beginning at the first. Their movement speed cannot be decreased to less than 5 feet by exhaustion.
            </p>
            <hr/>

            <h3 id = "dying">Dying</h3>
            <p>
                The Dying condition was created by Jacob on his Youtube channel, XP to Level 3. <br/> <br/>
                When you drop to 0 hit points, you fall Prone and gain the Dying condition. At the start of each turn, you roll death saving throws as normal.
                If you start your turn Dying, you may use either your action, bonus action, or move action. Once you use one of these, your turn ends.
            </p>
            <ul>
                <li>If you use your action, you gain 3 levels of exhaustion.</li>
                <li>If you use your bonus action, you gain 1 level of exhaustion.</li>
                <li>If you use your reaction while Dying, you gain 1 level of exhaustion.</li>
            </ul>
            <p>
                While you have this condition, you cannot use any of your actions to stand up from Prone.
            </p>
        </Layout>
    );
}

export default RulesPage;

export const Head: HeadFC = () => <title>LOTRWiki | Rules</title>;