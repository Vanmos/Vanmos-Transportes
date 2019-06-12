import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
        container: {
            padding: 10,
            backgroundColor: '#ECBF06',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            color: '#000',
            fontFamily: 'calibri',
            fontWeight: 'bold',
            height: 30,
            fontSize: 28,
            marginRight: 50
        },
        image: {
            height: 60,
            width: 60,
            resizeMode: 'contain',
            marginTop: 12
        },
        imageContainer: {
            flexDirection: 'row'
        }
    
})
export default styles