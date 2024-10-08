import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';


const Weather = ({ latitude, longitude }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
                );                
                setWeatherData(response.data);
                setLoading(false);
            }   catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchWeather();
    }, [latitude, longitude]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!weatherData) {
        return <Text>Ei säätietoja.</Text>;
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>Location: {weatherData.name}</Text>
            <Text>Temperature: {weatherData.main.temp}°C</Text>
            <Text>Weather: {weatherData.weather[0].description}</Text>
            <Text>Humidity: {weatherData.main.humidity}%</Text>
            <Text>Wind: {weatherData.wind.speed} m/s</Text>
        </View>
    );
};

export default Weather;