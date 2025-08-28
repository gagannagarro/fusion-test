'use client';

import { useState, useEffect } from 'react';

interface WeatherData {
  name: string;
  country: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  icon: string;
  pressure: number;
  visibility: number;
}

interface SearchLocation {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export default function WeatherDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState<SearchLocation[]>([]);

  // Demo API key - In production, use environment variables
  const API_KEY = 'demo'; // Users will need to get their own from openweathermap.org

  const searchLocations = async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      // For demo purposes, using mock data
      const mockSuggestions: SearchLocation[] = [
        { name: 'London', country: 'GB', lat: 51.5074, lon: -0.1278 },
        { name: 'New York', country: 'US', lat: 40.7128, lon: -74.0060 },
        { name: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503 },
        { name: 'Paris', country: 'FR', lat: 48.8566, lon: 2.3522 },
        { name: 'Sydney', country: 'AU', lat: -33.8688, lon: 151.2093 },
      ].filter(location => 
        location.name.toLowerCase().includes(query.toLowerCase()) ||
        location.country.toLowerCase().includes(query.toLowerCase())
      );
      
      setSuggestions(mockSuggestions.slice(0, 5));
    } catch (err) {
      console.error('Error searching locations:', err);
    }
  };

  const getWeatherData = async (lat: number, lon: number, cityName: string, country: string) => {
    try {
      setLoading(true);
      setError('');

      // Mock weather data for demo
      const mockWeatherData: WeatherData = {
        name: cityName,
        country: country,
        temperature: Math.floor(Math.random() * 30) + 5,
        description: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Clear'][Math.floor(Math.random() * 5)],
        humidity: Math.floor(Math.random() * 40) + 40,
        windSpeed: Math.floor(Math.random() * 20) + 5,
        feelsLike: Math.floor(Math.random() * 30) + 5,
        icon: '01d',
        pressure: Math.floor(Math.random() * 100) + 1000,
        visibility: Math.floor(Math.random() * 5) + 5,
      };

      setWeatherData(prev => {
        const exists = prev.find(item => item.name === cityName && item.country === country);
        if (exists) return prev;
        return [...prev, mockWeatherData];
      });

    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Error fetching weather:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSelect = (location: SearchLocation) => {
    getWeatherData(location.lat, location.lon, location.name, location.country);
    setSearchTerm('');
    setSuggestions([]);
  };

  const removeWeatherCard = (index: number) => {
    setWeatherData(prev => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchLocations(searchTerm);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="gradient-bg text-white rounded-lg p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Weather Dashboard</h1>
          <p className="text-blue-100">Get real-time weather information for cities worldwide</p>
        </div>

        {/* Search Section */}
        <div className="weather-card p-6 mb-8 relative">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Search for a City</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter city name or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
            
            {/* Search Suggestions */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-card border border-border rounded-lg mt-1 shadow-lg z-10">
                {suggestions.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => handleLocationSelect(location)}
                    className="w-full text-left p-3 hover:bg-accent text-foreground border-b border-border last:border-b-0 transition-colors"
                  >
                    <div className="font-medium">{location.name}</div>
                    <div className="text-sm text-muted-foreground">{location.country}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {loading && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                Loading weather data...
              </div>
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded text-destructive">
              {error}
            </div>
          )}
        </div>

        {/* Weather Cards Grid */}
        {weatherData.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Weather Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weatherData.map((weather, index) => (
                <div key={index} className="weather-card p-6 relative group">
                  <button
                    onClick={() => removeWeatherCard(index)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-destructive/80"
                  >
                    ×
                  </button>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{weather.name}</h3>
                      <p className="text-sm text-muted-foreground">{weather.country}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{weather.temperature}°C</div>
                      <p className="text-sm text-muted-foreground">{weather.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Feels like:</span>
                        <span className="text-foreground">{weather.feelsLike}°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Humidity:</span>
                        <span className="text-foreground">{weather.humidity}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Wind:</span>
                        <span className="text-foreground">{weather.windSpeed} km/h</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pressure:</span>
                        <span className="text-foreground">{weather.pressure} hPa</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Visibility:</span>
                        <span className="text-foreground">{weather.visibility} km</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {weatherData.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🌤️</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No Weather Data Yet</h3>
            <p className="text-muted-foreground">Search for a city above to get started</p>
          </div>
        )}

        {/* API Notice */}
        <div className="mt-12 weather-card p-4">
          <div className="text-sm text-muted-foreground">
            <strong>Note:</strong> This demo uses mock weather data. To get real weather data, 
            sign up for a free API key at{' '}
            <a 
              href="https://openweathermap.org/api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              OpenWeatherMap
            </a>
            {' '}and replace the API integration in the component.
          </div>
        </div>
      </div>
    </div>
  );
}
