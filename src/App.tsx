import { Header, Filters, Loader, MapaAdvance } from "./components"
import { useApp } from "./hooks";

export const App = () => {   

    const {
        filterState,
        incidents,
        coordsPath,  
          
        handleSubmit,
        handleClear,
        handleChangeCity,
        handleChangeState,

        displayLoading
    } = useApp();

    return (
        <>
            <Header />
            <Filters 
                onSubmit={handleSubmit} 
                onClear={handleClear}
                onChangeCity={handleChangeCity}
                conChangeState={handleChangeState}
                cities={filterState.cities}
                states={filterState.states}
                city={filterState.city}
                state={filterState.state}/>
                
            <Loader style={{display: displayLoading}} />
            
            <MapaAdvance 
                incidents={incidents} 
                coordsPath={coordsPath}
            />
        </>
    )
}
