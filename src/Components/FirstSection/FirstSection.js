import React from 'react';
import s from './firstSection.module.css';
import mobile from '../../Utils/Images/mobile.png';
import video from '../../Utils/Images/iconVideo.png';

const FirstSection = () => {
    return (
        <div className={s.first_section_wrapper}>
            <div className={s.first_container_container}>
                <div className={s.first_section_text}>
                    <span className={s.text_content}>
                        <h1 className={s.text_content_slogan}>The easiest way to manage projects</h1>
                        <span className={s.text_content_text}><p>From the small stuff to the big picture,
                            organizes the work so teams know what to do, why it matters, and how to get it done.</p></span>
                    </span>
                    <div className={s.buttons_first_section}>
                        <button className={s.button_get_started}>Get Started</button>
                        <div className={s.button_watch_video}><img src={video} alt='video'/> Watch video</div>
                    </div>
                </div>
                <div className={s.mobile_section}>
                    <img src={mobile} alt='mobile'/>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;