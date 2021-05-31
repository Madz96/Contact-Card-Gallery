/* Redux action to set loader status */
export const actionSetLoaderStatus = (status) => {
    return (
        {
            type: "SET_LOADER_STATUS",
            payload: status
        }
    );
}