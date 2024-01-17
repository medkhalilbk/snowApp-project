import React, { useState, useEffect, useRef } from "react";
import { Dimensions, Image, StyleSheet, View, Modal, Text, Pressable } from "react-native";
import MapView, { Circle, MapCircle, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../../redux/actions/gps";
import { updateOperationStatus } from "../../axios/status";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { whiteColor } from "../../styles";


const { width, height } = Dimensions.get("screen");

export default function MapScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationMarker, setLocationMarker] = useState(null)
  const [operationDetail, setOperationDetail] = useState({})
  const [distination, setDistination] = useState(null);
  const [origin, setOrigin] = useState({
    latitude: 6.9271,
    longitude: 79.8612,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const operationsList = useSelector((state) => state.operations?.runDetails);
  const [list, setList] = useState([].concat(...operationsList.runDetails.allAdresses))
  const [statusValue, setStatusValue] = useState(0)
  useEffect(() => {

    const getLocation = async () => {
      setList([].concat(...operationsList.runDetails.allAdresses))
      try {
        const cordsMarkerLocation = await Location.getCurrentPositionAsync({});
        setLocationMarker(cordsMarkerLocation.coords)
        console.log(`from locationMarker ${JSON.stringify(locationMarker)}`)
        console.log(`from cordsMarkerLocation ${JSON.stringify(cordsMarkerLocation.coords)}`)

        let newLocation;
        if (route.params?.operationsCords) {
          newLocation = route.params?.operationsCords;
          setLocation(newLocation);
        } else {
          const { coords } = await Location.getCurrentPositionAsync({});
          newLocation = coords;

          setLocation(newLocation);
        }


      } catch (error) {
        setErrorMsg(error.message);
        console.log(error)
      }
    };

    getLocation();
  }, [route.params]);

  useEffect(() => {

    if (route.params?.operationsCords) {
      setLocation(route.params.operationsCords);
    }
  }, [route.params]);


  useEffect(() => {
    if (location) {
      mapRef.current.setCamera({
        center: {
          latitude: location.latitude,
          longitude: location.longitude,
          heading: 0,
          pitch: 0,
          zoom: 19.1424331665,
        },
      });
    }
  }, [route.params, location]);
  const customMapStyle = [

    {
      featureType: 'all',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: 'red',
        },
      ],
    },
    // ... other map styles
  ];
  return (
    <View style={styles.container}>
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE}

          onMapReady={() => {
            mapRef.current.getCamera().then((res) => {
              // console.log(res);
            });
          }}
          showsUserLocation={true}
          userLocationPriority="low"
          onUserLocationChange={async (e) => {
            const cordsMarkerLocation = await Location.getCurrentPositionAsync({});
            setLocationMarker(cordsMarkerLocation.coords)
          }}
          loadingEnabled={true}
          ref={mapRef}
          customMapStyle={customMapStyle}

          zoomEnabled={true}
          style={styles.map}
          initialRegion={{
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          mapType="satellite"
        >
          {locationMarker && (
            <Marker
              coordinate={{
                longitude: locationMarker.longitude,
                latitude: locationMarker.latitude,
              }}
            />
          )}
          <MapViewDirections
            origin={locationMarker}
            destination={distination}
            apikey={"AIzaSyArv0zDFWad2xEFtI9p4nVc-fhocwEHioY"}
            strokeWidth={4}
            strokeColor="rgb(15,83,255)"
            mode="DRIVING"
          />
          {list && list.map((op, k) => (

            <Marker
              onPress={() => {
                setModalVisible(true);
                setOperationDetail(op);
              }}

              key={k}
              coordinate={{ longitude: op.lng, latitude: op.lat }}
              title={op.client}
            >
              <Image
                style={{ width: 50, height: 50, justifyContent: "center" }}
                source={
                  op.is_set === 1 ?
                    op.status === 0
                      ? require("../../assets/map_assets/green_pin.png")
                      : require("../../assets/map_assets/red_pin.png")
                    : console.log("test")
                }
              />
            </Marker>
          ))}
        </MapView>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{operationDetail.nom_complet}</Text>
            <Pressable
              style={{
                borderRadius: 5,
                marginTop: 5,
                padding: 10,
                elevation: 2,
                backgroundColor: operationDetail.status === 0 ? "#10940c" : "#940c0c"
              }}
              onPress={() => {
                updateOperationStatus(operationDetail, statusValue).then((res) => {
                  if (res.success == true) {
                    const updatedList = list.map((item) => {
                      if (item.id === operationDetail.id) {
                        item.is_set = 1
                        item.status = 0
                      }
                    })
                    // setList(updatedList)
                    // setModalVisible(!modalVisible)
                  } else if (res.success == false) {
                    const updatedList = list.map((item) => {
                      if (item.id === operationDetail.id) {
                        item.is_set = 1
                        item.status = 1
                      }
                    })
                  }
                  statusValue === 0 ? setStatusValue(1) : setStatusValue(0)
                })
                // navigation.navigate("operationDetailScreen", {
                //   operationDetail,
                // });
              }}
            >

              {operationDetail.status == 0 ?
                <View style={styles.RemoveSnowButton}>
                  <Ionicons name="checkmark-done-circle-outline" color={whiteColor} size={24} />
                  <Text style={styles.textStyle}> Déneigé</Text>
                </View>
                :
                <View style={styles.RemoveSnowButton}>
                  <AntDesign name="closecircleo" size={24} color={whiteColor} />
                  <Text style={styles.textStyle}>Enneigé </Text>
                </View>}
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonGps]}
              onPress={() => {
                setModalVisible(!modalVisible);
                setDistination({
                  longitude: operationDetail.lng,
                  latitude: operationDetail.lat,
                });
              }}
            >
              <Text style={styles.textStyle}>Itinéraire</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 50,
  },
  RemoveSnowButton: {
    flexDirection: "row",
    gap: 5
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#a11010",
  },
  buttonGps: { backgroundColor: "#7FDF4B" },
  buttonClose: {
    backgroundColor: "#e23636",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  map: {
    width: width,
    height: height,
  },

});
