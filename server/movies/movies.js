var _ = require( 'underscore' );


//ONE EXAMPLE-PACKAGE OF 10 MOVIES, ALREADY FORMATTED. TO SEE API RESPONSE: SEE BELOW

exports.getAllMovies = function() {
  return examplePackage1.concat(examplePackage2).concat(examplePackage3).concat(examplePackage4).concat(examplePackage5).concat(examplePackage6);
};

exports.getMovie = function( id ) {
  return _.find( exports.getAllMovies(), function( movie ) {
    return movie.id === id;
  });
};

exports.getMoviePackage = function( packageNumber ){
  packageNumber = parseInt(packageNumber);
  if (packageNumber === 0){                                      //only returns exampleData for now
    return examplePackage1;
  } else if (packageNumber === 1){
    return examplePackage2;
  } else if (packageNumber === 2){
    return examplePackage3;
  } else if (packageNumber === 3){
    return examplePackage4;
  } else if (packageNumber === 4){
    return examplePackage5;
  } else {
    return examplePackage6;
  }
};



var examplePackage1 = [
    {
      "poster_path": "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
      "adult": false,
      "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
      "release_date": "2015-05-13",
      "genre_ids": [
        878,
        53,
        28,
        12
      ],
      "id": 76341,
      "original_title": "Mad Max: Fury Road",
      "original_language": "en",
      "title": "Mad Max: Fury Road",
      "backdrop_path": "/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg",
      "popularity": 38.609874,
      "vote_count": 3890,
      "video": false,
      "vote_average": 7.45
    },
    {
      "poster_path": "/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
      "adult": false,
      "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
      "release_date": "2015-06-09",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "id": 135397,
      "original_title": "Jurassic World",
      "original_language": "en",
      "title": "Jurassic World",
      "backdrop_path": "/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
      "popularity": 33.680239,
      "vote_count": 3987,
      "video": false,
      "vote_average": 6.71
    },
    {
      "poster_path": "/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
      "adult": false,
      "overview": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
      "release_date": "2015-09-30",
      "genre_ids": [
        18,
        12,
        878
      ],
      "id": 286217,
      "original_title": "The Martian",
      "original_language": "en",
      "title": "The Martian",
      "backdrop_path": "/sy3e2e4JwdAtd2oZGA2uUilZe8j.jpg",
      "popularity": 29.5456,
      "vote_count": 2751,
      "video": false,
      "vote_average": 7.59
    },
    {
      "poster_path": "/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
      "adult": false,
      "overview": "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
      "release_date": "2015-12-25",
      "genre_ids": [
        37,
        18,
        12,
        53
      ],
      "id": 281957,
      "original_title": "The Revenant",
      "original_language": "en",
      "title": "The Revenant",
      "backdrop_path": "/uS1SkjVviraGfFNgkDwe7ohTm8B.jpg",
      "popularity": 29.418955,
      "vote_count": 1684,
      "video": false,
      "vote_average": 7.26
    },
    {
      "poster_path": "/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg",
      "adult": false,
      "overview": "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
      "release_date": "2015-06-23",
      "genre_ids": [
        878,
        28,
        53,
        12
      ],
      "id": 87101,
      "original_title": "Terminator Genisys",
      "original_language": "en",
      "title": "Terminator Genisys",
      "backdrop_path": "/bIlYH4l2AyYvEysmS2AOfjO7Dn8.jpg",
      "popularity": 25.552664,
      "vote_count": 1827,
      "video": false,
      "vote_average": 6.07
    },
    {
      "poster_path": "/hE24GYddaxB9MVZl1CaiI86M3kp.jpg",
      "adult": false,
      "overview": "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
      "release_date": "2015-10-26",
      "genre_ids": [
        28,
        12,
        80
      ],
      "id": 206647,
      "original_title": "Spectre",
      "original_language": "en",
      "title": "Spectre",
      "backdrop_path": "/wVTYlkKPKrljJfugXN7UlLNjtuJ.jpg",
      "popularity": 24.111815,
      "vote_count": 2143,
      "video": false,
      "vote_average": 6.29
    },
    {
      "poster_path": "/ngKxbvsn9Si5TYVJfi1EGAGwThU.jpg",
      "adult": false,
      "overview": "The true story of how The Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
      "release_date": "2015-11-06",
      "genre_ids": [
        18,
        36,
        53
      ],
      "id": 314365,
      "original_title": "Spotlight",
      "original_language": "en",
      "title": "Spotlight",
      "backdrop_path": "/gpaOYwHCF2O5PM5sqFpfzKWuQvb.jpg",
      "popularity": 18.61287,
      "vote_count": 457,
      "video": false,
      "vote_average": 7.73
    },
    {
      "poster_path": "/q0R4crx2SehcEEQEkYObktdeFy.jpg",
      "adult": false,
      "overview": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
      "release_date": "2015-06-17",
      "genre_ids": [
        10751,
        16,
        12,
        35
      ],
      "id": 211672,
      "original_title": "Minions",
      "original_language": "en",
      "title": "Minions",
      "backdrop_path": "/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg",
      "popularity": 18.553135,
      "vote_count": 2269,
      "video": false,
      "vote_average": 6.64
    },
    {
      "poster_path": "/fYzpM9GmpBlIC893fNjoWCwE24H.jpg",
      "adult": false,
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "release_date": "2015-12-15",
      "genre_ids": [
        28,
        12,
        878,
        14
      ],
      "id": 140607,
      "original_title": "Star Wars: The Force Awakens",
      "original_language": "en",
      "title": "Star Wars: The Force Awakens",
      "backdrop_path": "/njv65RTipNSTozFLuF85jL0bcQe.jpg",
      "popularity": 17.218451,
      "vote_count": 3187,
      "video": false,
      "vote_average": 7.73
    },
    {
      "poster_path": "/eqFckcHuFCT1FrzLOAvXBb4jHwq.jpg",
      "adult": false,
      "overview": "Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?",
      "release_date": "2015-10-16",
      "genre_ids": [
        18
      ],
      "id": 264644,
      "original_title": "Room",
      "original_language": "en",
      "title": "Room",
      "backdrop_path": "/tBhp8MGaiL3BXpPCSl5xY397sGH.jpg",
      "popularity": 17.211688,
      "vote_count": 377,
      "video": false,
      "vote_average": 8.33
    }
];

var examplePackage2 = [
    {
      "poster_path": "/p11Ftd4VposrAzthkhF53ifYZRl.jpg",
      "adult": false,
      "overview": "The men who made millions from a global economic meltdown.",
      "release_date": "2015-12-23",
      "genre_ids": [
        18
      ],
      "id": 318846,
      "original_title": "The Big Short",
      "original_language": "en",
      "title": "The Big Short",
      "backdrop_path": "/vDEnGakDcoX0ydDtX35RE9wpXxM.jpg",
      "popularity": 15.526347,
      "vote_count": 525,
      "video": false,
      "vote_average": 7.28
    },
    {
      "poster_path": "/t5tGykRvvlLBULIPsAJEzGg1ylm.jpg",
      "adult": false,
      "overview": "A father is without the means to pay for his daughter's medical treatment. As a last resort, he partners with a greedy co-worker to rob a casino. When things go awry they're forced to hijack a city bus.",
      "release_date": "2015-11-13",
      "genre_ids": [
        28,
        53
      ],
      "id": 336004,
      "original_title": "Heist",
      "original_language": "en",
      "title": "Heist",
      "backdrop_path": "/cBlnfR0n1GA2vPoUQNcbL9pb3VW.jpg",
      "popularity": 15.502686,
      "vote_count": 107,
      "video": false,
      "vote_average": 5.64
    },
    {
      "poster_path": "/D6e8RJf2qUstnfkTslTXNTUAlT.jpg",
      "adult": false,
      "overview": "Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
      "release_date": "2015-07-14",
      "genre_ids": [
        878,
        28,
        12
      ],
      "id": 102899,
      "original_title": "Ant-Man",
      "original_language": "en",
      "title": "Ant-Man",
      "backdrop_path": "/kvXLZqY0Ngl1XSw7EaMQO0C1CCj.jpg",
      "popularity": 15.414446,
      "vote_count": 2672,
      "video": false,
      "vote_average": 6.87
    },
    {
      "poster_path": "/uekIGnzTACciWrfR7jOuof7xHgR.jpg",
      "adult": false,
      "overview": "In the winter of 1820, the New England whaling ship Essex was assaulted by something no one could believe: a whale of mammoth size and will, and an almost human sense of vengeance.  The real-life maritime disaster would inspire Herman Melville’s Moby Dick.  But that told only half the story.  “Heart of the Sea” reveals the encounter’s harrowing aftermath, as the ship’s surviving crew is pushed to their limits and forced to do the unthinkable to stay alive.  Braving storms, starvation, panic and despair, the men will call into question their deepest beliefs, from the value of their lives to the morality of their trade, as their captain searches for direction on the open sea and his first mate still seeks to bring the great whale down.",
      "release_date": "2015-12-03",
      "genre_ids": [
        28,
        12,
        18,
        36,
        53
      ],
      "id": 205775,
      "original_title": "In the Heart of the Sea",
      "original_language": "en",
      "title": "In the Heart of the Sea",
      "backdrop_path": "/vJfivaGbEvDLJgZGthUUVBLeFB5.jpg",
      "popularity": 14.887539,
      "vote_count": 316,
      "video": false,
      "vote_average": 6.17
    },
    {
      "poster_path": "/xw1GFKzxjgfm3dQoK1swFcHmfaC.jpg",
      "adult": false,
      "overview": "The modern world holds many secrets, but by far the most astounding is that witches still live among us; vicious supernatural creatures intent on unleashing the Black Death upon the world and putting an end to the human race once and for all. Armies of witch hunters have battled this unnatural enemy for centuries, including Kaulder, a valiant warrior who many years ago slayed the all-powerful Witch Queen, decimating her followers in the process. In the moments right before her death, the Queen cursed Kaulder with immortality, forever separating him from his beloved wife and daughter. Today, Kaulder is the last living hunter who has spent his immortal life tracking down rogue witches, all the while yearning for his long-lost family.",
      "release_date": "2015-10-21",
      "genre_ids": [
        14,
        28,
        12
      ],
      "id": 274854,
      "original_title": "The Last Witch Hunter",
      "original_language": "en",
      "title": "The Last Witch Hunter",
      "backdrop_path": "/o6saqjLAgKpczr0yhJkEI9fNwN7.jpg",
      "popularity": 14.532168,
      "vote_count": 452,
      "video": false,
      "vote_average": 5.45
    },
    {
      "poster_path": "/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
      "adult": false,
      "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
      "release_date": "2015-04-22",
      "genre_ids": [
        28
      ],
      "id": 99861,
      "original_title": "Avengers: Age of Ultron",
      "original_language": "en",
      "title": "Avengers: Age of Ultron",
      "backdrop_path": "/570qhjGZmGPrBGnfx70jcwIuBr4.jpg",
      "popularity": 13.487165,
      "vote_count": 3248,
      "video": false,
      "vote_average": 7.47
    },
    {
      "poster_path": "/xPCNA8zJxyyFKTj47QpvkXHukzB.jpg",
      "adult": false,
      "overview": "During the Cold War, the Soviet Union captures U.S. pilot Francis Gary Powers after shooting down his U-2 spy plane. Sentenced to 10 years in prison, Powers' only hope is New York lawyer James Donovan, recruited by a CIA operative to negotiate his release. Donovan boards a plane to Berlin, hoping to win the young man's freedom through a prisoner exchange. If all goes well, the Russians would get Rudolf Abel, the convicted spy who Donovan defended in court.",
      "release_date": "2015-10-15",
      "genre_ids": [
        53,
        18
      ],
      "id": 296098,
      "original_title": "Bridge of Spies",
      "original_language": "en",
      "title": "Bridge of Spies",
      "backdrop_path": "/bTgqCfMeBgmkcZr2Zw7xO8WlhzK.jpg",
      "popularity": 13.353429,
      "vote_count": 793,
      "video": false,
      "vote_average": 6.93
    },
    {
      "poster_path": "/yeA0eyNUmMlvXPkm9AHQfzxOwPy.jpg",
      "adult": false,
      "overview": "In 1950s Ireland and New York, young Ellis Lacey has to choose between two men and two countries.",
      "release_date": "2015-11-04",
      "genre_ids": [
        18,
        10749
      ],
      "id": 167073,
      "original_title": "Brooklyn",
      "original_language": "en",
      "title": "Brooklyn",
      "backdrop_path": "/7fXKVIM8UQBvQ9aQOzFqThlq7eN.jpg",
      "popularity": 13.316404,
      "vote_count": 269,
      "video": false,
      "vote_average": 7.01
    },
    {
      "poster_path": "/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg",
      "adult": false,
      "overview": "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.",
      "release_date": "2015-06-21",
      "genre_ids": [
        35,
        16,
        10751
      ],
      "id": 150540,
      "original_title": "Inside Out",
      "original_language": "en",
      "title": "Inside Out",
      "backdrop_path": "/szytSpLAyBh3ULei3x663mAv5ZT.jpg",
      "popularity": 12.820715,
      "vote_count": 2697,
      "video": false,
      "vote_average": 8.05
    },
    {
      "poster_path": "/2ZckiMTfSkCep2JTtZbr73tnQbN.jpg",
      "adult": false,
      "overview": "An epic journey into the world of dinosaurs where an Apatosaurus named Arlo makes an unlikely human friend.",
      "release_date": "2015-11-14",
      "genre_ids": [
        14,
        16,
        35,
        10751,
        12
      ],
      "id": 105864,
      "original_title": "The Good Dinosaur",
      "original_language": "en",
      "title": "The Good Dinosaur",
      "backdrop_path": "/ftlhnjBKhUA1gXnCyOVw0BENNlC.jpg",
      "popularity": 12.753842,
      "vote_count": 487,
      "video": false,
      "vote_average": 6.5
    }
];
  
var examplePackage3 = [
    {
      "poster_path": "/h5lnhUIS7HwcOBEEOc7coRlhylh.jpg",
      "adult": false,
      "overview": "Video game experts are recruited by the military to fight 1980s-era video game characters who've attacked New York.",
      "release_date": "2015-07-16",
      "genre_ids": [
        28,
        878,
        35
      ],
      "id": 257344,
      "original_title": "Pixels",
      "original_language": "en",
      "title": "Pixels",
      "backdrop_path": "/nvZVu6inpwLHKqRXZhye3S4uqei.jpg",
      "popularity": 12.123546,
      "vote_count": 1027,
      "video": false,
      "vote_average": 5.92
    },
    {
      "poster_path": "/vlTPQANjLYTebzFJM1G4KeON0cb.jpg",
      "adult": false,
      "overview": "Thomas and his fellow Gladers face their greatest challenge yet: searching for clues about the mysterious and powerful organization known as WCKD. Their journey takes them to the Scorch, a desolate landscape filled with unimaginable obstacles. Teaming up with resistance fighters, the Gladers take on WCKD’s vastly superior forces and uncover its shocking plans for them all.",
      "release_date": "2015-09-09",
      "genre_ids": [
        28,
        878,
        53
      ],
      "id": 294254,
      "original_title": "Maze Runner: The Scorch Trials",
      "original_language": "en",
      "title": "Maze Runner: The Scorch Trials",
      "backdrop_path": "/iapRFMGKvN9tsjqPlN7MIDTCezG.jpg",
      "popularity": 12.115711,
      "vote_count": 1174,
      "video": false,
      "vote_average": 6.49
    },
    {
      "poster_path": "/aBBQSC8ZECGn6Wh92gKDOakSC8p.jpg",
      "adult": false,
      "overview": "Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart.",
      "release_date": "2015-03-18",
      "genre_ids": [
        878,
        53,
        12
      ],
      "id": 262500,
      "original_title": "Insurgent",
      "original_language": "en",
      "title": "Insurgent",
      "backdrop_path": "/L5QRL1O3fGs2hH1LbtYyVl8Tce.jpg",
      "popularity": 12.033964,
      "vote_count": 1629,
      "video": false,
      "vote_average": 6.58
    },
    {
      "poster_path": "/xSE4NBFDzqedwa4AIj99r1Z7ljF.jpg",
      "adult": false,
      "overview": "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
      "release_date": "2015-11-25",
      "genre_ids": [
        18
      ],
      "id": 312221,
      "original_title": "Creed",
      "original_language": "en",
      "title": "Creed",
      "backdrop_path": "/nF4kmc4gDRQU4OJiJgk6sZtbJbl.jpg",
      "popularity": 11.777712,
      "vote_count": 553,
      "video": false,
      "vote_average": 7.2
    },
    {
      "poster_path": "/mGA8JtBKUs8HtdoiPad1FOlsLBi.jpg",
      "adult": false,
      "overview": "Bound by a shared destiny, a bright, optimistic teen bursting with scientific curiosity and a former boy-genius inventor jaded by disillusionment embark on a danger-filled mission to unearth the secrets of an enigmatic place somewhere in time and space that exists in their collective memory as \"Tomorrowland.\"",
      "release_date": "2015-05-19",
      "genre_ids": [
        28,
        10751,
        12
      ],
      "id": 158852,
      "original_title": "Tomorrowland",
      "original_language": "en",
      "title": "Tomorrowland",
      "backdrop_path": "/fQbc5XuB4vWA9gnY1CmyxFaOufF.jpg",
      "popularity": 11.240916,
      "vote_count": 1335,
      "video": false,
      "vote_average": 6.23
    },
    {
      "poster_path": "/3WD6E1QcYQHNMPWXEvtivyQ7waQ.jpg",
      "adult": false,
      "overview": "When a band of brutal gangsters led by a crooked property developer make a play to take over the city, Master Ip is forced to take a stand.",
      "release_date": "2015-12-19",
      "genre_ids": [
        28
      ],
      "id": 365222,
      "original_title": "葉問3",
      "original_language": "cn",
      "title": "Ip Man 3",
      "backdrop_path": "/1QzLnLBC4dZzMELT89GX79pXlqe.jpg",
      "popularity": 11.216822,
      "vote_count": 84,
      "video": false,
      "vote_average": 5.24
    },
    {
      "poster_path": "/nN4cEJMHJHbJBsp3vvvhtNWLGqg.jpg",
      "adult": false,
      "overview": "With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends – including Gale, Finnick, and Peeta – Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games.",
      "release_date": "2015-11-18",
      "genre_ids": [
        12,
        28,
        18
      ],
      "id": 131634,
      "original_title": "The Hunger Games: Mockingjay - Part 2",
      "original_language": "en",
      "title": "The Hunger Games: Mockingjay - Part 2",
      "backdrop_path": "/qjn3fzCAHGfl0CzeUlFbjrsmu4c.jpg",
      "popularity": 10.956576,
      "vote_count": 1087,
      "video": false,
      "vote_average": 6.92
    },
    {
      "poster_path": "/AbKa7ANxmui0Jmhh7gV7OSELKIL.jpg",
      "adult": false,
      "overview": "In 1950s New York, a department-store clerk who dreams of a better life falls for an older, married woman.",
      "release_date": "2015-11-20",
      "genre_ids": [
        10749,
        18
      ],
      "id": 258480,
      "original_title": "Carol",
      "original_language": "en",
      "title": "Carol",
      "backdrop_path": "/sCubt6xIlG1RVBPFoBOM6ik8Mrw.jpg",
      "popularity": 10.87679,
      "vote_count": 272,
      "video": false,
      "vote_average": 7.12
    },
    {
      "poster_path": "/fqe8JxDNO8B8QfOGTdjh6sPCdSC.jpg",
      "adult": false,
      "overview": "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
      "release_date": "2015-12-25",
      "genre_ids": [
        18,
        9648,
        53,
        37
      ],
      "id": 273248,
      "original_title": "The Hateful Eight",
      "original_language": "en",
      "title": "The Hateful Eight",
      "backdrop_path": "/sSvgNBeBNzAuKl8U8sP50ETJPgx.jpg",
      "popularity": 10.619294,
      "vote_count": 1101,
      "video": false,
      "vote_average": 7.29
    },
    {
      "poster_path": "/aMEsvTUklw0uZ3gk3Q6lAj6302a.jpg",
      "adult": false,
      "overview": "In a universe where human genetic material is the most precious commodity, an impoverished young Earth woman becomes the key to strategic maneuvers and internal strife within a powerful dynasty…",
      "release_date": "2015-02-04",
      "genre_ids": [
        878,
        14,
        28,
        12
      ],
      "id": 76757,
      "original_title": "Jupiter Ascending",
      "original_language": "en",
      "title": "Jupiter Ascending",
      "backdrop_path": "/4liSXBZZdURI0c1Id1zLJo6Z3Gu.jpg",
      "popularity": 10.350199,
      "vote_count": 1511,
      "video": false,
      "vote_average": 5.31
    }
];

var examplePackage4 = [
    {
      "poster_path": "/zF6WpDC7fYTx2pqUYUet06buYmB.jpg",
      "adult": false,
      "overview": "Snoopy embarks upon his greatest mission as he and his team take to the skies to pursue their arch-nemesis, while his best pal Charlie Brown begins his own epic quest back home.",
      "release_date": "2015-11-05",
      "genre_ids": [
        35,
        16,
        10751,
        12
      ],
      "id": 227973,
      "original_title": "The Peanuts Movie",
      "original_language": "en",
      "title": "The Peanuts Movie",
      "backdrop_path": "/gokfO8RVKhfn8jNMyUBaaMgLjP8.jpg",
      "popularity": 10.222525,
      "vote_count": 191,
      "video": false,
      "vote_average": 6.28
    },
    {
      "poster_path": "/seWQ6UKCrhGH0eP7dFZvmIBQtKF.jpg",
      "adult": false,
      "overview": "The story of Danish painter Einar Wegener, one of the first recipients of gender reassignment surgery.",
      "release_date": "2015-11-27",
      "genre_ids": [
        18
      ],
      "id": 306819,
      "original_title": "The Danish Girl",
      "original_language": "en",
      "title": "The Danish Girl",
      "backdrop_path": "/vb1eu4JLDAZo0hjx6CoLyQSOmf7.jpg",
      "popularity": 10.210885,
      "vote_count": 321,
      "video": false,
      "vote_average": 6.99
    },
    {
      "poster_path": "/A7HtCxFe7Ms8H7e7o2zawppbuDT.jpg",
      "adult": false,
      "overview": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
      "release_date": "2015-06-25",
      "genre_ids": [
        35
      ],
      "id": 214756,
      "original_title": "Ted 2",
      "original_language": "en",
      "title": "Ted 2",
      "backdrop_path": "/nkwoiSVJLeK0NI8kTqioBna61bm.jpg",
      "popularity": 10.195906,
      "vote_count": 1223,
      "video": false,
      "vote_average": 6.46
    },
    {
      "poster_path": "/btbRB7BrD887j5NrvjxceRDmaot.jpg",
      "adult": false,
      "overview": "Caleb, a 26 year old coder at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world's first true artificial intelligence, housed in the body of a beautiful robot girl.",
      "release_date": "2015-01-21",
      "genre_ids": [
        18,
        878
      ],
      "id": 264660,
      "original_title": "Ex Machina",
      "original_language": "en",
      "title": "Ex Machina",
      "backdrop_path": "/9X3cDZb4GYGQeOnZHLwMcCFz2Ro.jpg",
      "popularity": 10.102586,
      "vote_count": 1824,
      "video": false,
      "vote_average": 7.61
    },
    {
      "poster_path": "/8x7ej0LnHdKUqilNNJXYOeyB6L9.jpg",
      "adult": false,
      "overview": "Kingsman: The Secret Service tells the story of a super-secret spy organization that recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius.",
      "release_date": "2015-01-24",
      "genre_ids": [
        80,
        35,
        28,
        12
      ],
      "id": 207703,
      "original_title": "Kingsman: The Secret Service",
      "original_language": "en",
      "title": "Kingsman: The Secret Service",
      "backdrop_path": "/pfyWJUxrBTT2UIPoEQF3iFTHcQT.jpg",
      "popularity": 9.934348,
      "vote_count": 2956,
      "video": false,
      "vote_average": 7.64
    },
    {
      "poster_path": "/qey0tdcOp9kCDdEZuJ87yE3crSe.jpg",
      "adult": false,
      "overview": "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
      "release_date": "2015-05-27",
      "genre_ids": [
        28,
        18,
        53
      ],
      "id": 254128,
      "original_title": "San Andreas",
      "original_language": "en",
      "title": "San Andreas",
      "backdrop_path": "/cUfGqafAVQkatQ7N4y08RNV3bgu.jpg",
      "popularity": 9.913644,
      "vote_count": 1540,
      "video": false,
      "vote_average": 6.09
    },
    {
      "poster_path": "/dCgm7efXDmiABSdWDHBDBx2jwmn.jpg",
      "adult": false,
      "overview": "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
      "release_date": "2015-04-01",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 168259,
      "original_title": "Furious 7",
      "original_language": "en",
      "title": "Furious 7",
      "backdrop_path": "/ypyeMfKydpyuuTMdp36rMlkGDUL.jpg",
      "popularity": 9.814786,
      "vote_count": 2260,
      "video": false,
      "vote_average": 7.45
    },
    {
      "poster_path": "/z2sJd1OvAGZLxgjBdSnQoLCfn3M.jpg",
      "adult": false,
      "overview": "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
      "release_date": "2015-07-23",
      "genre_ids": [
        28,
        12,
        53
      ],
      "id": 177677,
      "original_title": "Mission: Impossible – Rogue Nation",
      "original_language": "en",
      "title": "Mission: Impossible – Rogue Nation",
      "backdrop_path": "/vZMSji6u1Kfg5TcWWi4IAzfqXfC.jpg",
      "popularity": 9.48611,
      "vote_count": 1812,
      "video": false,
      "vote_average": 7.1
    },
    {
      "poster_path": "/saF3HtAduvrP9ytXDxSnQJP3oqx.jpg",
      "adult": false,
      "overview": "Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings—some good, some bad—and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot.",
      "release_date": "2015-03-04",
      "genre_ids": [
        28,
        878,
        53
      ],
      "id": 198184,
      "original_title": "Chappie",
      "original_language": "en",
      "title": "Chappie",
      "backdrop_path": "/y5lG7TBpeOMG0jxAaTK0ghZSzBJ.jpg",
      "popularity": 9.390063,
      "vote_count": 1443,
      "video": false,
      "vote_average": 6.63
    },
    {
      "poster_path": "/t4PLWexbe4wbNydCOBv18cYexup.jpg",
      "adult": false,
      "overview": "When the old-old-old-fashioned vampire Vlad arrives at the hotel for an impromptu family get-together, Hotel Transylvania is in for a collision of supernatural old-school and modern day cool.",
      "release_date": "2015-09-21",
      "genre_ids": [
        10751,
        35,
        16
      ],
      "id": 159824,
      "original_title": "Hotel Transylvania 2",
      "original_language": "en",
      "title": "Hotel Transylvania 2",
      "backdrop_path": "/h3t4zZPteUPqyDBrmz5Z2zzGM61.jpg",
      "popularity": 9.054535,
      "vote_count": 593,
      "video": false,
      "vote_average": 6.86
    }
];

var examplePackage5 = [
    {
      "poster_path": "/FDcYYHd6IlKj2ZitO9ASE4GlKa.jpg",
      "adult": false,
      "overview": "Eccentric scientist Victor Von Frankenstein creates a grotesque creature in an unorthodox scientific experiment.",
      "release_date": "2015-11-25",
      "genre_ids": [
        878,
        18,
        27
      ],
      "id": 228066,
      "original_title": "Victor Frankenstein",
      "original_language": "en",
      "title": "Victor Frankenstein",
      "backdrop_path": "/AsNosq3JX6YfWy7HXmHnJjV7Fsw.jpg",
      "popularity": 8.954204,
      "vote_count": 111,
      "video": false,
      "vote_average": 5.33
    },
    {
      "poster_path": "/ikDwR3i2bczqnRf1urJTy77YTFf.jpg",
      "adult": false,
      "overview": "Ex-government operative Bryan Mills finds his life is shattered when he's falsely accused of a murder that hits close to home. As he's pursued by a savvy police inspector, Mills employs his particular set of skills to track the real killer and exact his unique brand of justice.",
      "release_date": "2015-01-01",
      "genre_ids": [
        80,
        28,
        53
      ],
      "id": 260346,
      "original_title": "Taken 3",
      "original_language": "en",
      "title": "Taken 3",
      "backdrop_path": "/razvUuLkF7CX4XsLyj02ksC0ayy.jpg",
      "popularity": 8.721092,
      "vote_count": 1230,
      "video": false,
      "vote_average": 6.15
    },
    {
      "poster_path": "/2i0JH5WqYFqki7WDhUW56Sg0obh.jpg",
      "adult": false,
      "overview": "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.",
      "release_date": "2015-03-12",
      "genre_ids": [
        10749,
        14,
        10751,
        18
      ],
      "id": 150689,
      "original_title": "Cinderella",
      "original_language": "en",
      "title": "Cinderella",
      "backdrop_path": "/aUYcExsGuRaw7PLGmAmXubt1dfG.jpg",
      "popularity": 8.670619,
      "vote_count": 1070,
      "video": false,
      "vote_average": 6.88
    },
    {
      "poster_path": "/56rS3ipzekH2VlHpnH8VOTkKjwR.jpg",
      "adult": false,
      "overview": "Art dealer, Charles Mortdecai, searches for a stolen painting rumored to contain a secret code that gains access to hidden Nazi gold.",
      "release_date": "2015-01-21",
      "genre_ids": [
        35,
        12
      ],
      "id": 210860,
      "original_title": "Mortdecai",
      "original_language": "en",
      "title": "Mortdecai",
      "backdrop_path": "/wNnuYx5tMiVEnru3zJS85kSzzRs.jpg",
      "popularity": 8.351472,
      "vote_count": 526,
      "video": false,
      "vote_average": 5.4
    },
    {
      "poster_path": "/5MUyULSD4syaMQFcfPABqopAO4e.jpg",
      "adult": false,
      "overview": "An extremely wealthy elderly man dying from cancer undergoes a radical medical procedure that transfers his consciousness to the body of a healthy young man but everything may not be as good as it seems when he starts to uncover the mystery of the body's origins and the secret organization that will kill to keep its secrets.",
      "release_date": "2015-07-10",
      "genre_ids": [
        9648,
        53,
        878
      ],
      "id": 238615,
      "original_title": "Self/less",
      "original_language": "en",
      "title": "Self/less",
      "backdrop_path": "/fpKyGCOZJsYe2TAKLtziLe6EPj9.jpg",
      "popularity": 8.335187,
      "vote_count": 426,
      "video": false,
      "vote_average": 6.29
    },
    {
      "poster_path": "/4jI6sIScJXMNyXxxloSfGqXckRj.jpg",
      "adult": false,
      "overview": "Mr. Müller is not satisfied with his new work at the Goethe-Gesamtschule. The early getting up and correcting exams annoy him. Director Gerster wants to improve the image of the Goethe-Gesamtschule because she wants to be a symbol of the new company. To achieve this, she wants to take away the partnership from the Schillergymnasium with a Thai school. So, Mr. Müller, Mrs. Schnabelstedt and the 10b must go on a school trip to Thailand.",
      "release_date": "2015-09-10",
      "genre_ids": [
        35
      ],
      "id": 329263,
      "original_title": "Fack ju Göhte 2",
      "original_language": "de",
      "title": "F*ck You, Goethe 2",
      "backdrop_path": "/vtxku7Y0Yf5GVNUTtgldE81G8Xo.jpg",
      "popularity": 8.217148,
      "vote_count": 72,
      "video": false,
      "vote_average": 6.94
    },
    {
      "poster_path": "/ahUiUaeOE2lvnOy7srxaUJbbvYv.jpg",
      "adult": false,
      "overview": "Set backstage at three iconic product launches and ending in 1998 with the unveiling of the iMac, Steve Jobs takes us behind the scenes of the digital revolution to paint an intimate portrait of the brilliant man at its epicenter.",
      "release_date": "2015-10-09",
      "genre_ids": [
        36,
        18
      ],
      "id": 321697,
      "original_title": "Steve Jobs",
      "original_language": "en",
      "title": "Steve Jobs",
      "backdrop_path": "/r3bv4zrP9yLkKcqyJeVcVUuyOml.jpg",
      "popularity": 7.780934,
      "vote_count": 503,
      "video": false,
      "vote_average": 7.01
    },
    {
      "poster_path": "/g23cs30dCMiG4ldaoVNP1ucjs6.jpg",
      "adult": false,
      "overview": "Four young outsiders teleport to a dangerous universe, which alters their physical form in shocking ways. Their lives irrevocably upended, the team must learn to harness their daunting new abilities and work together to save Earth from a former friend turned enemy.",
      "release_date": "2015-08-05",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 166424,
      "original_title": "Fantastic Four",
      "original_language": "en",
      "title": "Fantastic Four",
      "backdrop_path": "/3Kgu3ys6W6UZWWFty7rlTWgST63.jpg",
      "popularity": 7.706873,
      "vote_count": 1112,
      "video": false,
      "vote_average": 4.44
    },
    {
      "poster_path": "/yIVnNriiyl522hk3LFLJrrMovhP.jpg",
      "adult": false,
      "overview": "The true story of Whitey Bulger, the brother of a state senator and the most infamous violent criminal in the history of South Boston, who became an FBI informant to take down a Mafia family invading his turf.",
      "release_date": "2015-09-04",
      "genre_ids": [
        80,
        18
      ],
      "id": 261023,
      "original_title": "Black Mass",
      "original_language": "en",
      "title": "Black Mass",
      "backdrop_path": "/fop31RWFi9sVL0xK5hAJGh7Fwkz.jpg",
      "popularity": 7.682935,
      "vote_count": 524,
      "video": false,
      "vote_average": 6.03
    },
    {
      "poster_path": "/X7S1RtotXOZNV7OlgCfh5VKZSB.jpg",
      "adult": false,
      "overview": "In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music.  Taking us back to where it all began, Straight Outta Compton tells the true story of how these cultural rebels—armed only with their lyrics, swagger, bravado and raw talent—stood up to the authorities that meant to keep them down and formed the world’s most dangerous group, N.W.A.  And as they spoke the truth that no one had before and exposed life in the hood, their voice ignited a social revolution that is still reverberating today.",
      "release_date": "2015-08-13",
      "genre_ids": [
        18,
        10402
      ],
      "id": 277216,
      "original_title": "Straight Outta Compton",
      "original_language": "en",
      "title": "Straight Outta Compton",
      "backdrop_path": "/fdDTA06o5e7MRXnTGAf4EygL2MJ.jpg",
      "popularity": 7.642693,
      "vote_count": 581,
      "video": false,
      "vote_average": 7.83
    }
];

var examplePackage6 = [
    {
      "poster_path": "/vQ7oVX2j7BnMDYyzuFeG1epqvGb.jpg",
      "adult": false,
      "overview": "70-year-old widower Ben Whittaker has discovered that retirement isn't all it's cracked up to be. Seizing an opportunity to get back in the game, he becomes a senior intern at an online fashion site, founded and run by Jules Ostin.",
      "release_date": "2015-09-24",
      "genre_ids": [
        35
      ],
      "id": 257211,
      "original_title": "The Intern",
      "original_language": "en",
      "title": "The Intern",
      "backdrop_path": "/nyl1fNn9JguXGTtDl8tES75fSF8.jpg",
      "popularity": 7.561479,
      "vote_count": 693,
      "video": false,
      "vote_average": 7.03
    },
    {
      "poster_path": "/i9P3FU8z2Sd7jYRx6l1Iby0zP0o.jpg",
      "adult": false,
      "overview": "At the height of the Cold War, a mysterious criminal organization plans to use nuclear weapons and technology to upset the fragile balance of power between the United States and Soviet Union. CIA agent Napoleon Solo and KGB agent Illya Kuryakin are forced to put aside their hostilities and work together to stop the evildoers in their tracks. The duo's only lead is the daughter of a missing German scientist, whom they must find soon to prevent a global catastrophe.",
      "release_date": "2015-08-13",
      "genre_ids": [
        35,
        28,
        12
      ],
      "id": 203801,
      "original_title": "The Man from U.N.C.L.E.",
      "original_language": "en",
      "title": "The Man from U.N.C.L.E.",
      "backdrop_path": "/bKxcCNv2xq8M3GD5iSrv9bMGDVa.jpg",
      "popularity": 7.549667,
      "vote_count": 1019,
      "video": false,
      "vote_average": 7.02
    },
    {
      "poster_path": "/p2SdfGmQRaw8xhFbexlHL7srMM8.jpg",
      "adult": false,
      "overview": "A young female FBI agent joins a secret CIA operation to take down a Mexican cartel boss, a job that ends up pushing her ethical and moral values to the limit.",
      "release_date": "2015-09-17",
      "genre_ids": [
        53,
        9648,
        80,
        18,
        28
      ],
      "id": 273481,
      "original_title": "Sicario",
      "original_language": "en",
      "title": "Sicario",
      "backdrop_path": "/kG5Zn9z20L2O7Jo2Y2jykOMh60v.jpg",
      "popularity": 7.474226,
      "vote_count": 840,
      "video": false,
      "vote_average": 7.06
    },
    {
      "poster_path": "/pCj8zem1NDAODdtvha9WFEB6iWR.jpg",
      "adult": false,
      "overview": "In the aftermath of a family tragedy, an aspiring author is torn between love for her childhood friend and the temptation of a mysterious outsider. Trying to escape the ghosts of her past, she is swept away to a house that breathes, bleeds… and remembers.",
      "release_date": "2015-10-13",
      "genre_ids": [
        18,
        14,
        27
      ],
      "id": 201085,
      "original_title": "Crimson Peak",
      "original_language": "en",
      "title": "Crimson Peak",
      "backdrop_path": "/zTs5Mc1zfEj61cvolvpPn8zSyim.jpg",
      "popularity": 7.074797,
      "vote_count": 466,
      "video": false,
      "vote_average": 6.29
    },
    {
      "poster_path": "/4MrwJZr0R9LbyOgZqwLNmtzzxbu.jpg",
      "adult": false,
      "overview": "For 19-year-old Jay, fall should be about school, boys and weekends out at the lake. But a seemingly innocent physical encounter turns sour and gives her the inescapable sense that someone, or something, is following her. Faced with this burden, Jay and her teenage friends must find a way to escape the horror that seems to be only a few steps behind.",
      "release_date": "2015-03-27",
      "genre_ids": [
        53,
        27
      ],
      "id": 270303,
      "original_title": "It Follows",
      "original_language": "en",
      "title": "It Follows",
      "backdrop_path": "/7hlZ9WJQ3syUyJNSReZt7uch12X.jpg",
      "popularity": 7.043855,
      "vote_count": 685,
      "video": false,
      "vote_average": 6.7
    },
    {
      "poster_path": "/t3ELL46AnqjS9djz1vEVh4MpKv0.jpg",
      "adult": false,
      "overview": "Inspired by the incredible events surrounding a treacherous attempt to reach the summit of the world's highest mountain, \"Everest\" documents the awe-inspiring journey of two different expeditions challenged beyond their limits by one of the fiercest snowstorms ever encountered by mankind. Their mettle tested by the harshest of elements found on the planet, the climbers will face nearly impossible obstacles as a lifelong obsession becomes a breathtaking struggle for survival.",
      "release_date": "2015-09-18",
      "genre_ids": [
        12,
        18
      ],
      "id": 253412,
      "original_title": "Everest",
      "original_language": "en",
      "title": "Everest",
      "backdrop_path": "/uoEGDW5hgEjV14XVIaB0ImqSHgx.jpg",
      "popularity": 6.918236,
      "vote_count": 735,
      "video": false,
      "vote_average": 6.72
    },
    {
      "poster_path": "/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg",
      "adult": false,
      "overview": "When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",
      "release_date": "2015-02-11",
      "genre_ids": [
        10749,
        18
      ],
      "id": 216015,
      "original_title": "Fifty Shades of Grey",
      "original_language": "en",
      "title": "Fifty Shades of Grey",
      "backdrop_path": "/zw3fM9KYYhYGsIQUJOyQNbeZSnn.jpg",
      "popularity": 6.900593,
      "vote_count": 1369,
      "video": false,
      "vote_average": 5.37
    },
    {
      "poster_path": "/4VmZeT8YkuMI6BrA623mHZDISlN.jpg",
      "adult": false,
      "overview": "An assassin teams up with a woman to help her find her father and uncover the mysteries of her ancestry.",
      "release_date": "2015-08-20",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 249070,
      "original_title": "Hitman: Agent 47",
      "original_language": "en",
      "title": "Hitman: Agent 47",
      "backdrop_path": "/EnWldA0LlltnAhKjmBZci6Y4Lc.jpg",
      "popularity": 6.856974,
      "vote_count": 580,
      "video": false,
      "vote_average": 5.55
    },
    {
      "poster_path": "/50d0XQQETSyg3bwBXhC7K33pKgc.jpg",
      "adult": false,
      "overview": "Billy \"The Great\" Hope, the reigning junior middleweight boxing champion, has an impressive career, a loving wife and daughter, and a lavish lifestyle. However, when tragedy strikes, Billy hits rock bottom, losing his family, his house and his manager. He soon finds an unlikely savior in Tick Willis, a former fighter who trains the city's toughest amateur boxers. With his future on the line, Hope fights to reclaim the trust of those he loves the most.",
      "release_date": "2015-06-15",
      "genre_ids": [
        28,
        18,
        53
      ],
      "id": 307081,
      "original_title": "Southpaw",
      "original_language": "en",
      "title": "Southpaw",
      "backdrop_path": "/2vFH3ntJbBC7QCwB0nRJGLx0oPU.jpg",
      "popularity": 6.802472,
      "vote_count": 951,
      "video": false,
      "vote_average": 7.23
    },
    {
      "poster_path": "/49Akyhe0gnuokaDIKKDldFRBoru.jpg",
      "adult": false,
      "overview": "A desk-bound CIA analyst volunteers to go undercover to infiltrate the world of a deadly arms dealer, and prevent diabolical global disaster.",
      "release_date": "2015-05-06",
      "genre_ids": [
        80,
        28,
        35
      ],
      "id": 238713,
      "original_title": "Spy",
      "original_language": "en",
      "title": "Spy",
      "backdrop_path": "/AoYGqtWxcNmQjQIpRCMtzpFfL1T.jpg",
      "popularity": 6.64282,
      "vote_count": 1348,
      "video": false,
      "vote_average": 7
    }
];

//THIS IS AN AVERAGE API RETURN FROM THE_MOVIE_DATABASE:
exports.exampleApiResponse = {
  "page": 1,
  "results": [
    {
      "poster_path": "/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
      "adult": false,
      "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
      "release_date": "2015-06-09",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "id": 135397,
      "original_title": "Jurassic World",
      "original_language": "en",
      "title": "Jurassic World",
      "backdrop_path": "/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
      "popularity": 28.042069,
      "vote_count": 3884,
      "video": false,
      "vote_average": 6.71
    },
    {
      "poster_path": "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
      "adult": false,
      "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
      "release_date": "2015-05-13",
      "genre_ids": [
        878,
        53,
        28,
        12
      ],
      "id": 76341,
      "original_title": "Mad Max: Fury Road",
      "original_language": "en",
      "title": "Mad Max: Fury Road",
      "backdrop_path": "/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg",
      "popularity": 24.874131,
      "vote_count": 3744,
      "video": false,
      "vote_average": 7.47
    },
    {
      "poster_path": "/hE24GYddaxB9MVZl1CaiI86M3kp.jpg",
      "adult": false,
      "overview": "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
      "release_date": "2015-10-26",
      "genre_ids": [
        28,
        12,
        80
      ],
      "id": 206647,
      "original_title": "Spectre",
      "original_language": "en",
      "title": "Spectre",
      "backdrop_path": "/wVTYlkKPKrljJfugXN7UlLNjtuJ.jpg",
      "popularity": 22.938967,
      "vote_count": 2044,
      "video": false,
      "vote_average": 6.29
    },
    {
      "poster_path": "/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
      "adult": false,
      "overview": "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
      "release_date": "2015-12-25",
      "genre_ids": [
        37,
        18,
        12,
        53
      ],
      "id": 281957,
      "original_title": "The Revenant",
      "original_language": "en",
      "title": "The Revenant",
      "backdrop_path": "/uS1SkjVviraGfFNgkDwe7ohTm8B.jpg",
      "popularity": 18.502011,
      "vote_count": 1456,
      "video": false,
      "vote_average": 7.25
    },
    {
      "poster_path": "/fYzpM9GmpBlIC893fNjoWCwE24H.jpg",
      "adult": false,
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "release_date": "2015-12-15",
      "genre_ids": [
        28,
        12,
        878,
        14
      ],
      "id": 140607,
      "original_title": "Star Wars: The Force Awakens",
      "original_language": "en",
      "title": "Star Wars: The Force Awakens",
      "backdrop_path": "/c2Ax8Rox5g6CneChwy1gmu4UbSb.jpg",
      "popularity": 17.27778,
      "vote_count": 3073,
      "video": false,
      "vote_average": 7.75
    },
    {
      "poster_path": "/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg",
      "adult": false,
      "overview": "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
      "release_date": "2015-06-23",
      "genre_ids": [
        878,
        28,
        53,
        12
      ],
      "id": 87101,
      "original_title": "Terminator Genisys",
      "original_language": "en",
      "title": "Terminator Genisys",
      "backdrop_path": "/bIlYH4l2AyYvEysmS2AOfjO7Dn8.jpg",
      "popularity": 16.78077,
      "vote_count": 1773,
      "video": false,
      "vote_average": 6.1
    },
    {
      "poster_path": "/xSE4NBFDzqedwa4AIj99r1Z7ljF.jpg",
      "adult": false,
      "overview": "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
      "release_date": "2015-11-25",
      "genre_ids": [
        18
      ],
      "id": 312221,
      "original_title": "Creed",
      "original_language": "en",
      "title": "Creed",
      "backdrop_path": "/nF4kmc4gDRQU4OJiJgk6sZtbJbl.jpg",
      "popularity": 16.757116,
      "vote_count": 461,
      "video": false,
      "vote_average": 7.26
    },
    {
      "poster_path": "/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
      "adult": false,
      "overview": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
      "release_date": "2015-09-30",
      "genre_ids": [
        18,
        12,
        878
      ],
      "id": 286217,
      "original_title": "The Martian",
      "original_language": "en",
      "title": "The Martian",
      "backdrop_path": "/sy3e2e4JwdAtd2oZGA2uUilZe8j.jpg",
      "popularity": 15.496639,
      "vote_count": 2541,
      "video": false,
      "vote_average": 7.59
    },
    {
      "poster_path": "/t5tGykRvvlLBULIPsAJEzGg1ylm.jpg",
      "adult": false,
      "overview": "A father is without the means to pay for his daughter's medical treatment. As a last resort, he partners with a greedy co-worker to rob a casino. When things go awry they're forced to hijack a city bus.",
      "release_date": "2015-11-13",
      "genre_ids": [
        28,
        53
      ],
      "id": 336004,
      "original_title": "Heist",
      "original_language": "en",
      "title": "Heist",
      "backdrop_path": "/cBlnfR0n1GA2vPoUQNcbL9pb3VW.jpg",
      "popularity": 13.133614,
      "vote_count": 97,
      "video": false,
      "vote_average": 5.63
    },
    {
      "poster_path": "/fqe8JxDNO8B8QfOGTdjh6sPCdSC.jpg",
      "adult": false,
      "overview": "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
      "release_date": "2015-12-25",
      "genre_ids": [
        18,
        9648,
        53,
        37
      ],
      "id": 273248,
      "original_title": "The Hateful Eight",
      "original_language": "en",
      "title": "The Hateful Eight",
      "backdrop_path": "/sSvgNBeBNzAuKl8U8sP50ETJPgx.jpg",
      "popularity": 12.88405,
      "vote_count": 1010,
      "video": false,
      "vote_average": 7.26
    },
    ]
  }
