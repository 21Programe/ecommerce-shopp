using InfoHubApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace InfoHubApp.Services
{
    public class SalesService
    {
        public List<Product> GetTopDeals()
        {
            var produtos = new List<Product>
            {
                new Product { Nome = "Teclado Mecânico", PrecoOriginal = 350.00, PrecoDesconto = 199.00, ImagemUrl = "dotnet_bot.png" },
                new Product { Nome = "Mouse Gamer", PrecoOriginal = 200.00, PrecoDesconto = 120.00, ImagemUrl = "dotnet_bot.png" },
                new Product { Nome = "Monitor 144Hz", PrecoOriginal = 1500.00, PrecoDesconto = 950.00, ImagemUrl = "dotnet_bot.png" }
            };
            return produtos.OrderByDescending(p => p.PorcentagemDesconto).ToList();
        }
    }
}