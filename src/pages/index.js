import React, { useEffect } from 'react';
import {view, Image} from 'react-native';
import style from '/style.js';
import Logo from '../assets/logo.png';
import MapView, {Maker, callout} from 'react-native-maps';
import {  requestPermissionAsync, getCurrentPositionAsync } from 'expo-location';

export default function Home(){
    const[currentRegion, setCurrentRegion] = useState(null);
    useEffect(()=>{
        async function loadInitialPosition(){
            const {granted} = await requestPermissionAsync();
            if(granted){
                const {coords} = await getCurrentPositionAsync({
                enableHighAccuracy: true,
                 });
                 const {latitude, longitude} = coords

                 setCurrentRegion({
                     latitude,
                     longitude,
                     latitudeDelta: 10.0,
                     longitudeDelta: 15.0,
                 })
            }
        }
        loadInitialPosition();
    }, []);
    assync function loadPersonPosition(){
        const (latitude, longitude)

    }

    function handRegionChange(Region){
        setCurrentRegion(Region);
    }

    if(!currentRegion){
        return null;
    }

    return(
        <view style={style.container}>
            <view style={styles.header}>
                <image source= {Logo}></image>
            </view>
            <MapView
                onRegionHandChangeComplete = {handRegionChange}
                initialRegion = {currentRegion}
                style = {styles.map}
            >
            </MapView>
        </view>
    );
}