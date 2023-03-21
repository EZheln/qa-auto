import ConfigFromJsonProvider from './providers/configFromJSON.js'

class Config {
    constructor() {
        if (typeof Config.instance === 'object'){
            return Config.instance
        }
        Config.instance = this;
        this.config_dict = {};
        this.target = process.env.TARGET; 
        this.providers = new ConfigFromJsonProvider(this.target)
        this.register("BASE_URL_API");
        this.register("BASE_URL_UI");
        return this;
    }
    register(name){
        const value = this.providers.get(name);
        if (value !== undefined){
            this.config_dict[name] = value
        }
        else{
            console.log(`${name} variable is not set in config`)
        }
        console.log(`${name} variable is registered in config with value ${value}`)
    }
    get(key) {
        const value = this.config_dict[key];
        if (value === undefined){
            console.log(`Variable ${key} is not set in config`)
        }
        return this.config_dict[key];
    }
}
const config = new Config();
export default config


//check for singletone
// const count1 = new Config();
// const count2 = new Config();
// console.log(count1 === count2);
// console.log(count2);
