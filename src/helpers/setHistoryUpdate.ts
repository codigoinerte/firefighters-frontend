interface Props {
    [key: string]: string | null;
}
interface ClearParamsProps {
    [key: string]: string
}
export const setHistoryUpdate = (urlParams:Props) => {

    const clearParams:ClearParamsProps = {};
    for(const key in urlParams){
        if(urlParams[key])
            clearParams[key] = urlParams[key];
    }
    const finalUrl = new URLSearchParams(clearParams).toString();
    const title = document.querySelector("head title")?.innerHTML ?? '';
    
    const newUrl = finalUrl.length > 0 
        ?`${window.location.pathname}?${finalUrl}`
        :window.location.pathname;
    window.history.pushState(urlParams, title, newUrl);
}
