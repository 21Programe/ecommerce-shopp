namespace InfoHubApp.Models
{
    public class Product
    {
        public string Nome { get; set; }
        public double PrecoOriginal { get; set; }
        public double PrecoDesconto { get; set; }
        public string ImagemUrl { get; set; }
        public double PorcentagemDesconto => ((PrecoOriginal - PrecoDesconto) / PrecoOriginal) * 100;
        public string VantagemTexto => $"{PorcentagemDesconto:F0}% OFF";
    }
}