
export const getParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsUrl = {
        state: urlParams.get('state')?? null,
        city: urlParams.get('city')?? null,
    }
    return {
        paramsUrl
    }
}
