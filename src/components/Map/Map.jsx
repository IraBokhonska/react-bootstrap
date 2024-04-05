import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { defaultTheme } from "./Theme";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const defaultOptions = {
  styles: defaultTheme,
};

export const Map = ({ center }) => {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className="google-map" id="google-map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};
