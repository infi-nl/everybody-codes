namespace Cameras.Models
{
    public class Coordinates
    {
        public Coordinates(string latitude, string longitude)
        {
            this.Latitude = latitude;
            this.Longitude = longitude; ;
        }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }
}
