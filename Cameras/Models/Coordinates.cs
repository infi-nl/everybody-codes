namespace Cameras.Models
{
    public class Coordinates
    {
        public Coordinates(double latitude, double longitude)
        {
            this.Latitude = latitude;
            this.Longitude = longitude;
        }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

    }
}
