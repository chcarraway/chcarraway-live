var cards = [
    // Single Drinkers
    {
        category: "Single",
        header: "Single Drinkers",
        body: "All of these cards specify a single player to drink!",
        nac: "nac"
    },{
        category: "Single",
        header: "I Couldn't Come Up With A Witty Title",
        body: "Take a drink!"
    },{
        category: "Single",
        header: "Deuces Baby",
        body: "Drink two times!"
    },{
        category: "Single",
        header: "Third Time's A Charm",
        body: "Drink three times!"
    },{
        category: "Single",
        header: "To The Left!",
        body: "Player to your left drinks!"
    },{
        category: "Single",
        header: "To The Right!",
        body: "Player to your right drinks!"
    },{
        category: "Single",
        header: "If You're Not First...",
        body: "The last player to enter the room drinks!"
    },{
        category: "Single",
        header: "Baby Want A Bottle?",
        body: "The youngest player must drink!"
    },{
        category: "Single",
        header: "Get Off My Lawn!",
        body: "The oldest player must drink!"
    },{
        category: "Single",
        header: "BOOP!",
        body: "Touch a player's nose of your choice. That player must drink!"
    },{
        category: "Single",
        header: "Take One For The Team",
        body: "All players vote on a liquor. Take a shot of it."
    },{
        category: "Single",
        header: "The Card Of Doom",
        body: "Finish your drink, then take a shot!"
    },{
        category: "Single",
        header: "Prime Time",
        body: "All players must reveal their latest Amazon purchase. The player with the most expensive item must drink!"
    },{
        category: "Single",
        header: "Popularity Contest",
        body: "The player with the most friends on Facebook must take a shot!"
    },

    // Loser/Winner Drinks
    {
        category: "Contest",
        header: "Contest Drinks!",
        body: "All of these cards include a contest to determine which player drinks!",
        nac: "nac"
    },{
        category: "Contest",
        header: "Look At Me!",
        body: "Choose a player to have a staring contest with. Loser drinks!"
    },{
        category: "Contest",
        header: "Nose Goes!",
        body: "Everybody touches their nose. Last one to do so drinks!"
    },{
        category: "Contest",
        header: "Rhyme Time",
        body: "Say a word. The next player must say a word that rhymes with it. Go around the circle until someone fails. That player drinks!"
    },{
        category: "Contest",
        header: "1, 2, 3, 4...",
        body: "Choose a player to have a thumb war with. Loser drinks!"
    },{
        category: "Contest",
        header: "Survey Says!",
        body: "Create a category. The player to your left must name an object in that category. This continues until a player can't come up with anything, that player drinks!"
    },{
        category: "Contest",
        header: "Mirror Mirror On The Wall",
        body: "All players vote on who has the best haircut. Winner drinks!"
    },{
        category: "Contest",
        header: "To The Window, To The Wall!",
        body: "All players must touch a wall. Last player to do so must drink!"
    },

    
    // Multi Drinkers
    {
        category: "Multi",
        header: "Multi Drinkers!",
        body: "All of these cards specify multiple players to drink!",
        nac: "nac"
    },{
        category: "Multi",
        header: "All Together Now!",
        body: "Everybody drink!"
    },{
        category: "Multi",
        header: "Boogie Down?",
        body: "If you don't like disco music, drink!"
    },{
        category: "Multi",
        header: "Avalanche!",
        body: "Choose a direction, and everyone starts drinking. The player beside you in that direction can't stop until you do, that player's neighbor can't stop until they do, etc..."
    },{
        category: "Multi",
        header: "Twinsies!",
        body: "All players with the same beverage as you must drink!"
    },{
        category: "Multi",
        header: "Never Have I Ever",
        body: "Play a round of Never Have I Ever. All players must drink if they have done the thing!"
    },{
        category: "Multi",
        header: "Lumberjack Fantasies",
        body: "All players with a beard must drink!"
    },{
        category: "Multi",
        header: "Babyface",
        body: "All players without a beard must drink!"
    },{
        category: "Multi",
        header: "Maybe She's Born With It...",
        body: "All players wearing makeup must drink!"
    },{
        category: "Multi",
        header: "This One Time, At Band Camp...",
        body: "If you've ever played a musical instrument, drink!"
    },{
        category: "Multi",
        header: "Sharing Is Caring",
        body: "Swap drinks with a player of your choice, you both drink!"
    },{
        category: "Multi",
        header: "Show Me What You Got",
        body: "All players must show off their tattoos and take a drink. If any player is unwilling to show one, they must take a shot instead."
    },{
        category: "Multi",
        header: "Bros Before Hoes",
        body: "All males must drink!"
    },{
        category: "Multi",
        header: "Chicks Before Dicks",
        body: "All females must drink!"
    },{
        category: "Multi",
        header: "Communion",
        body: "All religious players must drink!"
    },{
        category: "Multi",
        header: "An Apple A Day",
        body: "All players who own an iPhone must drink!"
    },{
        category: "Multi",
        header: "Do Androids Dream Of Electric Sheep?",
        body: "All players who own an Android phone must drink!"
    },{
        category: "Multi",
        header: "Show Me The Money!",
        body: "All players must produce physical currency that they own. Any player who cannot must drink!"
    },{
        category: "Multi",
        header: "Game Over",
        body: "If you've played a video game in the past 24 hours, drink!"
    },
    
    // VS series
    {
        category: "VS",
        header: "Versus!",
        body: "These cards split the room, making the least popular opinion drink!",
        nac: "nac"
    },{
        category: "VS",
        header: "Cats VS Dogs",
        body: "All players choose a side. Smallest group drinks!"
    },{
        category: "VS",
        header: "Coke VS Pepsi",
        body: "All players choose a side. Smallest group drinks!"
    },{
        category: "VS",
        header: "Star Wars VS Star Trek",
        body: "All players choose a side. Smallest group drinks!"
    },

    // Replacement Effects
    {
        category: "Replacement",
        header: "Replacement Effects",
        body: "These cards change the way the game works, temporarily changing the rules until the conditions are met.",
        nac: "nac"
    },{
        category: "Replacement",
        header: "Let Me Get That For You",
        body: "The next player that has to drink is not allowed to touch their cup. You must pour the drink in their mouth."
    },{
        category: "Replacement",
        header: "No Alcohol Beyond This Point",
        body: "The next time a player wishes to leave the room, they must finish their drink before being allowed to do so."
    },{
        category: "Replacement",
        header: "Get Down Mr. President!",
        body: "The next time a player has to take a shot, you must take it for them!"
    },{
        category: "Replacement",
        header: "Aw, Shoot!",
        body: "The next player to swear must take a shot!"
    },

    // Multi Round Effects
    {
        category: "Ongoing",
        header: "Ongoing Effects",
        body: "These cards have an effect that lasts multiple rounds.",
        nac: "nac"
    },{
        category: "Ongoing",
        header: "I'm The Captain Now",
        body: "Create a rule that lasts for 5 rounds. If any player breaks that rule, they drink!",
        decay: 5
    },{
        category: "Ongoing",
        header: "Little Green Man",
        body: "Aliens are invading, and hanging out on top of your drinks! Every time you drink for the next 3 rounds, you must remove the little green man or else you drink again!",
        decay: 3
    },{
        category: "Ongoing",
        header: "Jeffrey",
        body: "Whenever a player speaks to another player for the next 2 rounds, that player must say that player's name before AND after your statement. If that player forgets, they must drink!",
        decay: 2
	},{
        category: "Ongoing",
        header: "Love Thy Neighbor",
        body: "Hold hands with the player to your right until your next turn.",
        decay: 1
    },{
        category: "Ongoing",
        header: "For Valhalla!",
        body: "For the next 3 rounds, you are the Viking. Whenever you put your horns up (place fingers up by head), all other players must paddle twice on each side and then put their horns up. Last player to do so must drink!",
        decay: 3
    },
    
    


/*
    {
        category: "",
        header: "",
        body: ""
    },{
        category: "",
        header: "",
        body: ""
    },{
        category: "",
        header: "",
        body: ""
    },{
        category: "",
        header: "",
        body: ""
    },{
        category: "",
        header: "",
        body: ""
    },{
        category: "",
        header: "",
        body: ""
    },{
        category: "",
        header: "",
        body: ""
    }
*/
]