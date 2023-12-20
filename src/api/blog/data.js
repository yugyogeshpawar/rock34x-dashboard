import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';

const now = new Date();

export const posts = [
  {
    id: '1',
    author: {
      avatar: '/assets/avatars/avatar-jie-yan-song.png',
      name: 'Crypto Insider'
    },
    category: 'Cryptocurrency',
    cover: '/assets/covers/business-2-4x4-large.png',
    publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),
    readTime: '3 min',
    shortDescription: 'Bitcoin Soars to New Heights, Surpassing $70,000 Amid Increased Institutional Interest',
    title: 'Bitcoin Hits All-Time High'
  },
  {
    id: '2',
    author: {
      avatar: '/assets/avatars/avatar-omar-darboe.png',
      name: 'Blockchain Enthusiast'
    },
    category: 'Market Analysis',
    cover: '/assets/covers/abstract-2-4x4-large.png',
    publishedAt: subHours(subMinutes(subSeconds(now, 29), 51), 6).getTime(),
    readTime: '4 min',
    shortDescription: 'Ethereum 2.0 Upgrade Successfully Implemented, Bringing Scalability Improvements',
    title: 'Ethereum 2.0 Launch Success'
  },
  {
    id: '3',
    author: {
      avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
      name: 'Crypto Analyst'
    },
    category: 'Altcoins',
    cover: '/assets/covers/minimal-2-4x4-large.png',
    publishedAt: subHours(subMinutes(subSeconds(now, 6), 46), 16).getTime(),
    readTime: '2 min',
    shortDescription: 'Ripples XRP Gains Momentum as Partnerships Flourish in the Payments Industry',
    title: 'Ripples XRP Making Waves'
  },
  {
    id: '4',
    author: {
      avatar: '/assets/avatars/avatar-iulia-albu.png',
      name: 'Blockchain Visionary'
    },
    category: 'Regulation',
    cover: '/assets/covers/minimal-1-4x4-large.png',
    publishedAt: subDays(subHours(subMinutes(subSeconds(now, 52), 39), 7), 5).getTime(),
    readTime: '3 min',
    shortDescription: 'Government Agencies Explore Frameworks for Cryptocurrency Regulation Amidst Market Growth',
    title: 'Crypto Regulation on the Horizon'
  }
];

export const post = {
  id: '1',
  author: {
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    name: 'Crypto Insider'
  },
  category: 'Cryptocurrency',
  content: `
## Bitcoin Hits All-Time High

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et orci vel ex tincidunt cursus. Ut commodo tortor at efficitur accumsan. Integer sed consequat purus. Phasellus quis libero in nisl vestibulum fringilla at et sem. Duis vulputate justo ac nunc interdum venenatis. Curabitur vel fringilla justo, et dapibus urna.

Pellentesque non orci vel nisl condimentum sodales in a sem. Morbi eu mi ac odio euismod vestibulum. Vivamus in odio sit amet sem euismod scelerisque. Quisque auctor urna nec efficitur lacinia.

## Ethereum 2.0 Launch Success

Cras sit amet vehicula mi. Integer nec cursus risus. Etiam at nisi vel felis aliquet aliquet. Fusce vitae quam eu libero posuere auctor. Proin tempus est ut felis feugiat, vitae accumsan nulla facilisis.

Curabitur convallis urna et nisl tempus, at cursus augue vulputate. Sed euismod mauris ut ligula fermentum, ut venenatis lectus accumsan. Nulla facilisi. Aliquam id nisl sem.

\`\`\`javascript
// Sample code snippet
const bitcoinPrice = 70000;
console.log(\`Bitcoin is currently priced at $ \${bitcoinPrice}.\`);
\`\`\`

## Ripple's XRP Making Waves

Donec pharetra feugiat ipsum, vitae varius elit ultrices ac. Morbi vel justo vitae metus euismod ultricies. Vestibulum euismod eros ac metus tincidunt cursus. Duis vulputate velit id ipsum hendrerit, et laoreet velit commodo.

Nullam vitae risus nisl. Vivamus id ex eu purus cursus fringilla sit amet et justo. Integer et nulla in elit fermentum tristique.

## Crypto Regulation on the Horizon

Proin vel est ut elit sagittis iaculis. Fusce nec tortor sit amet odio scelerisque fringilla vitae at libero. Phasellus sit amet laoreet tortor. Ut nec nunc non justo convallis tincidunt.

Curabitur ac libero sed libero fermentum ullamcorper vel eu velit. Duis nec eros vel mauris fermentum dignissim in eget arcu. Phasellus feugiat lacinia justo, id posuere nunc ultricies vel.
`,
  cover: '/assets/covers/business-2-4x4-large.png',
  publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),
  readTime: '3 min',
  shortDescription: 'Bitcoin Soars to New Heights, Surpassing $70,000 Amid Increased Institutional Interest',
  title: 'Bitcoin Hits All-Time High'
};
