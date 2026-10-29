import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { highlightsFor } from '../content/highlights';
import { tenureAt } from '../content/tenure';
import { projects } from '../content/projects';
import { about, approach, contacts, credentials, education, experience, nav, site, skills } from '../content/site';

const everything = JSON.stringify({ projects, about, approach, contacts, credentials, education, experience, nav, site, skills });

describe('content integrity', () => {
  it('uses the supplied owner identity', () => {
    expect(site.name).toBe('Vikas Sahani');
    expect(site.email).toBe('vikassahani17@gmail.com');
  });

  it('does not position the owner as a software engineer or developer', () => {
    const positioning = [site.role, site.headline, site.intro, site.description].join(' ');
    expect(positioning).not.toMatch(/engineer|developer(?! tools)/i);
    expect(positioning).toMatch(/product builder/i);
  });

  it('shows no phone number, verification badge or QR claim', () => {
    expect(everything).not.toMatch(/\+91|\b\d{10}\b|verified|qr/i);
  });

  it('contains no em dashes', () => {
    expect(everything).not.toContain('—');
  });

  it('has https links only, and every project has at least one', () => {
    for (const p of projects) {
      expect(p.links.length).toBeGreaterThan(0);
      for (const l of p.links) expect(l.href).toMatch(/^https:\/\//);
    }
    for (const c of contacts) expect(c.href).toMatch(/^(https:\/\/|mailto:)/);
  });

  it('links only public repositories', () => {
    const privateRepos = ['asanapals', 'asanapals-web', 'subscribchek', 'northstarstudioz-game'];
    const hrefs = projects.flatMap((p) => p.links.map((l) => l.href.toLowerCase()));
    for (const repo of privateRepos) {
      expect(hrefs.some((h) => h.endsWith(`/vikas9793/${repo}`))).toBe(false);
    }
  });

  it('lists only certificates the owner supplied', () => {
    expect(credentials.map((c) => c.name)).toEqual([
      'IBM Product Manager Professional Certificate',
      'Google AI Professional Certificate',
      'NISM Series V-A: Mutual Fund Distributor',
      'IRDAI Corporate Agent (Composite)',
    ]);
  });

  it('lists the four supplied roles, newest first, with no unsupplied employers', () => {
    expect(experience.map((r) => r.org)).toEqual(['Aditya Birla Capital', 'HDFC Bank', 'IndusInd Bank', 'ICICI Bank']);
  });

  it('every nav target exists as a section id in the app', () => {
    const sources = ['Hero', 'Work', 'Games', 'Approach', 'About', 'Contact']
      .map((f) => readFileSync(resolve(__dirname, `../components/${f}.tsx`), 'utf8'))
      .join('\n');
    for (const item of nav) {
      const id = item.href.slice(1);
      expect(sources).toMatch(new RegExp(`id="${id}"`));
    }
  });

  it('states the testing status of the two unreleased Android apps accurately', () => {
    const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
    expect(byId.subscribchek.status).toMatch(/closed testing/i);
    expect(byId.asanapals.status).toMatch(/testing/i);
    expect(everything).not.toMatch(/available on google play|download on google play/i);
  });

  it('derives the highlight counts from the project list', () => {
    const count = (kind: string) => projects.filter((p) => p.kind === kind).length;
    const byLabel = Object.fromEntries(highlightsFor(tenureAt(new Date())).map((h) => [h.label, h.value]));
    expect(byLabel['open-source tools on npm']).toBe(String(count('Open source')));
    expect(byLabel['Android apps in testing']).toBe(String(count('Android app')));
  });

  it('reserves the double-line frame for exactly two featured projects, one per group', () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.map((p) => p.id)).toEqual(['androjack-mcp', 'northstar-studioz']);
    expect(new Set(featured.map((p) => p.group)).size).toBe(2);
  });

  it('keeps the games passion on the page without leaking the game itself', () => {
    expect(everything).toMatch(/passion/i);
    expect(everything).not.toMatch(/rollsong/i);
  });

  it('keeps JSON-LD software versions in step with the project list', () => {
    const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf8');
    expect(html).toContain('"softwareVersion": "2.0.0"');
    expect(html).toContain('"softwareVersion": "1.2.2"');
    expect(projects.find((p) => p.id === 'androjack-mcp')!.status).toContain('2.0.0');
    expect(projects.find((p) => p.id === 'context-fabric')!.status).toContain('1.2.2');
  });

  it('shows the exact LinkedIn address it links to', () => {
    const linkedin = contacts.find((c) => c.id === 'linkedin')!;
    expect(linkedin.href).toBe('https://www.linkedin.com/in/vikas-sahani-727420358');
    expect(linkedin.href).toContain(linkedin.value);
  });
});
