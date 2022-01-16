import { h } from 'preact';
import style from './style.css';
import getPCData from '../../util/api';
import {useEffect, useState} from "preact/hooks";
import StatContainer from '../../components/StatboxContainer';

const sampleUserData = {
	name: 'testUser',
	selectedSensors: [{metric: "hwi_usage"}, {metric: "hwi_gpu_core_load"},  {metric: "hwi_gpu_memory_usage"}, {metric: "hwi_memory_load"}, ],
	hostIP: '192.168.0.2',
	hostPort: '10445',
}


const Home = ( {} ) => {
	const [userData, setUserData]= useState(sampleUserData)
	const [sensorData, setSensorData]= useState ([])
	const [uptime, setUptime] = useState(0)


	useEffect(() => {
		onLoad()
	}, [])

	const onLoad = async () => {
		getPCData(userData.hostIP, userData.hostPort)
		.then(data => {
			setSensorData(data)
		})
	}


	useEffect(() => {
		let timer = setInterval(() => setUptime(uptime + 1), 1000);
		onLoad()
		return () => clearInterval(timer);
	}, [uptime]);



	return(
		<div class={style.home}>
			<button onClick={() => console.log(sensorData)}></button>
			<StatContainer selectedSensors={userData.selectedSensors} containerData = {sensorData} />
			{uptime}
		</div>
	)
};

export default Home;
