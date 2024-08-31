import React, { useCallback, useEffect, useMemo } from "react";
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { checkAuth } from "../../utils/services";
import { useNavigate } from "react-router-dom";
import { dashboardColumns } from "../../columns/dashboard";

const DashboardComponent = ({userList, isLoading, fetchUsers}) => {
    const navigate = useNavigate();

    const logout = useCallback(() => {
        localStorage.clear();
        navigate('/');
    },[]);
    
    useEffect(() => {
        fetchUsers();
    }, [])

    const preparedRows = useMemo(
        () => (<DataGrid
            rows={userList}
            columns={dashboardColumns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection={false}
            autoPageSize={false}
            disableColumnMenu={true}
            loading={isLoading}
        />), [userList]
    );

    return (
        <>
            {checkAuth() ? <Button onClick={logout}>Logout</Button> : null }
            {preparedRows}
        </>
    )
}

export default DashboardComponent;