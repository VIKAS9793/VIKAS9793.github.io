export type ProjectKind = 'Studio' | 'Open source' | 'Android app';
export type ProjectGroup = 'products' | 'games';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  index: string;
  name: string;
  kind: ProjectKind;
  group: ProjectGroup;
  /** Gets the double-line frame: the system's mark for the one thing to look at first. */
  featured?: boolean;
  status: string;
  summary: string;
  problem: string;
  approach: string;
  evidence: readonly string[];
  tags: readonly string[];
  links: readonly ProjectLink[];
  /** When no public repository exists, say so instead of hiding it. */
  privateNote?: string;
}

/** Ordered by impact. Every claim here is traceable to the project itself. */
export const projects: readonly Project[] = [
  {
    id: 'androjack-mcp',
    group: 'products',
    featured: true,
    index: '01',
    name: 'AndroJack MCP',
    kind: 'Open source',
    status: 'Live, version 2.1.0',
    summary: 'Lets AI coding assistants check Android code against Google’s official documentation before handing it to you.',
    problem:
      'AI coding assistants often write Android code from outdated knowledge: deprecated APIs, wrong patterns, apps that Google Play rejects. Developers cannot trust the output without checking every line.',
    approach:
      'A plug-in for AI assistants, built on the open Model Context Protocol (MCP) standard. It gives the assistant live access to official Android documentation and checks the code it writes against a fixed rule set before you see it.',
    evidence: [
      '23 tools and 34 validation rules in version 2.1.0',
      'Published on npm and the VS Code Marketplace, with a one-command install',
      'Works with Claude Desktop, Cursor, Windsurf, VS Code Copilot, AWS Kiro, Google Antigravity and JetBrains AI',
    ],
    tags: ['MCP', 'TypeScript', 'Android', 'npm'],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/VIKAS9793/AndroJack-mcp' },
      { label: 'npm package', href: 'https://www.npmjs.com/package/androjack-mcp' },
      { label: 'VS Code extension', href: 'https://marketplace.visualstudio.com/items?itemName=VIKAS9793.androjack-vscode' },
    ],
  },
  {
    id: 'context-fabric',
    group: 'products',
    index: '02',
    name: 'Context Fabric',
    kind: 'Open source',
    status: 'Live, version 1.2.2',
    summary: 'Gives AI coding assistants a memory of your project that stays correct as the code changes.',
    problem:
      'AI assistants forget your project between sessions, and the notes you keep for them go stale as the code changes, so they work from outdated context.',
    approach:
      'An MCP server that saves the project’s state on every git commit, spots when that saved context no longer matches the code, and hands the assistant a short briefing that fits its token budget. Five cooperating engines watch, check, rank, budget and compose it.',
    evidence: ['Version 1.2.2 on npm', 'MIT licensed, open source', 'Runs on Node.js 22 to 24'],
    tags: ['MCP', 'Node.js', 'Context engineering', 'SQLite'],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/VIKAS9793/context-fabric' },
      { label: 'npm package', href: 'https://www.npmjs.com/package/context-fabric' },
    ],
  },
  {
    id: 'subscribchek',
    group: 'products',
    index: '03',
    name: 'SubscribCHEK',
    kind: 'Android app',
    status: 'In closed testing on Google Play',
    summary: 'Shows what your subscriptions really cost per year and helps you cancel them, with no bank login and no account.',
    problem:
      'Subscriptions are easy to forget and hard to see. People pay for services they no longer use because the real yearly cost is never in front of them.',
    approach:
      'A native Android app that tracks recurring subscriptions, shows the cost over a full year, and guides you through cancelling the ones you no longer want. It never cancels for you, has no backend and asks for no bank login or account. Everything stays on the phone.',
    evidence: ['Native Android, built with Kotlin and Jetpack Compose', 'Closed testing is running on Google Play ahead of the public launch'],
    tags: ['Kotlin', 'Jetpack Compose', 'On-device', 'Privacy-first'],
    links: [{ label: 'Visit the website', href: 'https://subscribchek.netlify.app' }],
    privateNote: 'Source code is private.',
  },
  {
    id: 'asanapals',
    group: 'products',
    index: '04',
    name: 'AsanaPals',
    kind: 'Android app',
    status: 'In testing before its Google Play launch',
    summary: 'A calm, offline wellness app where five animal companions help you move, rest, breathe and restart.',
    problem:
      'Most wellness apps become one more thing you are failing at: scores, streaks and missed days that make you feel guilty instead of better.',
    approach:
      'Companionship instead of tracking. Five animal companions guide small moments to move, rest, energise, restart and breathe. There are no scores, streaks or judgement, and the app works fully offline with no internet permission.',
    evidence: ['Built with Flutter for Android', 'Collects nothing and asks for no internet permission'],
    tags: ['Flutter', 'Offline-first', 'Wellbeing', 'No tracking'],
    links: [{ label: 'Visit the website', href: 'https://asanapals.space' }],
    privateNote: 'Source code is private.',
  },
  {
    id: 'northstar-studioz',
    group: 'games',
    featured: true,
    index: '05',
    name: 'NorthStar Studioz',
    kind: 'Studio',
    status: 'First game in development',
    summary: 'My one-person studio for hands-first mixed reality games on Meta Quest 3 and 3S, started out of a passion for games.',
    problem:
      'I love games, and I wanted to learn how they are made, not only play them. The studio\u2019s bet is that many people would rather play seated, at the table they already have, than clear a room and stand up.',
    approach:
      'A one-person studio, founded in October 2026. The first game is designed to be played seated, with bare hands, on a real table. Details stay confidential until it is announced.',
    evidence: ['Studio website is live', 'Targets Meta Quest 3 and 3S, played with bare hands'],
    tags: ['Mixed reality', 'Meta Quest', 'Hand tracking', 'Unity'],
    links: [
      { label: 'Visit the studio', href: 'https://northstarstudioz.space' },
      { label: 'Website source', href: 'https://github.com/VIKAS9793/NorthStarStudioz' },
    ],
    privateNote: 'Game source is private.',
  },
];
