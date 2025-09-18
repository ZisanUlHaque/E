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

let HistoryData = [];

document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const service = card.querySelector(".service").innerText;
        const number = card.querySelector(".number").innerText;

        if(StarCounts >= 20){
            HistoryData.push({
            name: `${service} (${number})`,
            date: new Date().toLocaleString()
        });
        }


        renderHistory();
    });
});

// Render history
function renderHistory() {
    const HistoryContainer = document.getElementById("history-container");
    HistoryContainer.innerHTML = "";

    for (const data of HistoryData.slice().reverse()) {
        const div = document.createElement("div");
        div.className = "p-3 bg-white rounded-xl mt-3 flex items-center justify-between shadow";
        div.innerHTML = `
            <div>
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-sm text-gray-500">${data.date}</p>
            </div>
            <i class="fa-solid fa-phone text-green-600"></i>
        `;
        HistoryContainer.appendChild(div);
    }
}

// Clear history
document.getElementById("clear-history").addEventListener("click", () => {
    HistoryData = [];
    renderHistory();
});

