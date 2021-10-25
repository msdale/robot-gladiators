var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  // Alert players that the fight is on!
  start_position: while (true) {

    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log("Player chose to " + promptFight);

    switch (promptFight.toUpperCase()) {
      case "FIGHT":
        break;
      case "SKIP":
        var confirmSkip = window.confirm("You chicken!...Sure you want to quit??");
        if (confirmSkip) {
          window.alert(playerName + " has elected to bow out.  Goodbye!")
          playerMoney = playerMoney - 2;
          return;
        } else {
          fight();
          return; // BE SURE TO END FIGHT after skipping the "SKIP"
        }
      default:
        window.alert("You need to choose a valid option. Try again!");
        continue start_position;
    };
    break;
  };

  while (enemyHealth >= 0 && playerHealth >= 0) {

    // Reduce enemy health by the severity of the attack
    enemyHealth = enemyHealth - playerAttack;

    // Enemy health status
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Reduce player health by the severity of the attack
    playerHealth = playerHealth - enemyAttack;

    // Player health status
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      console.log("FIGHT OVER");
      break;
    }
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      console.log("FIGHT OVER");
      break;
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  };
};

fight();