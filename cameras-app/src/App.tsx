import React from 'react';
import './App.css';
import CameraDataService from './services/cameraDataService';
import IAppState from './interfaces/IAppState'
import ICameraData from './interfaces/ICameraData';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

class App extends React.Component<{}, IAppState> {
  private cameraDataService: CameraDataService;

  public constructor(props: {}) {
    super(props)
    this.cameraDataService = new CameraDataService();

    const state: IAppState = {
      allCameras: [],
      camerasThreeAndFive: [],
      camerasFive: [],
      camerasThree: [],
      camerasNone: []
    }

    this.state = state;

    this.getCameraData = this.getCameraData.bind(this);
  }

  public async componentDidMount(): Promise<void> {
    await this.getCameraData();
  }

  private async getCameraData(): Promise<void> {
    const cameras = await this.cameraDataService.GetCameraData();
    const camerasThreeAndFive = cameras.filter(c => c.number % 3 === 0 && c.number % 5 === 0);
    const camerasThree = cameras.filter(c => c.number % 3 == 0);
    const camerasFive = cameras.filter(c => c.number % 5 == 0);
    const camerasNone = cameras.filter(c => c.number % 5 !== 0 && c.number % 3 !== 0);
    
    this.setState({ allCameras: cameras, camerasThreeAndFive: camerasThreeAndFive, camerasFive: camerasFive, camerasThree: camerasThree, camerasNone: camerasNone })
  }

  public render(): JSX.Element {
    const position: LatLngExpression = [52.0914, 5.1115];
    return (
      <div className="App">
        <h1>Security cameras Utrecht</h1>
        <div id="mapid">
          <MapContainer
            center={position}
            zoom={13}>
            {this.state.allCameras !== [] && this.state.allCameras.map((camera: ICameraData, index: number) => (
              <Marker
                key={index}
                position={[Number(camera.coordinates.latitude), Number(camera.coordinates.longitude)]}>
                <Tooltip>{camera.name}</Tooltip>
              </Marker>
            ))
            }
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
        <div id="source">
          source:
          <a href="https://data.overheid.nl/data/dataset/camera-s">https://data.overheid.nl/data/dataset/camera-s</a>
        </div>
        <main>
          <table id="cameraTableContainer">
            <tbody>
              <tr>
                <td>
                  <table id="column3">
                    <thead>
                      <tr>
                        <th colSpan={4}>Cameras 3</th>
                      </tr>
                      <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                      </tr>
                      {this.state.camerasThree.map((c: ICameraData) => {
                        return <tr>
                          <th>{c.number}</th>
                          <th>{c.name}</th>
                          <th>{c.coordinates.latitude}</th>
                          <th>{c.coordinates.longitude}</th>
                        </tr>
                      })}
                    </thead>
                  </table>
                </td>
                <td>
                  <table id="column5">
                    <thead>
                      <tr>
                        <th colSpan={4}>Cameras 5</th>
                      </tr>
                      <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                      </tr>
                      {this.state.camerasFive.map((c: ICameraData) => {
                        return <tr>
                          <th>{c.number}</th>
                          <th>{c.name}</th>
                          <th>{c.coordinates.latitude}</th>
                          <th>{c.coordinates.longitude}</th>
                        </tr>
                      })}
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table id="column15">
                    <thead>
                      <tr>
                        <th colSpan={4}>Cameras 3 &amp; 5</th>
                      </tr>
                      <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                      </tr>
                      {this.state.camerasThreeAndFive.map((c: ICameraData) => {
                        return <tr>
                          <th>{c.number}</th>
                          <th>{c.name}</th>
                          <th>{c.coordinates.latitude}</th>
                          <th>{c.coordinates.longitude}</th>
                        </tr>
                      })}
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table id="columnOther">
                    <thead>
                      <tr>
                        <th colSpan={4} >Cameras Overig</th>
                      </tr>
                      <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                      </tr>
                      {this.state.camerasNone.map((c: ICameraData) => {
                        return <tr>
                          <th>{c.number}</th>
                          <th>{c.name}</th>
                          <th>{c.coordinates.latitude}</th>
                          <th>{c.coordinates.longitude}</th>
                        </tr>
                      })}
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>);
  }
}

export default App;
