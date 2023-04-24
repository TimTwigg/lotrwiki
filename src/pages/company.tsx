import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Layout from "../components/layout"
import 'react-tabs/style/react-tabs.css';

const CompanyPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "The Company">
            <div>
                <h1>Annals of the Company</h1>
                <hr/>
                <p>
                    These annals document the journey of The Company through the Fourth Age of Middle Earth, as carefully established by historians of the Seventh Age.
                </p>
                <h5>Excerpt from <i>A Brief Analysis of the Early Fourth Age: Chapter 1</i> by Mori et al.</h5>
                <p>
                    We also analyze the storied accounts of the so-called heroes of the Fourth Age. Whether history or fantasy, exaggerated beyond belief or accounts of an entirely
                    different world in the past; these legends are told widely enough to be worth investigating, and, at a bare minimum, hold the makings of an epic tale.
                </p>

                <Tabs>
                    <TabList>
                        <Tab>A Misgiving Start</Tab>
                        <Tab>Reunion</Tab>
                    </TabList>
                    <TabPanel>
                        <h5>Excerpt from <i>Chapter 7.12</i></h5>
                        <p>
                            As mentioned briefly in the overview in Chapter 7.1, this group was remarkable in its seeming ability to defy all odds. Many details of the group's members are lost
                            to time, particularly as much of the lore included in the legends is unsubstantiated and most likely forms the narrative inventions of countless generations of
                            storytellers. Some details, however, are recorded widely and accurately enough to be accepted as historical fact. Here follows a brief overview of the group's members,
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
                            Robinia Took, is something of a children's hero. The small hobbit who broke with her people's traditions of peace and contentment and made a life of adventure is the
                            idol of many a small child who imagines themself exploring a wild world. In contrast, the deeds of Beorn's granddaughter, Vezenbaer, are often overlooked, despite
                            the importance of her actions at that time.
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
                            After their expedition through the caves, the group returned to Bärenburg, where Vezenbaer left them (more on Vezenbaer in Chapter 8.5) and the elf Verlorener joined.
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
                        <p>
                            This article was eaten by a hungry hobbit.
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
        </Layout>
    )
}

export default CompanyPage;

export const Head: HeadFC = () => (
    <title>The Company</title>
);
