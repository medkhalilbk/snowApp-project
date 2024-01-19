import React, { useMemo, useState } from 'react'
import { Dimensions, SafeAreaView, ScrollView, TextInput, TouchableOpacity, View, FlatList, ActivityIndicator, Text } from 'react-native'

import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOperations } from '../../axios/dashboard';
import { updateOperationsAction, updateTaskInRedux } from '../../redux/actions/operations';
import { useEffect } from 'react';
import RunHeader from './runHeader';
import ClientDetail from './cardOfOperation';
import socket from '../../utils/socket';

function ListOfOperations({ navigation }) {
  const operationsList = useSelector((state) => state.operations?.runDetails);
  React.useEffect(() => {
    setOperationListState(operationsList?.addresses);
  }, []);

  const userId = useSelector((state) => state.user.informations.id);
  const [searchInput, setSearchInput] = useState('');
  const [filteredOperationList, setFilteredOperationList] = useState([]);
  const [operationListState, setOperationListState] = useState([])
  const [showClients, setShowClients] = useState(false)
  const dispatch = useDispatch();
  const [isChanging, setIsChanging] = useState(false)
  const [page, setPage] = useState(1);
  React.useEffect(() => {
    setOperationListState(operationsList);
    setFilteredOperationList(operationsList);
  }, [operationsList]);

  useEffect(() => {

    // console.log(operationsList)

    //  const test= statusChnagingListner()
    // console.log(response)
  }, [])
  function fetchOperations() {

    getAllOperations({ userId: userId }, page)
      .then((res) => {

        dispatch(updateOperationsAction({
          runDetails: res,
          isChanging: isChanging
        }));
        setOperationListState(res.data)
        let setTaskFromSocket
        socket.on('resultOfCleaning', function (msg) {
          setTaskFromSocket=msg.tasks
          console.log(`from sockett  front ${JSON.stringify(msg.tasks)}`);
          res?.runDetails?.addresses.map((clientAdress) => {
            clientAdress.clientAdresses.filter((target) => {
              if (target.id === msg.tasks) {
                target.status = 0
                console.log("updatedTask")
                setIsChanging(!isChanging)
              }
            })
          })

          const payload = {
            runDetails: res,
            isChanging: !isChanging
          }
          dispatch(updateOperationsAction(payload));
          dispatch(updateTaskInRedux(setTaskFromSocket))
        });
      })
      .catch((err) => {
        console.log(err);
      });


  }

  React.useEffect(() => {
    fetchOperations()
  }, [])

  useEffect(() => {
    /*  if (searchInput.trim() === '') {
       setFilteredOperationList(operationListState);
     } else {
       const filtered = operationListState.filter(item =>
         item.title.toLowerCase().includes(searchInput.toLowerCase())
       );
       setFilteredOperationList(filtered);
       console.log(filtered)
     } */
  }, [searchInput, operationListState]);

  const RenderItem = ({ item, k }) => {
    return (
      <ClientDetail item={item} navigation={navigation} key={k} id={item.id} />
    );
  }


  React.useEffect(() => {
  }, [operationListState]);

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <View
        style={{
          alignItems: "center",
          marginVertical: 20,
          flexDirection: "row",
          gap: 12,
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <TextInput
          placeholder="Chercher une opération"
          placeholderTextColor="white"
          style={{
            borderRadius: 5,
            padding: 12,
            fontSize: 12,
            color: "white",
            backgroundColor: "#2B2E36",
            width: 250,
            height: 38,
            justifyContent: "center",
          }}
          onChangeText={(text) => setSearchInput(text)}
        />

        <TouchableOpacity
          style={{
            width: 31,
            height: 30,
            backgroundColor: "#44C01D",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <FontAwesome name="search" size={17} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 31,
            height: 30,
            backgroundColor: "#1DA1F2",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <AntDesign name="filter" size={17} color="white" />
        </TouchableOpacity>
      </View>

      <RunHeader
        setShowClients={setShowClients}
        title={operationsList.runDetails?.name}
      />

      {showClients && (
        <FlatList
          data={operationListState?.runDetails.addresses}
          renderItem={({ item, k }) => <RenderItem item={item} key={k} />}
          keyExtractor={(item, index) =>
            item?.id?.toString() || index.toString()
          }
        />
      )}
    </SafeAreaView>
  );
}

export default ListOfOperations;