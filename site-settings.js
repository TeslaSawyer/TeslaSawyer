window.SITE_SETTINGS = {
  // Choose: forest, ocean, or ember.
  theme: "forest",

  themes: {
    forest: {
      colorScheme: "dark",
      colors: {
        paper: "#151b18",
        ink: "#eef3ea",
        muted: "#adb9af",
        green: "#8ed39a",
        "green-dark": "#b6e3ad",
        coral: "#f39879",
        yellow: "#f2cf70",
        line: "#3b4740",
        white: "#202923",
        "brand-bg": "#3f7350",
        "brand-text": "#ffffff",
        "image-border": "#3f4941",
        "image-bg": "#202923",
        intro: "#c4cec5",
        "request-bg": "#252f29"
      }
    },
    ocean: {
      colorScheme: "dark",
      colors: {
        paper: "#111b21",
        ink: "#edf4f7",
        muted: "#aebfc7",
        green: "#74d6cb",
        "green-dark": "#a7eee2",
        coral: "#ff937b",
        yellow: "#ffd782",
        line: "#344951",
        white: "#1c2a31",
        "brand-bg": "#19685e",
        "brand-text": "#ffffff",
        "image-border": "#35505a",
        "image-bg": "#1c2a31",
        intro: "#c0d3d8",
        "request-bg": "#1d3034"
      }
    },
    ember: {
      colorScheme: "dark",
      colors: {
        paper: "#1d1917",
        ink: "#f4ece5",
        muted: "#c2b4aa",
        green: "#e0a676",
        "green-dark": "#ffca91",
        coral: "#fa896e",
        yellow: "#e3bf68",
        line: "#493832",
        white: "#29211d",
        "brand-bg": "#79402f",
        "brand-text": "#ffffff",
        "image-border": "#534034",
        "image-bg": "#29211d",
        intro: "#d4c4b8",
        "request-bg": "#30241f"
      }
    }
  },

  images: {
    hero: {
      src: "./images/api-4.jpg",
      alt: "Vanilla Rec Room lobby with the Vanilla sign"
    },
    overview: {
      src: "./images/api-2.jpg",
      alt: "Player in the Vanilla Rec Room lobby"
    },
    play: {
      src: "./images/api-3.jpg",
      alt: "A bright green minigame with numbered blocks"
    },
    create: {
      src: "./images/api.jpg",
      alt: "Vanilla Rec Room avatar in a room"
    },
    gettingStarted: {
      src: "./images/api-2.jpg",
      alt: "Player standing in the Vanilla Rec Room lobby"
    }
  },

  gettingStartedSteps: [
    {
      title: "Choose a device",
      description: "Vanilla lists Meta Quest 2, Quest Pro, and Quest 3. Its PC version lists Windows 7, 10, or 11 and can be played on a screen or in VR."
    },
    {
      title: "Install it together",
      description: "Vanilla's download page has separate PC and Quest options. Ask Dad to help choose the official version for the device."
    },
    {
      title: "Set up the account",
      description: "Vanilla's sign-in page uses a username and password. Follow the account setup steps with a parent. If Discord is part of the setup, ask first, make the account, then leave the server like I promised."
    },
    {
      title: "Try a first room",
      description: "Start with an easy room, learn the controls, and try an activity together before exploring on your own."
    },
    {
      title: "Agree on the rules",
      description: "Decide together on playtime, privacy, voice chat, and what to do if anything online feels uncomfortable."
    }
  ],

  circuits: {
    menus: [
      {
        title: "Start here: signals and building blocks",
        description: "Circuits are connected nodes. Wires carry values between input and output pins; a circuit board can group many chips into one reusable block.",
        items: [
          { name: "CV1 and CV2", description: "CV1 is the original system and is now called Legacy. CV2 is newer and has more features; this guide focuses on the CV1 chip list documented by the wiki." },
          { name: "Pins and wires", description: "Pins are the connection points on a chip or prop. Wiring an output to an input passes its signal along." },
          { name: "Signals", description: "A signal is a value moving through the circuit. In CV1, zero is commonly false and any nonzero number is true." },
          { name: "Circuit boards", description: "Boards package a group of chips so a large circuit is easier to organize and reuse." },
          { name: "Maker Pen permissions", description: "The wiki says viewing and editing circuits depends on the room's Maker Pen permissions." }
        ]
      },
      {
        title: "Math chips",
        description: "These chips make decisions or calculate numbers that other parts of a room can use.",
        items: [
          { name: "Boolean", description: "Uses logic operations such as AND, OR, and NOT to combine true/false signals." },
          { name: "Combinator", description: "Calculates with numbers: add, subtract, multiply, divide, or find a remainder." },
          { name: "Comparer", description: "Checks two values, for example whether one is greater than, equal to, or less than another." },
          { name: "Random", description: "Generates a random number between a chosen minimum and maximum range." },
          { name: "Variable", description: "Provides configured number values that can be used elsewhere in a circuit." },
          { name: "Wave", description: "Produces a repeating shape of values, such as a sine, square, or triangle wave." }
        ]
      },
      {
        title: "Game chips",
        description: "These chips read or control game events, players, teams, scores, and game rules.",
        items: [
          { name: "Game Rules", description: "Defines game-mode settings that can be used by the scoreboard and game logic." },
          { name: "Game State", description: "Signals when a game starts, ends, or begins its pre-game phase." },
          { name: "Paintball Capture The Flag board", description: "A ready-made circuit board with some of the logic for a Capture the Flag mode." },
          { name: "Paintball Team Battle board", description: "A ready-made circuit board with some of the logic for Team Battle." },
          { name: "StuntRunner board", description: "A ready-made circuit board with some of the logic used by Stunt Runner." },
          { name: "Get Player Stat", description: "Reads a selected stat for a player." },
          { name: "Get Score", description: "Reads a team's current score." },
          { name: "Player Event", description: "Reports player joins, leaves, team changes, and the current player count." },
          { name: "Player Hit", description: "Reports information about a player hit, such as attacker, target, team, and damage." },
          { name: "Player Revived", description: "Reports who was revived and related player, team, and health information." },
          { name: "Respawn", description: "Requests a respawn for a player or team." },
          { name: "Role", description: "Configures a set of player permissions and movement settings for a role." },
          { name: "Role Mapper", description: "Adds, removes, or checks a custom role for a player or team." },
          { name: "Scoreboard Setup", description: "Controls information such as game time shown on the scoreboard." },
          { name: "Set Game State", description: "Sends a signal to start or stop a game." },
          { name: "Set Player Stat", description: "Writes a selected stat value for one player or, in some uses, all players." },
          { name: "Set Score", description: "Sets a team's score while a game is in progress." },
          { name: "Team Mapping", description: "Looks up team membership, counts players, or moves players between teams." }
        ]
      },
      {
        title: "Other chips",
        description: "These chips add timing, messages, sound, visual effects, object lookup, and other room behavior.",
        items: [
          { name: "Background Objects", description: "Changes distant background elements such as clouds, mountains, or stars." },
          { name: "Delay", description: "Waits for a set time before sending a signal onward." },
          { name: "Fog", description: "Changes the room's fog, including its distance and color." },
          { name: "Get Leaderboard", description: "Reads persistent player statistics saved for a leaderboard." },
          { name: "Message", description: "Displays a configured message to everyone, a team, or a specific player." },
          { name: "Object Mapper", description: "Uses an object ID to find the player holding or who last held that object." },
          { name: "Output", description: "Displays the numeric signal it receives, useful for checking a circuit's value." },
          { name: "Selector", description: "Routes a value to an output based on which configured condition matches." },
          { name: "Set Leaderboard", description: "Saves a persistent statistic for a player." },
          { name: "Set Tags", description: "Adds, removes, or resets tags on an object." },
          { name: "SFX", description: "Plays a selected sound effect when its input changes to an active value." },
          { name: "SkyDome", description: "Changes colors used by the room's sky and horizon." },
          { name: "State", description: "Represents one named state and can send configured values while active." },
          { name: "State Machine", description: "Tracks which state is active and signals when the state changes." },
          { name: "Timer", description: "Counts down or repeats a countdown, then sends an output when time expires." }
        ]
      },
      {
        title: "Gizmos",
        description: "CV1 gizmos use signals to move, rotate, or animate connected objects.",
        items: [
          { name: "Animation Gizmo", description: "Moves connected objects through an animation made from keyframes." },
          { name: "Clamp", description: "Releases or holds connected objects in place." },
          { name: "Look At", description: "Turns a connected object toward an object with a chosen tag." },
          { name: "Piston V1 (Legacy)", description: "Moves a connected object back and forth along a straight line." },
          { name: "Rotator V1 (Legacy)", description: "Rotates a connected object at a chosen speed or toward a target angle." }
        ]
      },
      {
        title: "Examples: props that connect to circuits",
        description: "Some room props send signals when players use them; others react when a circuit sends them a signal.",
        items: [
          { name: "Button and Toggle Button", description: "A button sends a press signal; a toggle button can stay on or off until pressed again." },
          { name: "Dice Set", description: "Sends the number rolled as a signal." },
          { name: "Goals", description: "Object and player goals send a signal when something passes through them." },
          { name: "Sign", description: "Displays configured text and can insert values sent by a circuit." },
          { name: "Stage Light", description: "Can be switched on or off and receive color and brightness values." },
          { name: "Holotar Projector", description: "Plays or stops a saved recording of a player's movement and voice." },
          { name: "Room Door", description: "Can receive a signal to control whether the door is locked." },
          { name: "Scoreboard Projector", description: "Displays game information; the wiki says it is controlled by scoreboard and game-rules chips." },
          { name: "Radio", description: "Can receive a circuit signal to control playback." }
        ]
      }
    ]
  },

  text: {
    pageTitle: "Why Vanilla? | A note for Dad",
    metaDescription: "A short guide to Vanilla Rec Room, its player-made rooms, game modes, and supported platforms.",
    brandMark: "V",
    brandLabel: "A note for Dad",
    topNote: "A closer look at Vanilla",
    heroEyebrow: "The pitch: Vanilla Rec Room",
    headlineLead: "Rec Room shut down.",
    headlineAccent: "Vanilla is here.",
    heroIntro: "I found Vanilla while looking for another place to play and create. It's a free, cross-platform social game with player-made rooms, team games, and ways to play on a screen or in VR.",
    heroProof: "FREE TO PLAY · PC + META QUEST · SCREEN OR VR",
    sectionLabel: "A little Vanilla field guide",
    sectionTitle: "Pick a topic to explore.",
    sectionNote: "These details come from Vanilla's official website.",
    tabOverview: "Overview",
    tabPlay: "Play",
    tabCreate: "Create",
    tabGettingStarted: "Getting started",
    overviewTitle: "A social game with lots of rooms",
    overviewDescription: "Vanilla says it's free and cross-platform, so friends can hang out across devices. It can be played on a screen or with a VR headset.",
    playStyleLabel: "Play style",
    playStyleValue: "Social rooms, games, and shared activities",
    costLabel: "Cost",
    costValue: "Free, according to Vanilla's site",
    playTitle: "Compete or team up",
    paintballDescription: "For competitive games, Vanilla highlights paintball with Capture the Flag and Team Battle, plus different maps and customization.",
    coOpDescription: "For co-op, team up with friends in the Jumbotron quest and take on its robot enemies together.",
    createTitle: "Explore rooms or make one",
    createDescription: "Vanilla's site describes thousands of player-created rooms, with hundreds more being added daily. You can also build rooms with friends.",
    createExtra: "That means there are places to explore and creative projects to try, not just one fixed activity.",
    gettingStartedTitle: "A few steps before I play",
    gettingStartedIntro: "Here's how we can set it up together and make sure it feels okay to try.",
    circuitsLabel: "A beginner's programming corner",
    circuitsTitle: "What do the circuits do?",
    circuitsIntro: "Circuits connect little logic pieces to make room features react to players and events.",
    circuitsCaveat: "This is a simplified guide to the Rec Room Wiki's Circuits V1 (Legacy) list. Vanilla may use different or newer versions, and the wiki notes that some details are outdated.",
    sourceLabel: "Source: ",
    sourceName: "vanillarec.net",
    footerNote: "A note for Dad / Your call"
  }
};