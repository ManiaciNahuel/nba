const teams = [
  {
    id: 0,
    name: 'Cleveland Cavaliers',
    logo: "media/logos/Clevelan-Cavaliers-logo-2022-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 1,
    name: 'Atlanta Hawks',
    logo: "media/logos/nba-atlanta-hawks-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 2,
    name: 'Boston Celtics',
    logo: "media/logos/nba-boston-celtics-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 3,
    name: 'Brooklyn Nets',
    logo: "media/logos/nba-brooklyn-nets-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 4,
    name: 'Charlotte Hornets',
    logo: "media/logos/nba-charlotte-hornets-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 5,
    name: 'Chicago Bulls',
    logo: "media/logos/nba-chicago-bulls-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 6,
    name: 'Dallas Mavericks',
    logo: "media/logos/nba-dallas-mavericks-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 7,
    name: 'Denver Nuggets',
    logo: "media/logos/nba-denver-nuggets-logo-2018-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 8,
    name: 'Detroit Pistons',
    logo: "media/logos/nba-detroit-pistons-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 9,
    name: 'Houston Rockets',
    logo: "media/logos/nba-houston-rockets-logo-2020-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 10,
    name: 'Golden State Warriors',
    logo: "media/logos/nba-golden-state-warriors-logo-2020-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 11,
    name: 'Indiana Pacers',
    logo: "media/logos/nba-indiana-pacers-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 12,
    name: 'Los Angeles Clippers',
    logo: "media/logos/nba-la-clippers-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 13,
    name: 'Los Angeles Lakers',
    logo: "media/logos/nba-los-angeles-lakers-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 14,
    name: 'Memphis Grizzlies',
    logo: "media/logos/nba-memphis-grizzlies-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 15,
    name: 'Miami Heat',
    logo: "media/logos/nba-miami-heat-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 16,
    name: 'Milwaukee Bucks',
    logo: "media/logos/nba-milwaukee-bucks-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 17,
    name: 'Minnesota Timberwolves',
    logo: "media/logos/nba-minnesota-timberwolves-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 18,
    name: 'New Orlans Pelicans',
    logo: "media/logos/nba-new-orleans-pelicans-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 19,
    name: 'Oklahoma City Thunder',
    logo: "media/logos/nba-oklahoma-city-thunder-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 20,
    name: 'New York Knicks',
    logo: "media/logos/nba-new-york-knicks-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 21,
    name: 'Orlando Magic',
    logo: "media/logos/nba-orlando-magic-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 22,
    name: 'Phoenix Suns',
    logo: "media/logos/nba-phoenix-suns-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 23,
    name: 'Portland Trail Blazers',
    logo: "media/logos/nba-portland-trail-blazers-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 24,
    name: 'Sacramento Kings',
    logo: "media/logos/nba-sacramento-kings-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 25,
    name: 'San Antonio Spurs',
    logo: "media/logos/nba-san-antonio-spurs-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 26,
    name: 'Washington Wizards',
    logo: "media/logos/nba-washington-wizards-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 27,
    name: 'Toronto Raptors',
    logo: "media/logos/nba-toronto-raptors-logo-2020-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 28,
    name: 'Utah Jazz',
    logo: "media/logos/utah-jazz-logo-2022-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 29,
    name: 'Philadelphia 76ers',
    logo: "media/logos/nba-philadelphia-76ers-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  }
]

export default teams;