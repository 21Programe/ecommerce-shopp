using InfoHubApp.Services;

namespace InfoHubApp
{
    public partial class SalesPage : ContentPage
    {
        public SalesPage()
        {
            InitializeComponent();
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();
            var service = new SalesService();
            SalesList.ItemsSource = service.GetTopDeals();
        }
    }
}