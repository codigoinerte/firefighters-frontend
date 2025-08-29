import { CSSProperties } from 'react';
import './Loader.css';

interface LoaderProps {
    style: CSSProperties | undefined
}

export const Loader = ({style}:LoaderProps) => {
    return (
        <div className="loader" style={style}>
            <img src={`/images/fire.gif`} alt="loading" title="loading" />
            <b>Cargando</b>
        </div>
    )
}
