import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { graphqlRequest } from '../../service/api';
import * as parkDate from "./geojson.json";
export class MapPage extends React.Component {
    state = {
        viewport: {
            latitude: 45.4211,
            longitude: -75.6903,
            width: "100vw",
            height: "100vh",
            zoom: 10
        },
        selectedPark: ''
    };



    componentDidMount() {
        sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlzVmFsaWRQYXNzd29yZCI6dHJ1ZSwidXNlcl9pZCI6MzUzMCwiZW1haWxfaWQiOiIwMDEtVEFVTkdZSSIsInBhc3N3b3JkIjoiJDJiJDEwJDV6eE4uN25QZ3NCMGJobHNKblFzTHUuZFNYYmhQbmR6OEsvSUlUT2NGZWFJMmZVTkg5Z3UyIiwibWV0YSI6eyJicmFuY2giOiIwMDEtVEFVTkdZSSJ9LCJwYWdlcyI6W3siZ3JvdXBpZCI6MjEsImdyb3VwX25hbWUiOiJEYXNoYm9hcmQiLCJwYXRoIjoiLyIsInBhZ2VfbmFtZSI6Ik92ZXJ2aWV3IiwicGFnZV9wYXRoIjoiL2RlZXBzZWUvP2ZpbHRlcj1be1wibmFtZVwiOlwidGltZV9wZXJpb2RcIixcInZhbHVlXCI6XCJ0aGlzIG1vbnRoXCJ9XSIsInBhZ2VpZCI6MzR9LHsiZ3JvdXBpZCI6MjEsImdyb3VwX25hbWUiOiJEYXNoYm9hcmQiLCJwYXRoIjoiLyIsInBhZ2VfbmFtZSI6IkFjcXVpc2l0aW9uIiwicGFnZV9wYXRoIjoiL2RlZXBzZWUva2J6cGF5LWFjcXVpc2l0aW9uP2ZpbHRlcj1be1wibmFtZVwiOlwidGltZV9wZXJpb2RcIixcInZhbHVlXCI6XCJtb250aFwifV0iLCJwYWdlaWQiOjM1fSx7Imdyb3VwaWQiOjIxLCJncm91cF9uYW1lIjoiRGFzaGJvYXJkIiwicGF0aCI6Ii8iLCJwYWdlX25hbWUiOiJFbmdhZ2VtZW50IE92ZXJ2aWV3IiwicGFnZV9wYXRoIjoiL2RlZXBzZWUva2J6cGF5LWVuZ2FnZW1lbnQtb3ZlcnZpZXc_ZmlsdGVyPVt7XCJuYW1lXCI6XCJ0aW1lX3BlcmlvZFwiLFwidmFsdWVcIjpcIm1vbnRoXCJ9XSIsInBhZ2VpZCI6MzZ9LHsiZ3JvdXBpZCI6MjEsImdyb3VwX25hbWUiOiJEYXNoYm9hcmQiLCJwYXRoIjoiLyIsInBhZ2VfbmFtZSI6IkVuZ2FnZW1lbnQiLCJwYWdlX3BhdGgiOiIvZGVlcHNlZS9rYnpwYXktZW5nYWdlbWVudD9maWx0ZXI9W3tcIm5hbWVcIjpcInRpbWVfcGVyaW9kXCIsXCJ2YWx1ZVwiOlwidGhpcyBtb250aFwifV0iLCJwYWdlaWQiOjM3fSx7Imdyb3VwaWQiOjIyLCJncm91cF9uYW1lIjoiTWFwIiwicGF0aCI6Ii9rYnpwYXktYWNxdWlzaXRpb24tbWFwIiwicGFnZV9uYW1lIjoiQWNxdWlzaXRpb24gTWFwIiwicGFnZV9wYXRoIjoiL2RlZXBzZWUva2J6cGF5LWFjcXVpc2l0aW9uLW1hcCIsInBhZ2VpZCI6Mzh9LHsiZ3JvdXBpZCI6MjIsImdyb3VwX25hbWUiOiJNYXAiLCJwYXRoIjoiL2tienBheS1hY3F1aXNpdGlvbi1tYXAiLCJwYWdlX25hbWUiOiJQb3RlbnRpYWwgTWFwIiwicGFnZV9wYXRoIjoiL2RlZXBzZWUva2J6cGF5LXBvdGVudGlhbC1tYXAiLCJwYWdlaWQiOjQ4fSx7Imdyb3VwaWQiOjIyLCJncm91cF9uYW1lIjoiTWFwIiwicGF0aCI6Ii9rYnpwYXktYWNxdWlzaXRpb24tbWFwIiwicGFnZV9uYW1lIjoiUG9wdWxhdGlvbiBNZXRyaWNzIiwicGFnZV9wYXRoIjoiL2RlZXBzZWUvcG9wdWxhdGlvbi1tZXRyaWNzIiwicGFnZWlkIjo1MH0seyJncm91cGlkIjoyNCwiZ3JvdXBfbmFtZSI6Ik1hcCIsInBhdGgiOiIva2J6cGF5LWFjcXVpc2l0aW9uLW1hcC1tYXN0ZXIiLCJwYWdlX25hbWUiOiJLQlogQXNzZXRzIiwicGFnZV9wYXRoIjoiL2RlZXBzZWUva2J6LWFzc2V0cyIsInBhZ2VpZCI6NTJ9XSwicm9sZXMiOlt7InJvbGUiOnsiaG9tZXBhZ2UiOiIvZGVlcHNlZT9maWx0ZXI9W3tcIm5hbWVcIjpcInRpbWVfcGVyaW9kXCIsXCJ2YWx1ZVwiOlwidGhpcyBtb250aFwifV0ifX1dfSwiaWF0IjoxNjA2MjgyMzk3LCJleHAiOjE2MDYyODU5OTd9.aFZhgEueLCNFsrQuoU9KRY8pYFosCt5L-Pkj-qsc0mY"')

        let domain = 'https://xgahl82vc5.execute-api.us-east-2.amazonaws.com/dev';
        let baseUrl = domain + '/pageConfig';
        let url = baseUrl;

        var query = `{
            branchList : tc9_all_branch(order_by: {branch: asc}) {
                value: branch
                label: branch
            }
        }`;
        graphqlRequest(url, query).then((res) => {

        }).catch((error) => {

            // return await result
        })
    }







    render() {
        const { viewport, selectedPark } = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">

                        <h4 className="page-titel mb-4">
                            Map
                          </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">


                        <ReactMapGL
                            {...viewport}
                            mapboxApiAccessToken={"pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"}
                            mapStyle="mapbox://styles/mapbox/streets-v9"
                        // onViewportChange={viewport => {
                        //   setViewport(viewport);
                        // }}
                        >
                            {parkDate.features.map(park => (
                                <Marker
                                    key={park.properties.PARK_ID}
                                    latitude={park.geometry.coordinates[1]}
                                    longitude={park.geometry.coordinates[0]}
                                >
                                    <button
                                        className="marker-btn"
                                        onClick={e => {
                                            e.preventDefault();
                                            // setSelectedPark(park);
                                            this.setState({ selectedPark: park })
                                        }}
                                    >
                                        <img src="/skateboarding.svg" alt="Skate Park Icon" />
                                    </button>
                                </Marker>
                            ))}
                            {selectedPark ? (
                                <Popup
                                    latitude={selectedPark.geometry.coordinates[1]}
                                    longitude={selectedPark.geometry.coordinates[0]}
                                    onClose={() => {
                                        this.setState({ selectedPark: null })
                                    }}
                                >
                                    <div>
                                        <h2>{selectedPark.properties.NAME}</h2>
                                        <p>{selectedPark.properties.DESCRIPTIO}</p>
                                    </div>
                                </Popup>
                            ) : null}


                        </ReactMapGL>
                    </div>
                </div>

            </div>
        );
    }
}
