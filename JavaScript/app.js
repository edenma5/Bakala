function addText(price) {
    if (!price || price <= 0 || typeof (price) === 'string') { //האם המספר הוא ״שלילי״ לא רק כערך מספרי אלא גם מבחינת שלילי
        throw Error('Please Enter Current Price');
    }
    const vat = 1.17; // מעמ
    const total = (price * vat).toFixed(2);
    return total;
}

function generateId() {
    //const rand = Math.random();
    //console.log(`rand: ${rand}`);
    //const num = rand * 100000;
    //console.log(`rand: ${num}`);
    //const floor = Math.floor(num);
    //console.log(`rand: ${floor}`);
    //return floor;

    const time = new Date().getTime();
    return Math.floor(Math.random() * time);
}