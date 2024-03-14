export default function Table(props){
    return(
        <table>
            <thead>
                <th>{props.th1}</th>
                <th>{props.th2}</th>
                <th>{props.th3}</th>
            </thead>
            <tbody>
                <tr>
                    <td>cell 1</td>
                    <td>cell 2</td>
                    <td>cell 3</td>
                </tr>
                <tr>
                    <td>cell 4</td>
                    <td>cell 5</td>
                    <td>cell 6</td>
                </tr>
                <tr>
                    <td>cell 7</td>
                    <td>cell 8</td>
                    <td>cell 9</td>
                </tr>
            </tbody>
        </table>
    );
}