import { StyleSheet } from 'react-native'

const stylesMain = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        alignItems: 'center',
        backgroundColor: '#ECBF06'
    },
    input: {
        marginTop: 10,
        width: '90%',
        backgroundColor: '#EEE',
        borderRadius: 30,
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    },
    buttomContainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    firstButtom: {
        marginRight: 10
    }, 
    welcome: {
        marginBottom: 50,
        fontSize: 30
    },
    cadastro: {
        marginTop: 15,
        fontSize: 15
    }
})

export default styles