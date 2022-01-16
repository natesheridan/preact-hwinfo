import { h } from 'preact'
import style from './style.css'
import {useEffect, useState} from "preact/hooks";
import { Statbox } from '../../components/Statbox/index'
import { stepLabelClasses } from '@mui/material';


const StatContainer = ({hostIP, selectedSensors, containerData}) => {
    const createStatBoxes = () => {
        return 
    }
    return(
        <section class = {style.statboxContainer}>
            {selectedSensors.map((selectedSensor) => {
            const individualSensorData = containerData.find(sensor => sensor.metric === selectedSensor.metric)
            return (
                <Statbox sensorData = {individualSensorData}/>
            )
        })}
        </section>
    ) 

}

export default StatContainer
