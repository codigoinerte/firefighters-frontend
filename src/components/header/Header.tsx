import { FilterVerticalIcon, Share08Icon } from '@hugeicons/core-free-icons';
import './Header.css';
import { Icons } from '../Icons';
import { ButtonTheme } from '../ButtonTheme';
import { menuStore } from '../../store/menu.store';
import { RWebShare } from 'react-web-share';

export const Header = () => {

    const isActive = menuStore(state => state.isActive );
    const setActive = menuStore(state => state.setActive);

    const onClickMenu = () => {
        setActive(!isActive);
    }

    const currentDay = new Date();
    const day = currentDay.getDate();
    const month = currentDay.getMonth();
    const year = currentDay.getFullYear();
    const fullDay = `${day}/${month+1}/${year}`;
    return (
        <>
            <div className="header">
                <div className="location-selected">
                    <img src='/images/brand.png' width={30} height={30} alt='firefighters' title='firefighters' />
                </div>
                <ul className="list-option">
                    <li>
                        <ButtonTheme />
                    </li>
                    <li>
                        <RWebShare
                            data={{
                                text: `Incidentes de las ultimas 24 horas del dia - ${fullDay}`,
                                url: window.location.href,
                                title: `Comparte los incidentes del dia ${fullDay}`,
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <button className='sharing'>
                                <Icons icon={Share08Icon} color='#fff' />
                                <span>Sharing</span>
                            </button>
                        </RWebShare>
                    </li>
                    <li>
                        <button className='header-filters'
                            onClick={onClickMenu}>
                            <Icons icon={FilterVerticalIcon} />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}
