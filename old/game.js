// Hover menu - Display flex 
function displayHover1_1() {
    var display = document.getElementById('select-attack-hover');
    display.style.display = "flex";
}
function displayHover1_2() {
    var display = document.getElementById('select-bag-hover');
    display.style.display = "flex";
}
function displayHover1_3() {
    var display = document.getElementById('select-character-hover');
    display.style.display = "flex";
}
function displayHover1_4() {
    var display = document.getElementById('select-run-hover');
    display.style.display = "flex";
}
// Hover menu - Display none 
function noDisplayHover1_1() {
    var display = document.getElementById('select-attack-hover');
    display.style.display = "none";
}
function noDisplayHover1_2() {
    var display = document.getElementById('select-bag-hover');
    display.style.display = "none";
}
function noDisplayHover1_3() {
    var display = document.getElementById('select-character-hover');
    display.style.display = "none";
}
function noDisplayHover1_4() {
    var display = document.getElementById('select-run-hover');
    display.style.display = "none";
}
// Display/exit attack Selection 
function displayAttackSelection() {
    var enterDisplayAtk = document.getElementById('attack-options');
    enterDisplayAtk.style.display = "flex";
}
function exitAtkSection() {
    var exitDisplayAtk = document.getElementById('attack-options');
    exitDisplayAtk.style.display = "none";
}
// Hover attack menu - Display flex 
function displayAtkSelectionHover1() {
    var display = document.getElementById('select-atkOpp1-hover');
    display.style.display = "flex";
}
function displayAtkSelectionHover2() {
    var display = document.getElementById('select-atkOpp2-hover');
    display.style.display = "flex";
}
function displayAtkSelectionHover3() {
    var display = document.getElementById('select-atkOpp3-hover');
    display.style.display = "flex";
}
function displayAtkSelectionHover4() {
    var display = document.getElementById('select-atkOpp4-hover');
    display.style.display = "flex";
}
// Hover attack menu - Display none 
function nonDisplayAtkSelectionHover1() {
    var display = document.getElementById('select-atkOpp1-hover');
    display.style.display = "none";
}
function nonDisplayAtkSelectionHover2() {
    var display = document.getElementById('select-atkOpp2-hover');
    display.style.display = "none";
}
function nonDisplayAtkSelectionHover3() {
    var display = document.getElementById('select-atkOpp3-hover');
    display.style.display = "none";
}
function nonDisplayAtkSelectionHover4() {
    var display = document.getElementById('select-atkOpp4-hover');
    display.style.display = "none";
}
// Display/exit bag Selection 
function displayBagSelection() {
    var enterDisplayAtk = document.getElementById('bag-options');
    enterDisplayAtk.style.display = "flex";
}
function exitBagSection() {
    var exitDisplayBag = document.getElementById('bag-options');
    exitDisplayBag.style.display = "none";
}
// Hover bag menu - Display flex 
function displayBagSelectionHover1() {
    var das = document.getElementById('select-bagOpp1-hover');
    das.style.display = "flex"; 
}
function displayBagSelectionHover2() {
    var das = document.getElementById('select-bagOpp2-hover');
    das.style.display = "flex";
}
function displayBagSelectionHover3() {
    var das = document.getElementById('select-bagOpp3-hover');
    das.style.display = "flex";
}
function displayBagSelectionHover4() {
    var das = document.getElementById('select-bagOpp4-hover');
    das.style.display = "flex";
}
// Hover bag menu - Display none 
function nonDisplayBagSelectionHover1() {
    var das = document.getElementById('select-bagOpp1-hover');
    das.style.display = "none";
}
function nonDisplayBagSelectionHover2() {
    var das = document.getElementById('select-bagOpp2-hover');
    das.style.display = "none";
}
function nonDisplayBagSelectionHover3() {
    var das = document.getElementById('select-bagOpp3-hover');
    das.style.display = "none";
}
function nonDisplayBagSelectionHover4() {
    var das = document.getElementById('select-bagOpp4-hover');
    das.style.display = "none";
}
// Display/exit character Selection 
function displayCharacterSelection() {
    var enterDisplayAtk = document.getElementById('character-options');
    enterDisplayAtk.style.display = "flex";
}
function exitCharacterSection() {
    var exitDisplayCharacter = document.getElementById('character-options');
    exitDisplayCharacter.style.display = "none";
}
// Hover character menu - Display flex 
function displayCharacterSelectionHover1() {
    var das = document.getElementById('select-characterOpp1-hover');
    das.style.display = "flex";
}
function displayCharacterSelectionHover2() {
    var das = document.getElementById('select-characterOpp2-hover');
    das.style.display = "flex";
}
function displayCharacterSelectionHover3() {
    var das = document.getElementById('select-characterOpp3-hover');
    das.style.display = "flex";
}
function displayCharacterSelectionHover4() {
    var das = document.getElementById('select-characterOpp4-hover');
    das.style.display = "flex";
}
// Hover character menu - Display none 
function nonDisplayCharacterSelectionHover1() {
    var das = document.getElementById('select-characterOpp1-hover');
    das.style.display = "none";
}
function nonDisplayCharacterSelectionHover2() {
    var das = document.getElementById('select-characterOpp2-hover');
    das.style.display = "none";
}
function nonDisplayCharacterSelectionHover3() {
    var das = document.getElementById('select-characterOpp3-hover');
    das.style.display = "none";
}
function nonDisplayCharacterSelectionHover4() {
    var das = document.getElementById('select-characterOpp4-hover');
    das.style.display = "none";
}
// Start my game
function startMyGame() {
    var exitDisplay1 = document.getElementById('startGame');
    exitDisplay1.style.display = "none";
    var exitDisplay2 = document.getElementById('startGameClick');
    exitDisplay2.style.display = "none";
    var appear0 = document.getElementById('opponent-character-selected');
    appear0.style.display = "flex";
    var opponentProgBar1 = document.getElementById('opponent-progressbar-outer-one');
    opponentProgBar1.style.display = "flex";
    var opponentProgBar2 = document.getElementById('opponent-progressbar-outer-two');
    opponentProgBar2.style.display = "flex";
    var opponentProgBar3 = document.getElementById('opponent-progressbar-outer-three');
    opponentProgBar3.style.display = "flex";
    document.getElementById("opponent-name").innerHTML += opponentCharacters[y].name;
    document.getElementById("opponent-level").innerHTML += "Lv"+opponentCharacters[y].level;
    var appear1 = document.getElementById('continue-button1');
    appear1.style.display = "flex";
    var i = 0;
    var txt = "Wild "+opponentCharacters[y].name+" appeared!";
    var barColor0 = document.getElementById('opponent-healthbar-inner');
    barColor0.style.backgroundColor = "forestgreen";
    typeWriter();
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter, 25);
            ie;
        }
    } 
}
// Dialogue One 
function event1() {
    var appear = document.getElementById('player-character-selected');
    appear.style.display = "flex";
    var playerProgBar1 = document.getElementById('player-progressbar-outer-one');
    playerProgBar1.style.display = "flex";
    var playerProgBar2 = document.getElementById('player-progressbar-outer-two');
    playerProgBar2.style.display = "flex";
    var playerProgBar3 = document.getElementById('player-progressbar-outer-three');
    playerProgBar3.style.display = "flex";
    document.getElementById("player-name").innerHTML += playerCharacters[x].name;
    document.getElementById("player-level").innerHTML += "Lv" + playerCharacters[x].level;
    document.getElementById("player-health-count").innerHTML += playerCharacters[x].currentHealth+"/"+playerCharacters[x].totalHealth;
    document.getElementById("dialogue").innerHTML = null;
    i = 0;
    txt = "Go! "+playerCharacters[x].name+"!";
    var barColor0 = document.getElementById('player-healthbar-inner');
    barColor0.style.backgroundColor = "forestgreen";
    typeWriter();
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter, 25);
            ie;
        }
    } 
    var disappear = document.getElementById('continue-button1');
    disappear.style.display = "none";
    var appear = document.getElementById('continue-button2');
    appear.style.display = "flex";
}
// Dialogue Two 
function playerCharacterChoice() {    
    var appear1 = document.getElementById('select-attack');
    appear1.style.display = "inline-block";
    var appear2 = document.getElementById('select-bag');
    appear2.style.display = "inline-block";
    var appear3 = document.getElementById('select-character');
    appear3.style.display = "inline-block";
    var appear4 = document.getElementById('select-run');
    appear4.style.display = "inline-block";
    document.getElementById("dialogue").innerHTML = null;
    i = 0;
    txt = "What will\n"+playerCharacters[x].name+" do?";
    typeWriter();
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter, 25);
            ie;
        }
    }
    var disappear = document.getElementById('continue-button2');
    disappear.style.display = "none";
}
var x = 0;
var y = 0;
var playerCharacters = [
{
    name: "Charmander",
    level: 15,
    chance: 10,
    totalHealth: 20,
    currentHealth: 20,
    previousHealth: null,
    barWidth: null,
    attackMoveOne: "Scratch",
    scratchDamage: 8
}]
var opponentCharacters = [
{
    name: "Pidgey",
    level: 10,
    chance: 10,
    totalHealth: 30,
    currentHealth: 30,
    previousHealth: null,
    barWidth: null,
    attackMoveOne: "Tackle",
    tackleDamage: 5
}]
function semiNoDisplay() {
    var disappear1 = document.getElementById('select-attack');
    disappear1.style.display = "none";
    var disappear2 = document.getElementById('select-bag');
    disappear2.style.display = "none";
    var disappear3 = document.getElementById('select-character');
    disappear3.style.display = "none";
    var disappear4 = document.getElementById('select-run');
    disappear4.style.display = "none";
    var disappear5 = document.getElementById('atkOpt1');
    disappear5.style.display = "none";
    var disappear6 = document.getElementById('atkOpt2');
    disappear6.style.display = "none";
    var disappear7 = document.getElementById('atkOpt3');
    disappear7.style.display = "none";
    var disappear8 = document.getElementById('atkOpt4');
    disappear8.style.display = "none";
    var disappear9 = document.getElementById('atkOptExit');
    disappear9.style.display = "none";
}
function semiDisplay() {
    var disappear1 = document.getElementById('select-attack');
    disappear1.style.display = "flex";
    var disappear2 = document.getElementById('select-bag');
    disappear2.style.display = "flex";
    var disappear3 = document.getElementById('select-character');
    disappear3.style.display = "flex";
    var disappear4 = document.getElementById('select-run');
    disappear4.style.display = "flex";
    var disappear5 = document.getElementById('atkOpt1');
    disappear5.style.display = "flex";
    var disappear6 = document.getElementById('atkOpt2');
    disappear6.style.display = "flex";
    var disappear7 = document.getElementById('atkOpt3');
    disappear7.style.display = "flex";
    var disappear8 = document.getElementById('atkOpt4');
    disappear8.style.display = "flex";
    var disappear9 = document.getElementById('atkOptExit');
    disappear9.style.display = "flex";
    
    var exitDisplayAtk = document.getElementById('attack-options');
    exitDisplayAtk.style.display = "none";
}
function generateTowardsOpponentRandomRange(){
    opponentCharacters[y].previousHealth = opponentCharacters[y].currentHealth;
    var damage = (Math.floor(Math.random() * 3)+playerCharacters[x].scratchDamage)
    opponentCharacters[y].currentHealth = opponentCharacters[y].currentHealth - damage;
}
function generateTowardsOpponentHealthBar(){
    var e = 0;
    var green = opponentCharacters[y].totalHealth * 0.7;
    var yellow = opponentCharacters[y].totalHealth * 0.35;
    var red = opponentCharacters[y].totalHealth * 0.01;
    if (e == 0) {
        e = 1;
        var myBar = document.getElementById('opponent-healthbar-inner');
        if (opponentCharacters[y].currentHealth == opponentCharacters[y].totalHealth){
            opponentCharacters[y].barWidth = opponentCharacters[y].totalHealth;
            console.log("test 0.1")
        }
        else if (opponentCharacters[y].currentHealth < opponentCharacters[y].totalHealth){
            opponentCharacters[y].barWidth = opponentCharacters[y].previousHealth;
            console.log("test 0.2")
        }
        var damageTaken = opponentCharacters[y].previousHealth - opponentCharacters[y].currentHealth;
        var myID = setInterval(myFrame, 80);
        function myFrame() {
            if (opponentCharacters[y].barWidth > opponentCharacters[y].currentHealth) {
                if (opponentCharacters[y].barWidth >= green) {
                    myBar.style.backgroundColor = "forestgreen";
                }
                else if (opponentCharacters[y].barWidth >= yellow) {
                    myBar.style.backgroundColor = "yellow";
                }
                else if (opponentCharacters[y].barWidth >= red) {
                    myBar.style.backgroundColor = "red";
                }
                if (damageTaken == 0){
                    myBar.style.width = (opponentCharacters[y].barWidth * 1) + "%";
                }
                else if (damageTaken > 0){
                    myBar.style.width = ((opponentCharacters[y].barWidth * (100/opponentCharacters[y].totalHealth)) - (100/(opponentCharacters[y].totalHealth - opponentCharacters[y].currentHealth))) + "%";
                }
                opponentCharacters[y].barWidth--;
                if (opponentCharacters[y].barWidth <= 0){
                    var elemPlayer = document.getElementById('opponent-healthbar-inner');
                    elemPlayer.style.backgroundColor = "transparent";
                    var disappear = document.getElementById('opponent-character-selected');
                    disappear.style.display = "none";
                    clearInterval(myID);
                    semiNoDisplay();
                    var appear = document.getElementById('continue-button6');
                    appear.style.display = "flex";
                }
            }
            else if (opponentCharacters[y].barWidth <= opponentCharacters[y].currentHealth) {
                if (opponentCharacters[y].name == "Pidgey") {
                    var appear001 = document.getElementById('continue-button3');
                    appear001.style.display = "flex";
                    clearInterval(myID);
                    console.log("TEST");
                }
            }
        }
    }
}
function attackMoveScratch() {
    semiNoDisplay();
    document.getElementById("dialogue").innerHTML = null;
    i = 0;
    txt = playerCharacters[x].name+" used "+playerCharacters[x].attackMoveOne+"!";
    typeWriter();
    function typeWriter(){
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter, 25);
            ie;
        }
    }
    generateTowardsOpponentRandomRange();
    generateTowardsOpponentHealthBar();    
}
function generateTowardsPlayerRandomRange(){
    playerCharacters[x].previousHealth = playerCharacters[x].currentHealth;
    var damage = (Math.floor(Math.random() * 4)+opponentCharacters[y].tackleDamage)
    playerCharacters[x].currentHealth = playerCharacters[x].currentHealth - damage;
}
function generateTowardsPlayerHealthBar(){
    var e = 0;
    var green = playerCharacters[x].totalHealth * 0.7;
    var yellow = playerCharacters[x].totalHealth * 0.35;
    var red = playerCharacters[x].totalHealth * 0.01;
    if (e == 0) {
        e = 1;
        var myBar = document.getElementById('player-healthbar-inner');
        if (playerCharacters[x].currentHealth == playerCharacters[x].totalHealth){
            playerCharacters[x].barWidth = playerCharacters[x].totalHealth;
            console.log("test 0.1")
        }
        else if (playerCharacters[x].currentHealth < playerCharacters[x].totalHealth){
            playerCharacters[x].barWidth = playerCharacters[x].previousHealth;
            console.log("test 0.2")
        }
        var damageTaken = playerCharacters[x].previousHealth - playerCharacters[x].currentHealth;
        var myID = setInterval(myFrame, 80);
        function myFrame() {
            if (playerCharacters[x].barWidth > playerCharacters[x].currentHealth) {
                if (playerCharacters[x].barWidth >= green) {
                    myBar.style.backgroundColor = "forestgreen";
                }
                else if (playerCharacters[x].barWidth >= yellow) {
                    myBar.style.backgroundColor = "yellow";
                }
                else if (playerCharacters[x].barWidth >= red) {
                    myBar.style.backgroundColor = "red";
                }
                if (damageTaken == 0){
                    myBar.style.width = (playerCharacters[x].barWidth * 1) + "%";
                }
                else if (damageTaken > 0){
                    myBar.style.width = ((playerCharacters[x].barWidth * (100/playerCharacters[x].totalHealth)) - (100/(playerCharacters[x].totalHealth - playerCharacters[x].currentHealth))) + "%";
                }
                playerCharacters[x].barWidth--;
                if (playerCharacters[x].barWidth <= 0){
                    var elemPlayer = document.getElementById('player-healthbar-inner');
                    elemPlayer.style.backgroundColor = "transparent";
                    var disappear = document.getElementById('player-character-selected');
                    disappear.style.display = "none";
                    clearInterval(myID);
                    semiNoDisplay();
                    var appear4 = document.getElementById('continue-button4');
                    appear4.style.display = "flex";
                }
                document.getElementById("player-health-count").innerHTML = null;
                document.getElementById("player-health-count").innerHTML = playerCharacters[x].currentHealth + "/" + playerCharacters[x].totalHealth;
                if (playerCharacters[x].currentHealth < 0){
                    document.getElementById("player-health-count").innerHTML = "0/" + playerCharacters[x].totalHealth;
                }
                if (playerCharacters[x].barWidth <= playerCharacters[x].currentHealth) {
                    clearInterval(myID);
                    iPlayer = 0;
                    semiDisplay();
                    if (playerCharacters[x].barWidth <= 0){
                        semiNoDisplay();
                    }
                }
            }
        }
    }
}
function pidgeyAttackRandomization() {
    var disappear001 = document.getElementById('continue-button3');
    disappear001.style.display = "none";
    console.log(disappear001);
    var randomAttack = (Math.floor(Math.random() * 7)+1);
    if (randomAttack == 1 || randomAttack == 2){
        useAttackMoveOne();
    }
    else if (randomAttack == 3 || randomAttack == 4){
        useAttackMoveOne();
    }
    else if (randomAttack == 5 || randomAttack == 6){
        useAttackMoveOne();
    }
    else if (randomAttack == 7 || randomAttack == 8){
        useAttackMoveOne();
    }
}
function useAttackMoveOne() {
    document.getElementById("dialogue").innerHTML = null;
    i = 0;
    txt = opponentCharacters[y].name+" used "+opponentCharacters[y].attackMoveOne+"!";
    typeWriter();
    function typeWriter(){
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter, 25);
            ie;
        }
    }
    generateTowardsPlayerRandomRange();
    generateTowardsPlayerHealthBar();
}
function playerFainted(){
    var disappear = document.getElementById('continue-button4');
    disappear.style.display = "none";
    document.getElementById("dialogue").innerHTML = null;
    i = 0;
    txt = playerCharacters[x].name + "\nfainted!";
    typeWriter();
    function typeWriter(){
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter, 25);
            ie;
        }
    }
    var appear = document.getElementById('continue-button5');
    appear.style.display = "flex";
}
function lose(){
    var disappear = document.getElementById('continue-button5');
    disappear.style.display = "none";
    document.getElementById("dialogue").innerHTML = null;
    i = 0;
    txt = 'You Lose';
    typeWriter();
    function typeWriter(){
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter, 25);
            ie;
        }
    }
}
function opponentFainted(){
    var disappear = document.getElementById('continue-button6');
    disappear.style.display = "none";
    document.getElementById("dialogue").innerHTML = null;
    i = 0;
    txt = opponentCharacters[y].name + "\nfainted!";
    typeWriter();
    function typeWriter(){
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter, 25);
            ie;
        }
    }
    var appear = document.getElementById('continue-button8');
    appear.style.display = "flex";
}
function won(){
    var disappear = document.getElementById('continue-button7');
    disappear.style.display = "none";
    document.getElementById("dialogue").innerHTML = null;
    i = 0;
    txt = 'Congraulations,\nYou\'ve Won!';
    typeWriter();
    function typeWriter(){
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter, 25);
            ie;
        }
    }
}
function playerXPGenerator(){
    var disappear = document.getElementById('continue-button8');
    disappear.style.display = "none";
    document.getElementById("dialogue").innerHTML = null;
    i = 0;
    txt = playerCharacters[x].name + ' gained\n31 EXP. Points!';
    typeWriter();
    function typeWriter(){
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter, 25);
            ie;
        }
    }
    var appear = document.getElementById('continue-button9');
    appear.style.display = "flex";
}
function playerLevelGrowth(){
    var disappear = document.getElementById('continue-button9');
    disappear.style.display = "none";
    document.getElementById("dialogue").innerHTML = null;
    i = 0;
    txt = playerCharacters[x].name + ' grew to\nLv. 17!';
    typeWriter2();
    function typeWriter2(){
        if (i < txt.length) {
            document.getElementById("dialogue").innerHTML += txt.charAt(i);
            i++;
            var ie = setTimeout(typeWriter2, 25);
            ie;
        }
    }
    playerCharacters[x].level = 17;
    document.getElementById("player-level").innerHTML = null;
    document.getElementById("player-level").innerHTML += "Lv" + playerCharacters[x].level;
    playerCharacters[x].totalHealth = 24; // health increase due to level growth
    playerCharacters[x].scratchDamage = 12; // scratch damage increase due to level growth
    var appear = document.getElementById('continue-button7');
    appear.style.display = "flex"; 
}
