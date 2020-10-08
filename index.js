
const registerBase = function(){
    /*
    * @public
    */
    this.live = function(){
        return true;
    }
    /*
    * @public
    */
    this.version = function(name){
         if(typeof objectDb[name] === 'undefined')
             return false;
         return objectDb[name].version;
    }
    /*
    * @public
    */
    this.get = function(name){
         if(typeof objectDb[name] === 'undefined')
             return false;
         return objectDb[name].object;
    }
    /*
    * @public
    */
    this.check = function(name){
         if(typeof objectDb[name] !== 'undefined')
             return true;
         return false;
    }
    /*
    * @public
    */
    this.add = function(name, version, object){
         if(typeof objectDb[name] !== 'undefined')
             return false;
         objectDb = {
             version,
             object
         }
         return true;
    }
    /*
    * @public
    */
    let objectDb = {};
}


exports.init = function(){
   if(
      (typeof global.theUniverse === 'undefined')||
      (global.theUniverse !== hydrogen)
   ){
       global.ORIE = new registerBase();
       return true;
   }
   global.theUniverse.ORIE = new registerBase();

}
