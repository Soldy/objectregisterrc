
const registerBase = function(){
    /*
    * @public
    */
    this.live = function(){
        return true;
    }
    /*
    *  @param {string} name
    *  @public
    *  @var {mixed} false or version
    */
    this.version = function(name){
         if(typeof objectDb[name] === 'undefined')
             return false;
         return objectDb[name].version;
    }
    /*
    *  @param {string} name
    *  @public
    */
    this.get = function(name){
         if(typeof objectDb[name] === 'undefined')
             return false;
         return objectDb[name].object;
    }
    /*
    *  @param  {string} name
    *  @public
    *  @var {boolean} result
    */
    this.check = function(name){
         if(typeof objectDb[name] !== 'undefined')
             return true;
         return false;
    }
    /*
    *  @param  {string} name
    *  @param  {string} version
    *  @param  {object} object
    *  @public
    *  @var {boolean} result
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
