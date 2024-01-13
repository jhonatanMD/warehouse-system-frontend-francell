import React from "react";
// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Guard from "../helpers/guard";

import { Button } from "reactstrap"
import { putMainProvider } from "../services/request";
import toastr from 'toastr';

const modelToObject = (dataModel) => {
    let objResult = {};
    dataModel.forEach(e => {
        e.forEach(element => objResult[element.key] = element.default_value);
    })
    return objResult;
}

const ButtonStatus = (props) => {
    const HandleGuard = new Guard(props.Profile.user ? props.Profile.user.roles.permissionRole : false);

    const { url, status, allRecords, setAllRecords, id, model } = props;
    return HandleGuard.renderView(
        <Button
            color={status ? "warning" : "success"}
            className={`btn-rounded waves-effect waves-light btn btn-sm ${status ? "btn-danger" : "btn-succes"
                }`}
            type="bottom"
            onClick={async () => {
                try {
                    const data_line = model ? modelToObject(model) : allRecords.find(e => e.id == id);
                    const response = await putMainProvider(url, {
                        ...data_line,
                        status: !status
                    })
                    console.log(response)
                    let temp_data = JSON.parse(JSON.stringify(allRecords))
                    let recordIdx = allRecords.findIndex(e => e.id == id)
                    temp_data[recordIdx].status = response.status
                    setAllRecords(temp_data)
                } catch (error) {
                    console.log(error)
                    toastr.error(
                        "Ocurrio un error al actualizar el estado del registro."
                    )
                }
            }}
        >
            {status ? "Dehabilitar" : "Habilitar"}
        </Button>,
        props.permissions ? [...props.permissions] : [], true
    )
}

const mapStateToProps = state => ({
    Profile: state.Profile,
})

export default withRouter(connect(mapStateToProps, {})(ButtonStatus))