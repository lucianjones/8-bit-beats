import Cookies from 'js-cookie';

export async function csrfFetch(url, options = {}) {
    // set options.method to get when no method
    options.method = options.method || 'GET';
    // set headers to empty object if there are no headers
    options.headers = options.headers || {};

    // if method is not get, set content-type header to app/json, set 
    // xsrf-token header to val of xsrf cookie
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] = 
            options.headers['Content-Type'] || 'aplication/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    };

    // call default window's fetch with the url and options passed in
    const res = await window.fetch(url, options);

    // if res status code >= 400 throw err
    if (res.status >= 400) throw res;

    return res;
};

// only for dev use
export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
}

