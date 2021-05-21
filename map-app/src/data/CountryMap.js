class CountryMap {
    constructor(country,id, lat, lng, capital, date, subTitle, free) {
        this.country = country;
        this.code = id;
        this.lat = lat;
        this.lng = lng;
        this.capital = capital
        this.date = date;
        this.subTitle = subTitle;
        this.free = free;
    }
}

export default CountryMap