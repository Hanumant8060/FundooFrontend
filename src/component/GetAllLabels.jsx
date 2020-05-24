import React, { useEffect } from 'react'
import { getLabels} from '../Service/Service'
import { ListItemIcon, List } from '@material-ui/core'
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

function GetAllLabels(props) {
    const [listLabel, setListLabel] = React.useState([])

    useEffect(() => {
        getAllLabels()
    }
        , [])

    const getAllLabels = () => {
        getLabels()
            .then(response => {
                setListLabel(response.data)
            }).catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            {listLabel.map(label =>
                <div style={{fontSize: "17px", fontStyle: "Italic",fontWeight:"500px"}}>
                    <List>
                        <ListItemIcon>
                           <LabelOutlinedIcon/>
                            {label.labelname}
                        </ListItemIcon>
                    </List>
                </div>
            )}
        </div>
    )
}

export default GetAllLabels;