import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Layout from "../components/layout"
import 'react-tabs/style/react-tabs.css';
import { StaticImage } from "gatsby-plugin-image";

const CompanyPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "     ">
            <div>
                <h1>Annals of Freedom's Company</h1>
                <hr/>
                <p>
                    These annals document the journey of Freedom's Company through the Fourth Age of Middle Earth, as carefully established by historians of the Seventh Age.
                </p>
                <h5>Excerpt from <i>A Brief Analysis of the Early Fourth Age: Chapter 1</i> by Mori et al.</h5>
                <p>
                    We also analyze the storied accounts of notable figures of the Fourth Age. Whether history or fantasy, exaggerated beyond belief or accounts of an entirely
                    different world in the past; these legends are told widely enough to be worth investigating, and, at a bare minimum, hold the makings of an epic tale.
                </p>

                <Tabs>
                    <TabList>
                        <Tab>Freedom's Company</Tab>
                        <Tab>A Misgiving Start</Tab>
                        <Tab>A Gathering Storm</Tab>
                        <Tab>A Chronicle of Victory</Tab>
                        <Tab>Enemies of the Company</Tab>
                    </TabList>
                    <TabPanel>
                        <h5>Members of Freedom's Company</h5>
                        <p>
                            These are the members of the group: Freedom's Company.
                        </p>

                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/company/saelrain.png" alt = ""/> <br/>
                            <b><u>Saelrain Branastor Tânthalion</u></b> <br/>
                            Elf of Rivendell, aka Elfindell, Chil-Damuth, Smith and Warrior, Leader of Eregion
                        </span>
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/company/luthais.jpg" alt = ""/> <br/>
                            <b><u>Luthais</u></b> <br/>
                            Avari Elf, aka Crusader, Blackthorn of the East, Opponent of the Shadow, Redeemer of the Oppressed
                        </span>
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/company/theorynWithHorse.png" alt = ""/> <br/>
                            <b><u>Théoryn Silvertongue</u></b> <br/>
                            Human of Rohan, Daughter of Twisted Fate, Viol Extraordinaire, Bard and Storyteller Extroadinaire
                        </span>
                        <div className = "break"/>

                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/company/verlorener.png" alt = ""/> <br/>
                            <b><u>Verlorener Menëlrîn</u></b> <br/>
                            Elf of Die Jäger der Dunkelheit, Lost Daughter of Forgotten Fate, Sharpshooting Archer, Lady of Stars
                        </span>
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/company/arden.jpg" alt = ""/> <br/>
                            <b><u>Arden</u></b> <br/>
                            Dwarf of Erebor, Stoneheart, Weapons Expert, Advisor to the King, Leader of the Stonefists, Lord of Kazad-Dûm
                        </span>

                        <div className = "break"/>
                        <h5>Allies of Freedom's Company</h5>
                        <p>
                            Freedom's Company had several notable allies who fought with them for a time, but were not long-term members.
                        </p>
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/company/robinia.jpg" alt = ""/> <br/>
                            <b><u>Robinia Took</u></b> <br/>
                            Hobbit of Bree, Healer and Herbalist, Prancing Pony Beer Advocate, Journalist of the Wilds, Adventurer of Middle Earth, Ent-friend
                        </span>
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/company/vezenbaer.jpg" alt = ""/> <br/>
                            <b><u>Vezenbaer</u></b> <br/>
                            Beorning of Bärenburg, Daughter of Beormüd, Granddaughter of Beorn, Bearkin, Mighty Warrior, Dragon-slayer
                        </span>
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/company/ingold.jpg" alt = ""/> <br/>
                            <b><u>Ingold</u></b> <br/>
                            Human from the Far North, Healer and Scholar, Servant of the Sky and Water, Mysterious Wanderer, Wizard of Manwë and Ulmo
                        </span>
                        <div className = "break"/>

                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/company/horn.jpg" alt = ""/> <br/>
                            <b><u>Horn</u></b> <br/>
                            Rider of Rohan, Wandering Farmer-turned-Warrior, Oathkeeper
                        </span>

                        <hr/>
                        <h5>Image Disclaimer</h5>
                        <p>
                            Most images on this page are AI generated.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h5>Excerpt from <i>Chapter 7.12.1</i></h5>
                        <p>
                            As mentioned briefly in the overview in Chapter 7.1, Freedom's Company was remarkable in its seeming ability to defy all odds. Many details of the group's members are lost
                            to time, particularly as much of the lore included in the legends is unsubstantiated and most likely forms the narrative inventions of countless generations of
                            storytellers. Some details, however, are recorded widely and accurately enough to be accepted as historical fact. Here follows a brief analysis of the group's members,
                            deeds, and end.
                            <br/><br/>
                            Historians generally agree that the first members to join together were the elves, at the time known simply as Luthais and Saelrain. Luthais' past is almost entirely
                            lost; that he came from the east and was driven by some form of vision is all that can be reliably established. Whether he truly experienced a prophetic vision or
                            was merely mad is debated. Some have speculated that he was more than he seemed, commonly that he was one of the Noldor sent back to Middle Earth by the Valar, but
                            this tale in particular is unlikely. Valinor was removed from the realms of Middle Earth long prior, and all reliable accounts agree that the first to successfully
                            leave Valinor and return to the world was the historian, Aelfwine, several thousand years after. Saelrain, however, is less of a mystery. The warrior elf came from
                            Rivendell, driven out by the shame of his past failure. The general details of his early life told in the stories are fairly accurate, and as such will not be included
                            here, though we include them in the appendices.
                            <br/><br/>
                            These two elves are purported to have met in Thranduil's Halls. Both outcasts of the woodland society, they bonded and left two years later for Esgaroth, the generally
                            accepted formal beginning point for the group. Accounts usually present Théoryn Silvertongue as the first to join the two elves. This is most likely due to her role in
                            spreading the tales of their deeds. Regardless of this ongoing debate, Théoryn, Robinia, and Vezenbaer joined at some time before the group left the town. The details
                            of Théoryn's life are perhaps of all the companions known best, again most likely due to her role as a storyteller, and included in the appendices. The hobbit,
                            Robinia Took (also widely known due to the later publication of her journals), is something of a children's hero. The small hobbit who broke with her people's traditions
                            of peace and contentment and made a life of adventure is the idol of many a small child who imagines themself exploring a wild world. In contrast, the deeds of Beorn's
                            granddaughter, Vezenbaer, are often overlooked, despite the importance of her actions at that time. This may be due to the grisly nature of her life, as well as the
                            superstitions which long surrounded her which claimed she had an alliance with some dark power which gave her otherworldly abilities (See the section on Beorn's descendents
                            in Chapter 8.5.7 for more on this).
                            <br/><br/>
                            Why the group left Esgaroth for the Vales of Anduin, and why they were denied access to Thranduil's realm, is unknown; but it is a popular detail that it is outside
                            that realm that they met the wizard from the north, Ingold, himself another man lost to time. Some have speculated that the specifics of his life and deeds were
                            hidden intentionally. We find this likely, as such an absence of detail for a man who must have played such an important role in the making of the age is unusual,
                            and perhaps a little suspicious. One of the most common speculations is that he fell into the shadow, becoming corrupted by the very power he was supposed to defeat,
                            and that his friends hid his past to protect his legacy. Another is that he himself obscured his past. Though almost more confusing than no explanation at all, the second
                            is the more widely accepted explanation for his disappearing from history almsot entirely.
                            <br/><br/>
                            The first established mention of the group in the Vales is of their adventure into the goblin caves. It is said that this was, in the grand scheme of the lives, an
                            almost insignificant encounter. We strongly disagree on this point. This early endeavor marked the start of their legend. Perhaps more importantly, it played an
                            important role in the life of Vezenbaer. Although she traveled only briefly with the group, the biography of her life (written only a few decades after her death,
                            most likely by a cousin's descendent) describes these early days with the group as the tipping point in her life that led her down the path which defined her. It
                            also records that it is on this early adventure that she first began to experience visions of her people's past. If there is any connection between her visions and
                            those of the elf Luthais, it is lost to time.
                            <br/><br/>
                            After their expedition through the caves, the group returned to Bärenburg, where Vezenbaer left them (more on Vezenbaer in Chapter 8.5.7) and the elf Verlorener joined.
                            It is a particularly contentious debate amongst historians as to whether Verlorener knew of her past at this time or not. Though perhaps not quite as crucial a question
                            to interpreting her story as some claim, the woodland elf raised by the Beornings definitely joined the group in Bärenburg at this time.
                            <br/><br/>
                            Even the most detailed accounts of the group skip now to their defense of Mountain Hall. What they did in between, and why they traveled to Mountain Hall, is unknown.
                            The reason for their suicidal attack on the orc champion, Feldûsh, is also unknown. This forms a particularly frustrating loss of detail, however, given the
                            significance of this attack. Tales of the battle, presumed to originate with Théoryn Silvertongue, make it out to be a terrifying battle in the darkness between a
                            mighty servant of the shadow and the group of adventurers who, though outmatched, somehow managed to overcome him. We find these tales to be, with a high degree of
                            probability, the embellishment of a storyteller looking to engage and excite her audience. Records make Feldûsh a strong captain who was able to bind both orcs and
                            goblins to his will, but nothing more. Regardless, events move on quickly to the aftermath, which marked a crucial point for the group, a point at which a single
                            action could have changed history.
                            <br/><br/>
                            Outside the caves of the Undervault Mine, the group is said to have met a mysterious dwarf, who called Luthais and Saelrain to follow him. Some speculations name him
                            as the Lord Gimli, but we find this unlikely as Gimli was most likely in the caves of Aglarond at this time. We present our own detailed speculation on this dwarf's
                            identity in our book, <i>Speculations on the Early Fourth Age</i>. Nevertheless, it is clear that Luthais and Saelrain left the group at this point, followed shortly
                            after by Ingold, and that the group subsequently dissolved. Mostert et al. concluded in their analysis that the dwarf was a narrative creation, and that it was Ingold
                            who splintered the group and led Luthais and Saelrain west. Although this is supported by the wizard's disappearance at this point, the lack of known detail about Ingold
                            once more makes this a difficult question to answer conclusively. We believe that the best explanation of the evidence is that they found or experienced something in the
                            tunnels of the Undervault Mine which drove them apart. The fellowship broke and scattered, and a group that could have achieved great things ended before it had a chance
                            to do so.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h5>Excerpt from <i>Chapter 7.12.2</i></h5>
                        <p>
                            That a group of such diverse origins and intentions should split so drastically, and yet manage to reconvene only a few short months later is wholly remarkable. What they
                            did after the breaking and how they managed to all find themselves amongst the bandits in the Wolfswood is not entirely clear. Our analysis indicates that it was during this
                            time that Saelrain began to truly hone his skills as a smith of unusual skill, while Théoryn Silvertongue found herself infiltrating the bandits (widely known as the song of
                            "Théoryn and the Bandits"). The journals of Robinia Took document her interactions with the elf Morlan in the Elfgard (see Chapter 13.4). Verlorener is believed to have gone
                            east to begin her long search for her family's history, but the deeds of Luthais during this time are a complete mystery. This study is focused on the group as a whole,
                            however, and as such will not analyze their individual histories. The only member not to reach the bandits was the wizard Ingold, who again disappeared from recorded history.
                            <br/><br/>
                            Despite rejoining, the group almost immediately split. It is believed that messengers from the Lord Elrond of Rivendell summoned Saelrain to him, though how they persuaded
                            him to return there is unclear. It is also a mystery as to why Robinia Took accompanied him, this section of the hobbit's journals unfortunately lost to time. The group, now
                            composed of just Luthais, Théoryn, and Verlorener, traveled to Bärenburg before abruptly turning around and racing back west and south. Records indicate that they learnt of
                            Ingold's imprisonment in the Dwimmerhorn (See Chapter 14.6.2 for details on this fortress), though it is unclear how they came across this information. A daring rescue glorified
                            in song by Silvertongue ensued, resulting in not only Ingold's rejoining the group, but also the arrival of the dwarf, Arden. The dwarf was unusual for his love of exotic weapons,
                            notably the chain whip, in place of the traditional dwarven battle axes, warhammers, and mattocks. He proved to be an able fighter and trusted companion, driven to achieve
                            greatness by his past (see Chapter 8.3: Dwarven Heroes).
                            <br/><br/>
                            Now grown again to five members, the group moved north towards Mountain Hall and on this journey achieved what is often considered the first of their great feats: the fall of
                            Valter. The battle lines numbered two dozen bandits and Valter against the small group, with Valter a warrior of considerable might himself. Many scholars attribute the Company's
                            victory to Ingold and his power over lightning, others to the group's martial prowess, but our studies of their strengths and the nature of combat conclude that it was highly
                            unlikely that bandits would have lost in that fight, and as such we speculate that either the numbers are exaggerated or that the Company had some unknown aid. Regardless,
                            this victory made their names known through the northern vales of Anduin, although it seems strange to us that their return to Mountain Hall was met with distrust and
                            hostility (Tetuvi, 81). They thus returned after their great battle to Bärenburg, the city which had become their base in this region. As might be expected, a period of rest and
                            healing ensued before they continued their adventures. The mysterious Ingold again left the company in what had by then become his pattern of disappearance and reappearance.
                            <br/><br/>
                            The group traveled south, beginning their long journey to Rohan for the winter. A significant encounter early on in this journey was near the inn, Travler's Rest. The timelines
                            suggest they made some other stop or detour before reaching this inn, the details again lost to time, but the date 22 Narbeleth stands out as one of the major moments for the group.
                            They tracked down the troll known in the region as Mansbane, a huge beast toughened and strengthened in some dungeon. Though this victory is minor in the overall scheme of their
                            history, the moment stands out as their official origin. It is upon their return to Travler's Rest that they are first recorded using the name <i>Freedom's Company</i> (Randall, 268).
                            This moniker became their byname; and a beacon of hope for many in the times that followed.
                            <br/><br/>
                            After their time in Travler's Rest, the newly named Freedom's Company traveled to the Toft. Their time here is well documented, thanks to the competition which took place at that time.
                            It was at this time that Saelrain rejoined the company, bringing with him a new weapon in the form of a large expertly-crafted maul, which he later used to devastating effect. However,
                            as one member returned, another left, as Arden departed the company. It is unknown why he left, though some scattered writings of dubious origin attribute his departure to some message
                            received in prophecy form from the local Seeress, Sylvia Moonshadow, whose story is analyzed in Chapter 9.6. The group then took part in the competition which was taking place that week.
                            In the Fall of 02 FA, Lord Vidugalum of the Toft sponsored a competition with a large prize as part of his campaign to encourage the town's growth and prosperity. Arriving just in time,
                            Freedom's Company managed to enter themselves into it, and proceeded to win that competition, earning considerable local fame as other stories of their doings in the valley were slowly
                            connected to the name Freedom's Company. Saelrain and Luthais in particular earned the local monikers of Elfindell and Crusader. At some point during their stay in the Toft, Freedom's
                            Company were also rejoined by Ingold, his absence this time known with a fair amount of reliability: records suggest that he was the healer who prevented the plague outbreak in the village
                            of Oakville. Freedom's Company then left the Toft, entering the wilderness section of their long journey south.
                            <br/><br/>
                            Here Freedom's Company entered the wilderness between the Vale of Anduin and Rohan, then called the Brown Lands. Surviving records of this section of their journey are incomplete, but
                            reveal a few notable points of interest to us. First, Arden rejoined the group somewhere along their journey, though if he revealed where he had been, it was not recorded. Soon afterwards,
                            Freedom's Company supposedly had an extraordinary meeting with the Vala Ulmo as they crossed the Anduin. Whether this encounter really occurred is doubtful, and if it did then what he said
                            to them was not recorded. However, it is clear that something occurred at this time which greatly strengthened the Company's resolve. Thirdly, they faced the Gibbet King again.
                            Some scholars have proposed that Freedom's Company defeated him here, but we can find no evidence to show whether they faced the evil spirit before or after meeting with Ulmo, and it is
                            clear from other evidence (See Chapter 13.4) that divine power was necessary to truly defeat him. We conclude from the available evidence that the most likely sequence of events is that
                            they once more chased him off, destroying his vessel, and then met with Ulmo. The fourth and final salient point regarding this section of their journey is their encounter with Bain.
                            This was the first time they had encountered him, though it is clear they at this time realized neither his true identity nor the significance of his presence. Eventually, Freedom's
                            Company reached Edoras just before winter fell. There they met with Theoryn's old friend, the dwarf Aeor, and the elf Glorfindel. It is well established that Aeor was in Edoras searching
                            for Theoryn, and spent the winter with her. It is not clear why Glorfindel left Rivendell for so long, but his presence in Edoras all winter is undisputable. We postulate that he came at
                            either Saelrain or Luthais' request, but this cannot be verified.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h5>Excerpt from <i>Chapter 7.13.1</i></h5>
                        <p>
                            The truth of the events surrounding the end of winter are difficult to reliably ascertain. The journal of a general, Olaf Brand, amongst the Rohirric King's Guard indicates that Freedom's
                            Company traveled to the ancient Keep of Horses atop the Halifirien, where he was a captain at the time. However, Brand's writings indicate that the Company entered under false pretenses,
                            assaulted the guards, and then left after discovering and accessing a small, long-lost loft in the keep. However, he also indicates that nothing was removed from the loft. The inconsistency
                            of these reported acts with the character of Freedom's Company has led many to doubt Brand's account, yet we find Brand to be a reliable source in all other matters. Taking all available facts,
                            our supposition is that Brand was not aware of the full story at the time, with the truth being somewhere in between the reported account and the character of the Company.
                            <br/><br/>
                            Upon their return to Edoras, Freedom's Company soon embarked on another, darker mission: the Dwimorberg. Although the reputation and history of the mountain is well known, the Company's entrance
                            and exit of the haunted mountain cannot be disputed. Both the accounts of the Company themselves, as well as those of the Lord Hereward, his scribe, and several of the guards all verify this event.
                            The presence of the spirit Rovgarn within the mountain is also known as historical fact. However, we dispute the Company's account of what occurred within the mountain. The accounts of Aragorn III,
                            great grandson of Aragorn II and Arwen Undomiel, are inconsistent with the stories spread by Theoryn Silvertongue concerning the Company's purported conversation and deal with Rovgarn. Aragorn III,
                            the first verified person of antiquity to speak with Rovgarn and live, reports a very different description of Rovgarn and his lair, as well as suggesting that Rovgarn himself denied any dealings with
                            the Company. Why Theoryn would create such a fantastical story is unknown, but it seems likely to have been the invention of a storyteller looking to capture an audience's attention with a particularly
                            wild and unusual story.
                        </p>
                        <h5>Excerpt from <i>Chapter 10.14: The Battle of Nan Curunir</i></h5>
                        <p>
                            Upon Lord Erkenbrand's arrival at the head of Nan Curunir, he was met by the mercenary company, Freedom's Company, whom he had sent out as advance scouts. Lord Arrov, one of Erkenbrand's captains,
                            wrote in his memoirs of the subsequent council of war, saying:
                        </p>
                        <p className = "indent">
                            "Our victory at the Battle of Nan Curunir was in no small part due to the accuracy of the intel provided by Freedom's Company, and the tactical genius of one of their members - Luthais Blackthorn.
                            Despite our initial hesitancy to put such faith in one not of our people nor well known to us, the worth of his strategies could not long be denied. Despite my own objections at the time, Lord Erkenbrand
                            decided to put full trust in the Blackthorn, and we acted on his instruction in the battle. Those strategies proved Erkenbrand's faith well-placed, as we victoriously defeated an army of uruks, trolls,
                            and half-trolls far greater than we had expected, and with fewer losses than I could have hoped for. Indeed, his unorthodox tactics saved my own life during the battle. Freedom's Company themselves
                            engaged the commanders of the dark army, and once reinforced on top of that hill by Erkenbrand's personal guard, were able to eliminate the orc Shogrom and his secondary commanders. With the head of
                            the snake cut off, we soon won the day, though not without great cost."
                        </p>
                        <p>
                            Arrov's account of this day sums the events, placing special emphasis on the roles of Luthais Blackthorn and Freedom's Company (see Chapter 7). We find Arrov to be a reliable source, corroborated by
                            the stories told by Theoryn Silvertongue, as well as the famous A Rider's Tale, written by Aoelfwine Rablun, who was present in this battle.
                        </p>
                        <h5>Excerpt from <i>Chapter 7.13.6</i></h5>
                        <p>
                            Freedom's Company soon left Rivendell again, acting on Lord Elrond's instructions and traveling north to Angmar. They were accompanied by Elladan, Elrohir, and a small company of elven warriors. With
                            their aid, Freedom's Company arrived at the cave of Ôrdrüth in Angmar. There they encountered the vampire Rodriguez, once a kinsmen of Edain (see Chapter 13.6). Freedom's Company was able to finally
                            end the Vampire Lord, ending his reign of terror in the area. They subsequently descended into the depths of the lair. However, the Company's battle with Gothmog is badly documented. With the lack of
                            independent eyewitness accounts, and the dubious nature of Theoryn Silvertongue's accounts from an antiquity standpoint, we can make no conclusive comment on this battle, save that it was surely a
                            titanic one. The death of Gothmog is widely corroborated, so there can be no doubt that it was the deeds of Freedom's Company and the Elves of Rivendell that saved the world from the Second Shadow.
                        </p>
                        <h5>Excerpts from <i>Chapter 7.15</i></h5>
                        <p>
                            After their successful hunting of all eight remaining Nazgûl and the colddrake Chrysor, Freedom's Company found their purpose fulfilled…
                            <br/><br/>
                            …From the far spread reports and descriptions of him, it is clear that the crusader general, Luthais Blackthorn, continued to travel Middle Earth, combating evil where he found it. The precise details of
                            his post-company life are unclear, as is the story of his end. All accounts of the Blackthorn cease entirely in the third millennium of the fourth age, though whether due to his death or simple departure
                            from Middle Earth is unknown…
                            <br/><br/>
                            …The warrior-smith Saelrain, better known in later times as Branastor Tânthalion, remained for a long time in Rivendell, occasionally joining the Blackthorn in some endeavor, but for the most part becoming
                            a smith of great fame. Many historians attribute the resettling of Eregion and its rise to an economic superpower in the early fifth age to his skill, influence, and leadership. Branastor finally left Middle
                            Earth in the mid fifth age, joining his kin in the Second Exodus…
                            <br/><br/>
                            …Verlorener discovered her ancestry in Rivendell soon after the slaying of Gothmog - that of a Noldorin high elf. Her parents were elves of Eregion, descended from the Gondolindrim of the House of the Swallow.
                            Their first child, a son named Callon ("hero"), was captured by orcs when young. He was tortured and eventually broken, and subsequently reforged into a servant of the Second Shadow. Verlorener's parents had
                            been living amongst the elves of Dorwinion for a time hiding from him when he found them, and they were forced to flee. Callon, now called Bain and working with the Black Warg of Methedras, hunted them down and
                            killed them, but her parents were able to keep her existence a secret from him… In later times after the revelation of her past, Verlorener took the name Menëlrîn ("lady of stars"), becoming a long-term resident
                            of Rivendell until the Second Exodus…
                            <br/><br/>
                            …Theoryn Silvertongue returned to her travels after her adventures with the Company, visiting realms as far east as the Wild Woods, and as far south as the city of Mumakaah in the jungles of Far Harad. Theoryn
                            was renowned for her storytelling abilities and magical songs. Although it is indisputable that many of her tales were exaggerated, she had great skill in capturing the imaginations, and hearts, of her audience…
                            <br/><br/>
                            …The Fall of Gothmog saw Arden's rise to power as the primary general of Erebor, and key advisor to King Thorin III Stonehelm. Arden's unique fighting style became popular amongst the younger dwarves, and his
                            regiment became known as the Stonefists, later regarded as the most successful of all dwarven regiments in the fourth age. Under his leadership, the Stonefists also led the second retaking of Kazad-Dûm in 52 FA…
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h5>Enemies of the Company</h5>
                        <p>
                            These are some of the notable enemies of Freedom's Company.
                        </p>

                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/enemies/feldush.png" alt = ""/> <br/>
                            <b><u>Feldûsh</u></b> <br/>
                            Orc champion in the Misty Mountains. Durman of the Second Shadow. Slain by Freedom's Company on 28 Lothron 02.
                        </span>
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/enemies/valter.png" alt = ""/> <br/>
                            <b><u>Valter</u></b> <br/>
                            Bandit King in the Wolfswood. Defeated by Freedom's Company on 8 Ivanneth 02 (captured). Slain by an orc assassin on 14 Ivanneth 02.
                        </span>
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/enemies/gibbetKing.png" alt = ""/> <br/>
                            <b><u>The Gibbet King</u></b> <br/>
                            Ancient spirit servant of Sauron, once the Dark Lord's executioner in Dol Guldur. Defeated once by Freedom's Company on 8 Ivanneth 02 (escaped). Defeated and destroyed by Freedom's Company
                            on 15 Hithui 02.
                        </span>
                        <div className = "break"/>

                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/enemies/bain.png" alt = ""/> <br/>
                            <b><u>Bain</u></b> <br/>
                            Dark elven agent of the Second Shadow. Durman of the Second Shadow. Once named Callon (hero), brother of Verlorener. Defeated once by Freedom's Company on 16 Hithui 02 (escaped). Killed by
                            Freedom's Company on 19 Gwaeron 03.
                        </span>
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/enemies/shogrom.png" alt = ""/> <br/>
                            <b><u>Shogrom</u></b> <br/>
                            Orc commander of a large mercenary band. Servant of the Second Shadow.
                        </span>
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/enemies/nazgul.jpg" alt = ""/> <br/>
                            <b><u>The Nazgûl</u></b> <br/>
                            The Servants of the Shadow. The Nine. The Black Riders. The Ringwraiths. The Nazgûl. The Witch King fell; Freedom's Company has sworn an oath to destroy the remaining eight...
                        </span>
                        <div className = "break"/>
                        
                        <span className = "profile four columns">
                            <StaticImage src = "./../assets/enemies/gothmog.jpg" alt = ""/> <br/>
                            <b><u>Gothmog</u></b> <br/>
                            Lord of Balrogs, The Second Shadow, Demon of Fire and Shadow. Defeated by Freedom's Company on 14 Gwirith 03.
                        </span>

                        <hr/>
                        <h5>Image Disclaimer</h5>
                        <p>
                            Most images on this page are AI generated.
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
        </Layout>
    )
}

export default CompanyPage;

export const Head: HeadFC = () => <title>LOTRWiki | Company</title>;
