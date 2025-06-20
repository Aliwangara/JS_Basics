
let stageEl = document.getElementById('stage');
let fight = document.getElementById('fightButton')

let emojis = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", 
    "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆",
     "🦕", "🦁"]



fight.addEventListener('click', function(){

    let randomFight1 =Math.floor(Math.random()* emojis.length )
    let randomFight2 = Math.floor(Math.random()* emojis.length )

    stageEl.textContent = `${emojis[randomFight1]} vs ${emojis[randomFight2]}`
})
