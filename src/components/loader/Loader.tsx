import { CSSProperties } from 'react';
import './Loader.css';

interface LoaderProps {
    style: CSSProperties | undefined
}
const IS_CREE_TIER = import.meta.env.VITE_FREE_TIER;
export const Loader = ({style}:LoaderProps) => {
    return (
        <div className="loader" style={style}>
            <img src={`/images/fire.gif`} alt="loading" title="loading" />
            <b>Cargando</b>
            {
                IS_CREE_TIER === 'true' &&
                (
                    <div className='message'>
                        <p>⚠️ El servidor gratuito puede tardar en iniciar.</p>
                    </div>
                )
            }
        </div>
    )
}
