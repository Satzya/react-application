import BaseApi from './baseApi'
class ConfigApiDetails extends BaseApi {
    saveData = (formData) => {
        this.postSaveData(formData)
    }
    loginData = (loginData) => {
        return this.postLoginData(loginData)
    }
    journeyData = () => {
        return this.getJourneyData()
    }
}

export default ConfigApiDetails;