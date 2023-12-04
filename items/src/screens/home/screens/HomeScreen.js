import { StyleSheet, Text, View, Image } from 'react-native';
import cart from '../../../../assets/cart.png';
import emptyLike from '../../../../assets/emptyLike.png';
import filledLike from '../../../../assets/filledLike.png';

const mockProduct = [
  {
    title: 'Піцца Пеппероні',
    imgURL: 'https://omnomnom.dp.ua/image/cache/catalog/pizza_new/new4/pepperoni-500x500.jpg',
    isLiked: false,
    isNew: true,
    newPrice: '$ 9.49',
    oldPrice: '$ 10.99',
    description: 'Гостра ковбаса салямі, томатний соус, моцарелла',
  },
  {
    title: 'Піцца Прошутто',
    imgURL: 'https://omnomnom.dp.ua/image/cache/catalog/pizza_new/new/img_0655-500x500.jpg',
    isLiked: true,
    isNew: false,
    newPrice: '$ 10.99',
    oldPrice: '$ 15.99',
    description: 'Моцарелла, прошутто, пармезан, руккола, томатний соу, орегано',
  },
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.itemBox}>
        <View style={styles.itemLeft}>
          <Image 
          style={styles.itemImg}
          source={{uri: mockProduct[0].imgURL}}
          />
          {
            mockProduct[0].isNew &&
            (<View style={styles.isNew}>
              <Text style={styles.isNewText}>new</Text>
            </View>)
          }        
        </View>      
        <View style={styles.itemRight}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>{mockProduct[0].title}</Text>
            {
              mockProduct[0].isLiked
              ? (<Image 
                style={styles.likeImg}
                source={filledLike}
              />)
              : (<Image 
                style={styles.likeImg}
                source={emptyLike}
              />)
            }
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.newPrice}>{mockProduct[0].newPrice}</Text>
            <Text style={styles.oldPrice}>{mockProduct[0].oldPrice}</Text>
          </View>
          <View style={styles.priceBox}>
            <View style={styles.descrText}>
              <Text 
                numberOfLines={1}
                >
                {mockProduct[0].description}
              </Text>
            </View>            
            <Text style={styles.buyText}>Buy</Text>
            <Image 
                style={styles.likeImg}
                source={cart}
              />
          </View>
        </View>     
      </View>

      <View style={styles.itemBox}>
        <View style={styles.itemLeft}>
          <Image 
          style={styles.itemImg}
          source={{uri: mockProduct[1].imgURL}}
          />
          {
            mockProduct[1].isNew &&
            (<View style={styles.isNew}>
              <Text style={styles.isNewText}>new</Text>
            </View>)
          }        
        </View>      
        <View style={styles.itemRight}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>{mockProduct[1].title}</Text>
            {
              mockProduct[1].isLiked
              ? (<Image 
                style={styles.likeImg}
                source={filledLike}
              />)
              : (<Image 
                style={styles.likeImg}
                source={emptyLike}
              />)
            }
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.newPrice}>{mockProduct[1].newPrice}</Text>
            <Text style={styles.oldPrice}>{mockProduct[1].oldPrice}</Text>
          </View>
          <View style={styles.priceBox}>
            <View style={styles.descrText}>
              <Text 
                numberOfLines={1}
                >
                {mockProduct[1].description}
              </Text>
            </View>            
            <Text style={styles.buyText}>Buy</Text>
            <Image 
                style={styles.likeImg}
                source={cart}
              />
          </View>
        </View>     
      </View>   
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 70,
  },
  itemImg: {
    width: '100%',
    height: 80,
  },
  likeImg: {
    width: 30,
    height: 30,
  },
  itemBox: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#f8eff0',
    padding: 20,
    borderWidth: 2,
    borderColor: '#dedbdc',
    borderStyle: 'solid',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  isNew: {
    position: 'absolute',
    right: -10,
    top: -5,
    width: 30,
    height: 30,
    backgroundColor: '#ccc',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  isNewText: {
    textTransform: 'uppercase',
    fontSize: 10,
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  newPrice: {
    fontWeight: 'bold',
    marginRight: 15,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
  },
  descrText: {
    fontWeight: 400,
    width: 155,
  },
  buyText: {
    marginRight: 5,
  },
  titleText: {
    textTransform: 'uppercase',
  },
  itemLeft: {
    width: '25%',
    flexDirection: 'column',
  },
  itemRight: {
    width: '75%',
    flexDirection: 'column',
  },
});