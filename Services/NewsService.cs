using System.Net.Http.Json;
using InfoHubApp.Models; // Certifique-se de que o namespace dos seus Models está correto

namespace InfoHubApp.Services 
{
    public class NewsService
    {
        private readonly HttpClient _httpClient = new HttpClient();
        
        // Sua chave de API de notícias
        private const string ApiKey = "e6270c8f8aaa43c383b20ce691a290fb"; 

        public async Task<List<Article>> GetTopNewsAsync()
        {
            try 
            {
                // URL configurada para notícias de tecnologia no Brasil
                var url = $"https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey={ApiKey}";
                
                // IMPORTANTE: A NewsAPI exige um User-Agent. 
                // Sem isso, ela bloqueia a requisição por segurança.
                if (!_httpClient.DefaultRequestHeaders.Contains("User-Agent"))
                {
                    _httpClient.DefaultRequestHeaders.Add("User-Agent", "InfoHubApp");
                }

                var response = await _httpClient.GetFromJsonAsync<NewsResponse>(url);
                
                // Retorna a lista de artigos ou uma lista vazia se for nulo
                return response?.Articles ?? new List<Article>();
            }
            catch (Exception ex) 
            {
                // Se der erro (sem internet, chave expirada), retorna lista vazia
                Console.WriteLine($"Erro ao buscar notícias: {ex.Message}");
                return new List<Article>();
            }
        }
    }
}