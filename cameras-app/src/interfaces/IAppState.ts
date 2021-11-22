import ICameraData from './ICameraData';

export default interface IAppState {
    allCameras: ICameraData[];
    camerasThree: ICameraData[];
    camerasFive: ICameraData[];
    camerasThreeAndFive: ICameraData[];
    camerasNone: ICameraData[];
}