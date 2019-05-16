import { ketting } from '../data/HalService'

export const URL_UPDATE = 'URL_UPDATE'
export const PATH_UPDATE = 'PATH_UPDATE'
export const REQ_HAL = 'REQ_HAL'
export const REQ_HAL_SUCCESS = 'REQ_HAL_SUCCESS'
export const REQ_HAL_ERROR = 'REQ_HAL_ERROR'

export function urlUpdate(url) {
    return {
        type: URL_UPDATE,
        url
    }
}

export function pathUpdate(path) {
    return {
        type: PATH_UPDATE,
        path
    }
}

export function requestHal(url, path) {
    return {
        type: REQ_HAL,
        url,
        path
    }
}

export function requestHalSuccess(resource) {
    return {
        type: REQ_HAL_SUCCESS,
        resource
    }
}

export function requestHalError(err) {
    return {
        type: REQ_HAL_ERROR,
        err
    }
}

export function fetchHal(url, path) {
    return function (dispatch) {
        dispatch(requestHal(url, path));

        const fetchUrl = url + path
        return (
            ketting.fetch(fetchUrl)
                .then(
                    response => response.json(),
                    error => {
                        console.log("error fetching account");
                        dispatch(
                            requestHalError({
                                msg: 'Error fetching account',
                                url,
                                path
                            })
                        );
                    }
                )
                .then(json => dispatch(requestHalSuccess(json)))
        );
    };
}