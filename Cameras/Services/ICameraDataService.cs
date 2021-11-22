using System.Collections.Generic;

namespace Cameras.Services
{
    public interface ICameraDataService
    {
        List<CameraData> GetCamerasFromFile();
    }
}
