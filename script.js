var points = 0;
var stoneUnlocked = false;
var coalUnlocked = false;
var ironUnlocked = false;
var goldUnlocked = false;
var diamondUnlocked = false;
/*var gsMiner = 0;
var sMiner = 0;
var cMiner = 0;
var iMiner = 0;
var goMiner = 0;
var dMiner = 0;
var gsMinerC = 50;
var sMinerC = 100;
var cMinerC = 200;
var iMinerC = 300;
var goMinerC = 500;
var dMinerC = 1000;*/


//function runMiners() {
//	points += (gsMiner + sMiner*3 + cMiner*5 + iMiner*10 + goMiner*15 + dMiner*20);
//	setTimeout("runMiners()",500);
//}

function updateScore() {
  document.getElementById('point-counter').innerHTML = "POINTS: " + points;
}

function grassClick() {
  points += 1;
  updateScore();
}

function stoneClick() {
  if (stoneUnlocked == true)
    points +=3;
  updateScore();
}

function coalClick() {
  if (coalUnlocked == true)
    points +=5;
  updateScore();
}

function ironClick() {
  if (ironUnlocked == true)
    points +=10;
  updateScore();
}

function goldClick() {
  if (goldUnlocked == true)
    points +=15;
  updateScore();
}

function diamondClick() {
  if (diamondUnlocked == true)
    points +=20;
  updateScore();
}

function ulckStone() {
  if((points - 200)>=0){
    document.getElementById('stn').style.visibility = "hidden";
    stoneUnlocked = true;
	points = points - 200;
	updateScore();
   document.getElementsByClassName("disabled")[0].classList.remove('disabled');
  }else
	  alert("You need "+ (200-points) +" more points!");
}

function ulckCoal() {
  if(points - 500>=0){
    document.getElementById('coal').style.visibility = "hidden";
    coalUnlocked = true;
	points = points - 500;
	updateScore()
    document.getElementsByClassName("disabled")[0].classList.remove('disabled');
  }else
	  alert("You need "+ (500-points) +" more points!");
}

function ulckIron() {
  if(points - 1000>=0){
    document.getElementById('irn').style.visibility = "hidden";
    ironUnlocked = true;
	points = points - 1000;
	updateScore()
    document.getElementsByClassName("disabled")[0].classList.remove('disabled');
  }else
	  alert("You need "+ (1000-points) +" more points!");
}

function ulckGold() {
  if(points - 2000>=0){
    document.getElementById('gld').style.visibility = "hidden";
    goldUnlocked = true;
	points = points - 2000;
	updateScore()
    document.getElementsByClassName("disabled")[0].classList.remove('disabled');
  }else
	  alert("You need "+ (2000-points) +" more points!");
}

function ulckDiamond() {
  if(points - 5000>=0){
    document.getElementById('dimnd').style.visibility = "hidden";
    diamondUnlocked = true;
	points = points - 5000;
	updateScore()
    document.getElementsByClassName("disabled")[0].classList.remove('disabled');
  }else
	  alert("You need "+ (5000-points) +" more points!");
}

/*function bGrMiner() {
  if(points - gsMinerC>=0){
	points = points - gsMinerC;
	updateScore()
	gsMiner += 1;
	gsMinerC += 10;
	document.getElementById("grMiner").innerHTML = "Miners: " + gsMiner;
	document.getElementById("grMinerC").innerHTML = "Miner Cost: " + gsMinerC;
  }else
	  alert("You need "+ (gsMinerC-points) +" more points!");
}

function bSMiner() {
  if(points - sMinerC>=0){
	points = points - sMinerC;
	updateScore()
	sMiner += 1;
	sMinerC += 30;
	document.getElementById("sMiner").innerHTML = "Miners: " + sMiner;
	document.getElementById("sMinerC").innerHTML = "Miner Cost: " + sMinerC;
  }else
	  alert("You need "+ (sMinerC-points) +" more points!");
}*/