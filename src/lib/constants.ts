export type Article = {
  source: {
      id: string | null;
      name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
};

export const articles :Article[] = [
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Ivan Mehta",
    "title": "Hulu debuts a new interface with a vertical sidebar on Fire TV, Apple TV, and Roku",
    "description": "Hulu is rolling out a new interface design on big screen with a new sidebar navigation to streaming devices like Apple TV, Fire TV and Roku.",
    "url": "https://techcrunch.com/2023/03/31/hulus-new-interface-with-a-revamped-sidebar-is-rolling-out-on-fire-tv-apple-tv-and-roku/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/image-6.png?resize=1200,674",
    "publishedAt": "2023-03-31T17:48:18Z",
    "content": "Hulu is slowly rolling out a new interface on streaming devices like Fire TV, Apple TV and Roku, among other compatible devices. The new redesign moves the navigation to the left side with options fo… [+1725 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Taylor Hatmaker",
    "title": "What's going on with the TikTok ban?",
    "description": "TikTok’s fate is far from sealed. We’ve answered some common questions about a situation that’s complex, confusing and changing as we speak.",
    "url": "https://techcrunch.com/2023/03/31/whats-going-on-with-the-tiktok-ban/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/tiktok-logo-neon.jpg?resize=1200,800",
    "publishedAt": "2023-03-31T17:38:34Z",
    "content": "With a U.S. ban of TikTok looming, it might look like game-over for the hit video sharing app, which has taken the world by storm in recent years, reshaping every aspect of culture in the process.\r\nU… [+1893 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Jacquelyn Melinek",
    "title": "Investors unfazed by Q1 crypto funding decline",
    "description": "Crypto-focused venture capital investors remain confident in the market as total capital raised dropped in the first quarter.",
    "url": "https://techcrunch.com/2023/03/31/crypto-q1-decline-analysis/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/02/GettyImages-1286506258.jpg?resize=1200,800",
    "publishedAt": "2023-03-31T16:10:29Z",
    "content": "Crypto-focused venture capital investors are trucking along in their work. Many remain confident in their investing strategies despite an enervated first-quarter market for crypto startup fundraising… [+1434 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Walter Thompson",
    "title": "TechCrunch+ roundup: 3 key hiring metrics, building SDR teams, insurtech investor survey",
    "description": "Marketing teams get a lot of credit for landing new customers, but in reality, sales development representatives do most of the actual work.",
    "url": "https://techcrunch.com/2023/03/31/techcrunch-roundup-3-key-hiring-metrics-building-sdr-teams-insurtech-investor-survey/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1473986585.jpg?resize=1200,674",
    "publishedAt": "2023-03-31T16:09:56Z",
    "content": "The expense involved in recruiting, training and onboarding a new employee who turns out to be a poor fit could be equivalent to 50% of that person’s first-year salary.\r\nAccording to Anastasiia Kuzme… [+4317 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Haje Jan Kamps",
    "title": "Artie sidesteps the app stores by putting high-quality games in your browser",
    "description": "Artie is gearing up to shake up the games industry by bringing high-end games back to the browser.",
    "url": "https://techcrunch.com/2023/03/31/artie-browser/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/artie-Large.jpeg?w=992",
    "publishedAt": "2023-03-31T16:03:08Z",
    "content": "When you play a game, how do you play it? Monopoly or Settlers of Catan around the dining table? Mario Kart on your Nintendo Switch? Assassins Creed on your Xbox? Among Us on your phone? Usually, the… [+2935 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Anna Heim",
    "title": "The lowdown for European startups looking to raise money in 2023",
    "description": "We’re looking at Europe's Q1 2023 venture capital tallies and considering the three largest venture markets in the region: the U.K., Germany and France.",
    "url": "https://techcrunch.com/2023/03/31/venture-fundraising-european-startups-2023/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/GettyImages-918480798.jpg?resize=1200,892",
    "publishedAt": "2023-03-31T15:55:55Z",
    "content": "Were an impatient bunch here at TechCrunch+, so while we await tidied quarterly venture reports from major startup databases, were also running our own queries to get early looks at the state of the … [+1537 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Romain Dillet",
    "title": "France moves forward with influencer bill cracking down on risky products and more",
    "description": "The lower chamber of the French parliament passed a bill that aims to introduce some new requirements for social media influencers.",
    "url": "https://techcrunch.com/2023/03/31/france-moves-forward-with-influencer-bill-cracking-down-on-risky-products-and-more/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1372511207.jpg?resize=1200,800",
    "publishedAt": "2023-03-31T15:52:11Z",
    "content": "The lower chamber of the French parliament, the National Assembly, passed a cross-party bill that aims to introduce some new requirements for social media influencers. This is a preliminary vote as t… [+2971 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Ingrid Lunden",
    "title": "Groupon, which has lost 99.4% of its value since its IPO, names a new CEO... based in Czech Republic",
    "description": "A dozen years ago, Groupon shot to fame popularizing the online group buying format, confidently rejecting a $6 billion acquisition offer from Google and instead going public with a $17.8 billion market cap. The company today says it has 14 million active use…",
    "url": "https://techcrunch.com/2023/03/31/groupon-which-has-lost-99-4-of-its-value-since-its-ipo-names-a-new-ceo-based-in-czech-republic/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2016/07/groupon-office-door-lrg.jpg?resize=1200,675",
    "publishedAt": "2023-03-31T15:17:39Z",
    "content": "A dozen years ago, Groupon shot to fame popularizing the online group buying format, confidently rejecting a $6 billion acquisition offer from Google and instead going public with a $17.8 billion mar… [+4430 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Carly Page",
    "title": "There’s a new supply chain attack targeting customers of a phone system with 12 million users",
    "description": "North Korean hackers are using a trojanized version of 3CX’s VoIP client to install info stealer malware on corporate networks",
    "url": "https://techcrunch.com/2023/03/30/theres-a-new-supply-chain-attack-targeting-customers-of-a-phone-system-with-12-million-users/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1271491105-2.jpg?resize=1200,675",
    "publishedAt": "2023-03-30T17:33:38Z",
    "content": "Multiple security firms have sounded the alarm about an active supply chain attack that’s using a trojanized version of 3CXs widely used voice and video-calling client to target downstream customers.… [+2635 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Haje Jan Kamps",
    "title": "Review: Xbloom makes perfect pour-over so you don't have to",
    "description": "Making high-end pour-over coffee is a fine dance of grinding, pouring, temperature and patience. If you have $800, Xbloom can help with its one-touch bean-to-cup system.",
    "url": "https://techcrunch.com/2023/03/31/xbloom-pour-over/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/IMG_3614.jpg?resize=1200,800",
    "publishedAt": "2023-03-29T22:13:26Z",
    "content": "Coffee nerds love the ceremony of making a good cup of coffee, but once you get advanced enough, things get really complex really fast. Making high-end pour-over coffee is a fine dance of grinding, p… [+5166 chars]"
  }
]