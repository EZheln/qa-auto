
import dataDev from "../env_configs/dev.json" assert { type: "json" };
import dataQA from "../env_configs/qa.json" assert { type: "json" };

export default class ConfigFromJsonProvider {
    constructor (target){
        this.target = target;
        this.config_data = (this.target === "dev") ? dataDev : dataQA
    }
    get(name) {
        return this.config_data[name]
    }
}