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

    postLoginData = (data) => {
        return this.post(data, 'loginDetails')
    }

}

export default BaseApi;