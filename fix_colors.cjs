const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.tsx')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync('./src/components');

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Typography fixes
  content = content.replace(/font-black/g, 'font-medium');
  content = content.replace(/font-extrabold/g, 'font-medium');
  content = content.replace(/font-bold/g, 'font-medium');
  
  // Color contrast fixes (Replace hardcoded light-theme vibrant colors with M3 dynamic surface tokens)
  content = content.replace(/bg-vibrant-light-beige/g, 'bg-surface-container-low');
  content = content.replace(/bg-vibrant-[a-zA-Z]+(\/[0-9]+)?/g, 'bg-primary-container');
  content = content.replace(/text-vibrant-[a-zA-Z]+/g, 'text-primary');
  content = content.replace(/border-vibrant-[a-zA-Z]+(\/[0-9]+)?/g, 'border-outline-variant');
  
  if (content !== original) {
    console.log(`Fixed contrast and typography in ${filePath}`);
    fs.writeFileSync(filePath, content);
  }
});
