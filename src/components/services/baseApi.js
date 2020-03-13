class BaseApi {
    post = async (data, url) => {
        const response = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await response.json()
    }

    get = async (url) => {
        const response = await fetch(`${url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        // console.log('=====', await response);
        // console.log((await response.status === 401) ? false : true)
        // return (await response.status === 401) ? false : true;
        return await response.status
    }

    postLoginData = (data) => {
        return this.post(data, 'loginDetails')
    }

    getJourneyData = () => {
        return this.get('/journeyHistory1')
    }
}

export default BaseApi;