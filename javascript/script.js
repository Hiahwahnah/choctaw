const alphabetData = [
    { letter: 'a', pronunciation: 'as in "father"' },
    { letter: 'aa', pronunciation: 'as in "father" (long)' },
    { letter: 'b', pronunciation: 'as in "ball"' },
    { letter: 'ch', pronunciation: 'as in "church"' },
    { letter: 'd', pronunciation: 'as in "dog"' },
    { letter: 'e', pronunciation: 'as in "bed"' },
    { letter: 'ee', pronunciation: 'as in "bed" (long)' },
    { letter: 'f', pronunciation: 'as in "fan"' },
    { letter: 'h', pronunciation: 'as in "hat"' },
    { letter: 'i', pronunciation: 'as in "bit"' },
    { letter: 'ii', pronunciation: 'as in "bit" (long)' },
    { letter: 'k', pronunciation: 'as in "kite"' },
    { letter: 'l', pronunciation: 'as in "lip"' },
    { letter: 'lh', pronunciation: 'like Welsh "ll" (softer)' },
    { letter: 'm', pronunciation: 'as in "man"' },
    { letter: 'n', pronunciation: 'as in "no"' },
    { letter: 'o', pronunciation: 'as in "go"' },
    { letter: 'oo', pronunciation: 'as in "go" (long)' },
    { letter: 'p', pronunciation: 'as in "pen"' },
    { letter: 's', pronunciation: 'as in "sun"' },
    { letter: 'sh', pronunciation: 'as in "she"' },
    { letter: 't', pronunciation: 'as in "top"' },
    { letter: 'u', pronunciation: 'as in "put"' },
    { letter: 'uu', pronunciation: 'as in "put" (long)' },
    { letter: 'w', pronunciation: 'as in "wet"' },
    { letter: 'y', pronunciation: 'as in "yes"' },
    { letter: "'", pronunciation: 'glottal stop (uh-oh)' }
];

const numbersData = {
    '1-10': [
        { number: '1', choctaw: 'achafa', pronunciation: 'uh-CHAH-fuh' },
        { number: '2', choctaw: 'tuklo', pronunciation: 'TOOK-loh' },
        { number: '3', choctaw: 'tuchina', pronunciation: 'too-CHEE-nuh' },
        { number: '4', choctaw: 'ushta', pronunciation: 'UHSH-tah' },
        { number: '5', choctaw: 'talhlapi', pronunciation: 'TAHL-lah-pee' },
        { number: '6', choctaw: 'hannali', pronunciation: 'HAH-nah-lee' },
        { number: '7', choctaw: 'untuchi', pronunciation: 'un-TOO-chee' },
        { number: '8', choctaw: 'ushtalali', pronunciation: 'UHSH-tah-LAH-lee' },
        { number: '9', choctaw: 'chakkali', pronunciation: 'CHAHK-kah-lee' },
        { number: '10', choctaw: 'pokoli', pronunciation: 'poh-KOH-lee' }
    ],
    '10-100': [
        { number: '10', choctaw: 'pokoli', pronunciation: 'poh-KOH-lee' },
        { number: '20', choctaw: 'tuklo pokoli', pronunciation: 'TOOK-loh poh-KOH-lee' },
        { number: '30', choctaw: 'tuchina pokoli', pronunciation: 'too-CHEE-nuh poh-KOH-lee' },
        { number: '40', choctaw: 'ushta pokoli', pronunciation: 'UHSH-tah poh-KOH-lee' },
        { number: '50', choctaw: 'talhlapi pokoli', pronunciation: 'TAHL-lah-pee poh-KOH-lee' },
        { number: '60', choctaw: 'hannali pokoli', pronunciation: 'HAH-nah-lee poh-KOH-lee' },
        { number: '70', choctaw: 'untuchi pokoli', pronunciation: 'un-TOO-chee poh-KOH-lee' },
        { number: '80', choctaw: 'ushtalali pokoli', pronunciation: 'UHSH-tah-LAH-lee poh-KOH-lee' },
        { number: '90', choctaw: 'chakkali pokoli', pronunciation: 'CHAHK-kah-lee poh-KOH-lee' },
        { number: '100', choctaw: 'asahke', pronunciation: 'uh-SAH-keh' }
    ],
    '100-200': [
        { number: '100', choctaw: 'asahke', pronunciation: 'uh-SAH-keh' },
        { number: '200', choctaw: 'tuklo asahke', pronunciation: 'TOOK-loh uh-SAH-keh' }
    ]
};

const wordsData = [
    { english: 'Hello', choctaw: 'Halito', pronunciation: 'HAH-lee-toh' },
    { english: 'How are you?', choctaw: 'Achukma?', pronunciation: 'Uh-CHUK-mah?' },
    { english: 'I am fine', choctaw: 'Chukma!', pronunciation: 'CHUK-mah!' },
    { english: 'Thank you', choctaw: 'Yakoke', pronunciation: 'YAH-koh-keh' },
    { english: 'Yes', choctaw: 'Um', pronunciation: 'um' },
    { english: 'No', choctaw: 'Hoke', pronunciation: 'HOH-keh' },
    { english: 'Man', choctaw: 'Hattak', pronunciation: 'HAH-tahk' },
    { english: 'Woman', choctaw: 'Ohoyo', pronunciation: 'oh-HOY-oh' },
    { english: 'Child', choctaw: "Ofi'", pronunciation: "OH-fee'" },
    { english: 'Water', choctaw: 'Oka', pronunciation: 'OH-kah' },
    { english: 'Fire', choctaw: 'Tafi', pronunciation: 'TAH-fee' },
    { english: 'Earth', choctaw: 'Nani', pronunciation: 'NAH-nee' },
    { english: 'Sky', choctaw: 'Himmita', pronunciation: 'HIM-mee-tah' },
    { english: 'Sun', choctaw: 'Hashi', pronunciation: 'HAH-shee' },
    { english: 'Moon', choctaw: 'Hushi', pronunciation: 'HOOSH-ee' },
    { english: 'Food', choctaw: 'Ampi', pronunciation: 'AHM-pee' },
    { english: 'House', choctaw: 'Chuka', pronunciation: 'CHOO-kah' },
    { english: 'Dog', choctaw: 'Ofi Chito', pronunciation: 'OH-fee CHEE-toh' },
    { english: 'Cat', choctaw: 'Pusi', pronunciation: 'POO-see' },
    { english: 'Tree', choctaw: 'Tallo', pronunciation: 'TAHL-loh' },
    { english: 'Good', choctaw: 'Chukma', pronunciation: 'CHUK-mah' },
    { english: 'Bad', choctaw: 'Hachukma', pronunciation: 'HAH-chuk-mah' },
    { english: 'Big', choctaw: 'Chito', pronunciation: 'CHEE-toh' },
    { english: 'Small', choctaw: 'Huchifo', pronunciation: 'HOO-chee-foh' },
    { english: 'To eat', choctaw: 'Anopa', pronunciation: 'uh-NOH-pah' },
    { english: 'To drink', choctaw: 'Immi', pronunciation: 'IM-mee' },
    { english: 'To see', choctaw: 'Anowa', pronunciation: 'uh-NOH-wah' },
    { english: 'I', choctaw: 'Aya', pronunciation: 'AH-yah' },
    { english: 'You (singular)', choctaw: 'Chi', pronunciation: 'chee' },
    { english: 'He/She/It', choctaw: 'Iya', pronunciation: 'EE-yah' }
];

function populateAlphabet() {
    const alphabetGrid = document.querySelector('#alphabet .flashcard-grid');
    alphabetData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('flashcard');
        card.innerHTML = `
            <div class="front">${item.letter}</div>
            <div class="back">${item.pronunciation}</div>
        `;
        card.addEventListener('click', flipCard);
        alphabetGrid.appendChild(card);
    });
}

function populateNumbers() {
    const numbersSection = document.getElementById('numbers');
    for (const range in numbersData) {
        const grid = numbersSection.querySelector(`h3:nth-of-type(${Object.keys(numbersData).indexOf(range) + 1}) + .flashcard-grid`);
        if (grid) {
            numbersData[range].forEach(item => {
                const card = document.createElement('div');
                card.classList.add('flashcard');
                 card.innerHTML = `
                    <div class="front">${item.number}</div>
                    <div class="back">${item.choctaw} (${item.pronunciation})</div>
                `;
                card.addEventListener('click', flipCard);
                grid.appendChild(card);
            });
        }
    }
}

function populateWords() {
    const wordsGrid = document.querySelector('#words .flashcard-grid');
    wordsData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('flashcard');
        card.innerHTML = `
            <div class="front">${item.english}</div>
            <div class="back">${item.choctaw} (${item.pronunciation})</div>
        `;
        card.addEventListener('click', flipCard);
        wordsGrid.appendChild(card);
    });
}

function flipCard() {
    this.classList.toggle('flipped');
}

if (document.body.id === 'flashcards-page') {
    populateAlphabet();
    populateNumbers();
    populateWords();
}