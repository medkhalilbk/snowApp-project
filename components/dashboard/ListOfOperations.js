import React, { useState } from 'react'
import { Dimensions, SafeAreaView, ScrollView, TextInput, TouchableOpacity, View } from 'react-native'
import CardOfOperation from './cardOfOperation'
import { styles } from '../../styles'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeTags } from '../../helpers';
import { useRef } from 'react';
import { getAllOperations } from '../../axios/dashboard';
import { updateOperationsAction } from '../../redux/actions/operations';

function ListOfOperations() {
    const { width, height } = Dimensions.get("window");
    const operationsList = useSelector(state => state.operations.operationsList)
    const [List, setList] = useState([...operationsList]); 
    const userId = useSelector(state => state.user.informations.id)
    const dispatch = useDispatch()
    const lastPage = useSelector(state => state.operations.lastPage)
    const scrollViewRef = useRef(null);
    const [page, setPage] = useState(1);
    const handleScroll = (event) => {
      const contentHeight = event.nativeEvent.contentSize.height;
      const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
      const scrollOffset = event.nativeEvent.contentOffset.y;
      const isEnd = scrollOffset >= contentHeight - scrollViewHeight;
     if(isEnd){
        if(page<=lastPage){
        setPage(page+1)
        console.log("page from screen is "+ page)
        getAllOperations({userId:userId},page)
        .then((res) => {
            // console.log(res.data)
             setList([...List, ...res.data])
            // console.log("current_page"+ res.current_page)
              console.log("this should be more than the last "+List.length)
             dispatch(updateOperationsAction(List));
        
        })

    }
     }
    };
    React.useEffect(() => {
        setList([...operationsList]);

    }, [])

    return (
        <SafeAreaView style={{ flex: 2 }}>
            <View style={{
                alignItems: 'center',
                marginBottom: 20,
                flexDirection: 'row',
                gap: 12,
                paddingLeft: 12,
                paddingRight: 12

            }}>
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
                        justifyContent: 'center'
                    }}
                />

                <TouchableOpacity
                    style={{
                        width: 31,
                        height: 30,
                        backgroundColor: "#44C01D",
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5

                    }}
                >
                    <FontAwesome name="search" size={17} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 31,
                        height: 30,
                        backgroundColor: "#1DA1F2",
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5

                    }}
                >
                    <AntDesign name="filter" size={17} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView
            ref={scrollViewRef}
            onScroll={handleScroll}
            contentContainerStyle={{
                paddingLeft: 20, gap: 20, paddingRight: 20
            }}> 
                {operationsList?.map((op,k) => {
                return (
                  <CardOfOperation
                    id={op.id}
                    isDone={op.is_done}
                    key={k}
                    title={op.title}
                    start_date={op.start_date + " | " + op.start_hour}
                    addresse={op.ville + ", " + op.addresse}
                    // description={removeTags(op.description)}
                  />
                );
                })}

            </ScrollView>
        </SafeAreaView>
    )
}

export default ListOfOperations;