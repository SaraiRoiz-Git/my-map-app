import countries from './data/countries.json'

export const checkUserValidity = (user) => {
    if (!user) {
        window.location.href = '#/'
    }
}

export const getLatlngById =(id) =>{
    return countries.find(country => country.country_code === id).latlng;
}
