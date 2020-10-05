
const registerBase = function(){
    this.live = function(){
        return true;
    }
    this.version = function(name){
         if(typeof objectDb[name] === 'undefined')
             return false;
         return objectDb[name].version;
    }
    this.get = function(name){
         if(typeof objectDb[name] === 'undefined')
             return false;
         return objectDb[name].object;
    }
    this.check = function(name){
         if(typeof objectDb[name] !== 'undefined')
             return true;
         return false;
    }
    this.add = function(name, version, object){
         if(typeof objectDb[name] !== 'undefined')
             return false;
         objectDb = {
             version,
             object
         }
         return true;
    }
    let objectDb = {};
}

global.ORIE = new registerBase();


