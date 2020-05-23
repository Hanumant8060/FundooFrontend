import React, { useEffect } from 'react'
import { getLabels, add } from '../Service/Service'
import { ListItemIcon, List, Checkbox } from '@material-ui/core'
import LabelIcon from '@material-ui/icons/Label';

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
                <div>
                    <List>
                        <ListItemIcon>
                            <LabelIcon />
                            {label.labelname}
                        </ListItemIcon>
                    </List>
                </div>
            )}
        </div>
    )
}

export default GetAllLabels;