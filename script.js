//Copy button

let copyCount = 0; 

const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const textToCopy = card.querySelector('.number').innerText;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert(`Number ${textToCopy} Copied to The Clipboard!`);

                copyCount++;
                document.getElementById('copy-count').innerText = copyCount;
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });
});


//call button

let StarCounts = 100;
const callButtons = document.querySelectorAll('.call-btn');

callButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card'); 
        const numberToCall = card.querySelector('.number').innerText;
        const Services = card.querySelector('.service').innerText;

        if(StarCounts >= 20){
            StarCounts = StarCounts - 20;
            document.getElementById('star-count').innerText = StarCounts;
            alert(`Calling: ${numberToCall} at ${Services} ...`);
        }else{
            alert('Not enough coins! Sorry..')
        }
    });
});

//heart Counts

let heartcounts = 0;

const heartCount = document.querySelectorAll('.fa-heart'); 

heartCount.forEach(btn =>{
    btn.addEventListener('click',() => {
        heartcounts++;
        document.getElementById('heart-count').innerText = heartcounts;
    })
})

//History

