import ConfigFromJsonProvider from './providers/configFromJSON.js'

class Config {
    constructor() {
        if (typeof Config.instance === 'object'){
            return Config.instance
        }
        Config.instance = this;
        this.config_dict = {};
        this.target = process.env.TARGET; 
        this.provider = new ConfigFromJsonProvider(this.target)
        this.register("BASE_URL_API");
        this.register("BASE_URL_UI");
        return this;
    }
    register(name){
        const value = this.provider.get(name);
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
        if (!value){
            console.log(`Variable ${key} is not set in config`)
        }
        return this.config_dict[key];
    }
}
const config = new Config();
export default config