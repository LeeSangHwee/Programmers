function solution(players, callings) { 
    const playersMap = new Map();
    players.forEach((player, index) => {playersMap.set(player, index);});

    for (const call of callings) {
        const index = playersMap.get(call);        
        const prevPlayer = players[index - 1];
        
        [players[index - 1], players[index]] = [players[index], players[index - 1]];           
        playersMap.set(call, index - 1);
        playersMap.set(prevPlayer, index);
    }
    return players;
}