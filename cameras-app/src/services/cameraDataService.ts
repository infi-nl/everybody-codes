import CameraData from "../interfaces/ICameraData"
import BaseService from "./baseService"

export default class CameraDataService extends BaseService {
  private endPoint = process.env.REACT_APP_camerasApi;
  
  public async GetCameraData(name?: string): Promise<CameraData[]>{
    const path = `${this.endPoint}` + (name != null ? `?name=${name}` : '');
    return await this.Get<CameraData[]>(path);
  }
}
