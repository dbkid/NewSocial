# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Jonathan_Swift = User.create!(name: "Jonathan Swift", email: "js@js.com", password: "password")
G_K_Chesterton = User.create!(name: "G K Chesterton", email: "gkc@gck.com", password: "password")
Christopher_Morley = User.create!(name: "Christopher Morley", email: "cm@cm.com", password: "password")
Ann_Plato = User.create!(name: "Ann Plato", email: "ap@ap.com", password: "password")
Francis_Bacon = User.create!(name: "Francis Bacon", email: "fb@fb.com", password: "password")
Guest = User.create!(name: "Guest", email: "guest@guest.com", password: "password")

Eric_Lichtblau = User.create!(name: "Eric Lichtblau", email: "el@el.com", password: "password")
MICHAEL_KIMMELMAN = User.create!(name: "Michael Kimmelman", email: "mk@mk.com", password: "password")
JESS_BIDGOOD = User.create!(name: "Jess Bidgood", email: "jb@jb.com", password: "password")

Paul_Krugman = User.create!(name: "Paul Krugman", email: "pk@pk.com", password: "password")

Vladimir_Nabokov = User.create!(name: "Vladimir Nabokov", email: "vn@vn.com", password: "password")

Ray_Bradbury = User.create!(name: "Ray Bradbury", email: "rb@rb.com", password: "password")


Story.destroy_all

fiction2 = Ray_Bradbury.stories.create!(title: "The Last Night of the World", content: %Q(What would you do if you knew this was the last night of the world?"

"What would I do; you mean, seriously?"

"Yes, seriously."

"I don't know — I hadn't thought. She turned the handle of the silver coffeepot toward him and placed the two cups in their saucers.

He poured some coffee. In the background, the two small girls were playing blocks on the parlor rug in the light of the green hurricane lamps. There was an easy, clean aroma of brewed coffee in the evening air.

"Well, better start thinking about it," he said.

"You don't mean it?" said his wife.

He nodded.

"A war?"

He shook his head.

"Not the hydrogen or atom bomb?"

"No."

"Or germ warfare?"

"None of those at all," he said, stirring his coffee slowly and staring into its black depths. "But just the closing of a book, let's say."

"I don't think I understand."

"No, nor do I really. It's jut a feeling; sometimes it frightens me, sometimes I'm not frightened at all — but peaceful." He glanced in at the girls and their yellow hair shining in the bright lamplight, and lowered his voice. "I didn't say anything to you. It first happened about four nights ago."

"What?"

"A dream I had. I dreamt that it was all going to be over and a voice said it was; not any kind of voice I can remember, but a voice anyway, and it said things would stop here on Earth. I didn't think too much about it when I awoke the next morning, but then I went to work and the feeling as with me all day. I caught Stan Willis looking out the window in the middle of the afternoon and I said, 'Penny for your thoughts, Stan,' and he said, 'I had a dream last night,' and before he even told me the dream, I knew what it was. I could have told him, but he told me and I listened to him."

"It was the same dream?"

"Yes. I told Stan I had dreamed it, too. He didn't seem surprised. He relaxed, in fact. Then we started walking through offices, for the hell of it. It wasn't planned. We didn't say, let's walk around. We just walked on our own, and everywhere we saw people looking at their desks or their hands or out the windows and not seeing what was in front of their eyes. I talked to a few of them; so did Stan."

"And all of them had dreamed?"

"All of them. The same dream, with no difference."

"Do you believe in the dream?"

"Yes. I've never been more certain."

"And when will it stop? The world, I mean."

"Sometime during the night for us, and then, as the night goes on around the world, those advancing portions will go, too. It'll take twenty-four hours for it all to go."

They sat awhile not touching their coffee. Then they lifted it slowly and drank, looking at each other.

"Do we deserve this?" she said.

"It's not a matter of deserving, it's just that things didn't work out. I notice you didn't even argue about this. Why not?"

"I guess I have a reason," she said.

"The same reason everyone at the office had?"

She nodded. "I didn't want to say anything. It happened last night. And the women on the block are talking about it, just among themselves." She picked up the evening paper and held it toward him. "There's nothing in the news about it."

"No, everyone knows, so what's the need?" He took the paper and sat back in his chair, looking at the girls and then at her. "Are you afraid?"

"No. Not even for the children. I always thought I would be frightened to death, but I'm not."

"Where's that spirit of self-preservation the scientists talk about so much?"

"I don't know. You don't get too excited when you feel things are logical. This is logical. Nothing else but this could have happened from the way we've lived."

"We haven't been too bad, have we?"

"No, nor enormously good. I suppose that's the trouble. We haven't been very much of anything except us, while a big part of the world was busy being lots of quite awful things."

The girls were laughing in the parlor as they waved their hands and tumbled down their house of blocks.

"I always imagined people would be screaming in the streets at a time like this."

"I guess not. You don't scream about the real thing."

"Do you know, I won't miss anything but you and the girls. I never liked cities or autos or factories or my work or anything except you three. I won't miss a thing except my family and perhaps the change in the weather and a glass of cool water when the weather's hot, or the luxury of sleeping. Just little things, really. How can we sit here and talk this way?"

"Because there's nothing else to do."

"That's it, of course, for if there were, we'd be doing it. I suppose this is the first time in the history of the world that everyone has really known just what they were going to be doing during the last night."

"I wonder what everyone else will do now, this evening, for the next few hours."

"Go to a show, listen to the radio, watch the TV, play cards, put the children to bed, get to bed themselves, like always."

"In a way that's something to be proud of — like always."

"We're not all bad."

They sat a moment and then he poured more coffee. "Why do you suppose it's tonight?"

"Because."

"Why not some night in the past ten years of in the last century, or five centuries ago or ten?"

"Maybe it's because it was never February 30, 1951, ever before in history, and now it is and that's it, because this date means more than any other date ever meant and because it's the year when things are as they are all over the world and that's why it's the end."

"There are bombers on their course both ways across the ocean tonight that'll never see land again."

"That's part of the reason why."

"Well," he said. "What shall it be? Wash the dishes?"

They washed the dishes carefully and stacked them away with especial neatness. At eight-thirty the girls were put to bed and kissed good night and the little lights by their beds turned on and the door left a trifle open.

"I wonder," said the husband, coming out and looking back, standing there with his pipe for a moment."

"What?"

"If the door should be shut all the way or if it should be left just a little ajar so we can hear them if they call."

"I wonder if the children know — if anyone mentioned anything to them?"

"No, of course not. They'd have asked us about it."

They sat and read the papers and talked and listened to some radio music and then sat together by the fireplace looking at the charcoal embers as the clock struck ten-thirty and eleven and eleven-thirty. They thought of all the other people in the world who had spent their evening, each in their own special way.

"Well," he said at last. He kissed his wife for a long time.

"We've been good for each other, anyway."

"Do you want to cry?" he asked.

"I don't think so."

They went through the house and turned out the lights and locked the doors, and went into the bedroom and stood in the night cool darkness undressing. She took the spread from the bed and folded it carefully over a chair, as always, and pushed back the covers. "The sheets are so cool and clean and nice," she said.

"I'm tired."

"We're both tired."

They got into bed and lay back.

"Wait a moment," she said.

He heard her get up and go out into the back of the house, and then he heard the soft shuffling of a swinging door. A moment later she was back. "I left the water running in the kitchen," she said. "I turned the faucet off."

Something about this was so funny that he had to laugh.

She laughed with him, knowing what it was that she had done that was so funny. They stopped laughing at last and lay in their cool night bed, their hands clasped, their heads together.

"Good night," he said, after a moment.

"Good night," she said, adding softly, "dear..."))


fiction1 = Vladimir_Nabokov.stories.create!(title: "Symbols And Signs", content: 'For the fourth time in as many years, they were confronted with the problem of what birthday present to take to a young man who was incurably deranged in his mind. Desires he had none. Man-made objects were to him either hives of evil, vibrant with a malignant activity that he alone could perceive, or gross comforts for which no use could be found in his abstract world. After eliminating a number of articles that might offend him or frighten him (anything in the gadget line, for instance, was taboo), his parents chose a dainty and innocent trifle—a basket with ten different fruit jellies in ten little jars.

At the time of his birth, they had already been married for a long time; a score of years had elapsed, and now they were quite old. Her drab gray hair was pinned up carelessly. She wore cheap black dresses. Unlike other women of her age (such as Mrs. Sol, their next-door neighbor, whose face was all pink and mauve with paint and whose hat was a cluster of brookside flowers), she presented a naked white countenance to the faultfinding light of spring. Her husband, who in the old country had been a fairly successful businessman, was now, in New York, wholly dependent on his brother Isaac, a real American of almost forty years’ standing. They seldom saw Isaac and had nicknamed him the Prince.

That Friday, their son’s birthday, everything went wrong. The subway train lost its life current between two stations and for a quarter of an hour they could hear nothing but the dutiful beating of their hearts and the rustling of newspapers. The bus they had to take next was late and kept them waiting a long time on a street corner, and when it did come, it was crammed with garrulous high-school children. It began to rain as they walked up the brown path leading to the sanitarium. There they waited again, and instead of their boy, shuffling into the room, as he usually did (his poor face sullen, confused, ill-shaven, and blotched with acne), a nurse they knew and did not care for appeared at last and brightly explained that he had again attempted to take his life. He was all right, she said, but a visit from his parents might disturb him. The place was so miserably understaffed, and things got mislaid or mixed up so easily, that they decided not to leave their present in the office but to bring it to him next time they came.

Outside the building, she waited for her husband to open his umbrella and then took his arm. He kept clearing his throat, as he always did when he was upset. They reached the bus-stop shelter on the other side of the street and he closed his umbrella. A few feet away, under a swaying and dripping tree, a tiny unfledged bird was helplessly twitching in a puddle.

During the long ride to the subway station, she and her husband did not exchange a word, and every time she glanced at his old hands, clasped and twitching upon the handle of his umbrella, and saw their swollen veins and brown-spotted skin, she felt the mounting pressure of tears. As she looked around, trying to hook her mind onto something, it gave her a kind of soft shock, a mixture of compassion and wonder, to notice that one of the passengers—a girl with dark hair and grubby red toenails—was weeping on the shoulder of an older woman. Whom did that woman resemble? She resembled Rebecca Borisovna, whose daughter had married one of the Soloveichiks—in Minsk, years ago.

The last time the boy had tried to do it, his method had been, in the doctor’s words, a masterpiece of inventiveness; he would have succeeded had not an envious fellow-patient thought he was learning to fly and stopped him just in time. What he had really wanted to do was to tear a hole in his world and escape.

The system of his delusions had been the subject of an elaborate paper in a scientific monthly, which the doctor at the sanitarium had given to them to read. But long before that, she and her husband had puzzled it out for themselves. “Referential mania,” the article had called it. In these very rare cases, the patient imagines that everything happening around him is a veiled reference to his personality and existence. He excludes real people from the conspiracy, because he considers himself to be so much more intelligent than other men. Phenomenal nature shadows him wherever he goes. Clouds in the staring sky transmit to each other, by means of slow signs, incredibly detailed information regarding him. His in- most thoughts are discussed at nightfall, in manual alphabet, by darkly gesticulating trees. Pebbles or stains or sun flecks form patterns representing, in some awful way, messages that he must intercept. Everything is a cipher and of everything he is the theme. All around him, there are spies. Some of them are detached observers, like glass surfaces and still pools; others, such as coats in store windows, are prejudiced witnesses, lynchers at heart; others, again (running water, storms), are hysterical to the point of insanity, have a distorted opinion of him, and grotesquely misinterpret his actions. He must be always on his guard and devote every minute and module of life to the decoding of the undulation of things. The very air he exhales is indexed and filed away. If only the interest he provokes were limited to his immediate surroundings, but, alas, it is not! With distance, the torrents of wild scandal increase in volume and volubility. The silhouettes of his blood corpuscles, magnified a million times, flit over vast plains; and still farther away, great mountains of unbearable solidity and height sum up, in terms of granite and groaning firs, the ultimate truth of his being.

When they emerged from the thunder and foul air of the subway, the last dregs of the day were mixed with the street lights. She wanted to buy some fish for supper, so she handed him the basket of jelly jars, telling him to go home. Accordingly, he returned to their tenement house, walked up to the third landing, and then remembered he had given her his keys earlier in the day.

In silence he sat down on the steps and in silence rose when, some ten minutes later, she came trudging heavily up the stairs, smiling wanly and shaking her head in deprecation of her silliness. They entered their two-room flat and he at once went to the mirror. Straining the corners of his mouth apart by means of his thumbs, with a horrible, mask-like grimace, he removed his new, hopelessly uncomfortable dental plate. He read his Russian-language newspaper while she laid the table. Still reading, he ate the pale victuals that needed no teeth. She knew his moods and was also silent.

When he had gone to bed, she remained in the living room with her pack of soiled playing cards and her old photograph albums. Across the narrow courtyard, where the rain tinkled in the dark against some ash cans, windows were blandly alight, and in one of them a black-trousered man, with his hands clasped under his head and his elbows raised, could he seen lying supine on an untidy bed. She pulled the blind down and examined the photographs. As a baby, he looked more surprised than most babies. A photograph of a German maid they had had in Leipzig and her fat-faced fiancé fell out of a fold of the album. She turned the pages of the book: Minsk, the Revolution, Leipzig, Berlin, Leipzig again, a slanting house front, badly out of focus. Here was the boy when he was four years old, in a park, shyly, with puckered forehead, looking away from an eager squirrel, as he would have from any other stranger. Here was Aunt Rosa, a fussy, angular, wild-eyed old lady, who had lived in a tremulous world of bad news, bankruptcies, train accidents, and cancerous growths until the Germans put her to death, together with all the people she had worried about. The boy, aged six—that was when he drew wonderful birds with human hands and feet, and suffered from insomnia like a grown-up man. His cousin, now a famous chess player. The boy again, aged about eight, already hard to understand, afraid of the wallpaper in the passage, afraid of a certain picture in a book, which merely showed an idyllic landscape with rocks on a hillside and an old cart wheel hanging from the one branch of a leafless tree. Here he was at ten—the year they left Europe. She remembered the shame, the pity, the humiliating difficulties of the journey, and the ugly, vicious, backward children he was with in the special school where he had been placed after they arrived in America. And then came a time in his life, coinciding with a long convalescence after pneumonia, when those little phobias of his, which his parents had stubbornly regarded as the eccentricities of a prodigiously gifted child, hardened, as it were, into a dense tangle of logically interacting illusions, making them totally inaccessible to normal minds.

All this, and much more, she had accepted, for, after all, living does mean accepting the loss of one joy after another, not even joys in her case, mere possibilities of improvement. She thought of the recurrent waves of pain that for some reason or other she and her husband had had to endure; of the in visible giants hurting her boy in some unimaginable fashion; of the incalculable amount of tenderness contained in the world; of the fate of this tenderness, which is either crushed or wasted, or transformed into madness; of neglected children humming to themselves in unswept corners; of beautiful weeds that cannot hide from the farmer.

It was nearly midnight when, from the living room, she heard her husband moan, and presently he staggered in, wearing over his nightgown the old overcoat with the astrakhan collar that he much preferred to his nice blue bathrobe.

“I can’t sleep!” he cried.

“Why can’t you sleep?” she asked. “You were so tired.”

“I can’t sleep because I am dying,” he said, and lay down on the couch.

“Is it your stomach? Do you want me to call Dr. Solov?”

“No doctors, no doctors,” he moaned. “To the devil with doctors! We must get him out of there quick. Otherwise, we’ll be responsible…. Responsible!” He hurled himself into a sitting position, both feet on the floor, thumping his forehead with his clenched fist.

“All right,” she said quietly. “We will bring him home tomorrow morning.”

“I would like some tea,” said her husband and went out to the bathroom.

Bending with difficulty, she retrieved some playing cards and a photograph or two that had slipped to the floor—the knave of hearts, the nine of spades, the ace of spades, the maid Elsa and her bestial beau. He returned in high spirits, saying in a loud voice, “I have it all figured out. We will give him the bedroom. Each of us will spend part of the night near him and the other part on this couch. We will have the doctor see him at least twice a week. It does not matter what the Prince says. He won’t have much to say anyway, because it will come out cheaper.”

The telephone rang. It was an unusual hour for it to ring. He stood in the middle of the room, groping with his foot for one slipper that had come off, and childishly, toothlessly, gaped at his wife. Since she knew more English than he, she always attended to the calls.

”Can I speak to Charlie?” a girl’s dull little voice said to her now.

“What number do you want? . . . No. You have the wrong number.”

She put the receiver down gently and her hand went to her heart. “It frightened me,” she said.

He smiled a quick smile and immediately resumed his excited monologue. They would fetch him as soon as it was day. For his own protection, they would keep all the knives in a locked drawer. Even at his worst, he presented no danger to other people.

The telephone rang a second time.

The same toneless, anxious young voice asked for Charlie.

“You have the incorrect number. I will tell you what you are doing. You are turning the letter ‘o’ instead of the zero.” She hung up again.

They sat down to their unexpected, festive midnight tea. He sipped noisily; his face was flushed; every now and then he raised his glass with a circular motion, so as to make the sugar dissolve more thoroughly. The vein on the side of his bald head stood out conspicuously, and silvery bristles showed on his chin. The birthday present stood on the table. While she poured him another glass of tea, he put on his spectacles and reëxamined with pleasure the luminous yellow, green, and red little jars. His clumsy, moist lips spelled out their eloquent labels—apricot, grape, beach plum, quince. He had got to crab apple when the telephone rang again.')


election1 = Paul_Krugman.stories.create!(title: "The Clinton Agenda", content: 'It ain’t over until the portly gentleman screams, but it is, as intelligence analysts say, highly likely that Hillary Clinton will win this election. Poll-based models put her chances at around 90 percent earlier this week — and that was before the campaign turned totally X-rated.

But what will our first female president actually be able to accomplish? That depends on how big a victory she achieves.

I’m not talking about the size of her “mandate,” which means nothing: If the Obama years are any indication, Republicans will oppose anything she proposes no matter how badly they lose. The question, instead, is what happens to Congress.

Consider, first, the effects of a minimal victory: Mrs. Clinton becomes president, but Republicans hold on to both houses of Congress.

Such a victory wouldn’t be meaningless. It would avert the nightmare of a Trump presidency, and it would also block the radical tax-cutting, privatizing agenda that Paul Ryan, the speaker of the House, has made clear he will steamroll through if Mr. Trump somehow wins. But it would leave little room for positive action.

Things will be quite different if Democrats retake the Senate. Poll-based models give this outcome only around a 50-50 chance, but people betting on the election give it much better odds, two or three to one.

Now, even a Democratic Senate wouldn’t enable Mrs. Clinton to pass legislation in the face of an implacably obstructionist Republican majority in the House. It would, however, allow her to fill the Supreme Court seat left vacant by the death of Antonin Scalia.

Doing that would have huge consequences, for environmental policy in particular. In his final years in office, President Obama has made a major environmental push using his regulatory powers, for example by sharply tightening emission standards for heavy trucks.

But the most important piece of his push — the Clean Power Plan, which would greatly reduce greenhouse gas emissions from coal-fired power plants — is currently on hold, thanks to a stay imposed by the Supreme Court. Democratic capture of the Senate would remove this roadblock.

And bear in mind that climate change is by far the most important issue facing America and the world, even if the people selecting questions for the presidential debates for some reason refuse to bring it up. Quite simply, if Democrats take the Senate, we might take the minimum action needed to avoid catastrophe; if they don’t, we won’t.

What about the House? All, and I mean all, of the Obama administration’s legislative achievements took place during the two-year period when Democrats controlled both houses of Congress. Can that happen again?

Until the last few days, the chances of flipping the House seemed low, even if, as now seems all but certain, Democratic candidates in total receive more votes than Republicans. Partly that’s because G.O.P.-controlled state governments have engaged in pervasive gerrymandering; partly it’s because minority voters, who overwhelmingly favor Democrats, are clustered in a relatively small number of urban districts.

But a sufficiently big Clinton victory could change that, especially if suburban women desert a G.O.P. that has turned into the gropers-owned party. And that would let her pursue a much more expansive agenda.

There’s not much mystery about what that agenda would be. I don’t know why so many pundits claim that Mrs. Clinton lacks a vision for America, when she has actually provided an unusual level of detail on her website and in speeches.

Broadly speaking, she would significantly strengthen the social safety net, especially for the very poor and children, with an emphasis on family-related issues like parental leave. Such programs would cost money, although not as much as critics claim; she proposes, credibly, to raise that money with higher taxes on top incomes, so that the overall effect would be to reduce inequality.

Democratic control of the House would also open the door for large-scale infrastructure investment. If that seems feasible, I know that many progressive economists — myself included — will urge Mrs. Clinton to go significantly bigger than she is currently proposing.

If all of this sounds to you like a second round of what President Obama did in 2009-2010, that’s because it is. And why not? Despite Republican obstruction, Mr. Obama has presided over a remarkable rise in the number of Americans with health insurance, a significant decline in poverty and the creation of more than 11 million private-sector jobs.

In any case, the bottom line is that if you’re thinking of staying home on Election Day because the outcome is assured, don’t. Barring the political equivalent of a meteor strike, Hillary Clinton will be our next president, but the size of her victory will determine what kind of president she can be.

')



news3 = JESS_BIDGOOD.stories.create!(title: "Poor, Displaced and Anxious in North Carolina as Floods Climb After Hurricane", content: 'At a community college turned hurricane shelter, Frednesa Pope, 37, wondered on Wednesday if the floodwaters from Hurricane Matthew, which are expected to crest here on Friday, would force her and her family out of an apartment they could barely afford.

This week, Gregory King-Yates, 58, who lives on a fixed income and was taking shelter from the flooding in Fair Bluff, N.C., to the southwest, knew that the truck he had just bought was flooded.

And over the weekend, Ethel and Austin Chavis of Lumberton, N.C., ripped the carpets out of their flooded home and wondered how much it would cost to make things right again and where they would find the money.

“We’ve got to find some assistance,” Ms. Chavis, 66, said as she looked at the floorboards buckling around her, “because we definitely need it.”

Hurricane Matthew spawned ferocious wind and rain across North Carolina, dumping more than a foot of water in parts of the state and touching off a creeping disaster that had killed 22 people in the state by Thursday. Day after day, in town after town, swollen rivers have transformed thoroughfares into canals and homes into sodden islands, in some cases with only the roof or the windows peeking above the water.

And the water has risen in some of the state’s poorest areas, upending the lives of many already living on the financial edge.

“The poorest of the poor in North Carolina are the ones who are being hurt the most by these floods,” Gov. Pat McCrory said at an otherwise upbeat news conference on Thursday. “These people have nothing,” he added, urging people to donate to a state disaster fund.

By Thursday, $2.6 million in aid from the Federal Emergency Management Agency had been disbursed and 14,000 people had applied for aid.

Individual assistance from FEMA, which has averaged about $2,000 a family in recent years, is designed to help with immediate needs — like temporary rental housing, repairs not covered by insurance, and the replacement of critical personal items — but those grants are somewhat limited.

“It’s not designed to make survivors whole again,” said Rafael Lemaitre, a spokesman for the agency. “It’s more of a life vest, rather than a lifeboat.”

Mr. McCrory’s administration said that disaster unemployment assistance, which can cover wages lost because of a storm, would be available in 20 counties.

But even when state and federal officials work to disburse flood aid, experts said, it is often harder for families living on the margins to bounce back. The Food Bank of Central and Eastern North Carolina estimated that 356,000 people in the 21 counties it was monitoring for storm and flood effects did not have access to enough healthy food, even before the floods.

Floodwaters have left downtown Lumberton, a city where a third of residents live in poverty, underwater. They crested at more than a foot above the record on Tuesday in Goldsboro, N.C., where the poverty rate is 25 percent. And in Kinston, residents waited in shelters for the Neuse River to crest on Friday.

“Sometimes, you just have to think that God is piling on with these storms,” said Gene Nichol, a law professor at the University of North Carolina who researches poverty.

Poverty in the region, he said, goes back to the time of slavery, but he added that the state’s Republican-controlled Legislature had further eroded the social safety net by winnowing unemployment benefits, cutting the state’s earned-income tax credit and largely refusing to expand Medicaid.

“There are challenging legacies,” Professor Nichol said. “The want of investment and opportunity in eastern North Carolina is made only more difficult by tragedies like this.”

Some natural disasters, like tornadoes, seem genuinely indiscriminate, as likely to damage wealthy neighborhoods as to damage poor ones. But in Kinston, the pain from the floods — which were preceded by days of warning — seem to a certain extent linked to economics.

Those with cars have been able to take their valuables, or even their furniture, and leave town for hotel rooms or to stay with family. Those who earn more are more likely to have paid time off, and to have savings to cushion the financial blow from a storm. And floods often play out in low-lying areas where the residents are disproportionately poor.

The shelter here at Lenoir Community College, which by Thursday had become a temporary home for about 200 people, was full of residents with no money to spare — even among those working full time — and a sense of dread as the water rose.

Ms. Pope, a cabinet sprayer in a local plant, evacuated her home in Kinston this week when fire officials told her it was almost certain to flood when the river crested.

“I put my clothes up as high as I could,” she said. “I don’t have a car; I wasn’t able to get a U-Haul like everyone else in the neighborhood. I live from paycheck to paycheck.”

Ms. Pope’s apartment had flooded during the devastation from Hurricane Floyd in 1999, and her landlord had told her it was unlikely to withstand a second event that forecasters said could be even worse.

“I’ll have to start all the way back over,” said Ms. Pope, who already pays her $400 rent in two installments so she can pay the bills in the middle of the month. “Everything in there, it’s paid for. If it floods, I’m through.”

Wesley Turner, 71, a Vietnam veteran who retired from a rubber stopper plant in town, said his home seemed close to flooding even before the river’s crest.

“I worked for years and years to make money for a double-wide, which I thought would be home for the rest of my life,” Mr. Turner said. “I can’t afford another trailer. I can’t afford a pup tent.”

Inside the shelter, LaVonda Hamilton, 42, was wondering whether she would need to take on a short-term, high-interest loan to make ends meet. She had been unable to get to her job as an account specialist at an outsourcing firm near the coast for a week.

“I have two kids, you know, in high school,” Ms. Hamilton said. “It sets you back.”

And in Lumberton, where floodwaters were just beginning to recede, Billie Thompson, 36, returned to her home to take stock of what she had lost — “It’s in a shamble right now,” she said — and scrambled to get to her job at the Butterball factory for the first time since last week. A single mother, Ms. Thompson tried to figure out how to replace ruined items, like school clothes that she bought in August for her daughter.

“My daughter has started planning a birthday party next month; I might have to cancel that,” Ms. Thompson said, adding, “She needs clothes more than she needs the party.”

')



news2 = MICHAEL_KIMMELMAN.stories.create!(title: "Berlin, 1945; Grozny, 2000; Aleppo, 2016", content: 'The destruction is so complete that it obliterates even a sense of time. At a glance, the video could show Berlin in 1945 or Grozny, 2000. Mass death erases all distinctions.

The place is Aleppo, Syria, the al-Mashhad district, or what remains of it after recent attacks by Syrian government forces and their Russian allies. Toppled rooftop satellite dishes, choked by plaster dust, resemble wilted flowers. Figures move through the pulverized rubble but are hard to make out.

“Would you really feel any pity if one of those dots stopped moving forever?” Harry Lime asked on the Ferris wheel in “The Third Man,” the classic noir film set in postwar Vienna. This is drone footage, after all, shot from the same detached, superior perspective of the bombers who committed this atrocity in the name of fighting non-jihadist rebels. The video was made to document the devastation and bear witness, but it inevitably reduces people on the streets to Lime’s dots.

After the Second World War, Auschwitz survivors helped organize a display to memorialize the camp and came up with the archetypal piles of shoes and hair, prostheses and suitcases. The hope was to convey the scale of killing at a time when much of the world still didn’t know, or didn’t want to know, how many people the Nazis had murdered. Survivors declined to focus on stories of individual victims. They reckoned that nearly everyone in Europe had witnessed death up close and had their own stories to tell, whereas the industrial nature of murder was something else, something new, unfathomable and essential to record.

Today we are assaulted online, on television and in newspapers with big, senseless numbers: At least 140 killed in the Saudi-led bombing of a funeral in Yemen; hundreds slain by car bombs in Baghdad; thousands upon thousands slaughtered in Aleppo. The tallies blur together even while it can be nearly unbearable to glance at the photograph of Alan Kurdi, the dead 2-year-old refugee on the Turkish beach, or the video of Omran Daqneesh, the stunned little boy from Aleppo, pulled from the ashes, sitting in the ambulance, wiping blood from his face.

Once seen, these images become impossible to forget. More than the specter of endless shelters and the staggering numbers of displaced people, what comes to mind whenever I read about the war are the dusty, hopeful faces of six small, barefoot siblings I photographed with my phone while standing outside their windblown tent in Zaatari, a Syrian refugee camp, just across the border in Jordan. I wonder how they are doing.

There are now some 65 million displaced people around the world, equivalent in number to the entire population of the United Kingdom or France. Refugees spend 17 years on average in camps. The children at that Syrian camp fled their home just ahead of the guns and rockets.

I wonder what “home” will ever mean to them.

To those more fortunate, it promises safety, family. The ruined landscape in the drone video, reminiscent of that earlier Russian military campaign in Grozny, had been a community of shops, noisy streets — and homes. Now so hard to decipher, these crumbling apartment houses were, until lately, particular to the people who filled them with children and mementos. With raised voices and the whispered exchanges of love and heartbreak. With music, prayers, friends, the smells of food cooking on the stove. With dreams of a better life.

This used to be a neighborhood, in other words. A neighborhood is more than an assortment of buildings and streets. It is life, shared and rooted in place, passed down through generations — nowhere more so than in an ancient city like Aleppo, where some years ago I was taken to the home of a man who lived on a street that bore his family name.

“How long has your family lived here?” I asked him.

“On the street or in Aleppo?” he replied.

Before I could answer, he told me: “On the street, 800 years. In Aleppo, 1,200.”

Communities incubate hope. Extinguishing this is the goal of mass murderers and tyrants.

That is what the drone video shows.')

news1 = Eric_Lichtblau.stories.create!(title: "Justice Department to Track Use of Force by Police Across U.S.", content: 'The Justice Department said Thursday that it would start collecting nationwide data early next year on police shootings and other violent encounters with the public, after a series of protests and investigations since 2014 spurred by a string of deadly episodes.

The project, the most ambitious the federal government has undertaken in tracking the use of force by police officers, is meant to fill what officials say is a huge and frustrating void in publicly available data on the shootings that have roiled the country.

Under the plan, the Justice Department will gather more data on the use of force by federal agents and help local departments report information on a wider range of police encounters.

But a number of the reporting steps will rely on local police officials to voluntarily submit data, and some civil rights advocates said the Justice Department had not made clear how it would impose financial penalties set by Congress to encourage the reporting of police shootings.

“I can’t believe two years into this crisis that we’re still having conversations about data,” said Kanya Bennett, a lawyer in Washington for the American Civil Liberties Union, which met with the Justice Department to discuss the plan.

With President Obama leaving office in three months, Ms. Bennett said, “this is essentially being punted to the next administration.”

After a series of fatal encounters in places like Ferguson, Mo.; Charlotte, N.C.; Tulsa, Okla.; Baton Rouge, La.; Cleveland; Milwaukee; Baltimore; and Staten Island — many involving unarmed black men and caught on video — officials have struggled to gather basic information about how often such episodes occur and what can be done.

The most comprehensive records on police shootings have come from the news media, particularly The Washington Post and The Guardian, which have created running databases.

James B. Comey, the director of the F.B.I., told lawmakers last year that it was “embarrassing” that the news media could produce better data than his own agency on such an important issue.

“We can’t have an informed discussion because we don’t have data,” Mr. Comey told the House Judiciary Committee last October.

“People have data about who went to a movie last weekend, or how many books were sold, or how many cases of the flu walked into the emergency room,” he said, “and I cannot tell you how many people were shot by police in the United States last month, last year, or anything about the demographic. And that’s a very bad place to be.”

According to the Post database, 991 people were fatally shot by the police last year, and 754 have been so far this year.

Under the Justice Department plan, the F.B.I. is to begin a pilot program early next year to assemble data on the use of force by about 178,000 agents at major federal law enforcement agencies including the Drug Enforcement Administration, the Marshals Service, the Bureau of Alcohol, Tobacco, Firearms and Explosives, and the F.B.I. itself.

In addition, the Justice Department plans to begin collecting data from local and state law enforcement departments on “in custody” deaths — not just in shootings, but in cases of suicide and natural death as well.

A measure passed by Congress in 2014 called the Death in Custody Reporting Act required local departments to report only fatal encounters. Justice Department officials said they would rely on local police officials to voluntarily report nonlethal encounters as well.

Under a third part of the plan, the Justice Department said it was authorizing $750,000 for a “police data initiative” designed to help local departments collect and publicly release information on a wider range of actions, including stops of citizens, searches, the use of force, shootings and other encounters.

Attorney General Loretta E. Lynch said in announcing the plan Thursday that comprehensive and accurate data on police encounters was essential in “increasing transparency and building trust between law enforcement and the communities we serve.”

Lacking better data has made it “very, very hard” to determine the causes of police shootings, or even whether there was an actual increase in such episodes or simply more publicity about them, Ms. Lynch said at an event Thursday night at Georgetown University.

The law passed by Congress in 2014 for reporting in-custody deaths allows the attorney general to impose financial penalties on states that do not report data.

But Ms. Bennett, the A.C.L.U. lawyer, faulted the Justice Department for failing to explain how that would happen under the new plan.

In a letter to the Justice Department last week, the A.C.L.U. and 95 other groups pushing for greater accountability in police shootings wrote that imposing financial penalties was critical to the success of the program. In the past, the letter said, “voluntary reporting programs on police-community encounters have failed.

The steps announced by the Justice Department grew out of a presidential commission appointed by Mr. Obama in 2014 to study ways of reducing conflict and tensions between police departments and the communities they serve.

Announcing a series of recommendations from the commission in March 2015, Mr. Obama said that the country needed to seize the opportunity to “transform” police-community relations.

“We have a great opportunity, coming out of some great conflict and tragedy, so that everybody feels safer and our law enforcement officers feel, rather than being embattled, feel fully supported,” he said.')



essay1 = Jonathan_Swift.stories.create!(title: "A Modest Proposal", content: "It is a melancholy object to those, who walk through this great town, or travel in the country, when they see the streets, the roads and cabbin-doors crowded with beggars of the female sex, followed by three, four, or six children, all in rags, and importuning every passenger for an alms. These mothers instead of being able to work for their honest livelihood, are forced to employ all their time in stroling to beg sustenance for their helpless infants who, as they grow up, either turn thieves for want of work, or leave their dear native country, to fight for the Pretender in Spain, or sell themselves to the Barbadoes.

I think it is agreed by all parties, that this prodigious number of children in the arms, or on the backs, or at the heels of their mothers, and frequently of their fathers, is in the present deplorable state of the kingdom, a very great additional grievance; and therefore whoever could find out a fair, cheap and easy method of making these children sound and useful members of the common-wealth, would deserve so well of the publick, as to have his statue set up for a preserver of the nation.

But my intention is very far from being confined to provide only for the children of professed beggars: it is of a much greater extent, and shall take in the whole number of infants at a certain age, who are born of parents in effect as little able to support them, as those who demand our charity in the streets.

As to my own part, having turned my thoughts for many years, upon this important subject, and maturely weighed the several schemes of our projectors, I have always found them grossly mistaken in their computation. It is true, a child just dropt from its dam, may be supported by her milk, for a solar year, with little other nourishment: at most not above the value of two shillings, which the mother may certainly get, or the value in scraps, by her lawful occupation of begging; and it is exactly at one year old that I propose to provide for them in such a manner, as, instead of being a charge upon their parents, or the parish, or wanting food and raiment for the rest of their lives, they shall, on the contrary, contribute to the feeding, and partly to the cloathing of many thousands.

There is likewise another great advantage in my scheme, that it will prevent those voluntary abortions, and that horrid practice of women murdering their bastard children, alas! too frequent among us, sacrificing the poor innocent babes, I doubt, more to avoid the expence than the shame, which would move tears and pity in the most savage and inhuman breast.

The number of souls in this kingdom being usually reckoned one million and a half, of these I calculate there may be about two hundred thousand couple whose wives are breeders; from which number I subtract thirty thousand couple, who are able to maintain their own children, (although I apprehend there cannot be so many, under the present distresses of the kingdom) but this being granted, there will remain an hundred and seventy thousand breeders. I again subtract fifty thousand, for those women who miscarry, or whose children die by accident or disease within the year. There only remain an hundred and twenty thousand children of poor parents annually born. The question therefore is, How this number shall be reared, and provided for? which, as I have already said, under the present situation of affairs, is utterly impossible by all the methods hitherto proposed. For we can neither employ them in handicraft or agriculture; we neither build houses, (I mean in the country) nor cultivate land: they can very seldom pick up a livelihood by stealing till they arrive at six years old; except where they are of towardly parts, although I confess they learn the rudiments much earlier; during which time they can however be properly looked upon only as probationers: As I have been informed by a principal gentleman in the county of Cavan, who protested to me, that he never knew above one or two instances under the age of six, even in a part of the kingdom so renowned for the quickest proficiency in that art.

I am assured by our merchants, that a boy or a girl before twelve years old, is no saleable commodity, and even when they come to this age, they will not yield above three pounds, or three pounds and half a crown at most, on the exchange; which cannot turn to account either to the parents or kingdom, the charge of nutriments and rags having been at least four times that value.

I shall now therefore humbly propose my own thoughts, which I hope will not be liable to the least objection.


I have been assured by a very knowing American of my acquaintance in London, that a young healthy child well nursed, is, at a year old, a most delicious nourishing and wholesome food, whether stewed, roasted, baked, or boiled; and I make no doubt that it will equally serve in a fricasie, or a ragoust.

I do therefore humbly offer it to publick consideration, that of the hundred and twenty thousand children, already computed, twenty thousand may be reserved for breed, whereof only one fourth part to be males; which is more than we allow to sheep, black cattle, or swine, and my reason is, that these children are seldom the fruits of marriage, a circumstance not much regarded by our savages, therefore, one male will be sufficient to serve four females. That the remaining hundred thousand may, at a year old, be offered in sale to the persons of quality and fortune, through the kingdom, always advising the mother to let them suck plentifully in the last month, so as to render them plump, and fat for a good table. A child will make two dishes at an entertainment for friends, and when the family dines alone, the fore or hind quarter will make a reasonable dish, and seasoned with a little pepper or salt, will be very good boiled on the fourth day, especially in winter.

I have reckoned upon a medium, that a child just born will weigh 12 pounds, and in a solar year, if tolerably nursed, encreaseth to 28 pounds.


I grant this food will be somewhat dear, and therefore very proper for landlords, who, as they have already devoured most of the parents, seem to have the best title to the children.

Infant’s flesh will be in season throughout the year, but more plentiful in March, and a little before and after; for we are told by a grave author, an eminent French physician, that fish being a prolifick dyet, there are more children born in Roman Catholick countries about nine months after Lent, the markets will be more glutted than usual, because the number of Popish infants, is at least three to one in this kingdom, and therefore it will have one other collateral advantage, by lessening the number of Papists among us.

I have already computed the charge of nursing a beggar’s child (in which list I reckon all cottagers, labourers, and four-fifths of the farmers) to be about two shillings per annum, rags included; and I believe no gentleman would repine to give ten shillings for the carcass of a good fat child, which, as I have said, will make four dishes of excellent nutritive meat, when he hath only some particular friend, or his own family to dine with him. Thus the squire will learn to be a good landlord, and grow popular among his tenants, the mother will have eight shillings neat profit, and be fit for work till she produces another child.

Those who are more thrifty (as I must confess the times require) may flea the carcass; the skin of which, artificially dressed, will make admirable gloves for ladies, and summer boots for fine gentlemen.

As to our City of Dublin, shambles may be appointed for this purpose, in the most convenient parts of it, and butchers we may be assured will not be wanting; although I rather recommend buying the children alive, and dressing them hot from the knife, as we do roasting pigs.

A very worthy person, a true lover of his country, and whose virtues I highly esteem, was lately pleased, in discoursing on this matter, to offer a refinement upon my scheme. He said, that many gentlemen of this kingdom, having of late destroyed their deer, he conceived that the want of venison might be well supply’d by the bodies of young lads and maidens, not exceeding fourteen years of age, nor under twelve; so great a number of both sexes in every country being now ready to starve for want of work and service: And these to be disposed of by their parents if alive, or otherwise by their nearest relations. But with due deference to so excellent a friend, and so deserving a patriot, I cannot be altogether in his sentiments; for as to the males, my American acquaintance assured me from frequent experience, that their flesh was generally tough and lean, like that of our school-boys, by continual exercise, and their taste disagreeable, and to fatten them would not answer the charge. Then as to the females, it would, I think, with humble submission, be a loss to the publick, because they soon would become breeders themselves: And besides, it is not improbable that some scrupulous people might be apt to censure such a practice, (although indeed very unjustly) as a little bordering upon cruelty, which, I confess, hath always been with me the strongest objection against any project, how well soever intended.

But in order to justify my friend, he confessed, that this expedient was put into his head by the famous Salmanaazor, a native of the island Formosa, who came from thence to London, above twenty years ago, and in conversation told my friend, that in his country, when any young person happened to be put to death, the executioner sold the carcass to persons of quality, as a prime dainty; and that, in his time, the body of a plump girl of fifteen, who was crucified for an attempt to poison the Emperor, was sold to his imperial majesty’s prime minister of state, and other great mandarins of the court in joints from the gibbet, at four hundred crowns. Neither indeed can I deny, that if the same use were made of several plump young girls in this town, who without one single groat to their fortunes, cannot stir abroad without a chair, and appear at a play-house and assemblies in foreign fineries which they never will pay for; the kingdom would not be the worse.

Some persons of a desponding spirit are in great concern about that vast number of poor people, who are aged, diseased, or maimed; and I have been desired to employ my thoughts what course may be taken, to ease the nation of so grievous an incumbrance. But I am not in the least pain upon that matter, because it is very well known, that they are every day dying, and rotting, by cold and famine, and filth, and vermin, as fast as can be reasonably expected. And as to the young labourers, they are now in almost as hopeful a condition. They cannot get work, and consequently pine away from want of nourishment, to a degree, that if at any time they are accidentally hired to common labour, they have not strength to perform it, and thus the country and themselves are happily delivered from the evils to come.

I have too long digressed, and therefore shall return to my subject. I think the advantages by the proposal which I have made are obvious and many, as well as of the highest importance.


For first, as I have already observed, it would greatly lessen the number of Papists, with whom we are yearly over-run, being the principal breeders of the nation, as well as our most dangerous enemies, and who stay at home on purpose with a design to deliver the kingdom to the Pretender, hoping to take their advantage by the absence of so many good Protestants, who have chosen rather to leave their country, than stay at home and pay tithes against their conscience to an episcopal curate.

Secondly, The poorer tenants will have something valuable of their own, which by law may be made liable to a distress, and help to pay their landlord’s rent, their corn and cattle being already seized, and money a thing unknown.

Thirdly, Whereas the maintainance of an hundred thousand children, from two years old, and upwards, cannot be computed at less than ten shillings a piece per annum, the nation’s stock will be thereby encreased fifty thousand pounds per annum, besides the profit of a new dish, introduced to the tables of all gentlemen of fortune in the kingdom, who have any refinement in taste. And the money will circulate among our selves, the goods being entirely of our own growth and manufacture.

Fourthly, The constant breeders, besides the gain of eight shillings sterling per annum by the sale of their children, will be rid of the charge of maintaining them after the first year.


Fifthly, This food would likewise bring great custom to taverns, where the vintners will certainly be so prudent as to procure the best receipts for dressing it to perfection; and consequently have their houses frequented by all the fine gentlemen, who justly value themselves upon their knowledge in good eating; and a skilful cook, who understands how to oblige his guests, will contrive to make it as expensive as they please.

Sixthly, This would be a great inducement to marriage, which all wise nations have either encouraged by rewards, or enforced by laws and penalties. It would encrease the care and tenderness of mothers towards their children, when they were sure of a settlement for life to the poor babes, provided in some sort by the publick, to their annual profit instead of expence. We should soon see an honest emulation among the married women, which of them could bring the fattest child to the market. Men would become as fond of their wives, during the time of their pregnancy, as they are now of their mares in foal, their cows in calf, or sow when they are ready to farrow; nor offer to beat or kick them (as is too frequent a practice) for fear of a miscarriage.

Many other advantages might be enumerated. For instance, the addition of some thousand carcasses in our exportation of barrel’d beef: the propagation of swine’s flesh, and improvement in the art of making good bacon, so much wanted among us by the great destruction of pigs, too frequent at our tables; which are no way comparable in taste or magnificence to a well grown, fat yearly child, which roasted whole will make a considerable figure at a Lord Mayor’s feast, or any other publick entertainment. But this, and many others, I omit, being studious of brevity.

Supposing that one thousand families in this city, would be constant customers for infants flesh, besides others who might have it at merry meetings, particularly at weddings and christenings, I compute that Dublin would take off annually about twenty thousand carcasses; and the rest of the kingdom (where probably they will be sold somewhat cheaper) the remaining eighty thousand.

I can think of no one objection, that will possibly be raised against this proposal, unless it should be urged, that the number of people will be thereby much lessened in the kingdom. This I freely own, and ’twas indeed one principal design in offering it to the world. I desire the reader will observe, that I calculate my remedy for this one individual Kingdom of Ireland, and for no other that ever was, is, or, I think, ever can be upon Earth. Therefore let no man talk to me of other expedients: Of taxing our absentees at five shillings a pound: Of using neither cloaths, nor houshold furniture, except what is of our own growth and manufacture: Of utterly rejecting the materials and instruments that promote foreign luxury: Of curing the expensiveness of pride, vanity, idleness, and gaming in our women: Of introducing a vein of parsimony, prudence and temperance: Of learning to love our country, wherein we differ even from Laplanders, and the inhabitants of Topinamboo: Of quitting our animosities and factions, nor acting any longer like the Jews, who were murdering one another at the very moment their city was taken: Of being a little cautious not to sell our country and consciences for nothing: Of teaching landlords to have at least one degree of mercy towards their tenants. Lastly, of putting a spirit of honesty, industry, and skill into our shop-keepers, who, if a resolution could now be taken to buy only our native goods, would immediately unite to cheat and exact upon us in the price, the measure, and the goodness, nor could ever yet be brought to make one fair proposal of just dealing, though often and earnestly invited to it.

Therefore I repeat, let no man talk to me of these and the like expedients, till he hath at least some glympse of hope, that there will ever be some hearty and sincere attempt to put them into practice.


But, as to my self, having been wearied out for many years with offering vain, idle, visionary thoughts, and at length utterly despairing of success, I fortunately fell upon this proposal, which, as it is wholly new, so it hath something solid and real, of no expence and little trouble, full in our own power, and whereby we can incur no danger in disobliging England. For this kind of commodity will not bear exportation, and flesh being of too tender a consistence, to admit a long continuance in salt, although perhaps I could name a country, which would be glad to eat up our whole nation without it.

After all, I am not so violently bent upon my own opinion, as to reject any offer, proposed by wise men, which shall be found equally innocent, cheap, easy, and effectual. But before something of that kind shall be advanced in contradiction to my scheme, and offering a better, I desire the author or authors will be pleased maturely to consider two points. First, As things now stand, how they will be able to find food and raiment for a hundred thousand useless mouths and backs. And secondly, There being a round million of creatures in humane figure throughout this kingdom, whose whole subsistence put into a common stock, would leave them in debt two million of pounds sterling, adding those who are beggars by profession, to the bulk of farmers, cottagers and labourers, with their wives and children, who are beggars in effect; I desire those politicians who dislike my overture, and may perhaps be so bold to attempt an answer, that they will first ask the parents of these mortals, whether they would not at this day think it a great happiness to have been sold for food at a year old, in the manner I prescribe, and thereby have avoided such a perpetual scene of misfortunes, as they have since gone through, by the oppression of landlords, the impossibility of paying rent without money or trade, the want of common sustenance, with neither house nor cloaths to cover them from the inclemencies of the weather, and the most inevitable prospect of intailing the like, or greater miseries, upon their breed for ever.

I profess, in the sincerity of my heart, that I have not the least personal interest in endeavouring to promote this necessary work, having no other motive than the publick good of my country, by advancing our trade, providing for infants, relieving the poor, and giving some pleasure to the rich. I have no children, by which I can propose to get a single penny; the youngest being nine years old, and my wife past child-bearing.")



essay2 = G_K_Chesterton.stories.create!(title: "On Lying In Bed", content: "Lying in bed would be an altogether perfect and supreme experience if only one had a coloured pencil long enough to draw on the ceiling. This, however, is not generally a part of the domestic apparatus on the premises. I think myself that the thing might be managed with several pails of Aspinall and a broom. Only if one worked in a really sweeping and masterly way, and laid on the colour in great washes, it might drip down again on one’s face in floods of rich and mingled colour like some strange fairy rain; and that would have its disadvantages. I am afraid it would be necessary to stick to black and white in this form of artistic composition. To that purpose, indeed, the white ceiling would be of the greatest possible use; in fact, it is the only use I think of a white ceiling being put to.

But for the beautiful experiment of lying in bed I might never have discovered it. For years I have been looking for some blank spaces in a modern house to draw on. Paper is much too small for any really allegorical design; as Cyrano de Bergerac says, “Il me faut des géants” [“I need giants”]. But when I tried to find these fine clear spaces in the modern rooms such as we all live in I was continually disappointed. I found an endless pattern and complication of small objects hung like a curtain of fine links between me and my desire. I examined the walls; I found them to my surprise to be already covered with wallpaper, and I found the wallpaper to be already covered with uninteresting images, all bearing a ridiculous resemblance to each other. I could not understand why one arbitrary symbol (a symbol apparently entirely devoid of any religious or philosophical significance) should thus be sprinkled all over my nice walls like a sort of small-pox. The Bible must be referring to wallpapers, I think, when it says, “Use not vain repetitions, as the Gentiles do.” I found the Turkey carpet a mass of unmeaning colours, rather like the Turkish Empire, or like the sweetmeat called Turkish Delight. I do not exactly know what Turkish Delight really is; but I suppose it is Macedonian Massacres. Everywhere that I went forlornly, with my pencil or my paint brush, I found that others had unaccountably been before me, spoiling the walls, the curtains, and the furniture with their childish and barbaric designs.

. . . . .

Nowhere did I find a really clear space for sketching until this occasion when I prolonged beyond the proper limit the process of lying on my back in bed. Then the light of that white heaven broke upon my vision, that breadth of mere white which is indeed almost the definition of Paradise, since it means purity and also means freedom. But alas! like all heavens, now that it is seen it is found to be unattainable; it looks more austere and more distant than the blue sky outside the window. For my proposal to paint on it with the bristly end of a broom has been discouraged—never mind by whom; by a person debarred from all political rights—and even my minor proposal to put the other end of the broom into the kitchen fire and turn it to charcoal has not been conceded. Yet I am certain that it was from persons in my position that all the original inspiration came for covering the ceilings of palaces and cathedrals with a riot of fallen angels or victorious gods. I am sure that it was only because Michael Angelo was engaged in the ancient and honourable occupation of lying in bed that he ever realized how the roof of the Sistine Chapel might be made into an awful imitation of a divine drama that could only be acted in the heavens.

The tone now commonly taken toward the practice of lying in bed is hypocritical and unhealthy. Of all the marks of modernity that seem to mean a kind of decadence, there is none more menacing and dangerous than the exultation of very small and secondary matters of conduct at the expense of very great and primary ones, at the expense of eternal ties and tragic human morality. If there is one thing worse than the modern weakening of major morals, it is the modern strengthening of minor morals. Thus it is considered more withering to accuse a man of bad taste than of bad ethics. Cleanliness is not next to godliness nowadays, for cleanliness is made essential and godliness is regarded as an offence. A playwright can attack the institution of marriage so long as he does not misrepresent the manners of society, and I have met Ibsenite pessimists who thought it wrong to take beer but right to take prussic acid. Especially this is so in matters of hygiene; notably such matters as lying in bed. Instead of being regarded, as it ought to be, as a matter of personal convenience and adjustment, it has come to be regarded by many as if it were a part of essential morals to get up early in the morning. It is upon the whole part of practical wisdom; but there is nothing good about it or bad about its opposite.

. . . . .

Misers get up early in the morning; and burglars, I am informed, get up the night before. It is the great peril of our society that all its mechanisms may grow more fixed while its spirit grows more fickle. A man’s minor actions and arrangements ought to be free, flexible, creative; the things that should be unchangeable are his principles, his ideals. But with us the reverse is true; our views change constantly; but our lunch does not change. Now, I should like men to have strong and rooted conceptions, but as for their lunch, let them have it sometimes in the garden, sometimes in bed, sometimes on the roof, sometimes in the top of a tree. Let them argue from the same first principles, but let them do it in a bed, or a boat, or a balloon. This alarming growth of good habits really means a too great emphasis on those virtues which mere custom can ensure, it means too little emphasis on those virtues which custom can never quite ensure, sudden and splendid virtues of inspired pity or of inspired candour. If ever that abrupt appeal is made to us we may fail. A man can get used to getting up at five o’clock in the morning. A man cannot very well get used to being burnt for his opinions; the first experiment is commonly fatal. Let us pay a little more attention to these possibilities of the heroic and unexpected. I dare say that when I get out of this bed I shall do some deed of an almost terrible virtue.

For those who study the great art of lying in bed there is one emphatic caution to be added. Even for those who can do their work in bed (like journalists), still more for those whose work cannot be done in bed (as, for example, the professional harpooners of whales), it is obvious that the indulgence must be very occasional. But that is not the caution I mean. The caution is this: if you do lie in bed, be sure you do it without any reason or justification at all. I do not speak, of course, of the seriously sick. But if a healthy man lies in bed, let him do it without a rag of excuse; then he will get up a healthy man. If he does it for some secondary hygienic reason, if he has some scientific explanation, he may get up a hypochondriac.")


essay3 = Christopher_Morley.stories.create!(title: "On Laziness", content: "To-day we rather intended to write an essay on Laziness, but were too indolent to do so.

The sort of thing we had in mind to write would have been exceedingly persuasive. We intended to discourse a little in favour of a greater appreciation of Indolence as a benign factor in human affairs.

It is our observation that every time we get into trouble it is due to not having been lazy enough. Unhappily, we were born with a certain fund of energy. We have been hustling about for a number of years now, and it doesn’t seem to get us anything but tribulation. Henceforward we are going to make a determined effort to be more languid and demure. It is the bustling man who always gets put on committees, who is asked to solve the problems of other people and neglect his own.

The man who is really, thoroughly, and philosophically slothful is the only thoroughly happy man. It is the happy man who benefits the world. The conclusion is inescapable.

We remember a saying about the meek inheriting the earth. The truly meek man is the lazy man. He is too modest to believe that any ferment and hubbub of his can ameliorate the earth or assuage the perplexities of humanity.

O. Henry said once that one should be careful to distinguish laziness from dignified repose. Alas, that was a mere quibble. Laziness is always dignified, it is always reposeful. Philosophical laziness, we mean. The kind of laziness that is based upon a carefully reasoned analysis of experience. Acquired laziness. We have no respect for those who were born lazy; it is like being born a millionaire: they cannot appreciate their bliss. It is the man who has hammered his laziness out of the stubborn material of life for whom we chant praise and allelulia.

The laziest man we know—we do not like to mention his name, as the brutal world does not yet recognize sloth at its community value—is one of the greatest poets in this country; one of the keenest satirists; one of the most rectilinear thinkers. He began life in the customary hustling way. He was always too busy to enjoy himself. He became surrounded by eager people who came to him to solve their problems. “It’s a queer thing,” he said sadly; “no one ever comes to me asking for help in solving my problems.” Finally the light broke upon him. He stopped answering letters, buying lunches for casual friends and visitors from out of town, he stopped lending money to old college pals and frittering his time away on all the useless minor matters that pester the good-natured. He sat down in a secluded café with his cheek against a seidel of dark beer and began to caress the universe with his intellect.

The most damning argument against the Germans is that they were not lazy enough. In the middle of Europe, a thoroughly disillusioned, indolent and delightful old continent, the Germans were a dangerous mass of energy and bumptious push. If the Germans had been as lazy, as indifferent, and as righteously laissez-fairish as their neighbours, the world would have been spared a great deal.

People respect laziness. If you once get a reputation for complete, immovable, and reckless indolence the world will leave you to your own thoughts, which are generally rather interesting.

Doctor Johnson, who was one of the world’s great philosophers, was lazy. Only yesterday our friend the Caliph showed us an extraordinarily interesting thing. It was a little leather-bound notebook in which Boswell jotted down memoranda of his talks with the old doctor. These notes he afterward worked up into the immortal Biography. And lo and behold, what was the very first entry in this treasured little relic?

Doctor Johnson told me in going to Ilam from Ashbourne, 22 September, 1777, that the way the plan of his Dictionary came to be addressed to Lord Chesterfield was this: He had neglected to write it by the time appointed. Dodsley suggested a desire to have it addressed to Lord C. Mr. J. laid hold of this as an excuse for delay, that it might be better done perhaps, and let Dodsley have his desire. Mr. Johnson said to his friend, Doctor Bathurst: “Now if any good comes of my addressing to Lord Chesterfield it will be ascribed to deep policy and address, when, in fact, it was only a casual excuse for laziness.”
Thus we see that it was sheer laziness that led to the greatest triumph of Doctor Johnson’s life, the noble and memorable letter to Chesterfield in 1775.

Mind your business is a good counsel; but mind your idleness also. It’s a tragic thing to make a business of your mind. Save your mind to amuse yourself with.

The lazy man does not stand in the way of progress. When he sees progress roaring down upon him he steps nimbly out of the way. The lazy man doesn’t (in the vulgar phrase) pass the buck. He lets the buck pass him. We have always secretly envied our lazy friends. Now we are going to join them. We have burned our boats or our bridges or whatever it is that one burns on the eve of a momentous decision.

Writing on this congenial topic has roused us up to quite a pitch of enthusiasm and energy.")


essay4 = Ann_Plato.stories.create!(title: "Description Of A Desert", content: 'It is difficult to form a correct idea of a desert, without having seen one. It is a vast plain of sands and stones, interspersed with mountains of various sizes and heights, without roads or shelters. They sometimes have springs of water, which burst forth, and create verdant spots.

The most remarkable of deserts is the Sahara. This is a vast plain, but little elevated above the level of the ocean, and covered with sand and gravel, with a mixture of sea shells, and appears like the basin of an evaporated sea.

Amid the desert there are springs of water, which burst forth and create verdant spots, called Oases. There are thirty-two of these which contain fountains, and Date and Palm trees; twenty of them are inhabited. They serve as stopping places for the caravans, and often contain villages.

Were it not for these no human being could cross this waste of burning sand. So violent, sometimes, is the burning wind that the scorching heat dries up the water of these springs, and then frequently, the most disastrous consequences follow.

In 1805, a caravan, consisting of 2,000 persons and 1,800 camels, not finding water at the usual resting place, died of thirst, both men and animals. Storms of wind are more terrible on this desert than on the ocean. Vast surges and clouds of red sand are raised and rolled forward, burying every thing in its way, and it is said that whole tribes have thus been swallowed up.

The situation of such is dreadful, and admits of no resource. Many perish victims of the most horrible thirst. It is then that the value of a cup of water is really felt.

In such a case there is no distinction. If the master has not, the servant will not give it to him; for very few are the instances where a man will voluntarily lose his life to save that of another. What a situation for a man, though a rich one, perhaps the owner of all the caravan! He is dying for a cup of water—no one gives it to him; he offers all he possesses—no one hears him; they are all dying, though by walking a few hours further, they might be saved.

In short, to be thirsty in a desert, without water, exposed to the burning sun, without shelter, is the most terrible situation that a man can be placed in, and one of the greatest sufferings that a human being can sustain; the tongue and lips swell; a hollow sound is heard in the ears, which brings on deafness, and the brain appears to grow thick and inflamed.

If, unfortunately, any one falls sick on the road, he must either endure the fatigue of traveling on a camel, (which is troublesome even to healthy people,) or he must be left behind on the sand, without any assistance, and remain so till a slow death come to relieve him. No one remains with him, not even his old and faithful servant; no one will stay and die with him; all pity his fate, but no one will be his companion.")')


essay5 = Francis_Bacon.stories.create!(title: "Of Studies", content: "Studies serve for delight, for ornament, and for ability. Their chief use for delight is in privateness and retiring; for ornament is in discourse; and for ability is in the judgment and disposition of business. For expert men can execute, and perhaps judge of particulars, one by one; but the general counsels, and the plots and marshalling of affairs, come best, from those that are learned. To spend too much time in studies is sloth; to use them too much for ornament, is affectation; to make judgment wholly by their rules, is the humor of a scholar. They perfect nature, and are perfected by experience: for natural abilities are like natural plants, that need pruning, by study; and studies themselves, do give forth directions too much at large, except they be bounded in by experience. Crafty men condemn studies, simple men admire them, and wise men use them; for they teach not their own use; but that is a wisdom without them, and above them, won by observation.

Read not to contradict and confute; nor to believe and take for granted; nor to find talk and discourse; but to weigh and consider. Some books are to be tasted, others to be swallowed, and some few to be chewed and digested; that is, some books are to be read only in parts; others to be read, but not curiously; and some few to be read wholly, and with diligence and attention. Some books also may be read by deputy, and extracts made of them by others; but that would be only in the less important arguments, and the meaner sort of books, else distilled books are like common distilled waters, flashy things. Reading maketh a full man; conference a ready man; and writing an exact man. And therefore, if a man write little, he had need have a great memory; if he confer little, he had need have a present wit: and if he read little, he had need have much cunning, to seem to know, that he doth not. Histories make men wise; poets witty; the mathematics subtile; natural philosophy deep; moral grave; logic and rhetoric able to contend.

Abeunt studia in mores.
[“practices zealously pursued pass into habits.”—Merriam-Webster definition]

Nay, there is no ston[e] or impediment in the wit, but may be wrought out by fit studies; like as diseases of the body, may have appropriate exercises. Bowling is good for the stone and reins; shooting for the lungs and breast; gentle walking for the stomach; riding for the head; and the like. So if a man’s wit be wandering, let him study the mathematics; for in demonstrations, if his wit be called away never so little, he must begin again. If his wit be not apt to distinguish or find differences, let him study the Schoolmen; for they are cymini sectores. If he be not apt to beat over matters, and to call up one thing to prove and illustrate another, let him study the lawyers’ cases. So every defect of the mind, may have a special receipt.")


Topic.destroy_all
news = Topic.create!(title: "News")
essays = Topic.create!(title: "Essays")
fiction = Topic.create!(title: "Fiction")
election = Topic.create!(title: "Election")

TopicTag.destroy_all
TopicTag.create!(topic_id: essays.id, story_id: essay1.id)
TopicTag.create!(topic_id: essays.id, story_id: essay2.id)
TopicTag.create!(topic_id: essays.id, story_id: essay3.id)
TopicTag.create!(topic_id: essays.id, story_id: essay4.id)
TopicTag.create!(topic_id: essays.id, story_id: essay5.id)

TopicTag.create!(topic_id: news.id, story_id: news1.id)
TopicTag.create!(topic_id: news.id, story_id: news2.id)
TopicTag.create!(topic_id: news.id, story_id: news3.id)

TopicTag.create!(topic_id: election.id, story_id: election1.id)

TopicTag.create!(topic_id: fiction.id, story_id: fiction1.id)

TopicTag.create!(topic_id: fiction.id, story_id: fiction2.id)
