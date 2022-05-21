class Player {
    constructor(){
        this.name = null;
        this.position = null;
        this.team = null
        this.damageDealt = null;

    }

    getTeam1Count(){
        var team1CountRef = database.ref('team1Count');
        team1CountRef.on("value",(data)=>{
            team1Count = data.val();
        });
    }

    getTeam2Count(){
        var team2CountRef = database.ref('team2Count');
        team2CountRef.on("value",(data)=>{
            team2Count = data.val();
        });
    }

    updateTeam1Count(count){
        database.ref('/').update({
            team1Count : count
        });
    }

    updateTeam2Count(count){
        database.ref('/').update({
            team2Count : count
        });
    }

    
}