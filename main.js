setInterval(function(){
    function getGolden() {
        for (var i in Game.shimmers) {
            if (Game.shimmers[i].type == 'golden') {
                return Game.shimmers[i];
            }
        }
    }
    function getReindeer() {
        for (var i in Game.shimmers) {
            if (Game.shimmers[i].type == 'reindeer') {
                return Game.shimmers[i];
            }
        }
    }
    if(Game.shimmerTypes.golden.spawned  && Game.shimmerTypes.golden.chain<1) {
        var golden = getGolden();
        if(Game.shimmerTypes.reindeer.spawned || golden.life < Game.fps || Game.shimmerTypes.golden.last=='chain cookie') {
            golden.pop();
        } else if(golden.wrath == 0 && Game.hasBuff('Frenzy') && Game.buffs.Frenzy.time < Game.fps*27) {
            golden.pop();
        }
    }
    if(Game.shimmerTypes.reindeer.spawned){
        var reindeer = getReindeer();
        if(Game.hasBuff('Elder frenzy')){
            if(reindeer.life < (Game.fps/2) || (Game.hasBuff('Frenzy') && Game.buffs.Frenzy < Game.fps*3)){
                reindeer.pop();
            }
        }
        else if(reindeer.life < Game.fps){
            reindeer.pop();
        }
    }
}, 500);
