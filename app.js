// Data
const characters = [
  {
    name: 'Krishna',
    role: 'Divine Guide, Charioteer, Strategist',
    image: 'characters/Krishna.jpg',
    birth: 'Eighth avatar of Lord Vishnu, born to Devaki and Vasudeva in Mathura. Raised by Yashoda and Nanda in Gokul to escape King Kansa\'s tyranny.',
    iconic_quote: 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.',
    key_moments: ['Delivered the Bhagavad Gita discourse to Arjuna on the battlefield', 'Served as Arjuna\'s charioteer throughout the Kurukshetra War', 'Revealed his universal form (Vishvarupa) to Arjuna', 'Orchestrated strategic victories for the Pandavas', 'Prevented Ashwatthama\'s Brahmastra from killing Uttara\'s unborn child'],
    relationships: 'Friend and guide to Arjuna. Cousin to Pandavas and Kauravas. Founder of Dwarka. Husband of Rukmini and other queens.',
    weapon: 'Sudarshana Chakra',
    powers: 'Divine wisdom, Universal form (Vishvarupa), Strategic genius, Divine protection, Control over time and destiny',
    facts: 'Considered the supreme deity in Vaishnavism. Central figure in the Mahabharata and Bhagavad Gita. Known for his playful childhood and profound teachings.',
    color: '#3b82f6'
  },
  {
    name: 'Arjuna',
    role: 'Greatest Archer, Third Pandava',
    image: 'characters/arjuna.jpg',
    birth: 'Born to Kunti through invocation of Indra, the king of gods. Third of the five Pandava brothers.',
    iconic_quote: 'I will not fight against my own kinsmen. What pleasure can we derive from killing our relatives? Better to live on alms than to enjoy life at the cost of their blood.',
    key_moments: ['Won Draupadi\'s hand in the Swayamvara by piercing the fish eye', 'Received divine weapons including Gandiva bow and Pashupatastra', 'Killed Karna on the 17th day of war using Anjalika astra', 'Defeated Bhishma with Krishna\'s guidance', 'Received the teachings of Bhagavad Gita from Krishna'],
    relationships: 'Son of Kunti and Indra. Husband of Draupadi, Subhadra, Ulupi, Chitrangada. Father of Abhimanyu. Student of Drona.',
    weapon: 'Gandiva (Divine Bow), Pashupatastra',
    powers: 'Master archer, Wielder of celestial weapons, Ability to use all astras, Divine focus, Ambidextrous archery',
    facts: 'Known as Partha and Dhananjaya. Central hero of the Mahabharata. Revered for his valor, skill in archery, and complex character development throughout the epic.',
    color: '#10b981'
  },
  {
    name: 'Karna',
    role: 'Tragic Hero, King of Anga, Supreme Archer',
    image: 'characters/karna.jpg',
    birth: 'Born to Kunti through invocation of Surya before her marriage. Abandoned as infant, raised by charioteer Adhiratha and Radha.',
    iconic_quote: 'I would rather die with honor than live with humiliation. My loyalty to Duryodhana is my dharma.',
    key_moments: ['Humiliated at Draupadi\'s Swayamvara for his perceived low caste', 'Made King of Anga by Duryodhana', 'Gave away his divine Kavach and Kundala to Indra', 'Received Vasavi Shakti weapon from Indra', 'Killed by Arjuna when his chariot wheel got stuck on day 17'],
    relationships: 'Secret eldest Pandava. Loyal friend to Duryodhana. Rival of Arjuna. Son of Surya and Kunti. Commander of Kaurava army.',
    weapon: 'Vijaya Bow, Vasavi Shakti, Kavach-Kundala',
    powers: 'Natural armor and earrings, Supreme archery, Divine weapons mastery, Unmatched generosity, Solar energy',
    facts: 'Known as the "Son of the Sun". Despite his tragic life, he is revered for his generosity, loyalty, and martial prowess. Often considered one of the greatest archers in the epic.',
    color: '#f59e0b'
  },
  {
    name: 'Draupadi',
    role: 'Princess of Panchala, Common Wife of Five Pandavas',
    image: 'characters/draupadi.jpg',
    birth: 'Born from the sacred fire during King Drupada\'s yajna. Also called Panchali and Yajnaseni.',
    iconic_quote: 'I will not tie my hair until it is washed with the blood of Dushasana and I stand on Duryodhana\'s corpse.',
    key_moments: ['Won by Arjuna in Swayamvara, married all five Pandavas', 'Humiliated in Kuru court during the dice game', 'Saved by Krishna when Dushasana tried to disrobe her', 'Vowed revenge against Kauravas', 'All five sons killed by Ashwatthama on the final night'],
    relationships: 'Wife of all five Pandavas. Daughter of King Drupada. Mother of Upapandavas. Friend of Krishna.',
    weapon: 'Akshaya Patra (Inexhaustible Vessel)',
    powers: 'Divine beauty, Fire-born strength, Prophetic visions, Unwavering resolve, Power to curse',
    facts: 'Considered an incarnation of Goddess Shakti. Central figure in the Mahabharata, symbolizing dignity, strength, and resilience in the face of adversity.',
    color: '#ec4899'
  },
  {
    name: 'Bhima',
    role: 'Strongest Warrior, Second Pandava',
    image: 'characters/bhima.jpg',
    birth: 'Born to Kunti through invocation of Vayu, the wind god. Known for immense physical strength.',
    iconic_quote: 'I will tear open Dushasana\'s chest and drink his blood. I will break Duryodhana\'s thighs with my mace.',
    key_moments: ['Killed demon Bakasura to protect villagers', 'Killed all 100 Kaurava brothers in the war', 'Ripped open Dushasana\'s chest and drank his blood', 'Broke Duryodhana\'s thighs in final mace duel', 'Killed Jarasandha in a wrestling match'],
    relationships: 'Son of Kunti and Vayu. Husband of Draupadi and Hidimbi. Father of Ghatotkacha. Brother of Pandavas.',
    weapon: 'Gada (Mace)',
    powers: 'Superhuman strength (10,000 elephants), Wind god\'s son abilities, Poison immunity, Master of mace combat, Demon slaying',
    facts: 'Known as Vrikodara (wolf-bellied) for his voracious appetite. Renowned for his loyalty to his brothers and his fierce sense of justice.',
    color: '#ef4444'
  },
  {
    name: 'Yudhishthira',
    role: 'King of Righteousness, Eldest Pandava',
    image: 'characters/yudhishthira.jpg',
    birth: 'Born to Kunti through invocation of Dharma (Yama), god of righteousness. Known for unwavering adherence to truth.',
    iconic_quote: 'Truth is the highest virtue, and adherence to dharma is the supreme duty of a king.',
    key_moments: ['Lost kingdom, brothers, and wife in the game of dice', 'Successfully completed 13 years of exile including incognito year', 'Killed Shalya on the 18th day of war', 'Crowned emperor of Hastinapura after the war', 'Only one to enter heaven in mortal form'],
    relationships: 'Son of Kunti and Dharma. Eldest Pandava. Husband of Draupadi. Rightful king of Hastinapura.',
    weapon: 'Spear, Knowledge of Dharma',
    powers: 'Truthfulness that affects nature, Divine wisdom, Ability to never lie, Righteous judgment, Immunity to defeat when truthful',
    facts: 'Known as Dharmaraja (King of Dharma). His commitment to truth and righteousness often put him in difficult situations, yet he remained steadfast.',
    color: '#8b5cf6'
  },
  {
    name: 'Duryodhana',
    role: 'Eldest Kaurava, Crown Prince of Hastinapura',
    image: 'characters/duryodhana.jpg',
    birth: 'Eldest of 100 Kaurava brothers, born to Gandhari and Dhritarashtra. Embodiment of ambition and pride.',
    iconic_quote: 'I will not give the Pandavas even land enough to drive a needle into. Let them try to take it by force.',
    key_moments: ['Plotted to kill Pandavas in the lac palace', 'Orchestrated the dice game that humiliated Draupadi', 'Refused to return Pandava kingdom after exile', 'Appointed Bhishma, Drona, Karna, and Shalya as commanders', 'Killed by Bhima in mace duel on day 18'],
    relationships: 'Son of Dhritarashtra and Gandhari. Eldest of 100 Kauravas. Best friend of Karna. Nephew of Shakuni.',
    weapon: 'Gada (Mace)',
    powers: 'Master of mace combat, Strategic warfare, Exceptional strength, Leadership abilities, Iron resolve',
    facts: 'Known for his unwavering loyalty to his friends and his fierce rivalry with the Pandavas. His ambition ultimately led to the devastating Kurukshetra War.',
    color: '#dc2626'
  },
  {
    name: 'Bhishma',
    role: 'Grand Uncle, Invincible Warrior, Pillar of Hastinapura',
    image: 'characters/bhishma.jpg',
    birth: 'Son of King Shantanu and Goddess Ganga. Took vow of celibacy to ensure father\'s marriage to Satyavati.',
    iconic_quote: 'I have taken a vow to protect the throne of Hastinapura. I will fight for whoever sits on it, even if it costs me my life.',
    key_moments: ['Took terrible vow of celibacy and renounced throne', 'Blessed with Ichcha Mrityu (death at will)', 'Led Kaurava army for first 10 days', 'Fell to Shikhandi and Arjuna\'s arrows', 'Delivered wisdom to Yudhishthira from bed of arrows'],
    relationships: 'Grand uncle to both Pandavas and Kauravas. Son of Ganga. Guardian of Kuru dynasty. Student of Parashurama.',
    weapon: 'Bow and Divine Arrows',
    powers: 'Ichcha Mrityu (death at will), Invincibility in battle, Master of all weapons, Divine blessing of Ganga, Celibacy-based power',
    facts: 'Known as Devavrata before his vow. Revered for his unwavering loyalty to the Kuru throne and his unparalleled martial skills. His death marked a turning point in the war.',
    color: '#06b6d4'
  },
  {
    name: 'Dronacharya',
    role: 'Royal Preceptor, Master of Weapons',
    image: 'characters/drona.jpg',
    birth: 'Born from a pot to sage Bharadwaja. Master archer and teacher of both Pandavas and Kauravas.',
    iconic_quote: 'Arjuna alone deserves to be called the greatest archer. His focus and devotion to the art are unmatched.',
    key_moments: ['Taught archery to both Pandavas and Kauravas', 'Demanded Ekalavya\'s thumb as guru dakshina', 'Commanded Kaurava army from day 11-15', 'Killed when he laid down weapons upon hearing of Ashwatthama\'s death', 'Father of Ashwatthama'],
    relationships: 'Teacher of Pandavas and Kauravas. Father of Ashwatthama. Friend of Drupada. Commander of Kaurava forces.',
    weapon: 'Brahmastra, All Divine Weapons',
    powers: 'Complete knowledge of warfare, Master teacher, Ability to use all astras, Strategic genius, Divine weapon summoning',
    facts: 'Renowned for his strict discipline and unparalleled knowledge of martial arts. His favoritism towards Arjuna created lasting tensions among his students.',
    color: '#a855f7'
  },
  {
    name: 'Shakuni',
    role: 'Prince of Gandhara, Master Strategist, Maternal Uncle of Kauravas',
    image: 'characters/shakuni.jpg',
    birth: 'Son of King Subala of Gandhara. Brother of Gandhari. Known as the mastermind behind the Kurukshetra War.',
    iconic_quote: 'I will ensure that all 100 sons of Dhritarashtra meet their doom. My revenge shall be complete.',
    key_moments: ['Accompanied Gandhari to Hastinapura for her marriage to blind Dhritarashtra', 'Won the dice game against Yudhishthira using his cunning skills', 'Caused the exile of Pandavas through manipulation and foul play', 'Advised Duryodhana in planning against Pandavas throughout their lives', 'Killed by Sahadeva on the 18th day of Kurukshetra War'],
    relationships: 'Brother of Gandhari. Maternal uncle to 100 Kauravas. King of Gandhara. Father of Uluka. Close advisor to Duryodhana.',
    weapon: 'Dice (Made from father\'s bones)',
    powers: 'Master manipulator, Strategic genius, Illusionist, Mind control through dice, Political warfare mastery',
    facts: 'Known for his cunning and ruthless tactics. His actions were driven by a desire for revenge against the Kuru dynasty for past grievances against his family.',
    color: '#9333ea'
  },
  {
    name: 'Gandhari',
    role: 'Queen of Hastinapura, Mother of 100 Kauravas',
    image: 'characters/gandhari.jpg',
    birth: 'Princess of Gandhara, daughter of King Subala. Blindfolded herself after marriage to blind Dhritarashtra to share his suffering.',
    iconic_quote: 'A mother\'s curse knows no bounds. Even Krishna cannot escape the consequences of allowing my sons to die.',
    key_moments: ['Blindfolded herself voluntarily after marrying blind Dhritarashtra', 'Gave birth to 100 Kaurava sons and one daughter Dushala', 'Witnessed the humiliation of Draupadi but remained silent', 'Lost all 100 sons in the Kurukshetra War', 'Cursed Krishna that Yadava dynasty would destroy itself'],
    relationships: 'Wife of Dhritarashtra. Mother of 100 Kauravas including Duryodhana. Sister of Shakuni. Aunt to Pandavas.',
    weapon: 'Power of Penance and Curse',
    powers: 'Extreme penance power, Ability to curse gods, Protective blessings, Prophetic sight (despite blindfold), Divine devotion strength',
    facts: 'Known for her unwavering devotion to her husband and sons. Her curse on Krishna led to the eventual destruction of the Yadava dynasty, showcasing her immense spiritual power.',
    color: '#be123c'
  },
  {
    name: 'Kunti',
    role: 'Queen Mother, Mother of Pandavas and Karna',
    image: 'characters/kunti.jpg',
    birth: 'Princess of Yadava dynasty, adopted daughter of King Kuntibhoja. Received divine boon to invoke gods and bear children.',
    iconic_quote: 'Karna is my firstborn son, but I abandoned him out of fear. This secret I carried my whole life.',
    key_moments: ['Invoked Sun god Surya in youth and gave birth to Karna, whom she abandoned', 'Married King Pandu and bore three eldest Pandavas (Yudhishthira, Bhima, Arjuna)', 'Raised all five Pandavas after Madri\'s death', 'Asked Karna for a boon to spare her other five sons', 'Revealed Karna\'s true identity after his death'],
    relationships: 'Mother of Yudhishthira, Bhima, Arjuna, and Karna. Wife of Pandu. Stepmother to Nakula and Sahadeva. Aunt of Krishna.',
    weapon: 'Mantra to Invoke Gods',
    powers: 'Divine invocation ability, Blessing and cursing power, Royal authority, Spiritual strength, Motherly protection powers',
    facts: 'Known for her strength and resilience as a mother. Her decision to abandon Karna haunted her throughout her life, adding complexity to her character in the epic.',
    color: '#0891b2'
  },
  {
    name: 'Parashurama',
    role: 'Sixth Avatar of Vishnu, Immortal Warrior Sage, Teacher of Warriors',
    image: 'characters/parashurama.jpg',
    birth: 'Born to Brahmin sage Jamadaghi and princess Renuka. One of the ten avatars of Lord Vishnu, blessed with immortality.',
    iconic_quote: 'I have vowed to rid the earth of all corrupt Kshatriyas. My axe shall deliver justice to those who abuse their power.',
    key_moments: ['Trained Bhishma in the art of warfare at Goddess Ganga\'s request', 'Taught Dronacharya the knowledge of Brahmastra and divine weapons', 'Accepted Karna as student believing him to be a Brahmin', 'Fought Bhishma in an epic battle that ended in a draw', 'Cursed Karna when he discovered his true Kshatriya identity'],
    relationships: 'Guru to Bhishma, Drona, and Karna. Sixth avatar of Vishnu. Son of Jamadaghi. One of the Chiranjivi (immortals).',
    weapon: 'Parashu (Divine Axe), Brahmastra',
    powers: 'Immortality (Chiranjivi), All weapon mastery, Ability to defeat entire Kshatriya race, Divine rage, Vishnu\'s avatar powers',
    facts: 'Known for his fierce temper and unwavering commitment to justice. His role as a teacher to key warriors in the Mahabharata significantly influenced the course of the epic.',
    color: '#047857'
  },
  {
    name: 'Ekalavya',
    role: 'Prince of Nishadas, Self-Taught Master Archer',
    image: 'characters/ekalavya.jpg',
    birth: 'Son of Devashrava (Vasudeva\'s brother), making him Krishna\'s cousin. Adopted and raised by King Hiranyadhanus of Nishada tribe.',
    iconic_quote: 'A true student needs no teacher but devotion. My guru\'s image is enough to guide me to mastery.',
    key_moments: ['Rejected by Drona due to his Nishada tribal background', 'Practiced archery before a clay statue of Drona', 'Shot seven arrows into a dog\'s mouth without harming it', 'Cut off his right thumb as guru dakshina when Drona demanded it', 'Later became king of Nishadas and was killed by Krishna'],
    relationships: 'Son of Devashrava. Cousin of Krishna. Adopted son of Hiranyadhanus. Student of Drona (unofficially). Ally of Jarasandha.',
    weapon: 'Bow and Arrows',
    powers: 'Self-taught archery mastery, Faster than Arjuna, Ambidextrous shooting, Animal communication, Tribal warfare skills',
    facts: 'Known for his unwavering dedication to learning despite social barriers. His story highlights themes of devotion, sacrifice, and the complexities of guru-shishya relationships in the epic.',
    color: '#0369a1'
  },
  {
    name: 'Abhimanyu',
    role: 'Young Warrior, Son of Arjuna',
    image: 'characters/abhimanyu.jpg',
    birth: 'Son of Arjuna and Subhadra (Krishna\'s sister). Avatar of Varchas, son of moon god Soma. Learned Chakravyuha entry technique while in the womb.',
    iconic_quote: 'I know how to enter the Chakravyuha. I will break through their formation and bring victory to the Pandavas.',
    key_moments: ['Married Princess Uttara of Matsya Kingdom', 'Entered the deadly Chakravyuha formation on day 13 of war', 'Killed Lakshmana (Duryodhana\'s son) and many Kaurava warriors', 'Fought bravely against six maharathis who attacked him simultaneously', 'Died at age 16; his son Parikshit continued the Kuru lineage'],
    relationships: 'Son of Arjuna and Subhadra. Nephew of Krishna. Husband of Uttara. Father of Parikshit. Grandson of Indra.',
    weapon: 'Sword, Bow, Chariot Combat',
    powers: 'Chakravyuha entry knowledge, Combat mastery at young age, Multi-warrior combat, Divine warrior skills, Fearlessness',
    facts: 'Known for his bravery and skill despite his young age. His death was a significant turning point in the Kurukshetra War, fueling the Pandavas\' resolve for victory.',
    color: '#7c3aed'
  },
  {
    name: 'Vidura',
    role: 'Prime Minister of Hastinapura, Voice of Dharma and Wisdom',
    image: 'characters/vidura.jpg',
    birth: 'Born to sage Vyasa and maid Parishrami through niyoga. Half-brother to Dhritarashtra and Pandu. Avatar of Dharma (Yama) itself.',
    iconic_quote: 'Righteousness is the foundation of a kingdom. A king who ignores dharma will bring ruin to his people.',
    key_moments: ['Served as Prime Minister and chief advisor in Hastinapura', 'Warned Dhritarashtra against the dice game and Draupadi\'s humiliation', 'Advised Pandavas secretly during their exile', 'Famous for Vidura Neeti - his discourse on practical wisdom', 'Renounced worldly life and merged with Yudhishthira before the war'],
    relationships: 'Son of Vyasa and Parishrami. Half-brother to Dhritarashtra and Pandu. Uncle to both Pandavas and Kauravas. Incarnation of Dharma.',
    weapon: 'Wisdom and Counsel',
    powers: 'Perfect knowledge of dharma, Prophetic visions, Political wisdom, Ability to see truth, Incarnation of Yama\'s knowledge',
    facts: 'Known for his unwavering commitment to truth and righteousness. His counsel was often ignored, leading to tragic consequences for the Kuru dynasty.',
    color: '#0e7490'
  },
  {
    name: 'Ashwatthama',
    role: 'Immortal Warrior, Son of Drona, Wielder of Divine Weapons',
    image: 'characters/ashwatthama.jpg',
    birth: 'Son of Dronacharya and Kripi. Born with a gem on his forehead that made him invincible. Excelled in the use of astras under his father\'s tutelage.',
    iconic_quote: 'I will avenge my father\'s unjust death. The Panchalas shall pay with their blood for their treachery.',
    key_moments: ['Fought alongside Kauravas throughout the war with great skill', 'Used Narayanastra against Pandava forces after Drona\'s death', 'Led night raid on day 18, killing all Pandava sons while sleeping', 'Fired Brahmastra at Pandava women\'s wombs to end their lineage', 'Cursed by Krishna with immortality and eternal suffering'],
    relationships: 'Son of Drona and Kripi. One of the Chiranjivis (immortals). Student and companion of Kauravas. Friend of Duryodhana.',
    weapon: 'Brahmastra, Narayanastra, Gem on Forehead',
    powers: 'Immortality (cursed), Invincibility from forehead gem, All astra mastery, Supernatural combat skills, Divine weapons wielding',
    facts: 'Known for his fierce loyalty to the Kauravas and his tragic downfall. His use of the Brahmastra against unborn children marked a dark turn in the epic, leading to his eternal curse.',
    color: '#b91c1c'
  },
  {
    name: 'Dhritarashtra',
    role: 'Blind King of Hastinapura, Father of 100 Kauravas',
    image: 'characters/dhritarashtra.jpg',
    birth: 'Born blind to Ambika and sage Vyasa through niyoga. Eldest son but denied throne due to blindness. Married Gandhari who blindfolded herself.',
    iconic_quote: 'My love for my sons has blinded me more than my eyes ever could. I knew their actions were wrong, yet I remained silent.',
    key_moments: ['Denied throne of Hastinapura due to his blindness', 'Fathered 100 Kaurava sons with Gandhari', 'Allowed the dice game despite Vidura\'s warnings', 'Remained passive during Draupadi\'s humiliation', 'Lost all 100 sons in Kurukshetra War due to his attachment'],
    relationships: 'Son of Vyasa and Ambika. Husband of Gandhari. Father of 100 Kauravas. Brother of Pandu and Vidura. Uncle to Pandavas.',
    weapon: 'Physical Strength',
    powers: 'Strength of 10,000 elephants, Royal authority, Political acumen, Enhanced hearing (compensating blindness), Iron grip',
    facts: 'Known for his tragic flaw of excessive attachment to his sons, leading to the downfall of the Kuru dynasty. His blindness symbolized his inability to see the moral decay around him.',
    color: '#4b5563'
  },
  {
  name: 'Nakula',
  role: 'Fourth Pandava, Master Swordsman & Horse Trainer',
  image: 'characters/nakula.jpg',
  birth: 'Born to Madri by invocation of the Ashwini Kumaras. Twin brother of Sahadeva.',
  iconic_quote: 'A skilled warrior’s greatest asset is grace under pressure—even in moments of war.',
  key_moments: ['Chose to fight for Pandavas in the war despite being youngest','Defeated many prominent Kaurava warriors', 'Trained and maintained the best horses during exile','Played a key role in finding water in the forest during Pandavas’ exile','Only Pandava not wounded in the war'],
  relationships: 'Son of Madri and Ashwini Kumaras. Twin brother of Sahadeva. Stepson of Kunti.',
  weapon: 'Sword, Spear',
  powers: 'Mastery over sword and blade, Unmatched horse training, Healing arts, Divine beauty',
  facts: 'Known for his exceptional beauty and skills in horse care. Considered one of the finest swordsmen of his time.',
  color: '#14b8a6'
},
{
  name: 'Sahadeva',
  role: 'Fifth Pandava, Astrologer, Wise Counselor',
  image: 'characters/sahadeva.jpg',
  birth: 'Born to Madri by invocation of the Ashwini Kumaras. Twin brother of Nakula.',
  iconic_quote: 'True wisdom lies in knowing what must be done, even when fate is hidden.',
  key_moments: ['Participated actively in the war, defeating several Kaurava warriors','Advised Krishna on auspicious time for war; predicted many key outcomes','Ate his father Pandu’s flesh (as a child) and gained immense knowledge','Helped in identifying omens and signs during exile and war','Killed Shakuni on the 18th day of the war'],
  relationships: 'Son of Madri and Ashwini Kumaras. Twin brother of Nakula. Stepson of Kunti.',
  weapon: 'Sword, Astrology/Omens',
  powers: 'Unparalleled astrological insights, Mastery in blade combat, Omens reading, Divine wisdom',
  facts: 'Known for his knowledge of astrology and omens. Played a pivotal role as a strategic advisor during Kurukshetra.',
  color: '#f43f5e'
},
{
  name: 'Ghatotkacha',
  role: 'Son of Bhima, Rakshasa Warrior',
  image: 'characters/ghatotkacha.jpg',
  birth: 'Born to Bhima and Hidimbi, a rakshasa princess, during Pandavas’ exile.',
  iconic_quote: 'In battle, I am the terror that moves with the wind and strikes with the thunder.',
  key_moments: ['Fought bravely for Pandavas, wielding magical powers and flying in the air','Terrified the Kaurava army with his massive size and demon magic','Sacrificed life to ensure Arjuna’s safety; triggered Karna to use Vasavi Shakti','Defeated many major adversaries with supernatural strength and illusions','Remembered as a war hero who died at Karna’s hands'],
  relationships: 'Son of Bhima and Hidimbi. Nephew of Pandavas. Hero among Rakshasas.',
  weapon: 'Magical powers, Physical strength',
  powers: 'Shape-shifting, Flight, Demon magic, Superhuman strength',
  facts: 'Known for his magical might and sacrifices during the war. His death shifted the fate of Arjuna’s survival.',
  color: '#eab308'
}

];

const weapons = [
  { name: 'Brahmastra', wielder: 'Arjuna, Ashwatthama, Drona, Karna', deity: 'Brahma', power: 'Weapon of total annihilation, capable of destroying entire armies and creation itself. Once released, it cannot be stopped.', lore: 'Created by Brahma himself, this astra symbolized ultimate destruction. Used rarely due to catastrophic consequences.', sanskrit: 'ब्रह्मास्त्र', translation: 'Weapon of Brahma', note: 'Ashwatthama misused it against Uttara\'s womb; Krishna cursed him to wander for eternity.', animation: 'pulsing-red-glow' },
  { name: 'Sudarshana Chakra', wielder: 'Lord Vishnu, Krishna', deity: 'Vishnu', power: 'Spinning discus with 108 serrated edges. Never misses its target, returns to wielder. Can destroy any evil.', lore: 'The ultimate weapon of Lord Vishnu, symbolizing dharma and cosmic justice. Krishna wielded it symbolically.', sanskrit: 'सुदर्शन चक्र', translation: 'Beautiful Vision Disc', note: 'Represents the wheel of dharma and time. Krishna almost used it to kill Bhishma.', animation: 'spinning-chakra' },
  { name: 'Gandiva', wielder: 'Arjuna', deity: 'Agni (Fire God)', power: 'Divine bow that never missed, adorned with gold bosses. Could shoot infinite arrows without tiring the wielder.', lore: 'Given to Arjuna by Agni during the burning of Khandava forest. Made Arjuna invincible in archery.', sanskrit: 'गाण्डीव', translation: 'The Irresistible Bow', note: 'Symbol of Arjuna\'s supremacy. He returned it after Krishna\'s departure.', animation: 'golden-bow-glow' },
  { name: 'Pashupatastra', wielder: 'Arjuna', deity: 'Shiva', power: 'Most destructive personal weapon. Can destroy creation, counter all weapons. Irrespective of target\'s nature.', lore: 'Arjuna obtained it through severe penance. Lord Shiva tested him before granting this supreme weapon.', sanskrit: 'पाशुपतास्त्र', translation: 'Weapon of the Lord of Creatures', note: 'Arjuna refrained from using it as the war was about justice, not total destruction.', animation: 'trishul-flame' },
  { name: 'Nagastra', wielder: 'Karna, Arjuna', deity: 'Nagas (Serpent beings)', power: 'Summons deadly serpents that attack the enemy. Can bind and poison opponents.', lore: 'Karna used it against Arjuna. Krishna pushed the chariot down to save Arjuna from decapitation.', sanskrit: 'नागास्त्र', translation: 'Serpent Weapon', note: 'Countered by Garuda (Sauparna) weapon.', animation: 'serpent-coil' },
  { name: 'Vajra', wielder: 'Indra', deity: 'Indra', power: 'Thunderbolt weapon. Produces lightning and thunder, destroys demons and evil forces.', lore: 'Made from the bones of sage Dadhichi. Indra\'s signature weapon, symbol of divine power.', sanskrit: 'वज्र', translation: 'Thunderbolt', note: 'Represents indestructible truth and lightning-swift justice.', animation: 'lightning-bolt' },
  { name: 'Vasavi Shakti', wielder: 'Karna', deity: 'Indra', power: 'Infallible spear that can kill any opponent, but can only be used once.', lore: 'Given to Karna by Indra in exchange for his divine armor and earrings. Karna used it to kill Ghatotkacha.', sanskrit: 'वासवी शक्ति', translation: 'Spear of Indra', note: 'Krishna strategically made Karna use it on Ghatotkacha instead of Arjuna.', animation: 'golden-spear-thrust' },
  { name: 'Trishul', wielder: 'Shiva', deity: 'Shiva', power: 'Three-pronged spear representing creation, preservation, and destruction. Can pierce through anything.', lore: 'Lord Shiva\'s iconic weapon, symbolizing his supreme power over the three gunas and three realms.', sanskrit: 'त्रिशूल', translation: 'Three-Pointed Spear', note: 'Represents mastery over past, present, and future.', animation: 'trident-rotation' }
];

const timelineEvents = [
  { title: 'Birth of Bhishma', description: 'Devavrata born to King Shantanu and Goddess Ganga. Later takes the terrible vow of celibacy to secure his father\'s happiness, earning the name Bhishma.' },
  { title: 'Birth of Pandavas & Kauravas', description: 'Five Pandavas born through divine invocation: Yudhishthira (Dharma), Bhima (Vayu), Arjuna (Indra), Nakula & Sahadeva (Ashwini Kumars). 100 Kauravas led by Duryodhana born to Gandhari.' },
  { title: 'Lac Palace Conspiracy', description: 'Duryodhana plots to burn the Pandavas alive in a palace made of lac. They escape through a secret tunnel with help from Vidura.' },
  { title: 'Draupadi\'s Swayamvara', description: 'Arjuna, in disguise, wins Draupadi by piercing the fish eye. Following Kunti\'s inadvertent command, Draupadi marries all five Pandavas.' },
  { title: 'Building of Indraprastha', description: 'Pandavas build the magnificent city of Indraprastha with help of Maya Danava. Yudhishthira performs Rajasuya Yajna, establishing supremacy.' },
  { title: 'Game of Dice', description: 'Yudhishthira loses everything including his brothers, himself, and Draupadi in a rigged dice game. Draupadi is humiliated in court. Pandavas exiled for 13 years.' },
  { title: '13 Years of Exile', description: 'Pandavas complete 12 years in forest and 1 year incognito in Virata kingdom. Draupadi vows revenge, her hair remaining untied.' },
  { title: 'Kurukshetra War Begins', description: 'After failed peace negotiations, the great war begins. Krishna delivers Bhagavad Gita to Arjuna. 18 days of devastating battle follow.' },
  { title: 'Fall of Bhishma', description: 'On day 10, Bhishma falls to Arjuna\'s arrows while standing behind Shikhandi. He lies on bed of arrows, choosing to die later.' },
  { title: 'Death of Abhimanyu', description: 'On day 13, Arjuna\'s son Abhimanyu is trapped in Chakravyuha and killed by multiple Kaurava warriors breaking rules of war.' },
  { title: 'Death of Drona', description: 'Yudhishthira tells half-truth about Ashwatthama\'s death. Grief-stricken Drona lays down weapons and is killed by Dhrishtadyumna on day 15.' },
  { title: 'Fall of Karna', description: 'On day 17, Karna\'s chariot wheel gets stuck. Krishna reminds him of past sins. Arjuna reluctantly kills his half-brother with Anjalika astra.' },
  { title: 'Death of Duryodhana', description: 'Final day - Bhima breaks Duryodhana\'s thighs in mace duel. Night raid by Ashwatthama kills all Pandava children and remaining army.' },
  { title: 'Aftermath & Coronation', description: 'Yudhishthira crowned emperor. Bhishma delivers wisdom from bed of arrows before passing. Pandavas rule with heavy hearts over pyrrhic victory.' }
];

const warDays = [
  { day: 1, commander: 'Bhishma', summary: 'War begins with Lord Krishna blowing the Panchajanya conch. Bhishma leads devastating attacks. Uttara and Yudhishthira\'s son killed.', deaths: ['Uttara (Virata\'s son)'], turning_points: ['First day of war', 'Bhishma\'s dominance established'], victor: 'Kauravas' },
  { day: 2, commander: 'Bhishma', summary: 'Arjuna fights fiercely against Bhishma. Satyaki kills Bhishma\'s charioteer. Bhishma loses control and retreats.', deaths: [], turning_points: ['Arjuna\'s resolve strengthens', 'Kaurava army suffers heavy losses'], victor: 'Pandavas' },
  { day: 3, commander: 'Bhishma', summary: 'Duryodhana confronts Bhima. Arjuna breaks Bhishma\'s bow in fierce battle.', deaths: [], turning_points: ['Bhishma\'s bow broken by Arjuna'], victor: 'Balanced' },
  { day: 4, commander: 'Bhishma', summary: 'Bhima\'s might displayed prominently. Ghatotkacha joins and wreaks havoc. Bhishma orders Kaurava retreat.', deaths: [], turning_points: ['Ghatotkacha\'s entry', 'Bhima emerges as hero'], victor: 'Pandavas' },
  { day: 5, commander: 'Bhishma', summary: 'Relentless conflict. Arjuna uses Gandiva with lightning speed. Fierce rivalries between key warriors continue.', deaths: [], turning_points: ['Arjuna\'s archery prowess displayed'], victor: 'Balanced' },
  { day: 8, commander: 'Bhishma', summary: 'Bhima kills 17 of Duryodhana\'s brothers. Iravan (Arjuna\'s son) killed by Alambusha after defeating Naga warriors.', deaths: ['Iravan (Arjuna\'s son)', '17 Kaurava brothers'], turning_points: ['Iravan\'s death'], victor: 'Balanced' },
  { day: 9, commander: 'Bhishma', summary: 'Krishna charges towards Bhishma with Sudarshana Chakra but Arjuna stops him from breaking his vow of not fighting.', deaths: [], turning_points: ['Krishna\'s anger', 'Nearly breaks vow to not fight'], victor: 'Kauravas' },
  { day: 10, commander: 'Bhishma', summary: 'Shikhandi stands before Bhishma who refuses to fight. Arjuna shoots arrows from behind Shikhandi. Bhishma falls on bed of arrows.', deaths: ['Bhishma (mortally wounded)'], turning_points: ['Bhishma\'s fall', 'End of first phase'], victor: 'Pandavas' },
  { day: 11, commander: 'Dronacharya', summary: 'Drona takes command. Attempts to capture Yudhishthira. Karna returns to battlefield as formidable force.', deaths: [], turning_points: ['Drona becomes commander', 'Karna rejoins'], victor: 'Kauravas' },
  { day: 12, commander: 'Dronacharya', summary: 'Drona continues attempts to capture Yudhishthira. Intense battles rage.', deaths: [], turning_points: [], victor: 'Balanced' },
  { day: 13, commander: 'Dronacharya', summary: 'Chakravyuha formation. Abhimanyu enters but is trapped and killed by multiple Kaurava warriors violating war rules.', deaths: ['Abhimanyu (Arjuna\'s son)'], turning_points: ['Abhimanyu\'s death', 'Arjuna vows to kill Jayadratha before sunset'], victor: 'Kauravas' },
  { day: 14, commander: 'Dronacharya', summary: 'Arjuna kills Jayadratha before sunset with Krishna\'s help. Ghatotkacha killed by Karna using Vasavi Shakti.', deaths: ['Jayadratha', 'Ghatotkacha'], turning_points: ['Karna uses his one-time weapon on Ghatotkacha', 'Arjuna\'s vow fulfilled'], victor: 'Pandavas' },
  { day: 15, commander: 'Dronacharya', summary: 'Yudhishthira tells half-truth about Ashwatthama\'s death. Drona lays down weapons in grief and is killed by Dhrishtadyumna.', deaths: ['Drona'], turning_points: ['Drona\'s death through deception', 'Yudhishthira\'s only lie'], victor: 'Pandavas' },
  { day: 16, commander: 'Karna', summary: 'Karna becomes supreme commander with Shalya as charioteer. Fierce battles rage.', deaths: [], turning_points: ['Karna takes command'], victor: 'Kauravas' },
  { day: 17, commander: 'Karna', summary: 'Karna\'s chariot wheel gets stuck. Krishna reminds him of past misdeeds. Arjuna kills Karna with Anjalika astra.', deaths: ['Karna', 'Dushasana (killed by Bhima)'], turning_points: ['Karna\'s death', 'Bhima drinks Dushasana\'s blood', 'Kaurava morale shattered'], victor: 'Pandavas' },
  { day: 18, commander: 'Shalya', summary: 'Final day. Yudhishthira kills Shalya. Sahadeva kills Shakuni. Bhima breaks Duryodhana\'s thighs in mace duel. Night raid by Ashwatthama kills all Pandava children and army.', deaths: ['Shalya', 'Shakuni', 'Duryodhana', 'All five Upapandavas', 'Dhrishtadyumna', 'Shikhandi', 'Remaining Pandava army'], turning_points: ['Duryodhana\'s death', 'Ashwatthama\'s night raid', 'End of war'], victor: 'Pandavas (Pyrrhic victory)' }
];

const teachings = [
  { theme: 'Karma', sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।', transliteration: 'Karmanye vadhikaraste ma phaleshu kadachana', english: 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.', context: 'Chapter 2, Verse 47 - Krishna teaches Arjuna about selfless action', philosophy: 'Focus on actions, not results. Results depend on many factors beyond our control. This teaching frees us from anxiety and attachment.' },
  { theme: 'Dharma', sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।', transliteration: 'Yada yada hi dharmasya glanir bhavati bharata', english: 'Whenever there is a decline in righteousness and an increase in unrighteousness, I manifest myself on earth.', context: 'Chapter 4, Verse 7 - Krishna\'s promise of divine intervention', philosophy: 'Dharma will always be protected. Divine forces work to restore cosmic balance when evil prevails.' },
  { theme: 'Detachment', sanskrit: 'योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।', transliteration: 'Yogasthah kuru karmani sangam tyaktva dhananjaya', english: 'Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga.', context: 'Chapter 2, Verse 48 - Teaching about balanced mind', philosophy: 'Inner peace comes from detachment. Work without craving success or fearing failure.' },
  { theme: 'Self-discipline', sanskrit: 'इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते।', transliteration: 'Indriyānām hi charatām yan mano\'nuvidhīyate', english: 'The mind that dwells on sense objects gets swept away by them, just as a boat is swept away by strong wind on water.', context: 'Chapter 2, Verse 67 - Warning about sense indulgence', philosophy: 'Control your senses to maintain mental clarity. Uncontrolled senses lead to downfall.' },
  { theme: 'Equality', sanskrit: 'विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।', transliteration: 'Vidya-vinaya-sampanne brahmane gavi hastini', english: 'The wise see with equal vision a learned Brahmin, a cow, an elephant, a dog, and an outcaste.', context: 'Chapter 5, Verse 18 - Teaching about equality of vision', philosophy: 'True wisdom sees the divine in all beings. Superficial differences are maya (illusion).' },
  { theme: 'Devotion', sanskrit: 'मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।', transliteration: 'Man-mana bhava mad-bhakto mad-yaji mam namaskuru', english: 'Always think of Me, become My devotee, worship Me, and offer obeisance to Me. Thus you will come to Me without fail.', context: 'Chapter 9, Verse 34 - Path of devotion', philosophy: 'Complete surrender to the divine brings liberation. Devotion is the easiest path to moksha.' },
  { theme: 'Knowledge', sanskrit: 'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।', transliteration: 'Na hi jnanena sadrsham pavitram iha vidyate', english: 'There is nothing in this world as purifying as knowledge. One who has attained purity of mind through yoga finds this within.', context: 'Chapter 4, Verse 38 - Glory of knowledge', philosophy: 'Self-knowledge is the supreme purifier. It destroys all karma and leads to liberation.' },
  { theme: 'Courage', sanskrit: 'क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।', transliteration: 'Klaibyam ma sma gamah partha naitat tvayyupapadyate', english: 'Do not yield to unmanliness, O Arjuna. It does not befit you. Give up such petty weakness of heart and arise.', context: 'Chapter 2, Verse 3 - Krishna urging Arjuna to fight', philosophy: 'Face challenges with courage. Running away from duty is cowardice, not compassion.' }
];

const kingdoms = [
  { name: 'Hastinapura', ruler: 'Dhritarashtra (Kauravas), later Yudhishthira', description: 'Capital of the Kuru dynasty, seat of power for both Kauravas and Pandavas. The throne over which the war was fought.', significance: 'Epicenter of power struggles, birthplace of both dynasties, site of dice game and Draupadi\'s humiliation', events: ['Dice game', 'Division of kingdom', 'Coronation of Yudhishthira after war'], location: 'Near modern Meerut, Uttar Pradesh', color: '#8b4513' },
  { name: 'Indraprastha', ruler: 'Yudhishthira and Pandavas', description: 'Magnificent city built by the Pandavas from barren Khandavaprastha with help of architect Maya Danava.', significance: 'Symbol of Pandava prosperity and architectural brilliance. Duryodhana\'s jealousy upon seeing its splendor led to the dice game.', events: ['Rajasuya Yajna', 'Duryodhana\'s humiliation in Maya Sabha'], location: 'Modern Delhi (Purana Qila area)', color: '#ffd700' },
  { name: 'Dwarka', ruler: 'Krishna', description: 'Krishna\'s magnificent island kingdom, symbol of divine intervention and strategic brilliance.', significance: 'Krishna\'s base of operations, center of Yadava power, merged into sea after Krishna\'s departure', events: ['Krishna\'s governance', 'Submerged after Krishna\'s death'], location: 'Gujarat coast', color: '#4169e1' },
  { name: 'Panchala', ruler: 'King Drupada', description: 'Powerful kingdom, home of Draupadi. Allied with Pandavas through marriage and friendship.', significance: 'Draupadi\'s Swayamvara held here, provided crucial military support to Pandavas', events: ['Draupadi\'s Swayamvara', 'Alliance with Pandavas'], location: 'Parts of modern Uttar Pradesh', color: '#32cd32' },
  { name: 'Kurukshetra', ruler: 'Kuru Kingdom territory', description: 'Sacred battlefield where the great war was fought for 18 days. Also called Dharmakshetra.', significance: 'Site of the Mahabharata war, where Bhagavad Gita was delivered, most sacred land', events: ['18-day Kurukshetra War', 'Bhagavad Gita discourse'], location: 'Haryana state', color: '#dc143c' },
  { name: 'Matsya', ruler: 'King Virata', description: 'Powerful kingdom where Pandavas spent their final year of exile in disguise. Known for its prosperity and cattle wealth.', significance: 'Pandavas served King Virata incognito during their 13th year of exile. Arjuna (as Brihannala) taught dance to Princess Uttara. Site of Uttara\'s marriage to Abhimanyu.', events: ['Pandavas\' incognito exile year', 'Keechaka\'s death by Bhima', 'Uttara-Abhimanyu marriage', 'Cattle raid by Kauravas'], location: 'Modern Rajasthan region', color: '#c026d3' }
];

const dykFacts = [
  "The Mahabharata is the world’s longest epic poem—over 200,000 verses.",
  "It’s said that Lord Ganesha wrote the Mahabharata as sage Vyasa dictated it, agreeing to never stop writing until Vyasa stopped speaking.",
  "Bhishma had the boon of ‘Ichha Mrityu’—choosing the time of his own death.",
  "Draupadi was born of fire, not from a mother’s womb.",
  "Ekalavya offered his thumb as Guru Dakshina, symbolizing supreme devotion.",
  "The Kurukshetra war lasted 18 days.",
  "Abhimanyu learned the entry (but not exit) of the Chakravyuha formation while in the womb.",
  "Karna donated his divine armor and earrings, knowing it would cost him his life.",
  "The Bhagavad Gita is part of the Mahabharata—spoken by Krishna to Arjuna.",
  "The Pandavas shared Draupadi as their common wife due to Kunti’s inadvertent command.",
  "Vidura is considered an incarnation of Yama (Dharma).",
  "Barbarik, Bheema’s grandson, promised to side with the weaker in battle. Krishna asked for his head before the war began.",
  "Ashwatthama is believed to still wander the earth—cursed with immortality.",
  "Gandhari blindfolded herself for life to share her husband Dhritarashtra’s blindness.",
  "Duryodhana was born from a lump of iron–like mass divided into 100 pieces to produce the 100 Kauravas.",
  "Jaya, Bharata, and Mahabharata are three versions of the text—each bigger in scope.",
  "Kripacharya and Ashwatthama are among the Chiranjivi—immortals in Hindu belief.",
  "The game of dice was rigged by Shakuni with loaded dice made from his father’s bones.",
  "Bhima is said to have had the strength of 10,000 elephants.",
  "After the war, the only Pandava to reach heaven in bodily form was Yudhishthira.",
  "Vyasa, the author of Mahabharata, is also credited with composing the Vedas and Puranas, making him one of the most prolific and revered sages in ancient Indian history."
];
function renderDYK() {
  const dykGrid = document.getElementById("dykGrid");
  dykGrid.innerHTML = dykFacts
    .map(fact => `<div class="dyk-card">${fact}</div>`)
    .join('');
}
document.addEventListener("DOMContentLoaded", renderDYK);

// State
let currentTeachingIndex = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderCharacters();
  renderTimeline();
  renderWeapons();
  renderWarTimeline();
  renderTeachings();
  renderKingdoms();
  renderFamilyTree();
  renderDYK();
  initScrollAnimations();
});

// Navigation
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// Render Characters - Using local JPG images
function renderCharacters() {
  const grid = document.getElementById('charactersGrid');
  grid.innerHTML = '';
  
  characters.forEach(character => {
    const card = createCharacterCard(character);
    grid.appendChild(card);
  });
}

// Create individual character card with local image
function createCharacterCard(character) {
  const card = document.createElement('div');
  card.className = 'character-card';
  card.style.setProperty('--character-color', character.color);
  
  // Image section - LOCAL FILE
  const imageDiv = document.createElement('div');
  imageDiv.className = 'card-image';
  const img = document.createElement('img');
  img.src = character.image; // Now uses the correct path from character object
  img.alt = character.name;
  img.loading = 'lazy';
  
  // Add error handling for missing images
  img.onerror = function() {
    this.onerror = null; // Prevent infinite loop
    // Create a placeholder with character name
    imageDiv.innerHTML = `
      <div class="character-placeholder" style="background: linear-gradient(135deg, ${character.color}40 0%, ${character.color}20 100%);">
        <div class="placeholder-overlay">
          <h3 class="placeholder-name">${character.name}</h3>
          <p class="placeholder-role">${character.role}</p>
        </div>
        <div class="placeholder-pattern" style="background: radial-gradient(circle, ${character.color}30 1px, transparent 1px); background-size: 20px 20px;"></div>
      </div>
    `;
  };
  
  imageDiv.appendChild(img);
  card.appendChild(imageDiv);
  
// Info section
const infoDiv = document.createElement('div');
infoDiv.className = 'card-info';

const wikiLink = `https://en.wikipedia.org/wiki/${encodeURIComponent(character.name)}`;

infoDiv.innerHTML = `
  <h2 class="character-name">${character.name}</h2>
  <p class="character-role">${character.role}</p>
  
  <div class="character-birth">
    <strong>Birth:</strong> ${character.birth}
  </div>
  
  <blockquote class="character-quote">
    "${character.iconic_quote}"
  </blockquote>
  
  <div class="character-moments">
    <h3>Key Moments</h3>
    <ul>
      ${character.key_moments.map(moment => `<li>${moment}</li>`).join('')}
    </ul>
  </div>
  
  <div class="character-weapon">
    <h3>🔱 Special Weapon</h3>
    <p>${character.weapon}</p>
  </div>
  
  <div class="character-powers">
    <h3>⚡️ Powers / Skills</h3>
    <p>${character.powers}</p>
  </div>
  
  <div class="character-facts-card">
    <h3>💡 Did You Know? </h3>
    <p>${character.facts}</p>
    <p>

  <div class="character-relationships">
    <strong>Relationships:</strong><br>
    ${character.relationships}
  </div>


      <a href="${wikiLink}" target="_blank" rel="noopener noreferrer">
        Read more on Wikipedia
      </a>
    </p>
  </div>
`;

card.appendChild(infoDiv);
  
 // Add parallax effect

card.style.setProperty('--card-glow', character.color);

 return card;
}
// Render Timeline
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  container.innerHTML = timelineEvents.map((event, index) => `
    <div class="timeline-event" data-index="${index}">
      <div class="event-content">
        <h3 class="event-title">${event.title}</h3>
        <p class="event-description">${event.description}</p>
      </div>
    </div>
  `).join('');
}

// Render Weapons
function renderWeapons() {
  const grid = document.getElementById('weaponsGrid');
  grid.innerHTML = weapons.map((weapon, index) => {
    const weaponWikiLink = `https://en.wikipedia.org/wiki/${encodeURIComponent(weapon.name)}`;
    return `
      <div class="weapon-card ${weapon.animation}" data-index="${index}">
        <h3 class="weapon-name">${weapon.name}</h3>
        <p class="weapon-sanskrit">${weapon.sanskrit}</p>
        <p class="weapon-wielder"><strong>Wielder:</strong> ${weapon.wielder}</p>
        <p class="weapon-power">${weapon.power}</p>
        <p class="weapon-wiki-link">
          <a href="${weaponWikiLink}" target="_blank" rel="noopener noreferrer">
            Detailed Wikipedia Entry
          </a>
        </p>
      </div>
    `;
  }).join('');
}
document.querySelectorAll('.weapon-wiki-link a').forEach(link => {
  link.addEventListener('click', function(e) {
    window.open(this.href, '_blank');
    e.stopPropagation();
  });
});

// Open Weapon Modal
function openWeaponModal(weapon) {
  const modal = document.getElementById('weaponModal');
  const modalBody = document.getElementById('modalBody');
  const weaponWikiLink = `https://en.wikipedia.org/wiki/${encodeURIComponent(weapon.name)}`;

  modalBody.innerHTML = `
    <h2 class="weapon-name" style="margin-bottom: 20px;">${weapon.name}</h2>
    <p class="weapon-sanskrit" style="font-size: 2rem; margin-bottom: 20px;">${weapon.sanskrit}</p>
    <p style="color: var(--color-gold); margin-bottom: 15px;"><strong>Translation:</strong> ${weapon.translation}</p>
    <p style="margin-bottom: 15px;"><strong>Deity:</strong> ${weapon.deity}</p>
    <p style="margin-bottom: 15px;"><strong>Wielder:</strong> ${weapon.wielder}</p>
    <p style="margin-bottom: 20px; line-height: 1.8;"><strong>Power:</strong> ${weapon.power}</p>
    <p style="margin-bottom: 20px; line-height: 1.8;"><strong>Lore:</strong> ${weapon.lore}</p>
    <p style="color: var(--color-gold); font-style: italic; line-height: 1.8;">${weapon.note}</p>
  <p style="margin-top: 18px;">
      </a>
    </p>
  `;
  modal.classList.add('active');
}
// Close Modal
document.getElementById('modalClose').addEventListener('click', (e) => {
  document.getElementById('weaponModal').classList.remove('active');
});

document.getElementById('modalOverlay').addEventListener('click', (e) => {
  document.getElementById('weaponModal').classList.remove('active');
});

// Render War Timeline
function renderWarTimeline() {
  const container = document.getElementById('warTimeline');
  container.innerHTML = warDays.map(day => {
    const victorClass = day.victor === 'Pandavas' ? 'victor-pandavas' : 
                        day.victor === 'Kauravas' ? 'victor-kauravas' : 'victor-balanced';
    
    return `
      <div class="war-day-card">
        <div class="day-number">Day ${day.day}</div>
        <p class="commander"><strong>Commander:</strong> ${day.commander}</p>
        <p class="summary">${day.summary}</p>
        ${day.deaths.length > 0 ? `
          <div class="deaths">
            <h4>Deaths:</h4>
            <ul>
              ${day.deaths.map(death => `<li>${death}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        ${day.turning_points.length > 0 ? `
          <div style="margin-top: 15px;">
            <h4 style="color: var(--color-gold); font-size: 0.9rem; margin-bottom: 8px;">Turning Points:</h4>
            <ul style="list-style: none; font-size: 0.85rem;">
              ${day.turning_points.map(point => `<li style="margin-bottom: 5px;">• ${point}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        <span class="victor-badge ${victorClass}">Victor: ${day.victor}</span>
      </div>
    `;
  }).join('');
}

// Render Teachings
function renderTeachings() {
  displayTeaching(currentTeachingIndex);
  
  document.getElementById('prevTeaching').addEventListener('click', () => {
    currentTeachingIndex = (currentTeachingIndex - 1 + teachings.length) % teachings.length;
    displayTeaching(currentTeachingIndex);
  });
  
  document.getElementById('nextTeaching').addEventListener('click', () => {
    currentTeachingIndex = (currentTeachingIndex + 1) % teachings.length;
    displayTeaching(currentTeachingIndex);
  });
}

function displayTeaching(index) {
  const teaching = teachings[index];
  const card = document.getElementById('teachingCard');
  
  card.innerHTML = `
    <h3 class="teaching-theme">${teaching.theme}</h3>
    <p class="teaching-sanskrit">${teaching.sanskrit}</p>
    <p class="teaching-transliteration">${teaching.transliteration}</p>
    <p class="teaching-english">"${teaching.english}"</p>
    <p class="teaching-context">${teaching.context}</p>
    <p class="teaching-philosophy">${teaching.philosophy}</p>
  `;
}

// Render Kingdoms
function renderKingdoms() {
  const grid = document.getElementById('kingdomsGrid');
  grid.innerHTML = kingdoms.map(kingdom => `
    <div class="kingdom-card">
      <h3 class="kingdom-name">${kingdom.name}</h3>
      <p class="kingdom-ruler"><strong>Ruler:</strong> ${kingdom.ruler}</p>
      <p class="kingdom-description">${kingdom.description}</p>
      <p style="margin-top: 15px; color: var(--color-gold); font-size: 0.9rem;"><strong>Significance:</strong> ${kingdom.significance}</p>
      <p class="kingdom-location">📍 ${kingdom.location}</p>
    </div>
  `).join('');
}

// Render Family Tree
function renderFamilyTree() {
  const container = document.getElementById('familyTree');
  container.innerHTML = `
    <div class="tree-section">
      <h3>The Roots: King Shantanu</h3>
      <div style="text-align: center;">
        <div class="tree-node ancestor">King Shantanu + Goddess Ganga</div>
        <div style="margin: 10px 0;">↓</div>
        <div class="tree-node ancestor">Bhishma (Devavrata)<br><small>Took vow of celibacy</small></div>
      </div>
    </div>
    
    <div class="tree-section">
      <h3>Second Marriage</h3>
      <div style="text-align: center;">
        <div class="tree-node ancestor">King Shantanu + Satyavati</div>
        <div style="margin: 10px 0;">↓</div>
        <div class="tree-node">Vichitravirya (died young)</div>
      </div>
    </div>
    
    <div class="tree-section">
      <h3>Through Niyoga (by Sage Vyasa)</h3>
      <p>Dhritarashtra (born blind) + Gandhari → 100 Kauravas led by Duryodhana</p>
      <p>Pandu (born pale, cursed) + Kunti & Madri → 5 Pandavas</p>
      <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin-top: 20px;">
        <div class="tree-node kaurava">Duryodhana<br><small>Eldest Kaurava</small></div>
        <div class="tree-node kaurava">Dushasana<br><small>2nd Kaurava</small></div>
        <div class="tree-node kaurava">Vikarna<br><small>Righteous Kaurava</small></div>
        <div style="width: 100%;"></div>
        <div class="tree-node pandava">Yudhishthira<br><small>Son of Dharma</small></div>
        <div class="tree-node pandava">Bhima<br><small>Son of Vayu</small></div>
        <div class="tree-node pandava">Arjuna<br><small>Son of Indra</small></div>
        <div class="tree-node pandava">Nakula<br><small>Son of Ashwini Kumar</small></div>
        <div class="tree-node pandava">Sahadeva<br><small>Son of Ashwini Kumar</small></div>
      </div>
    </div>
    
    <div class="tree-section">
      <h3>Next Generation</h3>
      <p><strong>Draupadi:</strong> Common wife of all five Pandavas → 5 Upapandavas (all killed by Ashwatthama)</p>
      <p><strong>Abhimanyu:</strong> Son of Arjuna & Subhadra (Krishna's sister) → Killed on Day 13</p>
      <p><strong>Parikshit:</strong> Son of Abhimanyu & Uttara (saved by Krishna from Brahmastra) → Sole survivor, continued lineage</p>
    </div>
    
    <div class="tree-section">
      <h3>Color Legend</h3>
      <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 20px; height: 20px; border: 2px solid #10b981; border-radius: 4px;"></div>
          <span>Pandavas</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 20px; height: 20px; border: 2px solid #dc2626; border-radius: 4px;"></div>
          <span>Kauravas</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 20px; height: 20px; border: 2px solid var(--color-gold-bright); border-radius: 4px;"></div>
          <span>Common Ancestors</span>
        </div>
      </div>
    </div>
  `;
}

// Scroll Animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.timeline-event, .weapon-card, .war-day-card, .kingdom-card').forEach(el => {
    observer.observe(el);
  });
}

