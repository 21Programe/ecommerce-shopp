using InfoHubApp.Models;
using InfoHubApp.Services;

namespace InfoHubApp
{
    public partial class WeatherPage : ContentPage
    {
        public WeatherPage()
        {
            InitializeComponent();
        }

        // O 'private' só pode aparecer aqui dentro, nos métodos!
        private async void OnGetWeatherClicked(object sender, EventArgs e)
        {
            var service = new WeatherService();
            var weather = await service.GetWeatherAsync(CityEntry.Text);

            if (weather != null)
            {
                CityLabel.Text = weather.Name;
                TempLabel.Text = $"{weather.Main.Temp}°C";
                DescLabel.Text = weather.Weather[0].Description;
                HumidLabel.Text = $"Umidade: {weather.Main.Humidity}%";
            }
        }
    }
}