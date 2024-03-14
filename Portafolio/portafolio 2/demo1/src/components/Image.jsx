import ganyu from '../assets/images/ganyu.jpeg';

//const PlaceholderImage = require('.assets/images/ganyu.jpeg')

export default function Image(props){
    return(
        <img style= {styles.reSize} src={ganyu}/>
    );
}

const styles = {
    reSize: {
        width: 320,
        height: 440,
        paddingTop: 58,
    },
};