const getTime = () => {
    const greeting = document.getElementById('greeting');
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 12 && hours < 18) {
        greeting.innerHTML = `Boa tarde`;
    } else if (hours >= 18 && hours < 24) {
        greeting.innerHTML = `Boa noite`;
    } else if (hours >= 0 && hours < 12) {
        greeting.innerHTML = `Bom dia`;
    } else {
        greeting.innerHTML = `erro`;
    }
}

getTime();
