import { v4 as uuidv4 } from 'uuid'

class CountryMap {
    constructor(country, id, lat, lng, capital, date, subTitle, free, email) {
        this.country = country;
        this.code = id;
        this.lat = lat;
        this.lng = lng;
        this.capital = capital
        this.date = date;
        this.subTitle = subTitle;
        this.free = free;
        this.email = email
        this.id = uuidv4();
    }
}

export default CountryMap