import fs from 'fs';

let v1 = 3;
let v2 = 2; //exemple
let v3 = 1;

let content = `variable1=${v1}$variable2=${v2}$variable3=${v3}`;

function saveFile(content, nameFile) {
    fs.writeFile(`./${nameFile}`, content, (err) => {
        if (err) {
            console.error('Error in save, code error:', err);
        } else {
            console.log('File saved');
           
        }
    });
}

function loadData(nameFile) {
    try {
        const data = fs.readFileSync(`./${nameFile}`, 'utf-8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
        return null; 
    }
}

function readData(nameFile) {
    let data = loadData(nameFile); 
    console.log(data);
    if (data === null) {
        console.error('No data to read.');
        return; 
    }
    
    const varArray = data.split('$');
    const values = [];
    
    for (const variable of varArray) {
        const [name, value] = variable.split('=');
        
        if (value !== undefined && value.trim() !== '') {
            values.push(Number(value));
        }
    }
    
    console.log('Values of the data:', values);
}


// saveFile(content,'archive');
// readData('archive')
