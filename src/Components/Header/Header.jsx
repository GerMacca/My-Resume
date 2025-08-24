//CSS
import './Header.css'
import '../../Styles/animations.css';
import { useState } from 'react';

//Components
import SocialOrbit from './SocialOrbit/SocialOrbit.jsx';
import ProfileInfos from './ProfileInfos/ProfileInfos.jsx';
import MoreDetails from './MoreDetails/MoreDetails.jsx';

export default function Header() {

    return (
        <>
            <header>
                <section className='identification-infos'>
                    <div className='name-func'>
                        <h1>Germano Maccagnan dos Santos</h1>
                        <h2>Desenvolvedor Júnior</h2>
                    </div>
                    <ProfileInfos />
                </section>
                <section className='midia-orbit'>
                    <SocialOrbit />
                </section>
            </header>

            <MoreDetails />
        </>
    );
}