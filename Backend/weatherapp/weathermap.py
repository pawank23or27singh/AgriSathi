import requests

def get_weather_data(city_name):
    api_key = '0ea3253d234761e0599f815b55dc329b'
    base_url = 'https://api.openweathermap.org/data/2.5/weather'

    params = {
        'q': city_name,
        'appid': api_key,
        'units': 'metric'
    }

    response = requests.get(base_url, params=params)
    data = response.json()

    if response.status_code == 200:
        print_weather_info(data)
    else:
        print("❌ Error:", data.get('message', 'Something went wrong!'))

    return data

def print_weather_info(data):
    try:
        city = data['name']
        country = data['sys']['country']
        weather_desc = data['weather'][0]['description'].capitalize()
        temp_c = data['main']['temp']
        humidity = data['main']['humidity']
        wind_speed = data['wind']['speed']
        rain = data.get('rain', {}).get('1h', 0)
        clouds = data['clouds']['all']

        print("\n📊 Weather Report")
        print("-------------------------")
        print(f"📍 Location: {city}, {country}")
        print(f"🌦 Weather: {weather_desc}")
        print(f"🌡 Temperature: {temp_c} °C")
        print(f"💧 Humidity: {humidity}%")
        print(f"🌬 Wind Speed: {wind_speed} m/s")
        print(f"🌧 Rain (last 1h): {rain} mm")
        print(f"☁ Cloud Cover: {clouds}%")
        print("-------------------------\n")

    except KeyError as e:
        print(" Missing key in weather data:", e)

city_input = input("Enter city name: ")

get_weather_data(city_input)
