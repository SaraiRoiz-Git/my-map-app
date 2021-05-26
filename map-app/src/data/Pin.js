import { v4 as uuidv4 } from 'uuid'

class Pin {
    constructor(code, category, title, rate, address, freeText,lat,lng) {
        this.code = code;
        this.category = category;
        this.title = title;
        this.rate = rate;
        this.address = address;
        this.freeText = freeText;
        this.lat=lat;
        this.lng = lng;
        this.id = uuidv4();
    }
}

export default Pin;