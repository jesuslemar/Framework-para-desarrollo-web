export default function Text(props){
    return(
        <p style = {styles.colorText}>{props.p}</p>
    );
}


const styles = {
    colorText: {
        color: "blue",
        textAlign: "center",
        fontSize: 36,
        fontFamily: "cursive",
    },

};



