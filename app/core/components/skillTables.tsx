const baseSkills = {
  athletics: 2,
  brawling: 2,
  concentration: 2,
  conversation: 2,
  education: 2,
  evasion: 2,
  'first aid': 2,
  'human perception': 2,
  'language (streetslang)': 2,
  'local expert (your home)': 2,
  perception: 2,
  persuasion: 2,
  stealth: 2,
};

export const rockerboySkills = {
  ...baseSkills,
  composition: 2,
  handgun: 2,
  'melee weapon': 2,
  'personal grooming': 2,
  'play instrument (choose 1)': 2,
  streetwise: 2,
  'wardrobe & style': 2,
};

export const soloSkills = {
  ...baseSkills,
  'autofire (x2)': 2,
  handgun: 2,
  'melee weapon': 2,
  'resist torture / drugs': 2,
  'shoulder arms': 2,
  tactics: 2,
};

export const netrunnerSkills = {
  ...baseSkills,
  'basic tech': 2,
  'conceal / reveal object': 2,
  cryptography: 2,
  cybertech: 2,
  'electronics / security tech (x2)': 2,
  handgun: 2,
  'library search': 2,
};

export const techSkills = {
  ...baseSkills,
  'basic tech': 2,
  cybertech: 2,
  'electronics / security tech (x2)': 2,
  'land vehicle tech': 2,
  'shoulder arms': 2,
  'science (choose 1)': 2,
  weaponstech: 2,
};

export const medtechSkills = {
  ...baseSkills,
  'basic tech': 2,
  cybertech: 2,
  deduction: 2,
  'paramedic (x2)': 2,
  'resist torture / drugs': 2,
  'science (choose 1)': 2,
  'shoulder arms': 2,
};

export const mediaSkills = {
  ...baseSkills,
  bribery: 2,
  composition: 2,
  deduction: 2,
  handgun: 2,
  'library search': 2,
  'lip reading': 2,
  'photography / film': 2,
};

export const lawmanSkills = {
  ...baseSkills,
  autofire: 2,
  criminology: 2,
  deduction: 2,
  handgun: 2,
  interrogation: 2,
  'shoulder arms': 2,
  tracking: 2,
};

export const execSkills = {
  ...baseSkills,
  accounting: 2,
  bureaucracy: 2,
  business: 2,
  deduction: 2,
  handgun: 2,
  'lip reading': 2,
  'personal grooming': 2,
};

export const fixerSkills = {
  ...baseSkills,
  bribery: 2,
  business: 2,
  forgery: 2,
  handgun: 2,
  'pick lock': 2,
  streetwise: 2,
  trading: 2,
};

export const nomadSkills = {
  ...baseSkills,
  'animal handling': 2,
  'drive land vehicle': 2,
  handgun: 2,
  'melee weapon': 2,
  tracking: 2,
  trading: 2,
  'wilderness survival': 2,
};
