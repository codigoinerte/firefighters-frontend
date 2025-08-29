import { FilterVerticalIcon, Share08Icon } from '@hugeicons/core-free-icons';
import './Header.css';
import { Icons } from '../Icons';
import { ButtonTheme } from '../ButtonTheme';
import { menuStore } from '../../store/menu.store';

export const Header = () => {

    const isActive = menuStore(state => state.isActive );
    const setActive = menuStore(state => state.setActive);

    const onClickMenu = () => {
        setActive(!isActive);
    }
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
                        <a href='#'>
                            <Icons icon={Share08Icon} color='#fff' />
                            <span>Sharing</span>
                        </a>
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
