import React, { useEffect } from 'react'
import { getLabels } from '../Service/Service'
import { ListItemIcon, List, Checkbox, Icon } from '@material-ui/core'
import LabelIcon from '@material-ui/icons/Label';
import IconList from './IconList';
function GetAllLabels() {
    const [listLabel, setListLabel] = React.useState([])
    useEffect(() => {
        getAllLabels()
    }
        , [])

    const getAllLabels = () => {
        getLabels()
            .then(response => {
                setListLabel(response.data)
                console.log("response ---->", response.data)
            }).catch(error => {
                console.log("error ---->", error)
            })

    }
    return (
        <div>
            {listLabel.map(label => {
                return <div>
                    <div>
                        <List>
                            <ListItemIcon>
                                <LabelIcon />
                                {/* <Checkbox/> */}
                                 {label.labelname}
                            </ListItemIcon>
                        </List>
                    </div>
                  {/* <IconList data ={label.labelId}/> */}
                </div>
                
            })
            }

        </div>
    )


}
export default GetAllLabels;