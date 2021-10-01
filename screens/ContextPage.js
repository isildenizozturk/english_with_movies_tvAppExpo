import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const header = { uri: 'https://thumbs.dreamstime.com/b/learn-english-typographic-header-study-foreign-languages-school-grammar-audio-lesson-idea-global-communication-studying-224109786.jpg' };
const logo = { uri: 'https://www.avalonschool.co.uk/blog/wp-content/uploads/2018/04/watching-movie-in-english-main.jpeg' };

const img1 = { uri: 'https://archive.org/download/youtube-uH1aDCjypKg/youtube-uH1aDCjypKg.thumbs/How_to_Learn_English_with_Movies_New_Technique-uH1aDCjypKg_000057.jpg' }; // How to Learn English 
const img2 = { uri: 'https://s2.dmcdn.net/v/Em1nv1VtGOdWeYVE1/x720' }; // Learn English With This Technique
const img3 = { uri: 'https://static.cdn.asset.aparat.com/avt/15287138-6725-b__521006603.jpg' }; // Learn English With Movies: The Pursuit of Happyness 
const img4 = { uri: 'https://s1.dmcdn.net/v/SMuKk1V81Yb8x3Oxt/x480' }; // Learn English with Movies: The Incredibles
const img5 = { uri: 'https://static.cdn.asset.aparat.com/avt/38110224-3168-b__998105745.jpg' }; // English@Movies - James Bond
const img6 = { uri: 'https://static.cdn.asset.aparat.com/avt/27153775-5865-b__239896146.jpg' }; // Learn English with Ratatouille!
const img7 = { uri: 'https://static.cdn.asset.aparat.com/avt/9922923-6726-b__171787564.jpg' }; //Learn English with Movies: The Lord of the Rings
const img8 = { uri: 'https://static.cdn.asset.aparat.com/avt/36938212-9711-b__176603463.jpg' }; // Learn English with Beauty And The Beast & Emma Watson


const link1 = { uri: 'https://ia600606.us.archive.org/31/items/youtube-uH1aDCjypKg/How_to_Learn_English_with_Movies_New_Technique-uH1aDCjypKg.mp4' }; // How to Learn English 
const link2 = { uri: 'https://www.dailymotion.com/embed/video/x43c60p?autoplay=1' }; // Learn English With This Technique
const link3 = { uri: 'https://www.aparat.com/video/video/embed/videohash/h18zq/vt/frame' }; // Learn English With Movies: The Pursuit of Happyness 
const link4 = { uri: 'https://www.dailymotion.com/embed/video/x7v96pa' }; // Learn English with Movies: The Incredibles
const link5 = { uri: 'https://www.aparat.com/video/video/embed/videohash/da5u3/vt/frame' }; // English@Movies - James Bond
const link6 = { uri: 'https://www.aparat.com/video/video/embed/videohash/d4mHO/vt/frame' }; // Learn English with Ratatouille!
const link7 = { uri: 'https://www.aparat.com/video/video/embed/videohash/8cEIj/vt/frame' }; //Learn English with Movies: The Lord of the Rings
const link8 = { uri: 'https://www.aparat.com/video/video/embed/videohash/FLwGD/vt/frame' }; // Learn English with Beauty And The Beast & Emma Watson



export default function ContextPage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.screen}>

                <View style={styles.header}>
                    <View>
                        <ImageBackground source={logo} style={styles.logo} />
                        <Text style={styles.appTitle}>English w/ Movies</Text>
                    </View>
                    <Image source={header} style={styles.ad} />
                </View>


                <ScrollView style={styles.videoHolder}
                    vertical={true}
                    showsVerticalScrollIndicator={false}
                >
                    <ScrollView style={{ flexDirection: 'row' }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={{ marginLeft: 7, marginTop: 8 }}
                            onPress={() => navigation.navigate('VideoPlayer', { link: link1 })}
                        >
                            <Image source={img1} style={styles.image} />
                            <Text style={styles.videoTitle}>How to Learn English </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 7, marginTop: 8 }}
                            onPress={() => navigation.navigate('VideoPlayer', { link: link2 })}
                        >
                            <Image source={img2} style={styles.image} />
                            <Text style={styles.videoTitle}>Learn English With This Technique</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 7, marginTop: 8 }}
                            onPress={() => navigation.navigate('VideoPlayer', { link: link3 })}
                        >
                            <Image source={img3} style={styles.image} />
                            <Text style={styles.videoTitle}>English w/ The Pursuit of Happyness</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 7, marginTop: 8 }}
                            onPress={() => navigation.navigate('VideoPlayer', { link: link4 })}
                        >
                            <Image source={img4} style={styles.image} />
                            <Text style={styles.videoTitle}>Learn English: The Incredibles</Text>
                        </TouchableOpacity>
                    </ScrollView>

                    <ScrollView style={{ flexDirection: 'row' }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >

                        <TouchableOpacity style={{ marginLeft: 7, marginTop: 7 }}
                            onPress={() => navigation.navigate('VideoPlayer', { link: link5 })}
                        >
                            <Image source={img5} style={styles.image} />
                            <Text style={styles.videoTitle}>English@Movies: James Bond</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 7, marginTop: 7 }}
                            onPress={() => navigation.navigate('VideoPlayer', { link: link6 })}
                        >
                            <Image source={img6} style={styles.image} />
                            <Text style={styles.videoTitle}>English with Ratatouille!</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 7, marginTop: 7 }}
                            onPress={() => navigation.navigate('VideoPlayer', { link: link7 })}
                        >
                            <Image source={img7} style={styles.image} />
                            <Text style={styles.videoTitle}>Learn English: The Lord of the Rings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 7, marginTop: 7 }}
                            onPress={() => navigation.navigate('VideoPlayer', { link: link8 })}
                        >
                            <Image source={img8} style={styles.image} />
                            <Text style={styles.videoTitle}>Learn English with Emma Watson</Text>
                        </TouchableOpacity>
                    </ScrollView>


                </ScrollView>

            </View>


        </View>
    );
}

ContextPage.navigationOptions = {
    headerShown: false,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen: {
        backgroundColor: '#fff',
        width: width * 0.98,
        height: height * 0.99,
        position: 'absolute',
    },
    header: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    logo: {
        width: width * 0.25,
        height: height * 0.27,
        marginTop: 5,
    },
    appTitle: {
        fontSize: 24,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#696969',
    },
    ad: {
        width: width * 0.72,
        height: height * 0.34
    },
    videoHolder: {
        marginTop: 5,
        width: width * 0.98,
        height: height * 0.30,
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: '#778899',
    },

    image: {
        width: width * 0.30,
        height: height * 0.25,
        borderRadius: 7
    },
    videoTitle: {
        fontSize: 14,
        fontWeight: '500',
        alignSelf: 'center',
        color: 'white'
    }
});