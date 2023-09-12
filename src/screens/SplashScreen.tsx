import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';
import {Colors} from '../theme';

export default function SplashScreen() {
  const viewRef = useRef({});
  const [count, setTotalCount] = useState(0);
  const [openCard, setOpenCard] = useState([]);
  const [randomCardNumbers, setRandomCardNumbers] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState({
    item: null,
    index: null,
  });
  const [refresh, setRefresh] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    let newArray = openCard.filter(obj => obj);
    if (newArray.length === 12) {
      alertBox(1);
    }
  }, [count]);

  useEffect(() => {
    restartTheGame();
  }, []);

  function alertBox(type?: number) {
    Alert.alert(
      type ? 'Tada' : 'Oops',
      type
        ? 'Congratulations!\nPlease restart to play again.'
        : 'Steps exceeded the limit, Please restart to play again!',
      [
        {
          text: 'Restart',
          onPress: () => {
            restartTheGame();
          },
        },
      ],
    );
  }

  function generateRandomNumbers() {
    let numbersArray = [];
    let randomNumbers = [];
    for (let i = 0; i < 6; i++) {
      randomNumbers.push(Math.floor(Math.random() * 100));
    }
    for (let i = 0; i < 12; i++) {
      let index = Math.floor(Math.random() * (i + 1));
      numbersArray.splice(index, 0, randomNumbers[i % 6]);
    }
    setRandomCardNumbers(numbersArray);
  }

  function restartTheGame() {
    let selectedItem = {
      item: null,
      index: null,
    };
    setSelectedNumber(selectedItem);
    setOpenCard([]);
    setTotalCount(0);
    setToInitialNumber();
    generateRandomNumbers();
  }

  function onSelectCard(item: number, indexNumber: number) {
    if (selectedNumber.item) {
      setDisableBtn(true);
      setInitialNumber(item, indexNumber, 1);
      setTimeout(() => {
        if (item === selectedNumber.item) {
          setToInitialNumber();
          setRefresh(!refresh);
        } else {
          let olderIndex = selectedNumber.index;
          openCard[indexNumber] = false;
          openCard[olderIndex] = false;
          setOpenCard(openCard);
          setRefresh(!refresh);
          setToInitialNumber();
        }
        setDisableBtn(false);
      }, 1000);
    } else {
      setInitialNumber(item, indexNumber);
    }
  }

  function setInitialNumber(item: number, index: number, type?: number) {
    if (!type) {
      let selectedItem = {
        item,
        index,
      };
      setSelectedNumber(selectedItem);
    }
    setTotalCount(count + 1);
    openCard[index] = !openCard[index];
    setOpenCard(openCard);
    setRefresh(!refresh);
  }

  function setToInitialNumber() {
    let initialValue = {
      item: null,
      index: null,
    };
    setSelectedNumber(initialValue);
    setRefresh(!refresh);
  }

  function renderCard({item, index}: any) {
    return (
      <>
        {openCard[index] ? (
          <Animatable.View style={styles.itemBtn}>
            <TouchableOpacity style={styles.innerSec} disabled>
              <Text style={styles.initialTxt}>{item}</Text>
            </TouchableOpacity>
          </Animatable.View>
        ) : (
          <Animatable.View
            style={styles.itemBtn}
            ref={ref => {
              viewRef.current[index + 1] = ref;
            }}>
            <TouchableOpacity
              style={styles.innerSec}
              disabled={disableBtn}
              onPress={() => {
                if (count < 20) {
                  viewRef?.current[index + 1]?.flipInY(800);
                  onSelectCard(item, index);
                  return;
                }
                alertBox();
              }}>
              <Text style={styles.initialTxt}>{'?'}</Text>
            </TouchableOpacity>
          </Animatable.View>
        )}
      </>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerSec}>
        <TouchableOpacity
          style={styles.headerLeftBtn}
          onPress={() => {
            restartTheGame();
          }}>
          <Text style={styles.restartTxt}>{'Restart'}</Text>
        </TouchableOpacity>
        <Text style={styles.restartTxt}>{`Steps: ${count}`}</Text>
      </View>
      <FlatList
        data={randomCardNumbers}
        numColumns={3}
        renderItem={renderCard}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.blackTransparent,
  },
  itemBtn: {
    height: 150,
    width: '30%',
    borderWidth: 5,
    borderColor: Colors.white,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue,
    margin: 5,
  },
  headerSec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  headerLeftBtn: {
    height: 40,
    width: 80,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue,
    borderRadius: 6,
  },
  restartTxt: {
    fontSize: 15,
    fontFamily: 'OpenSans-Semibold',
    color: Colors.white,
  },
  initialTxt: {
    fontSize: 25,
    fontFamily: 'OpenSans-Extrabold',
    color: Colors.white,
  },
  innerSec: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
