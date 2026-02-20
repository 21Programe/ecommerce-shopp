public class WeatherData
{
    public string Name { get; set; } // Nome da cidade
    public MainInfo Main { get; set; }
    public WeatherDescription[] Weather { get; set; }
}

public class MainInfo
{
    public double Temp { get; set; }
    public int Humidity { get; set; }
}

public class WeatherDescription
{
    public string Description { get; set; }
}