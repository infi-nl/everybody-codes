using Cameras.Models;
using System.Collections.Generic;
using System.IO;

namespace Cameras.Services
{
    public class CameraDataService : ICameraDataService
    {
        public List<CameraData> GetCamerasFromFile()
        {
            using var reader = new StreamReader(@"../data/cameras-defb.csv");

            var cameraList = new List<CameraData>();
            while (!reader.EndOfStream)
            {
                var line = reader.ReadLine();
                var values = line.Split(';');

                if (values.Length < 3 || !int.TryParse(values[1].Replace(".", ""), out _))
                {
                    continue;
                }

                var number = values[0].Replace(' ', '-').Split('-')[2];

                cameraList.Add(new CameraData
                {
                    Number = int.TryParse(number, out var num) ? num : 0,
                    Name = values[0],
                    Coordinates = new Coordinates(values[1], values[2]),
                });
            }

            return cameraList;
        }
    }
}
