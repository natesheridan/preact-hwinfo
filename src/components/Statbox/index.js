import { h } from 'preact'
import style from './style.css'
import CircularProgress from '@mui/material/CircularProgress';


export const Statbox = ({sensorData}) => {
    





    return(
        <div class = {style.statbox}>
            <p>{sensorData?.sensor}</p>
            {sensorData?.unit==="%" &&<CircularProgress variant="determinate" value={sensorData?.value} />}
            {sensorData?.value.toFixed(2)} {sensorData?.unit}
        </div>
    )
}

