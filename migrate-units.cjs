const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'cornerstone-on-arum', 'public', 'images', 'units');
const destDir = path.join(__dirname, 'public', 'images', 'units');
const dataFile = path.join(__dirname, 'data', 'units.ts');

const srcFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.png'));

// Copy all files
for (const f of srcFiles) {
    fs.copyFileSync(path.join(srcDir, f), path.join(destDir, f));
}

// Modify data/units.ts
let unitsContent = fs.readFileSync(dataFile, 'utf8');

// Replace unitNo string values with "cs" prefix
unitsContent = unitsContent.replace(/unitNo:\s*"(\d+)"/g, 'unitNo: "cs$1"');


// Update image paths based on available png files
// Basically for each unit, we find all png files that match the unit number (like cs101, or cs-101)
// The format in the folder is like cs-101-201-a.png (applies to 101), or cs-106-a.png
// The floorplans are like cs101-cs201-floorplan.png

const findImagesForUnit = (unit) => {
    const images = [];
    let floorPlan = null;
    const numMatches = unit.match(/\d+/)[0];

    for (const f of srcFiles) {
        if (f.includes(`-${numMatches}-`) || f.includes(`${numMatches}-`) || f.includes(`cs${numMatches}`)) {
            if (f.includes('floorplan') || f.includes('floor-plan')) {
                floorPlan = `/images/units/${f}`;
            } else {
                images.push(`/images/units/${f}`);
            }
        }
    }

    // Deduplicate and sort
    const uniqueImages = [...new Set(images)].sort();
    return { images: uniqueImages, floorPlan };
};

// We will do a generic replacement of the images array and floorPlan for each unit block
const regex = /{([^}]+unitNo:\s*"cs(\d+)"[^}]+ images:\s*\[[\s\S]*?\],[^}]+)}/g;

unitsContent = unitsContent.replace(regex, (match, body, unitNum) => {
    const { images, floorPlan } = findImagesForUnit(unitNum);

    // Create new images string
    let imagesStr = `images:\n            [\n`;
    for (const img of images) {
        imagesStr += `                "${img}",\n`;
    }
    imagesStr += `            ]`;

    // replace images
    let newBody = body.replace(/images:\s*\[[\s\S]*?\],/, imagesStr + ',');

    if (floorPlan) {
        newBody = newBody.replace(/floorPlan:\s*"[^"]*",?/, `floorPlan: "${floorPlan}",`);
    }

    return `{${newBody}}`;
});

fs.writeFileSync(dataFile, unitsContent);
console.log('Migration complete');
