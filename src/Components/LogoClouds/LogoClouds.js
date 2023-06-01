import React from 'react';
import s from './logoClouds.module.css';
import {logos} from '../../Utils/Constants';

const LogoClouds = () => {
    return (
        <div className={s.logo_clouds_wrapper}>
            <div className={s.borders_logo_clouds}>
            <div className={s.container_logo}>
                {logos.map(v => <img src={v.path} alt={v.alt} key={v.path}/>)}
            </div>
            </div>
        </div>
    );
};

export default LogoClouds;