import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import React from 'react'

import './OpenStreetMap.scss'
import { PushpinOutlined } from "@ant-design/icons";

export const icon = new Icon({
    iconUrl: 'data:image/png;base64,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',
    iconSize: [50, 50]
});

interface OpenStreetMapProps {
    markerPosition: LatLngExpression
    center: LatLngExpression
    address: string
    zoom: number
}

const OpenStreetMap = (props: OpenStreetMapProps) => {
    const { markerPosition, address, zoom, center } = props

    return (
        <MapContainer    style={{ height: '100vh', width: '100wh' }}
        center={center} zoom={zoom}>

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <ChangeView center={center} zoom={zoom} /> */}
            <Marker
                key={1}
                position={[51.06370, 17.03760]}
                riseOnHover
                icon={icon}
            >
            </Marker>
            <Marker
                key={2}
                position={[51.12072364664422, 17.04263563266621]}
                riseOnHover
                icon={icon}
            >
            </Marker>
            <Marker
                key={2}
                position={[51.11036552517716, 16.965401545996176]}
                riseOnHover
                icon={icon}
            >
            </Marker>
            <Marker
                key={2}
                position={[51.09222691306235, 16.985371705037466]}
                riseOnHover
                icon={icon}
            >
            </Marker>
            <Marker
                key={2}
                position={[51.08833118306151, 17.035975291364615]}
                riseOnHover
                icon={icon}
            >
            </Marker>
            <Marker
                key={2}
                position={[51.12099868525661, 17.012494663228097]}
                riseOnHover
                icon={icon}
            >
            </Marker>
            <Marker
                key={2}
                position={[51.12552794689444, 16.993644846692156]}
                riseOnHover
                icon={icon}
            >
            </Marker>
            <Marker
                key={2}
                position={[51.10678261682342, 17.022183661339156]}
                riseOnHover
                icon={icon}
            >
            </Marker>
            <Marker
                key={2}
                position={[51.10356702405468, 17.09192928913387]}
                riseOnHover
                icon={icon}
            >
            </Marker>
            <Marker
                key={2}
                position={[51.11909240679401, 17.05384288055482]}
                riseOnHover
                icon={icon}
            >
            </Marker>
        </MapContainer>
    );
}

export default OpenStreetMap
