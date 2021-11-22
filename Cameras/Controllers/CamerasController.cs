using Cameras;
using Cameras.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace CamerasCLI
{
    [ApiController]
    [Route("api/[controller]")]
    public class CamerasController : ControllerBase
    {
        private readonly ICameraDataService cameraDataService;
        public CamerasController(ICameraDataService cameraDataService)
        {
            this.cameraDataService = cameraDataService ?? throw new ArgumentNullException(nameof(cameraDataService));
        }

        [HttpGet]
        public ActionResult<IEnumerable<CameraData>> GetCameraData([FromQuery] string name) {
            
            var cameraData = this.cameraDataService.GetCamerasFromFile();
            if (!string.IsNullOrEmpty(name))
            {
                cameraData = cameraData.FindAll(camera => camera.Name.Contains(name));
            }

            return this.Ok(cameraData);
        }
    }
}
