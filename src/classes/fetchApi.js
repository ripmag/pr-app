class FetchApi {
    get(url, options = {}) {
        const { headers, params, timeout } = options;
        const controller = new AbortController();
        const signal = controller.signal;
        const urlSearchParams = url + '?' + new URLSearchParams(params).toString();

        if (timeout) {
            setTimeout(() => controller.abort(), timeout);
        }

        return fetch(urlSearchParams, {
            method: 'GET',
            signal: signal,
            headers: headers,
        }).then(response => {
            if (response.ok) return response.json();

            throw new Error('Network error when attempting to fetch (GET) resource', {cause: response})
        }).then(data => {return {'data': data}});
    }

    post(url, body, options = {}) {
        const { headers, timeout } = options;
        const controller = new AbortController();
        const signal = controller.signal;
        const defultHeaders = {
            'Content-Type': 'application/json',
        }

        if (timeout) {
            setTimeout(() => controller.abort(), timeout);
        }

        return fetch(url, {
            method: 'POST',
            signal: signal,
            headers: { ...defultHeaders, ...headers},
            body: JSON.stringify(body),
        }).then(response => {
            if (response.ok) return response.json();

            throw new Error('Network error when attempting to fetch (POST) resource', {cause: response})
        }).then(data => {return {'data': data}})
        .catch(data => {return {'data':'error'}}); //errors move up level
    }
}

export default FetchApi;