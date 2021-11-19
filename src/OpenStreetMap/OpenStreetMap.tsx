import { tmpdir } from "os";

export default tmpdir;
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import { Icon, LatLngExpression } from "leaflet";
// import React from 'react'

// import './OpenStreetMap.less'

// export const icon = new Icon({
//     iconUrl: require('./utils/home.svg'),
//     iconSize: [50, 50]
// });

// interface OpenStreetMapProps {
//     markerPosition: LatLngExpression
//     center: LatLngExpression
//     address: string
//     zoom: number
// }

// function ChangeView({ center, zoom }) {
//     const map = useMap();
//     map.setView(center, zoom);
//     return null;
// }


// const OpenStreetMap = (props: OpenStreetMapProps) => {
//     const { markerPosition, address, zoom, center } = props


//     return (
//         <MapContainer center={center} zoom={zoom}>
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <ChangeView center={center} zoom={zoom} />
//             <Marker
//                 key={1}
//                 position={markerPosition}
//                 riseOnHover
//                 icon={icon}
//             >
//                 <Popup position={markerPosition}>
//                     <div>
//                         <h3>Znaleziony adres </h3>
//                         <p>{address}</p>
//                     </div>
//                 </Popup>
//             </Marker>
//         </MapContainer>
//     );
// }

// export default OpenStreetMap
