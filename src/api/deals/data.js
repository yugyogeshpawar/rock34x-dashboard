import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';

const now = new Date();

export const activeDeals = [
  {
    id: "5eff24ca3ffpf939b667258b",
    members: [
      {
        avatar: "/assets/deal-icon/icon3.png",
        name: "Penjani Inyene",
      },
    ],
    title: "The Archway Community Sale is Sold Out",
    desc: "The Value Capture Chain for the Cosmos. US, CA, CN, KR, and other jurisdictions excluded.",
    button: "Explore",
  },
  {
    id: "5err24ca3ffpf939b667258b",
    members: [
      {
        avatar: "/assets/deal-icon/icon4.png",
        name: "Another Member",
      },
    ],
    title: "Another Community Sale",
    desc: "Description for another community sale.",
    button: "Explore",
  },
  {
    id: "5eff24cf8740sc9faca4e463",

    members: [
      {
        avatar: "/assets/deal-icon/icon4.png",
        name: "Penjani Inyene",
      },
    ],
    title: "The Neon Community Sale is Sold Out",
    desc: "An Ethereum Virtual Machine on Solana. US,CA,CN,KR, and other jurisdictions excluded",
    button: "Explore",
  },
  {
    id: "5eff24cf8740fc9faca4e463",

    members: [
      {
        avatar: "/assets/deal-icon/icon5.png",
        name: "Penjani Inyene",
      },
    ],
    title: "The CyberConnect Community Sale is Sold Out",
    desc: "Web3s Earliest and Biggest Decentralized Social Network.US,CA,CN,KR, and other jurisdictions excluded",
    button: "Explore",
  },
];


export const pastDeals = [
  {
    id: "5eff24c52ce9fdadffa11959",

    members: [
      {
        avatar: "/assets/deal-icon/icon2.png",
        name: "Marcus Finn",
      },
    ],
    title: "Chainflip Community Sale Has Ended",
    desc: "The efficient cross-chain swapping protocol. Not available in US,CN,CA, and other jurisdictions.Sale has ended.",
    button: "Sold Out",
  },
  {
    id: "5eff24ca3ffab939b667258b",

    members: [
      {
        avatar: "/assets/deal-icon/icon3.png",
        name: "Jie Yan Song",
      },
    ],
    title: "The Archway Community Sale is Sold Out",
    desc: "The Value Capture Chain for the Cosmos.US,CA,CN,KR, and other jurisdictions excluded",
    button: "Sold Out",
  },
  {
    id: "5eff24cf9740fc9faca4e463",

    members: [
      {
        avatar: "/assets/deal-icon/icon4.png",
        name: "Penjani Inyene",
      },
    ],
    title: "The Neon Community Sale is Sold Out",
    desc: "An Ethereum Virtual Machine on Solana. US,CA,CN,KR, and other jurisdictions excluded",
    button: "Sold Out",
  },
  {
    id: "5eff24df8740fc9faca4e463",

    members: [
      {
        avatar: "/assets/deal-icon/icon5.png",
        name: "Penjani Inyene",
      },
    ],
    title: "The CyberConnect Community Sale is Sold Out",
    desc: "Web3s Earliest and Biggest Decentralized Social Network.US,CA,CN,KR, and other jurisdictions excluded",
    button: "Sold Out",
  },
];

export function addActiveDeal(deal) {
  activeDeals.push(deal);
}
