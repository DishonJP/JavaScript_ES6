module.exports = (playerOne, PlayerTwo, userInput) => {
    let playerOneWinCount = 0;
    let playerTwoWinCount = 0;
    for (let i = 1; i <= userInput; i++) {
        let oneMoney = playerOne;
        let twoMoney = PlayerTwo;
        while (oneMoney !== 0 && twoMoney !== 0) {
            let playerOneStand = Math.floor(Math.random() * 2);
            // playerOneStand === 1 ? oneMoney-- : playerTwoWinCount++;
            if (playerOneStand === 1) {
                oneMoney--;
            } else {
                playerTwoWinCount++;
                break;
            }
            let playerTwoStand = Math.floor(Math.random() * 2);
            if (playerTwoStand === 1) {
                twoMoney--;
            } else {
                playerOneWinCount++;
                break;
            }
        }
        console.log(`player win count ${playerOneWinCount} : ${playerTwoWinCount}`);
        oneMoney === 0 ? playerTwoWinCount++ : twoMoney === 0 ? playerOneWinCount++ : null;
    }
    return playerOneWinCount > playerTwoWinCount ? "player one wins" : "player two wins"
}