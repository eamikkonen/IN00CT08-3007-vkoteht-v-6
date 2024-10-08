import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import * as Location from 'expo-location';
import Weather from './Weather';

const Position = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                setLoading(false);
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (errorMsg) {
        return (
            <View>
                <Text>{errorMsg}</Text>
            </View>
        );
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>Location: {location.coords.latitude}, {location.coords.longitude}</Text>
            <Weather latitude={location.coords.latitude} longitude={location.coords.longitude} />
        </View>
    );
};

export default Position;