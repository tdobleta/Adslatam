// Genera lumen/tokens.css a partir de lumen/tokens.json.
// Uso: node lumen/scripts/build-tokens.js
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const t = JSON.parse(fs.readFileSync(path.join(root, 'tokens.json'), 'utf8'));

const kebab = s => s.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
const decl = (name, value) => `  --${name}: ${value};`;

function themed(theme) {
  const out = [];
  for (const c of t.color.tokens) out.push(decl(c.name, c.value[theme]));
  for (const s of t.shadow.tokens) out.push(decl(s.name, s.value[theme]));
  return out.join('\n');
}

const invariant = [
  ...Object.entries(t.type.families).map(([k, v]) => decl('font-' + k, v)),
  ...t.spacing.tokens.map(s => decl(s.name, s.value)),
  ...t.radius.tokens.map(r => decl(r.name, r.value)),
  ...t.blur.tokens.map(b => decl(b.name, b.value))
].join('\n');

const typeClasses = t.type.groups.flatMap(g => g.styles.map(s => {
  const props = [
    `font-family: var(--font-${g.family})`,
    ...['fontSize', 'lineHeight', 'fontWeight', 'letterSpacing']
      .filter(k => s[k] !== undefined)
      .map(k => `${kebab(k)}: ${s[k]}`)
  ];
  return `.lm-text-${s.name} { ${props.join('; ')}; }`;
})).join('\n');

const css = `/* Lumen — tokens. GENERADO desde tokens.json con lumen/scripts/build-tokens.js: no editar a mano. */

:root {
  color-scheme: light;
${invariant}
${themed('light')}
}

:root[data-theme="dark"] {
  color-scheme: dark;
${themed('dark')}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
${themed('dark').replace(/^/gm, '  ')}
  }
}

/* Estilos tipográficos */
${typeClasses}
`;

fs.writeFileSync(path.join(root, 'tokens.css'), css);
console.log('lumen/tokens.css generado');
