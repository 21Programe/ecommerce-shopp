using System.Net.Http.Json;

namespace InfoHubApp.Services 
{
    public class WeatherService
    {
        private readonly HttpClient _httpClient = new HttpClient();
        // Sua chave inserida com segurança para teste local
        private const string ApiKey = "33f957e7eabee2cc1495e74c586d6363"; 

        public async Task<WeatherData> GetWeatherAsync(string cidade)
        {
            try {
                var url = $"https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid={ApiKey}&units=metric&lang=pt_br";
                return await _httpClient.GetFromJsonAsync<WeatherData>(url);
            }
            catch (Exception ex) {
                return null;
            }
        }
    }
}