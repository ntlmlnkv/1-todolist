import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styles from '../Todolist.module.css'

type PropsType = {
    name: string
    callBack: () => void
}


export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack ()
    }
    return (
        <button onClick={onClickHandler} className={styles.activeFilter}>

            {props.name}

        </button>
    )
}